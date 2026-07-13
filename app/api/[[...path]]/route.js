import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import { otherRepos } from '@/lib/portfolio/content'
import { fetchRepo } from '@/lib/portfolio/github'
import { summariseRepo, fallbackSummary } from '@/lib/portfolio/summarize'
import { cacheGet, cacheSet } from '@/lib/portfolio/cache'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// MongoDB connection (kept from template, unused for portfolio but preserved for future features)
let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME)
  }
  return db
}

function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

async function buildRepoCard(url) {
  const cacheKey = `repo:${url}`
  const cached = cacheGet(cacheKey)
  if (cached) return cached

  const repo = await fetchRepo(url)
  if (!repo) return null

  let summary
  let generatedByAi = true
  try {
    summary = await summariseRepo(repo)
    // If LLM returned all-empty, fall back
    if (!summary.problem && !summary.approach && summary.tech.length === 0) {
      summary = fallbackSummary(repo)
      generatedByAi = false
    }
  } catch (e) {
    console.error('LLM summarise failed for', url, e?.message || e)
    summary = fallbackSummary(repo)
    generatedByAi = false
  }

  const card = {
    name: repo.name,
    htmlUrl: repo.htmlUrl,
    language: repo.language,
    stargazersCount: repo.stargazersCount,
    summary,
    generatedByAi,
  }
  cacheSet(cacheKey, card)
  return card
}

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    // Portfolio: repos endpoint - fetch repos + LLM-summarise READMEs
    if (route === '/repos' && method === 'GET') {
      const results = await Promise.all(otherRepos.map((u) => buildRepoCard(u).catch(() => null)))
      const repos = results.filter(Boolean)
      const generatedByAi = repos.some((r) => r.generatedByAi)
      return handleCORS(NextResponse.json({ repos, generatedByAi }))
    }

    // Health
    if ((route === '/' || route === '/root') && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'ok' }))
    }

    // Status endpoints (template, kept)
    if (route === '/status' && method === 'POST') {
      const dbc = await connectToMongo()
      const body = await request.json()
      if (!body.client_name) {
        return handleCORS(NextResponse.json({ error: 'client_name is required' }, { status: 400 }))
      }
      const statusObj = { id: uuidv4(), client_name: body.client_name, timestamp: new Date() }
      await dbc.collection('status_checks').insertOne(statusObj)
      return handleCORS(NextResponse.json(statusObj))
    }

    if (route === '/status' && method === 'GET') {
      const dbc = await connectToMongo()
      const rows = await dbc.collection('status_checks').find({}).limit(1000).toArray()
      return handleCORS(NextResponse.json(rows.map(({ _id, ...rest }) => rest)))
    }

    return handleCORS(NextResponse.json({ error: `Route ${route} not found` }, { status: 404 }))
  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json({ error: 'Internal server error' }, { status: 500 }))
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute

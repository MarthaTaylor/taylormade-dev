// LLM-powered README -> project card summariser using the Emergent Universal Key.
// Uses the OpenAI SDK directly with the Emergent proxy base URL.

import OpenAI from 'openai';
import type { RepoMeta } from './github';

const client = new OpenAI({
  apiKey: process.env.EMERGENT_LLM_KEY,
  baseURL: 'https://integrations.emergentagent.com/llm',
});

export type ProjectSummary = {
  problem: string;
  approach: string;
  tech: string[];
  result: string;
  liveDemoUrl: string | null;
};

const SYSTEM = `You are a senior engineer writing a portfolio project card.
Given a GitHub repo's metadata and README, infer:
- problem: 1-2 sentences on the problem the project solves.
- approach: 2-3 sentences on how it was built and the key patterns used.
- tech: array of concrete technologies used (frameworks, languages, notable libs). Max 8.
- result: 1 sentence on the outcome IF one is clearly stated; otherwise an empty string.
- liveDemoUrl: a live demo URL if the README or metadata clearly names one; otherwise null.

Rules:
- Only use facts present in the README or metadata. Do not invent features, metrics, or outcomes.
- If a field cannot be inferred, use an empty string (or null for liveDemoUrl / an empty array for tech).
- Present the project as the portfolio owner's work. Do not mention any other people's names, client names, or organisation names from commit history or README credits.
- Never reference specific employer or client confidential product, domain, or business data.
- Keep the voice senior, understated, factual.
- Output ONLY valid JSON matching the schema. No prose, no code fences.`;

export async function summariseRepo(repo: RepoMeta): Promise<ProjectSummary> {
  const trimmedReadme = (repo.readme || '').slice(0, 8000);

  const userPayload = {
    projectName: repo.name,
    githubDescription: repo.description || '',
    githubHomepage: repo.homepage || '',
    primaryLanguage: repo.language || '',
    topics: repo.topics,
    readme: trimmedReadme,
  };

  const resp = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.2,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: SYSTEM },
      {
        role: 'user',
        content:
          'Return a JSON object with keys: problem (string), approach (string), tech (string[]), result (string), liveDemoUrl (string|null).\n\nREPO PAYLOAD:\n' +
          JSON.stringify(userPayload),
      },
    ],
  });

  const raw = resp.choices?.[0]?.message?.content || '{}';
  let parsed: any = {};
  try {
    parsed = JSON.parse(raw);
  } catch {
    parsed = {};
  }

  return {
    problem: typeof parsed.problem === 'string' ? parsed.problem : '',
    approach: typeof parsed.approach === 'string' ? parsed.approach : '',
    tech: Array.isArray(parsed.tech)
      ? parsed.tech.filter((t: unknown) => typeof t === 'string').slice(0, 8)
      : [],
    result: typeof parsed.result === 'string' ? parsed.result : '',
    liveDemoUrl:
      typeof parsed.liveDemoUrl === 'string' && parsed.liveDemoUrl.trim() !== ''
        ? parsed.liveDemoUrl
        : repo.homepage || null,
  };
}

// Fallback that produces a factual, non-AI card if the LLM is unreachable.
export function fallbackSummary(repo: RepoMeta): ProjectSummary {
  return {
    problem: repo.description || '',
    approach: '',
    tech: [repo.language, ...repo.topics].filter(Boolean) as string[],
    result: '',
    liveDemoUrl: repo.homepage || null,
  };
}

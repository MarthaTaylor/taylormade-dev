// Fetch minimal repo metadata + README from GitHub, no auth required.
// Public repos only. Rate-limited (60/hr per IP), so we cache aggressively.

export type RepoMeta = {
  owner: string;
  name: string;
  htmlUrl: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazersCount: number;
  updatedAt: string;
  readme: string;
};

function parseOwnerRepo(url: string): { owner: string; name: string } | null {
  try {
    const u = new URL(url);
    if (u.hostname !== 'github.com') return null;
    const [owner, name] = u.pathname.replace(/^\//, '').split('/');
    if (!owner || !name) return null;
    return { owner, name };
  } catch {
    return null;
  }
}

async function fetchReadme(owner: string, name: string): Promise<string> {
  // Try main, then master, then GitHub API fallback.
  for (const branch of ['main', 'master']) {
    const url = `https://raw.githubusercontent.com/${owner}/${name}/${branch}/README.md`;
    const r = await fetch(url, { next: { revalidate: 3600 } });
    if (r.ok) return await r.text();
  }
  // Fallback: GitHub API README endpoint (base64 encoded)
  const apiUrl = `https://api.github.com/repos/${owner}/${name}/readme`;
  const r = await fetch(apiUrl, {
    headers: { Accept: 'application/vnd.github.raw' },
    next: { revalidate: 3600 },
  });
  if (r.ok) return await r.text();
  return '';
}

export async function fetchRepo(repoUrl: string): Promise<RepoMeta | null> {
  const parsed = parseOwnerRepo(repoUrl);
  if (!parsed) return null;
  const { owner, name } = parsed;

  const apiUrl = `https://api.github.com/repos/${owner}/${name}`;
  const r = await fetch(apiUrl, {
    headers: { Accept: 'application/vnd.github+json' },
    next: { revalidate: 3600 },
  });
  if (!r.ok) return null;
  const data = await r.json();

  const readme = await fetchReadme(owner, name);

  return {
    owner,
    name: data.name || name,
    htmlUrl: data.html_url || repoUrl,
    description: data.description ?? null,
    homepage: data.homepage && String(data.homepage).trim() !== '' ? data.homepage : null,
    language: data.language ?? null,
    topics: Array.isArray(data.topics) ? data.topics : [],
    stargazersCount: data.stargazers_count ?? 0,
    updatedAt: data.updated_at ?? '',
    readme,
  };
}

// Central content file - edit these values to update the portfolio.
// Everything a human wants to tweak lives here (no code changes required).

export const person = {
  name: 'Martha Taylor',
  role: 'Senior Full-Stack Engineer',
  tagline:
    'Senior full-stack engineer with platform & security depth. React, Next.js and TypeScript on top; secure, well-tooled foundations underneath.',
  location: 'United Kingdom',
  email: 'hello@marthataylor.dev',
  github: 'https://github.com/MarthaTaylor',
  linkedin: 'https://www.linkedin.com/in/martha-taylor', // TODO: replace with your real LinkedIn URL
  cvUrl: '#', // TODO: attach CV and set the URL
  githubHandle: 'MarthaTaylor',
};

export const about = [
  "I'm a senior full-stack engineer with 7+ years shipping product across enterprise retail, healthcare SaaS and automotive platform engineering. Frontend craft is my day-to-day: I care about the details users feel and the ones they don't.",
  "How I work: secure by default, ship little and often, test-backed. I like small clean interfaces, typed contracts end-to-end, and infrastructure that reads like documentation. I lean into least-privilege IAM, OWASP-minded reviews and CI/CD that catches problems before humans do.",
];

export const skillGroups = [
  {
    title: 'Core',
    tier: 'primary',
    items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python / FastAPI', 'PostgreSQL'],
  },
  {
    title: 'Platform',
    tier: 'secondary',
    items: ['Terraform', 'CI/CD', 'Golden paths', 'Developer platforms'],
  },
  {
    title: 'Security',
    tier: 'secondary',
    items: ['OAuth', 'RBAC', 'OWASP', 'IAM least-privilege', 'Threat modelling'],
  },
  {
    title: 'Cloud',
    tier: 'secondary',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes basics'],
  },
  {
    title: 'AI',
    tier: 'secondary',
    items: ['LLM-assisted features', 'Google Genkit', 'Structured outputs', 'Prompt design'],
  },
];

// Two hero ("featured") projects at the top of the projects section.
export const heroProjects = [
  {
    id: 'pennylane-transactions',
    title: 'Pennylane-style Transactions Interface',
    subtitle: 'React + TypeScript engineering challenge',
    stack: ['React', 'TypeScript', 'React Query', 'Zod', 'react-hook-form', 'Vitest'],
    problem:
      "Build a production-grade transactions interface that stays responsive with thousands of rows, supports server-driven filtering and pagination, and demonstrates the component patterns you'd actually put into a real product.",
    approach:
      "Server-driven pagination and filtering wired through React Query so cache, invalidation and refetching are honest. A typed API layer with Zod schemas that double as form validation. Composable table architecture that separates data hooks from presentation, so the table is dumb and the state is reusable. Controlled forms with react-hook-form + Zod, URL as the source of truth for filters (deep-linkable), optimistic updates on mutations, and accessible focus / keyboard / skeleton loading states throughout.",
    decisions: [
      'URL as canonical filter state instead of local component state — pages are deep-linkable and back/forward feels natural.',
      'Headless data hooks + presentational components — the table is trivial to reuse and easy to test.',
      'One Zod schema per resource, shared between form validation and API response parsing — one source of truth.',
      'Feature-first folder layout so each vertical (transactions, filters, forms) owns its own edges.',
    ],
    improveNext: [
      'Row virtualisation (TanStack Virtual) for very large lists.',
      'Offline-first cache via IndexedDB for a snappier reopen.',
      'Broader state-transition test coverage with Playwright.',
    ],
    demoUrl: null as string | null, // add a public demo URL only if you have one
    codeUrl: null as string | null, // deliberately not linked per the brief
    screenshotAlt: 'Transactions table with filters, search and pagination',
  },
  {
    id: 'genkit-content-scraper',
    title: 'Content-Scraping + LLM Pipeline with Google Genkit',
    subtitle: 'AI technical test — case study',
    stack: ['Google Genkit', 'TypeScript', 'Node.js', 'Zod', 'LLM', 'Structured Outputs'],
    problem:
      'Ingest content from external sources, extract meaning with an LLM, and expose the result as a typed, cache-friendly API — with tracing you can actually debug.',
    approach:
      "A two-stage Genkit flow: a scrape stage that resolves and normalises source content (handling redirects, encoding and content-type quirks), then an LLM stage that produces structured output against a Zod schema. Flow inputs and model outputs are both schema-validated end-to-end, so nothing free-form leaks through. Retries, model fallbacks and small deterministic prompts anchored on the scraped payload keep it resilient; Genkit's built-in trace UI makes each run inspectable.",
    decisions: [
      'Schema-first output contracts — the LLM returns validated JSON, never prose.',
      'Genkit flows over ad-hoc scripts — first-class tracing, retries and typed I/O.',
      'Small anchored prompts rather than long context stuffing — cheaper, more consistent.',
      'A thin Next.js route in front of the flow, so the site treats it as a normal typed API.',
    ],
    improveNext: [
      'Batched embeddings + retrieval for large corpora.',
      'An evaluation harness with fixed fixtures to catch prompt regressions.',
      'Per-source scraping adapters for structured sites (RSS, sitemaps, JSON-LD).',
    ],
    demoUrl: null as string | null,
    codeUrl: null as string | null,
    screenshotAlt: 'Genkit flow trace and structured LLM output',
  },
];

// Repos to fetch and render as "Other projects". Order matters.
export const otherRepos = [
  'https://github.com/Alumsdesigns/floodsave',
  'https://github.com/Alumsdesigns/quiporder',
  'https://github.com/Alumsdesigns/standup-updates-app',
  'https://github.com/Alumsdesigns/davinaleilaniblooms',
  'https://github.com/Alumsdesigns/quizverse',
];

// Optional additional pinned repos from Martha's own profile (auto-discovered
// at fetch time via GitHub's users API when this list is empty).
export const extraPinnedRepos: string[] = [];

export const experience = [
  {
    company: 'Jaguar Land Rover',
    role: 'Senior Full-Stack Engineer — Internal Developer Platform',
    impact:
      'Shipped internal developer platform surface with Terraform-backed golden paths, CI/CD and IAM least-privilege by default.',
  },
  {
    company: 'Health Innovation Labs',
    role: 'Full-Stack Engineer — Healthcare SaaS',
    impact:
      'Built event-driven services and AI-assisted features for a healthcare SaaS product, security-hardened end-to-end.',
  },
  {
    company: 'Sagittarius',
    role: 'Frontend Engineer',
    impact:
      'Delivered production frontends focused on performance, accessibility and design-system consistency.',
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Software Engineer — Enterprise Retail E-commerce',
    impact:
      'Built and maintained enterprise retail e-commerce features at scale, across the full stack.',
  },
];

export const awards = [
  'Google / Udacity Front-End Web Development NanoDegree — top 2% EMEA',
  'Studying towards AWS certification',
];

// Central content file - edit these values to update the portfolio.
// Everything a human wants to tweak lives here (no code changes required).

export const person = {
  name: 'Martha Taylor',
  role: 'Senior Full-Stack Engineer',
  tagline:
    'Senior full-stack engineer. Platform, CI/CD, security & DevSecOps focus — with AI woven in where it earns its keep.',
  location: 'United Kingdom',
  email: 'hello@marthataylor.dev',
  github: 'https://github.com/MarthaTaylor',
  linkedin: 'https://www.linkedin.com/in/martha-taylor',
  cvUrl: '#',
  githubHandle: 'MarthaTaylor',
};

export const about = [
  "I'm a senior full-stack engineer with 7+ years shipping product across enterprise retail, healthcare SaaS and automotive platform engineering. My focus sits across the whole stack these days — building the product on top, keeping the platform, CI/CD, security and DevSecOps healthy underneath, and leaning on AI where it earns its keep.",
  "How I work: secure by default, ship little and often, test-backed. I like small clean interfaces, typed contracts end-to-end, and infrastructure that reads like documentation. I lean into least-privilege IAM, OWASP-minded reviews and CI/CD that catches problems before humans do.",
];

export const skillGroups = [
  {
    title: 'Core',
    tier: 'primary',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'ES6+ / ECMAScript', 'Node.js', 'Python / FastAPI', 'PostgreSQL'],
  },
  {
    title: 'Platform',
    tier: 'secondary',
    items: ['Terraform', 'CI/CD', 'Golden paths', 'Developer platforms'],
  },
  {
    title: 'Security & DevSecOps',
    tier: 'secondary',
    items: ['OAuth', 'RBAC', 'OWASP', 'IAM least-privilege', 'Threat modelling', 'DevSecOps'],
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

export const heroProjects = [
  {
    id: 'pennylane-transactions',
    title: 'Financial Transactions Interface',
    subtitle: 'React + TypeScript engineering challenge',
    stack: ['React', 'TypeScript', 'React Query', 'Zod', 'react-hook-form', 'Vitest'],
    problem:
      "Build a production-grade transactions interface that stays responsive with thousands of rows, supports server-driven filtering and pagination, and demonstrates the component patterns you'd actually put into a real product.",
    approach:
      'Server-driven pagination and filtering wired through React Query so cache, invalidation and refetching are honest. A typed API layer with Zod schemas that double as form validation. Composable table architecture that separates data hooks from presentation, so the table is dumb and the state is reusable. Controlled forms with react-hook-form + Zod, URL as the source of truth for filters (deep-linkable), optimistic updates on mutations, and accessible focus / keyboard / skeleton loading states throughout.',
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
    demoUrl: null as string | null,
    codeUrl: null as string | null,
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

// Client / product work — real projects from the CV, described generically.
export type ClientProject = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  approach: string;
  tech: string[];
  liveUrl: string | null;
  visualId: string;
};

export const clientProjects: ClientProject[] = [
  {
    id: 'pivotal',
    name: 'Pivotal — Car Subscription Platform',
    tagline: 'Premium SUV subscription with everything bundled in one monthly payment.',
    problem:
      'A flexible alternative to leasing and ownership for premium SUVs — one monthly subscription that bundles insurance, road tax, servicing, home delivery and pause/resume, all under a single account.',
    approach:
      'Contributed to the platform engineering behind the product: reusable golden-path templates on GKE, secure IAM defaults, policy-as-code in Backstage, and DevSecOps CI/CD quality gates (SAST, dependency and container scanning) so feature teams could ship safely and fast without owning the plumbing.',
    tech: ['React', 'Node.js', 'Python', 'Go', 'GKE', 'GCP', 'Backstage', 'Terraform', 'CI/CD'],
    liveUrl: 'https://www.drivepivotal.com/',
    visualId: 'pivotal',
  },
  {
    id: 'clinical-call-summariser',
    name: 'Clinical Call Summariser',
    tagline: "AI-assisted summaries that cut clinicians' documentation time.",
    problem:
      'Clinical calls take real minutes to type up afterwards. Give clinicians a reliable AI-generated draft summary so documentation stops eating the day — and stays verifiable end-to-end.',
    approach:
      'Built the feature end-to-end: an LLM workflow that turns a call transcript into a structured, schema-shaped summary, wired into a Next.js + NestJS + GraphQL app. Focused on output reliability, validation on the LLM edges, and test coverage of the failure modes so clinicians can trust and edit rather than start from scratch.',
    tech: ['LLM workflows', 'Next.js', 'NestJS', 'GraphQL', 'TypeScript', 'Prompt design'],
    liveUrl: null,
    visualId: 'clinical',
  },
  {
    id: 'prescriptions-service',
    name: 'Prescriptions Service',
    tagline: 'Event-driven service powering real-time prescription workflows.',
    problem:
      'Prescription workflows need real-time cross-service coordination — dispatch, notifications, records — without services becoming tightly coupled or silently divergent.',
    approach:
      'Designed and delivered an event-driven service with DDD boundaries: aggregates for prescription lifecycle, domain events published on state change, and downstream consumers for dispatch / notification / audit. Next.js + NestJS + GraphQL on top; secure-by-default auth, audit trails and OWASP-aligned API patterns underneath.',
    tech: ['Next.js', 'NestJS', 'GraphQL', 'DDD', 'Event-driven', 'OAuth', 'OWASP'],
    liveUrl: null,
    visualId: 'eventdriven',
  },
  {
    id: 'golden-path-templates',
    name: 'Golden-Path Platform Templates',
    tagline: '25+ reusable templates that cut new-service setup from days to minutes.',
    problem:
      'Every new service was reinventing scaffolding — CI/CD, IAM, monitoring, secrets, deployment — burning senior time and leaking security drift.',
    approach:
      'Delivered 25+ reusable Backstage golden-path templates for React, Node, Python and Go apps on GKE. Each template ships with IAM least-privilege, secrets wiring, observability, CI/CD and DevSecOps quality gates already plumbed in. Automated GCP workflows around Pub/Sub and BigQuery so teams get a production-shaped repo in minutes.',
    tech: ['Backstage', 'GKE', 'GCP', 'Terraform', 'React', 'Node.js', 'Python', 'Go', 'Pub/Sub', 'BigQuery'],
    liveUrl: null,
    visualId: 'goldenpath',
  },
  {
    id: 'devsecops-cicd',
    name: 'DevSecOps CI/CD Quality Gates',
    tagline: 'Security scanning + quality gates baked into every pipeline.',
    problem:
      'Security reviews were manual, slow and inconsistent across teams. Vulnerabilities were caught late — often after merge — and IAM drift crept in unnoticed.',
    approach:
      'Introduced automated DevSecOps scanning as a first-class CI stage: Semgrep for SAST, Snyk for dependency risk, Trivy for container scanning, SonarQube for code quality, Cypress for end-to-end. Failing gates block promotion; policy-as-code enforces least-privilege IAM. Security review shifted from a bottleneck to a background check.',
    tech: ['Semgrep', 'SonarQube', 'Trivy', 'Snyk', 'Cypress', 'CI/CD', 'Policy-as-code'],
    liveUrl: null,
    visualId: 'devsecops',
  },
];

export const otherRepos = [
  'https://github.com/Alumsdesigns/floodsave',
  'https://github.com/Alumsdesigns/standup-updates-app',
  'https://github.com/Alumsdesigns/quizverse',
  'https://github.com/MarthaTaylor/fend-project-memory-game',
  'https://github.com/MarthaTaylor/frontend-nanodegree-arcade-game',
  'https://github.com/MarthaTaylor/frontend-nanodegree-feedreader',
  'https://github.com/MarthaTaylor/reactnd-project-myreads-starter',
  'https://github.com/MarthaTaylor/mws-restaurant-stage-1',
];

export const preGeneratedSummaries: Record<
  string,
  {
    problem: string;
    approach: string;
    tech: string[];
    result: string;
    liveDemoUrl: string | null;
  }
> = {
  'https://github.com/Alumsdesigns/floodsave': {
    problem:
      'A flood-risk prediction dashboard so people can understand which areas are at higher risk and make informed decisions before events.',
    approach:
      'Data-science pipeline following CRISP-DM: exploratory analysis, feature engineering and ML model training, wrapped in a narrative dashboard that walks users from problem → hypotheses → results with saved plot outputs.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Jupyter', 'Heroku'],
    result: '',
    liveDemoUrl: 'https://floodsave-bf0f49c3b6af.herokuapp.com/',
  },
  'https://github.com/Alumsdesigns/standup-updates-app': {
    problem:
      'Give teams one clean place to record daily standup updates — yesterday, today, blockers — instead of losing them in sticky notes and chat.',
    approach:
      'Python terminal application that captures structured updates and writes them straight to a Google Sheet via the Sheets API. Small deterministic UX, deployed on Heroku.',
    tech: ['Python', 'Google Sheets API', 'Heroku'],
    result: '',
    liveDemoUrl: 'https://standup-updates-app-5910da38655e.herokuapp.com/',
  },
  'https://github.com/Alumsdesigns/quizverse': {
    problem:
      'An accessible, mobile-friendly quiz web app that lets anyone test their general knowledge in a friendly single-page experience.',
    approach:
      'Single-page vanilla-JavaScript app with responsive CSS, keyboard-friendly controls and clean state transitions between questions and results. Deployed on GitHub Pages.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages'],
    result: '',
    liveDemoUrl: 'https://alumsdesigns.github.io/quizverse/',
  },
  'https://github.com/MarthaTaylor/fend-project-memory-game': {
    problem:
      'A browser memory-matching game where the player pairs 16 cards in as few moves as possible while a 3-star rating tracks their performance.',
    approach:
      'Vanilla JavaScript with DOM manipulation, a game timer, move counter and star-rating logic. Focused on clean event handling and responsive card animations.',
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vanilla DOM'],
    result: '',
    liveDemoUrl: 'https://marthataylor.github.io/fend-project-memory-game/',
  },
  'https://github.com/MarthaTaylor/frontend-nanodegree-arcade-game': {
    problem:
      'A Frogger-style arcade game in the browser — cross a road of moving enemies to reach the safe water line.',
    approach:
      'HTML5 Canvas rendering with a game loop, class-based Player and Enemy entities, collision detection and keyboard input — a small hand-rolled engine.',
    tech: ['JavaScript (ES6+)', 'HTML5 Canvas', 'OOP'],
    result: '',
    liveDemoUrl: 'https://marthataylor.github.io/frontend-nanodegree-arcade-game/',
  },
  'https://github.com/MarthaTaylor/frontend-nanodegree-feedreader': {
    problem:
      'Prove an existing RSS feed-reader app actually works — with a full unit- and integration-test suite.',
    approach:
      'Jasmine spec suite covering feed URL validation, feed name checks, DOM population after async fetch, and menu visibility toggling. Test-first thinking applied to a legacy codebase.',
    tech: ['JavaScript', 'Jasmine', 'Test-driven development'],
    result: '',
    liveDemoUrl: null,
  },
  'https://github.com/MarthaTaylor/reactnd-project-myreads-starter': {
    problem:
      'A book-shelf app that lets you sort your reads into Currently Reading / Want to Read / Read, and search a live catalogue to add more.',
    approach:
      'React SPA with component-driven state, controlled inputs, debounced search against a backend API and clean shelf-to-shelf transitions. React Router for the search view.',
    tech: ['React', 'React Router', 'JavaScript (ES6+)', 'REST API'],
    result: '',
    liveDemoUrl: null,
  },
  'https://github.com/MarthaTaylor/mws-restaurant-stage-1': {
    problem:
      'Convert a static restaurant-reviews site into an accessible, offline-capable Progressive Web App.',
    approach:
      'Service Worker caching for offline use, responsive image sets, ARIA and keyboard accessibility work, and Lighthouse-driven performance tuning against a local API server.',
    tech: ['JavaScript', 'Service Workers', 'PWA', 'Accessibility', 'Responsive images'],
    result: '',
    liveDemoUrl: null,
  },
};

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

export const achievementsList = [
  { id: 'first-steps',     title: 'First Steps',     description: 'Landed on the portfolio.',            xp: 5,  icon: '👋' },
  { id: 'about-reader',    title: 'About Reader',    description: 'Read the About section.',            xp: 10, icon: '📖' },
  { id: 'skill-scanner',   title: 'Skill Scanner',   description: 'Scanned the skill grid.',            xp: 15, icon: '🔍' },
  { id: 'project-explorer',title: 'Project Explorer',description: 'Explored the projects section.',    xp: 20, icon: '🚀' },
  { id: 'made-contact',    title: 'Made Contact',    description: 'Reached the contact section.',      xp: 20, icon: '📬' },
  { id: 'deep-diver',      title: 'Deep Diver',      description: 'Opened a live project demo.',        xp: 10, icon: '🎯' },
  { id: 'palette-master',  title: 'Palette Master',  description: 'Used the ⌘K command palette.',       xp: 10, icon: '⌘' },
  { id: 'theme-switcher',  title: 'Theme Switcher',  description: 'Toggled dark / light mode.',         xp: 5,  icon: '🌗' },
  { id: 'konami-master',   title: 'Konami Master',   description: 'Entered the classic cheat code.',    xp: 25, icon: '🎮' },
];

export const maxXp = achievementsList.reduce((s, a) => s + a.xp, 0);

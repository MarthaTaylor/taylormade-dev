// Central content file - edit these values to update the portfolio.

export const person = {
  name: 'Martha Taylor',
  role: 'Senior Software Engineer',
  roles: ['Senior Software Engineer', 'Full-Stack', 'Platform', 'AI Integration'],
  tagline:
    'Senior full-stack engineer. Platform, CI/CD, security & DevSecOps focus — with AI woven in where it earns its keep.',
  location: 'United Kingdom',
  email: 'hello@marthataylor.dev',
  github: 'https://github.com/MarthaTaylor',
  linkedin: 'https://www.linkedin.com/in/martha-taylor',
  cvUrl: '/cv',
  githubHandle: 'MarthaTaylor',
};

// CV downloads — each variant tuned for a slightly different lens.
export const cvs = [
  {
    id: 'full-stack',
    title: 'Full-stack CV',
    tag: 'Full-stack focus',
    description: 'Balanced view of my engineering work — product, platform, and testing.',
    url: 'https://customer-assets.emergentagent.com/job_engineer-portfolio-77/artifacts/t4afkuw0_Martha_Taylor_CV.pdf',
    format: 'PDF',
  },
  {
    id: 'platform-devsecops',
    title: 'Platform & DevSecOps CV',
    tag: 'Platform · Security',
    description: 'Deep-dive on developer platforms, Backstage golden paths, IAM and DevSecOps.',
    url: 'https://customer-assets.emergentagent.com/job_engineer-portfolio-77/artifacts/vi47i0py_Martha-Taylor-CV-Platform-DevSecOps.docx',
    format: 'DOCX',
  },
  {
    id: 'devops-cicd',
    title: 'DevOps / CI-CD CV',
    tag: 'DevOps · CI/CD',
    description: 'CI/CD, quality gates, release engineering and infrastructure automation.',
    url: 'https://customer-assets.emergentagent.com/job_engineer-portfolio-77/artifacts/26lljk8f_Martha-Taylor-CV-DevOps-CICD.docx',
    format: 'DOCX',
  },
];

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
    items: ['Terraform', 'CI/CD', 'Golden paths', 'Backstage', 'Developer platforms'],
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
  {
    title: 'Testing',
    tier: 'secondary',
    items: ['Playwright', 'Cypress', 'Vitest', 'Jasmine', 'E2E · Manual · Observability'],
  },
];

export const heroProjects = [
  {
    id: 'pennylane-transactions',
    title: 'Financial Transactions Interface',
    subtitle: 'React + TypeScript engineering challenge',
    company: 'Private fintech · May–Jun 2026',
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
    company: 'Private fintech · May–Jun 2026',
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

export type ClientProject = {
  id: string;
  name: string;
  company: string;
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
    company: 'Jaguar Land Rover',
    tagline: 'Premium SUV subscription with everything bundled in one monthly payment.',
    problem:
      'A flexible alternative to leasing and ownership for premium SUVs — one monthly subscription that bundles insurance, road tax, servicing, home delivery and pause/resume, all under a single account.',
    approach:
      "Contributed across the platform and the customer-facing product. Delivered the affordability-check integration inside the Pivotal mobile app so applicants could complete an Equifax-backed check in-flow — signing into their banks via facial recognition without ever leaving the app — backed by Java microservices calling the Equifax API. Also contributed to the platform engineering behind the wider product: reusable golden-path templates on GKE, secure IAM defaults, policy-as-code in Backstage, and DevSecOps CI/CD quality gates so feature teams could ship safely and fast.",
    tech: ['React', 'Node.js', 'Java microservices', 'Equifax API', 'Facial recognition', 'GKE', 'GCP', 'Backstage', 'Terraform', 'CI/CD'],
    liveUrl: 'https://www.drivepivotal.com/',
    visualId: 'pivotal',
  },
  {
    id: 'developer-experience-platform',
    name: 'Developer Experience Platform (Backstage)',
    company: 'Jaguar Land Rover',
    tagline: 'Led a Backstage-based DevEx platform — 25+ golden paths cutting setup from days to minutes.',
    problem:
      'Every new service was reinventing scaffolding — CI/CD, IAM, monitoring, secrets, deployment — burning senior time and leaking security drift.',
    approach:
      'Led delivery of the Backstage developer experience platform: 25+ reusable golden-path templates for React, Node, Python and Go apps on GKE, each shipping with IAM least-privilege, secrets, observability, CI/CD and DevSecOps quality gates baked in. Owned the Gantt-charted delivery plan, ran stakeholder communications across security, platform and product, and set the precedence for security and quality gates across the estate. Steered the platform through several breaking changes without disrupting the teams downstream — careful deprecation timelines, migration guides, and paired-support in place.',
    tech: ['Backstage', 'GKE', 'GCP', 'Terraform', 'React', 'Node.js', 'Python', 'Go', 'Pub/Sub', 'BigQuery', 'Leadership', 'Program management'],
    liveUrl: null,
    visualId: 'goldenpath',
  },
  {
    id: 'clinical-call-summariser',
    name: 'Clinical Call Summariser',
    company: 'Health Innovation Labs (HiLabs)',
    tagline: "AI-assisted summaries that cut clinicians' documentation time.",
    problem:
      'Clinical calls take real minutes to type up afterwards. Give clinicians a reliable AI-generated draft summary so documentation stops eating the day — and stays verifiable end-to-end.',
    approach:
      'Built the feature end-to-end: an LLM workflow that turns a call transcript into a structured, schema-shaped summary, wired into a Next.js + NestJS + GraphQL app. Focused on output reliability, validation on the LLM edges, and test coverage of the failure modes so clinicians can trust and edit rather than start from scratch. Also led the end-to-end testing effort — manual test passes across clinical workflows and Datadog observability wired in so real-world behaviour is inspectable in production.',
    tech: ['LLM workflows', 'Next.js', 'NestJS', 'GraphQL', 'TypeScript', 'Datadog', 'E2E testing', 'Prompt design'],
    liveUrl: null,
    visualId: 'clinical',
  },
  {
    id: 'prescriptions-service',
    name: 'Prescriptions Service',
    company: 'Health Innovation Labs (HiLabs)',
    tagline: 'Event-driven service powering real-time prescription workflows.',
    problem:
      'Prescription workflows need real-time cross-service coordination — dispatch, notifications, records — without services becoming tightly coupled or silently divergent.',
    approach:
      'Designed and delivered an event-driven service with DDD boundaries: aggregates for prescription lifecycle, domain events published on state change, and downstream consumers for dispatch / notification / audit. Built with NestJS + GraphQL and a Next.js frontend, with secure-by-default auth, audit trails and OWASP-aligned API patterns underneath. Beyond this one service I owned the frontend across every service in the domain — not just prescriptions — plus end-to-end Playwright coverage keeping the whole surface honest.',
    tech: ['Next.js', 'NestJS', 'GraphQL', 'DDD', 'Event-driven', 'Playwright', 'OAuth', 'OWASP'],
    liveUrl: null,
    visualId: 'eventdriven',
  },
  {
    id: 'devsecops-cicd',
    name: 'DevSecOps CI/CD Quality Gates',
    company: 'Jaguar Land Rover · Health Innovation Labs',
    tagline: 'Security scanning + quality gates baked into every pipeline.',
    problem:
      'Security reviews were manual, slow and inconsistent across teams. Vulnerabilities were caught late — often after merge — and IAM drift crept in unnoticed.',
    approach:
      'Introduced automated DevSecOps scanning as a first-class CI stage: Semgrep for SAST, Snyk for dependency risk, Trivy for container scanning, SonarQube for code quality, and Playwright / Cypress for end-to-end. Failing gates block promotion; policy-as-code enforces least-privilege IAM. Set the precedence at JLR through the DevEx platform, then rolled the same pattern in at HiLabs — including Playwright E2E across every service, not just my own. Security review shifted from a bottleneck to a background check.',
    tech: ['Semgrep', 'SonarQube', 'Trivy', 'Snyk', 'Playwright', 'Cypress', 'CI/CD', 'Policy-as-code'],
    liveUrl: null,
    visualId: 'devsecops',
  },
  {
    id: 'business-metrics-dashboard',
    name: 'Business Metrics Dashboard',
    company: 'Tata Consultancy Services',
    tagline: 'React + Chart.js dashboard for business and engineering performance insights.',
    problem:
      'Executive and engineering-lead visibility into how the business was performing — and how well the delivery org was shipping — was scattered across BI tools and spreadsheets.',
    approach:
      'Built a bespoke dashboard that stitches business performance signals and internal software-engineering metrics into one clean view. React + Chart.js on the front, Node.js API layer aggregating the underlying data sources — key insights (revenue, delivery velocity, defect rate) surfaced side-by-side without leaving the tool.',
    tech: ['React', 'Chart.js', 'Node.js', 'Data visualisation', 'BI'],
    liveUrl: null,
    visualId: 'metrics',
  },
  {
    id: 'retail-ab-cro',
    name: 'Enterprise Retail · A/B Optimisation',
    company: 'Tata Consultancy Services — UK retail client',
    tagline: 'Front-end A/B testing and CRO on a high-traffic UK retail platform.',
    problem:
      'On a big retail e-commerce platform, single-digit lifts in the checkout funnel are meaningful revenue. Front-end experiments have to be rigorous, safely feature-flagged, and never destabilise the wider platform.',
    approach:
      'Owned A/B experimentation and CRO cycles end-to-end: hypothesis → variant build → feature-flagged rollout → analytics-backed readout. Consulted with product on which variants to prioritise, kept the codebase clear of orphaned experiment code, and folded winning variants back into the design system.',
    tech: ['React', 'A/B testing', 'CRO', 'Feature flags', 'Analytics', 'Design systems'],
    liveUrl: null,
    visualId: 'ab-testing',
  },
  {
    id: 'asset-mgmt-campaigns',
    name: 'Asset Management · Seasonal Campaigns',
    company: 'Sagittarius — traditional investment firm client',
    tagline: 'Sophisticated seasonal front-end campaigns for a traditional investment firm.',
    problem:
      'A long-established investment firm running seasonal campaigns (Pride in June, others across the year) had to keep the calm, sophisticated brand voice its clients expect — no loud colour blocking, no marketing shout.',
    approach:
      'Led the front-end delivery of the campaign UIs: colour, imagery, hero sections and micro-interactions all tuned to feel considered, never gaudy. Reused existing design tokens where possible, added campaign-scoped tokens where needed, and shipped through feature flags so the seasonal switchovers were seamless.',
    tech: ['React', 'Design tokens', 'Feature flags', 'CSS motion', 'CMS'],
    liveUrl: null,
    visualId: 'campaigns',
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
  { problem: string; approach: string; tech: string[]; result: string; liveDemoUrl: string | null }
> = {
  'https://github.com/Alumsdesigns/floodsave': {
    problem: 'A flood-risk prediction dashboard so people can understand which areas are at higher risk and make informed decisions before events.',
    approach: 'Data-science pipeline following CRISP-DM: exploratory analysis, feature engineering and ML model training, wrapped in a narrative dashboard that walks users from problem → hypotheses → results with saved plot outputs.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Jupyter', 'Heroku'],
    result: '',
    liveDemoUrl: 'https://floodsave-bf0f49c3b6af.herokuapp.com/',
  },
  'https://github.com/Alumsdesigns/standup-updates-app': {
    problem: 'Give teams one clean place to record daily standup updates — yesterday, today, blockers — instead of losing them in sticky notes and chat.',
    approach: 'Python terminal application that captures structured updates and writes them straight to a Google Sheet via the Sheets API. Small deterministic UX, deployed on Heroku.',
    tech: ['Python', 'Google Sheets API', 'Heroku'],
    result: '',
    liveDemoUrl: 'https://standup-updates-app-5910da38655e.herokuapp.com/',
  },
  'https://github.com/Alumsdesigns/quizverse': {
    problem: 'An accessible, mobile-friendly quiz web app that lets anyone test their general knowledge in a friendly single-page experience.',
    approach: 'Single-page vanilla-JavaScript app with responsive CSS, keyboard-friendly controls and clean state transitions between questions and results. Deployed on GitHub Pages.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages'],
    result: '',
    liveDemoUrl: 'https://alumsdesigns.github.io/quizverse/',
  },
  'https://github.com/MarthaTaylor/fend-project-memory-game': {
    problem: 'A browser memory-matching game where the player pairs 16 cards in as few moves as possible while a 3-star rating tracks their performance.',
    approach: 'Vanilla JavaScript with DOM manipulation, a game timer, move counter and star-rating logic. Focused on clean event handling and responsive card animations.',
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vanilla DOM'],
    result: '',
    liveDemoUrl: 'https://marthataylor.github.io/fend-project-memory-game/',
  },
  'https://github.com/MarthaTaylor/frontend-nanodegree-arcade-game': {
    problem: 'A Frogger-style arcade game in the browser — cross a road of moving enemies to reach the safe water line.',
    approach: 'HTML5 Canvas rendering with a game loop, class-based Player and Enemy entities, collision detection and keyboard input — a small hand-rolled engine.',
    tech: ['JavaScript (ES6+)', 'HTML5 Canvas', 'OOP'],
    result: '',
    liveDemoUrl: 'https://marthataylor.github.io/frontend-nanodegree-arcade-game/',
  },
  'https://github.com/MarthaTaylor/frontend-nanodegree-feedreader': {
    problem: 'Prove an existing RSS feed-reader app actually works — with a full unit- and integration-test suite.',
    approach: 'Jasmine spec suite covering feed URL validation, feed name checks, DOM population after async fetch, and menu visibility toggling. Test-first thinking applied to a legacy codebase.',
    tech: ['JavaScript', 'Jasmine', 'Test-driven development'],
    result: '',
    liveDemoUrl: null,
  },
  'https://github.com/MarthaTaylor/reactnd-project-myreads-starter': {
    problem: 'A book-shelf app that lets you sort your reads into Currently Reading / Want to Read / Read, and search a live catalogue to add more.',
    approach: 'React SPA with component-driven state, controlled inputs, debounced search against a backend API and clean shelf-to-shelf transitions. React Router for the search view.',
    tech: ['React', 'React Router', 'JavaScript (ES6+)', 'REST API'],
    result: '',
    liveDemoUrl: null,
  },
  'https://github.com/MarthaTaylor/mws-restaurant-stage-1': {
    problem: 'Convert a static restaurant-reviews site into an accessible, offline-capable Progressive Web App.',
    approach: 'Service Worker caching for offline use, responsive image sets, ARIA and keyboard accessibility work, and Lighthouse-driven performance tuning against a local API server.',
    tech: ['JavaScript', 'Service Workers', 'PWA', 'Accessibility', 'Responsive images'],
    result: '',
    liveDemoUrl: null,
  },
};

export const experience = [
  { company: 'Jaguar Land Rover', role: 'Senior Full-Stack Engineer — Internal Developer Platform', impact: 'Shipped internal developer platform surface with Terraform-backed golden paths, CI/CD and IAM least-privilege by default.' },
  { company: 'Health Innovation Labs', role: 'Full-Stack Engineer — Healthcare SaaS', impact: 'Built event-driven services and AI-assisted features for a healthcare SaaS product, security-hardened end-to-end.' },
  { company: 'Sagittarius', role: 'Frontend Engineer', impact: 'Delivered production frontends focused on performance, accessibility and design-system consistency.' },
  { company: 'Tata Consultancy Services (TCS)', role: 'Software Engineer — Enterprise Retail E-commerce', impact: 'Built and maintained enterprise retail e-commerce features at scale, across the full stack.' },
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

// CV content — rendered as HTML on /cv, plus links to download the source files.
// Add/edit variants here to update the CV page.

export type CvBullet = string;
export type CvRole = {
  company: string;
  role: string;
  period: string;
  location: string;
  context?: string;
  bullets: CvBullet[];
};
export type CvSkillGroup = { title: string; items: string[] };
export type Cv = {
  id: string;
  slug: string;
  headline: string;
  variantLabel: string;
  summary: string;
  skills: CvSkillGroup[];
  experience: CvRole[];
  education: string[];
  downloadUrl: string;
  downloadFormat: 'PDF' | 'DOCX';
};

export const cvsFull: Cv[] = [
  {
    id: 'product-engineer',
    slug: 'product-engineer',
    variantLabel: 'Senior Full Stack Product Engineer',
    headline: 'Senior Full Stack Product Engineer',
    summary:
      "Product engineer with 7+ years building features start to finish — scoping with designers and product managers, building across the stack, and staying with it through release and measurement. Front-end craft is where I started (Google & Udacity Front End Web Development & Design, top 2% EMEA) and design collaboration is where I do my best work: I rebuilt design-to-development handover at TCS around shared component standards, cutting lead time for changes by 70%. Since then I've shipped conversion-critical journeys in regulated finance, run A/B testing programmes at M&S, and put LLM features in front of clinicians. React, TypeScript, Node.js, NestJS. Twice acting tech lead. I care about shipping something polished more than shipping something big.",
    skills: [
      { title: 'Frontend',                items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6)', 'Vue', 'HTML5', 'CSS3', 'Tailwind', 'Accessibility', 'Component standards & design systems'] },
      { title: 'Backend',                 items: ['Node.js', 'NestJS', 'GraphQL', 'REST APIs', 'Python', 'Java 17 (Spring Boot)', 'PostgreSQL', 'Redis'] },
      { title: 'Product & Delivery',      items: ['Discovery & scoping', 'A/B testing (Adobe Target)', 'Stakeholder management', 'Exec presenting', 'Technical design docs & API specs', 'Mentoring', 'DORA metrics'] },
      { title: 'AI Features',             items: ['LLM-assisted product features', 'Prompt design', 'Structured & grounded output with validation', 'Streaming AI output', 'Agentic tool-calling', 'MCP-based tooling', 'n8n workflow automation'] },
      { title: 'Quality',                 items: ['Playwright', 'Cypress', 'Jest', 'Postman', 'E2E automation in CI/CD with quality gates'] },
      { title: 'Cloud & Tooling',         items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana', 'Datadog'] },
      { title: 'Architecture & Security', items: ['Microservices', 'Event-driven architecture', 'DDD', 'C4 model', 'OAuth', 'RBAC', 'OWASP Top 10'] },
    ],
    experience: [
      {
        company: 'Health Innovation Labs',
        role: 'Senior Full Stack Software Engineer',
        period: 'May 2025 — Present',
        location: 'Dublin',
        context: 'Healthcare SaaS for professional services management',
        bullets: [
          'Took prescription completion from 40% to 85%. Owned the e-signature problem from discovery onwards — ran the competitor and compliance analysis, made the build-vs-buy call, integrated DocuSeal, and cut cost 72% against the alternatives. The completion rate was the number I was accountable for, and it more than doubled.',
          "Shipped an AI feature clinicians actually trust. Built ChatAdvisor, an LLM-based clinical call-summarisation feature. The hard part wasn't the model, it was reliability: structured, grounded output validated before a clinician ever saw it. Saved 3–5 minutes of documentation per interaction.",
          "Designed the prescription service around the user's workflow rather than the database — event-driven NestJS, GraphQL and DDD supporting real-time automation, so the product reacts to what a clinician does instead of making them wait.",
          'Made polish cheap. Built Playwright E2E into CI/CD with quality gates, raising deployment frequency while keeping the bar high.',
          'Integrated Shopify across subsystems with data-integrity safeguards, improving mean time to restore. Implemented OAuth, RBAC, session management and OWASP-aligned API patterns.',
          'Wrote technical design documents and API specifications, and mentored junior engineers through code review and pairing.',
        ],
      },
      {
        company: 'Jaguar Land Rover',
        role: 'Senior Full Stack Software Engineer',
        period: 'Dec 2022 — Apr 2025',
        location: 'Manchester',
        context: 'Consumer subscription product and internal developer platform; acting tech lead twice',
        bullets: [
          'Removed the biggest drop-off point in a regulated financial journey. Built the affordability check for the Pivotal car subscription app, integrating the Equifax API for credit decisioning across multiple linked UK bank accounts — and used Face ID to keep users in-app rather than bouncing them out to each bank in turn. A UX decision that fixed a conversion problem.',
          'Let the business change product rules without a redeploy. Extended the Open Policy Agent (Rego) layer governing subscription eligibility, keeping criteria like age, licence tenure and permitted location out of application code so the product team could iterate on them directly.',
          "Built a design-system-style template library with real adoption. Delivered 25+ reusable golden-path templates (React, Node.js, Python, Go, GKE, Pub/Sub, BigQuery) on the Backstage developer platform, treating JLR's engineering teams as my users. New-application setup dropped from days to minutes.",
          'Shipped a breaking upgrade nobody else felt. Led React 17 to 21 plus a Node and OS refresh, sequencing the dependency chain so the blast radius stayed isolated from other products, with staged rollout plans and documentation other teams could reuse.',
          'Led a nine-person squad through a merger. Brought TCS contractors and JLR engineers onto shared standards, tooling and backlog under TUPE. Set the delivery structure, mentored the incoming engineers, ran cross-functional delivery across remote and onsite, and presented to the board of directors and senior solution architects.',
          'Stepped in when the senior lead went off sick and led two engineers to deliver the Special Vehicles Event Services API for a high-value, time-boxed event — Salesforce integration against a third-party frontend, senior stakeholders managed, shipped on time.',
          'Halved debugging time with Grafana observability; introduced DevSecOps scanning and CI/CD quality gates across the platform.',
        ],
      },
      {
        company: 'Sagittarius Agency',
        role: 'Senior React Software Engineer',
        period: 'Jan 2022 — Nov 2022',
        location: 'London',
        bullets: [
          'Built React frontends for finance, retail and e-commerce clients, delivering measurable usability, performance and conversion improvements against tight deadlines — multiple products, multiple design languages, short cycles.',
          'Mentored junior engineers and managed client stakeholders directly.',
        ],
      },
      {
        company: 'Tata Consultancy Services',
        role: 'Full Stack Software Engineer',
        period: 'Apr 2019 — Jan 2022',
        location: 'London',
        bullets: [
          'Rebuilt design-to-development handover and cut lead time for changes by 70%. Worked with the Director of Design & Innovation in the TCS design studio to introduce shared component standards and bring engineering into the design process earlier — the same problem design systems tooling exists to solve.',
          'Ran experimentation for M&S as sole developer on the A/B testing and optimisation team, reporting to two optimisation managers. Shipped experiments in Adobe Target across enterprise e-commerce journeys, turning hypotheses into production variants and feeding results back into the roadmap.',
          'Worked across frontend and backend on large-scale retail platform changes; built CI/CD pipelines with security and dependency scanning.',
          'Created TDD documents, API design documents and rollout plans; mentored juniors and built a knowledge-sharing culture.',
        ],
      },
    ],
    education: [
      'Google & Udacity NanoDegree — Front End Web Development & Design (top 2% of EMEA)',
      'Technological University Dublin — BSc (Hons) Digital Technology, Design & Innovation',
      'Dublin Business School — Digital Marketing Certificate (Hons)',
    ],
    downloadUrl: '/cv/Martha-Taylor-CV-Product-Engineer.pdf',
    downloadFormat: 'PDF',
  },
  {
    id: 'devsecops-cicd',
    slug: 'devsecops-cicd',
    variantLabel: 'DevSecOps · CI/CD · Platform',
    headline: 'DevSecOps · CI/CD · Platform Engineer',
    summary:
      "DevOps and platform engineer with 7+ years across enterprise and healthcare, specialising in CI/CD pipelines, DevSecOps automation and self-service developer tooling. At Jaguar Land Rover I owned the security quality-gate on an internal developer platform, hardening golden-path templates and building automated, secure delivery pipelines that cut new-project setup from days to minutes. Strong in pipeline automation, security scanning, IAM least-privilege and observability, with hands-on cloud across AWS (Health Innovation Labs, TCS) and GCP (Jaguar Land Rover), plus Infrastructure as Code (Terraform) and containerisation (Docker). Twice interim tech lead. Google / Udacity NanoDegree winner (top 2% EMEA); working towards AWS certification.",
    skills: [
      { title: 'CI/CD & automation', items: ['GitHub Actions', 'GitLab CI', 'Pipeline design', 'Build/test/deploy automation', 'Quality gates', 'Release management', 'Immutable versioned deploys & rollback'] },
      { title: 'DevSecOps & security',   items: ['Snyk', 'Trivy', 'Semgrep', 'SonarQube', 'Dependency & SAST scanning', 'Secrets management', 'OWASP-aligned patterns', 'IAM least-privilege & blast-radius reduction', 'OAuth / RBAC'] },
      { title: 'Developer experience',   items: ['Golden-path service templates', 'Self-service tooling', 'Backstage internal developer platform', 'Policy-as-code', 'Documentation & runbooks'] },
      { title: 'Infrastructure as Code', items: ['Terraform', 'Docker', 'GKE / Kubernetes'] },
      { title: 'Cloud',                  items: ['AWS (HIL & TCS; certification in progress)', 'GCP (JLR)', 'Managed databases (RDS, Postgres)'] },
      { title: 'Observability',          items: ['Grafana', 'Logging', 'Alerting', 'Incident response', 'Post-incident reviews'] },
      { title: 'Also',                   items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python / FastAPI'] },
    ],
    experience: [
      {
        company: 'Health Innovation Labs',
        role: 'Full-Stack / DevOps Engineer',
        period: 'May 2025 — present',
        location: 'Dublin',
        context: 'Healthcare SaaS',
        bullets: [
          'Built Playwright end-to-end tests into CI/CD with quality gates, protecting releases from regressions on dependency upgrades.',
          'Implemented OAuth, RBAC, session management and OWASP-aligned secure API patterns across services.',
          'Led vendor evaluation for e-signatures and integrated a third-party provider, cutting cost ~72% and improving completion 40% → 85%.',
          'Delivered an event-driven service (NestJS, GraphQL, DDD) and an AI-assisted summarisation feature with output validation before reaching users.',
        ],
      },
      {
        company: 'Jaguar Land Rover',
        role: 'DevOps / Platform Engineer (interim tech lead ×2)',
        period: 'Dec 2022 — Apr 2025',
        location: 'Manchester',
        context: 'Internal Developer Platform (Backstage)',
        bullets: [
          'Owned the security quality-gate: reviewed, hardened and approved 25+ golden-path CI/CD service templates (React, Node.js, Python, Go, GKE, Pub/Sub, BigQuery) into production, so new projects started with secure, compliant pipelines by default.',
          'Built policy-as-code into templates (uniform bucket access, public IAM bindings stripped, CMEK + retention by default), automating secure provisioning and cutting new-app setup from days to minutes.',
          'Reduced IAM blast radius: replaced primitive project-wide roles on service accounts with scoped custom roles and swept existing repos — cutting security review from days to minutes.',
          'Introduced DevSecOps scanning (Semgrep, SonarQube, Trivy, Snyk) into CI/CD with quality gates that blocked insecure or failing builds from merging.',
          'Improved observability with Grafana dashboards, reducing debugging time ~50%; contributed to incident response and post-incident reviews.',
          'Interim tech lead ×2: led a small team to deliver a time-boxed, high-value event API (Salesforce + third-party frontend), managing senior stakeholders and shipping on schedule.',
        ],
      },
      {
        company: 'Sagittarius Agency',
        role: 'Software Engineer',
        period: 'Jan 2022 — Nov 2022',
        location: 'London',
        bullets: [
          'Built React frontends for finance, retail and e-commerce clients under tight deadlines.',
        ],
      },
      {
        company: 'Tata Consultancy Services',
        role: 'Software / DevOps Engineer',
        period: 'Apr 2019 — Jan 2022',
        location: 'London',
        context: 'Enterprise retail (incl. M&S)',
        bullets: [
          'Delivered enterprise e-commerce platform changes for major retailers.',
          'Built DevSecOps CI/CD pipelines with security and dependency scanning.',
        ],
      },
    ],
    education: [
      'AWS Certified AI Practitioner — in progress',
      'Google / Udacity NanoDegree — Front-End Web Development & Design (top 2% EMEA)',
      'Technological University Dublin — BSc (Hons) Digital Technology, Design & Innovation',
    ],
    downloadUrl: '/cv/Martha-Taylor-CV-DevSecOps-CICD.pdf',
    downloadFormat: 'PDF',
  },
];

// Also export a light record of variants (including download-only ones)
export const cvVariants = [
  { id: 'product-engineer',     slug: 'product-engineer',    label: 'Senior Full Stack Product Engineer', downloadUrl: '/cv/Martha-Taylor-CV-Product-Engineer.pdf',    format: 'PDF' as const, viewable: true },
  { id: 'devsecops-cicd',       slug: 'devsecops-cicd',      label: 'DevSecOps · CI/CD · Platform',       downloadUrl: '/cv/Martha-Taylor-CV-DevSecOps-CICD.pdf',      format: 'PDF' as const, viewable: false },
  { id: 'platform-devsecops',   slug: 'platform-devsecops',  label: 'Platform Engineer · DevSecOps',      downloadUrl: '/cv/Martha-Taylor-CV-Platform-DevSecOps.pdf',  format: 'PDF' as const, viewable: false },
  { id: 'full-stack',           slug: 'full-stack',          label: 'Full-Stack Engineer',                downloadUrl: '/cv/Martha-Taylor-CV-Full-Stack.pdf',          format: 'PDF' as const, viewable: false },
];

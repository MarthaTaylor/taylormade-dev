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
    downloadUrl: 'https://customer-assets.emergentagent.com/job_engineer-portfolio-77/artifacts/26lljk8f_Martha-Taylor-CV-DevOps-CICD.docx',
    downloadFormat: 'DOCX',
  },
];

// Also export a light record of variants (including download-only ones)
export const cvVariants = [
  { id: 'devsecops-cicd',       slug: 'devsecops-cicd',      label: 'DevSecOps · CI/CD · Platform',   downloadUrl: 'https://customer-assets.emergentagent.com/job_engineer-portfolio-77/artifacts/26lljk8f_Martha-Taylor-CV-DevOps-CICD.docx',       format: 'DOCX' as const, viewable: true },
  { id: 'platform-devsecops',   slug: 'platform-devsecops',  label: 'Platform Engineer · DevSecOps',   downloadUrl: 'https://customer-assets.emergentagent.com/job_engineer-portfolio-77/artifacts/vi47i0py_Martha-Taylor-CV-Platform-DevSecOps.docx',  format: 'DOCX' as const, viewable: false },
  { id: 'full-stack',           slug: 'full-stack',          label: 'Full-Stack Engineer',              downloadUrl: 'https://customer-assets.emergentagent.com/job_engineer-portfolio-77/artifacts/t4afkuw0_Martha_Taylor_CV.pdf',                        format: 'PDF'  as const, viewable: false },
];

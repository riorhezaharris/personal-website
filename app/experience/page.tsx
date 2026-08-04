import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience — Rio Rheza Harris",
  description:
    "Five years in fintech backend and AI infrastructure — Jack & Transfez, plus freelance systems work.",
};

type Bullet = {
  label: string;
  text: string;
};

type Role = {
  title: string;
  dates: string;
  summary?: string;
  bullets: Bullet[];
};

type Company = {
  name: string;
  url: string;
  description: string;
  roles: Role[];
};

const companies: Company[] = [
  {
    name: "Jack & Transfez",
    url: "https://www.transfez.com/en",
    description:
      "Indonesian fintech remittance app, backed by YCombinator and East Ventures",
    roles: [
      {
        title: "Lead Software Engineer",
        dates: "Aug 2023 – Present",
        summary:
          "Hands-on technical lead: ~70% IC work (backend systems, AI infrastructure), ~30% engineering leadership. Direct report to CTO.",
        bullets: [
          {
            label: "Architecture & Cost Optimization",
            text: "Engineered a decoupled Marketing Engine for growth features, improving system agility while reducing infrastructure costs by 150M+ IDR/year.",
          },
          {
            label: "Reliability & Quality",
            text: "Directed QA roadmap and SDLC across distributed B2B and B2C services — maintained B2B error rates below 10% and B2C below 1% in production.",
          },
          {
            label: "AI & Backend Infrastructure",
            text: "Built the company's AI stack from zero to production — Hybrid Search, RAG pipelines, LangGraph-based agentic workflows, and MCP integrations.",
          },
          {
            label: "Team Scaling",
            text: "Grew engineering team from scratch — 20+ full-time engineers, 10+ interns, 100% post-probation retention through rebuilt onboarding and mentoring.",
          },
        ],
      },
      {
        title: "Senior Software Engineer",
        dates: "Aug 2022 – Jul 2023",
        bullets: [
          {
            label: "Automation & Reliability",
            text: "Built API testing suites and QA automation that saved 500+ engineer-hours per month, increasing deployment velocity across distributed backend services.",
          },
          {
            label: "Backend Development",
            text: "Led end-to-end development of Subscription modules, Workflow Approvals, and Jack Notification systems for the B2B suite — complex financial workflows built for production scale.",
          },
        ],
      },
      {
        title: "Software Engineer",
        dates: "Apr 2021 – Apr 2022",
        bullets: [
          {
            label: "Verification Systems",
            text: "Engineered automated verification logic (Auto Payment & EDD) to accelerate transaction processing while maintaining strict financial compliance.",
          },
          {
            label: "Growth Features",
            text: "Built and launched the company's first B2C acquisition and retention systems — Affiliate, Referral, and Loyalty programs — where no acquisition channel had existed previously.",
          },
        ],
      },
    ],
  },
  {
    name: "PT. Sazanka Henig Solusi",
    url: "https://www.sazankahenig.com/",
    description:
      "Digital transformation agency for enterprise manufacturing and automotive-supply-chain clients",
    roles: [
      {
        title: "Software Engineer (Freelance)",
        dates: "Jan 2025 – Jun 2025",
        bullets: [
          {
            label: "Backend Development",
            text: "Delivered roughly half the backend codebase for a supply-chain compliance platform for automotive parts manufacturers (Node.js, Express, Prisma, SQL Server), including role-based access control and company-scoped data filtering across approval workflows.",
          },
          {
            label: "Document & Workflow Automation",
            text: "Built PDF/Excel export pipelines for compliance documents (Certificate of Origin, packaging specifications), automated email notification/approval-routing logic, and legacy-data migration tooling for suppliers moving off manual paper records.",
          },
        ],
      },
    ],
  },
  {
    name: "Luxury Fashion Retail Company",
    url: "https://belleandkate.com/",
    description:
      "Trusted Indonesian marketplace for pre-owned luxury goods (+150k followers)",
    roles: [
      {
        title: "Project Owner (Freelance)",
        dates: "Jan 2023 – Oct 2023",
        bullets: [
          {
            label: "End-to-End Delivery",
            text: "Orchestrated the digital transformation of a 500M+ IDR project, successfully launching a synchronized ecosystem (Website, Mobile App, OMS, and WMS) with a 100% on-time delivery record.",
          },
          {
            label: "Technical Leadership & Execution",
            text: "Directed a cross-functional team of 6 developers while contributing 50% of the backend codebase, ensuring high architectural standards throughout.",
          },
        ],
      },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">Experience</h1>
      <p className="mt-4 text-lg text-ink-muted">
        Five years of backend and AI infrastructure work, from first commit
        to leading a team.
      </p>

      <div className="relative mt-14">
        <span
          aria-hidden
          className="absolute left-0 top-2 bottom-2 w-px bg-border"
        />
        <div className="space-y-16">
          {companies.map((company) => (
            <div key={company.name} className="relative pl-8">
              <span
                aria-hidden
                className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-paper"
              />
              <a
                href={company.url}
                target="_blank"
                rel="noreferrer"
                className="font-serif text-2xl text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {company.name}
              </a>
              <p className="mt-1 text-sm text-ink-muted">
                {company.description}
              </p>

              <div className="mt-6 space-y-8 border-l border-border/60 pl-6">
                {company.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-medium text-ink">{role.title}</h3>
                      <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                        {role.dates}
                      </span>
                    </div>
                    {role.summary && (
                      <p className="mt-2 text-sm text-ink-muted">
                        {role.summary}
                      </p>
                    )}
                    <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                      {role.bullets.map((bullet) => (
                        <li key={bullet.label} className="flex gap-2">
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted"
                          />
                          <span>
                            <strong className="font-medium text-ink">
                              {bullet.label}:
                            </strong>{" "}
                            {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="relative pl-8">
            <span
              aria-hidden
              className="absolute left-0 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-border"
            />
            <p className="text-sm text-ink-muted/70">
              Garuda Maintenance Facility (GMF) AeroAsia &amp; PT LAPI ITB —
              Aerospace Engineer, 2016–2018
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-sm">
        <a
          href="/CV-RioRhezaHarris.pdf"
          download
          className="font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Download full résumé (PDF) &rarr;
        </a>
        <p className="text-ink-muted">
          See how I explore these problems outside the day job —{" "}
          <Link
            href="/work"
            className="text-accent underline underline-offset-2 hover:text-accent-hover"
          >
            take a look
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

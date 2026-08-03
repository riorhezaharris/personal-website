import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Rio Rheza Harris",
  description: "The pivot from aerospace to fintech, and what's next.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">About</h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-muted text-justify">
        <p>
          I trained as an aerospace engineer, not a software one. Three
          months after finishing my master&apos;s degree, COVID collapsed the
          industry I&apos;d built my career around. Instead of waiting it
          out, I made a deliberate bet: two intensive coding bootcamps, then
          a move into fintech engineering. I haven&apos;t looked back since.
        </p>
        <p>
          Five years at Jack &amp; Transfez — an Indonesian fintech backed by
          Y Combinator and East Ventures — took me from Software Engineer to
          Lead, direct report to the CTO. I&apos;m still hands-on: roughly
          70% of my time is IC work, 30% leadership. Along the way: a
          decoupled Marketing Engine that cut infrastructure costs by 150M
          IDR a year, QA automation saving 500+ engineer-hours a month,
          payment verification systems built under strict financial
          compliance, and — most recently — the company&apos;s AI stack from
          zero to production: Hybrid Search, RAG pipelines, LangGraph-based
          agentic workflows, MCP integrations. I&apos;ve also hired and
          retained 20+ engineers, with 100% post-probation retention through
          onboarding and mentoring I rebuilt from scratch.
        </p>
        <p>
          I&apos;m looking for a harder technical problem next — AI systems
          and distributed architecture at a bigger scale than I can build
          alone at my current stage. Jakarta-based, open to remote roles
          across the US, Europe, and Singapore.
        </p>
        <p>
          The case studies on this site are how I explore problems I
          don&apos;t get to touch day-to-day in production —{" "}
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

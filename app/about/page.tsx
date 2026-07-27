import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Rio Rheza Harris",
  description: "The pivot from aerospace to fintech, and what's next.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">About</h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-muted">
        <p>
          Placeholder — the expanded pivot story from aerospace to fintech
          goes here: what drew me into engineering, why I moved into fintech,
          and what I&apos;ve built along the way.
        </p>
        <p>
          Placeholder — what I&apos;ve built, the systems I&apos;ve worked on
          in production, and the kind of problems I gravitate toward.
        </p>
        <p>
          Placeholder — what I&apos;m looking for next.
        </p>
      </div>
    </div>
  );
}

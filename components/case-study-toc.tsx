import { caseStudySections } from "@/lib/case-studies";

export function CaseStudyToc() {
  return (
    <nav className="sticky top-24 hidden w-48 shrink-0 lg:block" aria-label="Case study sections">
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink-muted">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border pl-4 text-sm">
        {caseStudySections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-ink-muted transition-colors hover:text-accent"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import { ProjectTile } from "@/components/project-tile";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Backend engineer, aerospace to fintech
            </p>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
              I build <span className="text-accent">distributed systems</span>,
              and write up how I built them.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
              Placeholder positioning statement — one paragraph on what I do, who
              I&apos;ve built it for, and what I&apos;m looking for next.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-paper shadow-sm transition-colors hover:bg-accent-hover"
              >
                See the work
                <span className="transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-code-bg p-5 font-mono text-sm shadow-lg ring-1 ring-black/5">
            <div className="mb-4 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-code-fg/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-code-fg/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-code-fg/20" />
            </div>
            <p className="text-code-fg/50">$ cat case_studies.log</p>
            <ul className="mt-3 space-y-2.5">
              {featured.map((project) => (
                <li key={project.slug} className="flex gap-2 text-code-fg">
                  <span className="shrink-0 text-accent">&#10003;</span>
                  <span>
                    <span className="text-code-fg/90">{project.slug}</span>
                    <span className="text-code-fg/40"> — {project.oneLiner}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-code-fg/50">
              $ <span className="cursor-blink">_</span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl text-ink">Featured work</h2>
          <Link
            href="/work"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            All projects &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectTile key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

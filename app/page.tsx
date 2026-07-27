import Link from "next/link";
import { ProjectTile } from "@/components/project-tile";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex flex-col gap-6 py-24">
        <p className="text-sm uppercase tracking-widest text-accent">
          Backend engineer, aerospace to fintech
        </p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          I build distributed systems, and write up how I built them.
        </h1>
        <p className="max-w-xl text-lg text-ink-muted">
          Placeholder positioning statement — one paragraph on what I do, who
          I&apos;ve built it for, and what I&apos;m looking for next.
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="/work"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-hover"
          >
            See the work
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
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

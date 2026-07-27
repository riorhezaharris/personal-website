import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectTile({ project }: { project: Project }) {
  const isWritten = project.status === "written";

  return (
    <div className="flex flex-col justify-between gap-4 rounded-lg border border-border bg-paper p-6 transition-colors hover:border-accent">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl text-ink">{project.title}</h3>
        {!isWritten && (
          <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs uppercase tracking-wide text-ink-muted">
            Coming soon
          </span>
        )}
      </div>
      <p className="text-sm text-ink-muted">{project.oneLiner}</p>
      {isWritten ? (
        <Link
          href={`/work/${project.slug}`}
          className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Read the case study &rarr;
        </Link>
      ) : (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          View on GitHub &rarr;
        </a>
      )}
    </div>
  );
}

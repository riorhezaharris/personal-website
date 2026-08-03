import type { Metadata } from "next";
import { ProjectTile } from "@/components/project-tile";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Rio Rheza Harris",
  description: "Case studies from nine backend systems, built to prove depth at the next altitude.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">Work</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-muted text-justify">
        Nine systems, each going deeper into problems I face in production.
        Each one gets a full case study — the thinking, not just the repo.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectTile key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

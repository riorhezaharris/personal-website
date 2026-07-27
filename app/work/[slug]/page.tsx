import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { CaseStudyToc } from "@/components/case-study-toc";
import { caseStudyMdxComponents } from "@/mdx-components";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects
    .filter((project) => project.status === "written")
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.frontmatter.title} — Rio Rheza Harris`,
    description: caseStudy.frontmatter.oneLiner,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = getCaseStudy(slug);

  if (!project || project.status !== "written" || !caseStudy) {
    notFound();
  }

  const slugs = getCaseStudySlugs();
  if (!slugs.includes(slug)) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl text-ink">
          {caseStudy.frontmatter.title}
        </h1>
        <p className="mt-4 text-lg text-ink-muted">
          {caseStudy.frontmatter.oneLiner}
        </p>
      </header>

      <div className="mt-12 flex gap-12">
        <article className="max-w-2xl flex-1">
          <MDXRemote
            source={caseStudy.content}
            components={caseStudyMdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </article>
        <CaseStudyToc />
      </div>
    </div>
  );
}

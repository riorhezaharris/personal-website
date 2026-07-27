import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyFrontmatter = {
  title: string;
  oneLiner: string;
};

export const caseStudySections = [
  { id: "the-problem", label: "The problem" },
  { id: "why-it-matters", label: "Why it matters" },
  { id: "key-design-decisions", label: "Key design decisions" },
  { id: "what-id-do-differently", label: "What I'd do differently" },
  { id: "try-it-yourself", label: "Try it yourself" },
];

export function getCaseStudySlugs() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCaseStudy(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  return { content, frontmatter: data as CaseStudyFrontmatter };
}

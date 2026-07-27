import type { MDXComponents } from "mdx/types";

export const caseStudyMdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="mt-12 mb-4 font-serif text-2xl text-ink first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-5 text-lg leading-relaxed text-ink-muted" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a
      className="text-accent underline underline-offset-2 hover:text-accent-hover"
      {...props}
    >
      {children}
    </a>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="mb-6 overflow-x-auto rounded-lg bg-code-bg p-4 text-sm text-code-fg"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }) => (
    <code className="font-mono text-[0.9em]" {...props}>
      {children}
    </code>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="mb-5 list-disc space-y-2 pl-6 text-lg leading-relaxed text-ink-muted"
      {...props}
    >
      {children}
    </ul>
  ),
};

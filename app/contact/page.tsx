import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Rio Rheza Harris",
  description: "Get in touch.",
};

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">Contact</h1>
      <p className="mt-4 text-lg text-ink-muted">
        Recruiting, collaboration, or just want to talk shop — reach out.
      </p>

      <form
        action={FORMSPREE_ENDPOINT ?? "#"}
        method="POST"
        className="mt-10 flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-md border border-border bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-md border border-border bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="rounded-md border border-border bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
          />
        </div>
        <button
          type="submit"
          className="mt-2 self-start rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-hover"
        >
          Send message
        </button>
      </form>

      <p className="mt-10 text-sm text-ink-muted">
        Prefer email?{" "}
        <a
          href="mailto:riorhezaharris@gmail.com"
          className="text-accent underline underline-offset-2 hover:text-accent-hover"
        >
          riorhezaharris@gmail.com
        </a>
      </p>
    </div>
  );
}

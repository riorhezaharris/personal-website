import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — Rio Rheza Harris",
  description: "What data this site collects and why.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">Privacy</h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-muted">
        <p>
          This site uses Google Analytics to understand which pages get
          read and where visitors come from. Google Analytics sets cookies
          and collects standard analytics data such as your approximate
          location, device type, and the pages you visit on this site.
        </p>
        <p>
          Analytics only runs after you accept the cookie banner shown on
          your first visit. You can decline, and no analytics cookies will
          be set.
        </p>
        <p>
          If you submit the contact form, your name, email, and message are
          sent to a third-party form service (Formspree) and to{" "}
          <a
            href="mailto:riorhezaharris@gmail.com"
            className="text-accent underline underline-offset-2 hover:text-accent-hover"
          >
            riorhezaharris@gmail.com
          </a>{" "}
          for the sole purpose of responding to you.
        </p>
        <p>
          Questions about this policy can be sent to the email address
          above.
        </p>
      </div>
    </div>
  );
}

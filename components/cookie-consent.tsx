"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const CONSENT_KEY = "cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function CookieConsent() {
  const [status, setStatus] = useState<"pending" | "accepted" | "declined">(
    "pending",
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      setStatus(stored);
    }
  }, []);

  function respond(next: "accepted" | "declined") {
    window.localStorage.setItem(CONSENT_KEY, next);
    setStatus(next);
  }

  return (
    <>
      {status === "accepted" && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {status === "pending" && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-paper px-6 py-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-ink-muted">
              This site uses cookies for analytics. See the{" "}
              <Link
                href="/privacy"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                privacy page
              </Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => respond("declined")}
                className="rounded-md border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Decline
              </button>
              <button
                onClick={() => respond("accepted")}
                className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-hover"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

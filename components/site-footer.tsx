import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Rio Rheza Harris</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-accent">
            Privacy
          </Link>
          <a
            href="mailto:riorhezaharris@gmail.com"
            className="transition-colors hover:text-accent"
          >
            riorhezaharris@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent font-mono text-sm text-paper transition-colors group-hover:bg-accent-hover">
            RH
          </span>
          <span className="font-serif text-lg tracking-tight text-ink">
            Rio Rheza Harris
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 font-medium transition-colors ${isActive
                    ? "text-accent"
                    : "text-ink-muted hover:text-ink"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-px bg-accent" />
                )}
              </Link>
            );
          })}
          <a
            href="/CV-RioRhezaHarris.pdf"
            download
            className="ml-2 rounded-md border border-border px-3 py-2 font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

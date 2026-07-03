"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/quality-compliance", label: "Quality & Compliance" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="font-heading text-2xl font-bold tracking-wider text-apki-navy">
          APKI
        </Link>

        <nav className="hidden items-center gap-4 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-apki-charcoal transition-colors hover:text-apki-green"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="hidden rounded-sm bg-apki-green px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy lg:inline-block"
          >
            Request a Deployment
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-apki-navy" />
          <span className="mt-1.5 block h-0.5 w-6 bg-apki-navy" />
          <span className="mt-1.5 block h-0.5 w-6 bg-apki-navy" />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-semibold uppercase tracking-wide text-apki-charcoal"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-block rounded-sm bg-apki-green px-5 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-white"
            onClick={() => setOpen(false)}
          >
            Request a Deployment
          </Link>
        </div>
      )}
    </header>
  );
}

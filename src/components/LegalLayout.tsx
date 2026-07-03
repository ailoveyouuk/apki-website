import type { ReactNode } from "react";

export default function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-apki-charcoal/50">Last updated: {updated}</p>
        <div className="legal-prose mt-4">{children}</div>
      </div>
    </section>
  );
}

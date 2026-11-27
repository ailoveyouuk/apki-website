import Link from "next/link";
import type { Metadata } from "next";
import PixelField from "@/components/PixelField";
import Reveal from "@/components/Reveal";
import { formatSize, resourceGroups, resourceHref, resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources & Downloads",
  description:
    "User manuals, fault codes, UN38.3 test report, environmental, ethical trading and compliance documents from APK Industries.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
              Documentation
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
              Resources &amp; downloads
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-apki-charcoal/75">
              Manuals, test evidence, policies and compliance documents for
              APKI power stations. Every file is a PDF.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-apki-charcoal/60">
              You can also reach the user manual for your unit by scanning the
              QR code on its product rating label. The downloadable manual does
              not include the declaration of conformity, which is available on
              request.{" "}
              <Link href="/contact?enquiry=data-sheets" className="underline">
                Request documentation
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {resourceGroups.map((group, gi) => (
        <section
          key={group}
          className={gi % 2 === 0 ? "bg-[#f5f6f2] py-16" : "bg-white py-16"}
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-apki-navy sm:text-3xl">
                {group}
              </h2>
            </Reveal>
            <ul className="mt-8 divide-y divide-black/10 border-t border-black/10">
              {resources
                .filter((r) => r.group === group)
                .map((r) => (
                  <li key={r.slug}>
                    <a
                      href={resourceHref(r)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                    >
                      <span>
                        <span className="block font-heading text-lg font-semibold text-apki-navy group-hover:text-apki-green">
                          {r.title}
                        </span>
                        <span className="mt-1 block max-w-2xl text-sm text-apki-charcoal/70">
                          {r.description}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-apki-green">
                        PDF · {r.pages} {r.pages === 1 ? "page" : "pages"} ·{" "}
                        {formatSize(r.sizeKb)} ↓
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-apki-green py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-10">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Need something that isn&apos;t listed?
          </h2>
          <Link
            href="/contact?enquiry=data-sheets"
            className="rounded-sm bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-apki-green transition-colors hover:bg-apki-navy hover:text-white"
          >
            Request documentation
          </Link>
        </div>
      </section>
    </>
  );
}

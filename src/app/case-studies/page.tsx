import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies, dnoList } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies | APKI",
  description:
    "Real-world deployments of the APKI Portable Power Station across UK Distribution Network Operators — home dialysis, palliative care, and cold-chain medicine protection.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
            Evidence, Not Promises
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
            Real deployments. Real outcomes.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-apki-charcoal/75">
            Since 2021, APKI units have been supplied to four of the UK&apos;s six
            Distribution Network Operators as part of welfare support for vulnerable,
            Priority Services Register customers during power outages. These are not
            simulations — they are documented, real-world outcomes.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f6f2] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="flex flex-col rounded-sm bg-white p-8 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-apki-green">
                  {cs.tag}
                </span>
                <h2 className="mt-3 font-heading text-xl font-bold text-apki-navy">
                  {cs.title}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-wide text-apki-charcoal/50">
                  {cs.org}
                </p>
                <p className="mt-4 flex-1 text-sm text-apki-charcoal/75">{cs.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-heading text-3xl font-bold text-apki-navy">
            Why this matters beyond the home
          </h2>
          <p className="mt-4 text-apki-charcoal/75">
            Each of these deployments shares the same underlying demand as a
            humanitarian field operation or defence deployment: power has failed,
            the situation is safety-critical, and there is no time or infrastructure
            for a conventional fix. A unit that can keep a dialysis machine running
            for a family in Yorkshire is a unit that can keep a field clinic, a
            comms post, or a cold-chain vaccine store running anywhere in the world.
          </p>

          <h3 className="mt-10 font-heading text-xl font-semibold text-apki-navy">
            Deployed via
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {dnoList.map((dno) => (
              <li key={dno} className="border-l-2 border-apki-green pl-4 text-apki-charcoal/80">
                {dno}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-apki-navy py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-10">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Want to discuss a pilot for your organisation?
          </h2>
          <Link
            href="/contact"
            className="rounded-sm bg-apki-green px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-yellow hover:text-apki-navy"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

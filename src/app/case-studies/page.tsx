import Link from "next/link";
import type { Metadata } from "next";
import PartnerLogos from "@/components/PartnerLogos";
import PixelField from "@/components/PixelField";
import PixelIcon, { CROSS_CIRCLE, SHIELD } from "@/components/PixelIcon";
import Reveal from "@/components/Reveal";
import { caseStudies, certifications, medicalTesting, partnerLogos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies | APKI",
  description:
    "Real-world evidence for the APKI Portable Power Station: independent testing on medical equipment at Queens Medical Centre, Nottingham, plus deployments across UK Distribution Network Operators.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
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
            simulations — they are documented, real-world outcomes, backed by
            independent testing on the medical equipment itself.
          </p>
        </div>
      </section>

      {/* Queens Medical Centre, Nottingham — the headline evidence */}
      <section className="relative overflow-hidden bg-apki-navy py-20 text-white lg:py-24">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal className="text-center">
            <PixelIcon
              bitmap={CROSS_CIRCLE}
              className="pixel-pulse mx-auto h-10 w-10"
              color="var(--apki-yellow)"
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-apki-yellow">
              {medicalTesting.site}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
              {medicalTesting.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/75">{medicalTesting.detail}</p>
          </Reveal>

          <div className="mt-12 grid gap-3 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {medicalTesting.equipment.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 60}
                className="flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-apki-yellow" />
                <span className="text-sm text-white/85">{item}</span>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={300}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-8"
          >
            {certifications.map((cert) => (
              <div key={cert.standard} className="flex items-center gap-2">
                <PixelIcon bitmap={SHIELD} className="h-5 w-5" color="var(--apki-yellow)" />
                <span className="text-sm font-medium text-white/85">
                  {cert.standard} · Cert. {cert.certNumber} · valid to {cert.expiry}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f6f2] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center">
            <h2 className="font-heading text-2xl font-bold text-apki-navy sm:text-3xl">
              What happened when the power went out
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 120}>
                <div className="pixel-frame flex h-full flex-col bg-white p-8 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-wide text-apki-green">
                    {cs.tag}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-apki-navy">
                    {cs.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-apki-charcoal/50">
                    {cs.org}
                  </p>
                  <p className="mt-4 flex-1 text-sm text-apki-charcoal/75">{cs.summary}</p>
                </div>
              </Reveal>
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
            Home care, utilities, emergency services, humanitarian aid, and
            defence aren&apos;t separate markets for APKI — they&apos;re
            different settings for the same underlying demand: medical
            equipment that has to keep running when the power fails. A unit
            independently tested to keep a dialysis machine running for a
            family in Yorkshire is a unit that can keep a field clinic, a
            comms post, or a cold-chain vaccine store running anywhere in the
            world, on whatever power source and grid rating is available
            there.
          </p>

          <h3 className="mt-10 font-heading text-xl font-semibold text-apki-navy">
            Deployed via
          </h3>
          <div className="mt-6">
            <PartnerLogos items={partnerLogos.energyNetworks} />
          </div>
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

import Link from "next/link";
import type { Metadata } from "next";
import PartnerLogos from "@/components/PartnerLogos";
import PixelField from "@/components/PixelField";
import PixelIcon, { CROSS_CIRCLE, SHIELD } from "@/components/PixelIcon";
import Reveal from "@/components/Reveal";
import { certifications, compliance, medicalTesting, partnerLogos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quality & Compliance | APKI",
  description:
    "APKI's certifications and policies: ISO 9001, ISO 14001, UKAS-accredited testing, RoHS/CE/UKCA compliance, WEEE take-back, and ethical trading standards.",
};

const policies = [
  {
    title: "Ethical Trading & Supplier Code of Conduct",
    text: "Human rights, fair labour, and anti-modern-slavery standards apply across APKI's operations and its entire supply chain, with mandatory supplier acknowledgement and regular audits.",
  },
  {
    title: "Waste Management & Circular Economy",
    text: "Waste reduction, segregation, and recycling programmes across production, packaging, and end-of-life product components, aligned with UK Environment Act 2021 principles.",
  },
  {
    title: "WEEE Compliance",
    text: "A free take-back service for end-of-life APKI electrical products, in full compliance with the Waste Electrical and Electronic Equipment Regulations 2013.",
  },
  {
    title: "Change Management",
    text: "Every design or process change is risk-assessed and signed off by the Managing Director, logged, version-controlled, and retained for audit for a minimum of three years.",
  },
];

export default function QualityCompliancePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
            Compliance First
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
            Quality &amp; Compliance
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-apki-charcoal/75">
            Every APKI unit is fully compliant — reducing procurement risk and
            paperwork for decision-makers, whether you&apos;re an NHS or home-care
            buyer, a UK utility, an NGO procurement office, or a defence logistics
            team.
          </p>
        </div>
      </section>

      {/* Real-world medical testing — the credential that matters most */}
      <section className="relative overflow-hidden bg-apki-navy py-20 text-white lg:py-24">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal className="text-center">
            <PixelIcon
              bitmap={CROSS_CIRCLE}
              className="pixel-pulse mx-auto h-9 w-9"
              color="var(--apki-yellow)"
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-apki-yellow">
              {medicalTesting.site}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
              {medicalTesting.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">{medicalTesting.detail}</p>
          </Reveal>
          <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {medicalTesting.equipmentExamples.map((item, i) => (
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
          <Reveal delay={250} className="mt-6 text-center">
            <p className="text-sm text-white/60">
              Among several other categories of home medical equipment.{" "}
              <Link href="/case-studies" className="font-semibold text-apki-yellow hover:underline">
                See the full testing evidence ↗
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Recognised marks — the actual badges, not just the standard names */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
            Recognised Certification Marks
          </p>
          <PartnerLogos items={partnerLogos.certifications} />
        </div>
      </section>

      <section className="bg-[#f5f6f2] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.standard} className="pixel-frame flex gap-4 bg-white p-8">
                <PixelIcon bitmap={SHIELD} className="mt-1 h-7 w-7 shrink-0" color="#28730A" />
                <div>
                  <h2 className="font-heading text-xl font-bold text-apki-navy">
                    {cert.standard}
                  </h2>
                  <p className="mt-2 text-sm text-apki-charcoal/70">{cert.scope}</p>
                  <dl className="mt-4 space-y-1 text-xs text-apki-charcoal/60">
                    <div className="flex gap-2">
                      <dt className="font-semibold uppercase tracking-wide">Certificate no.</dt>
                      <dd>{cert.certNumber}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold uppercase tracking-wide">Issued by</dt>
                      <dd>{cert.issuedBy}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-semibold uppercase tracking-wide">Valid</dt>
                      <dd>
                        {cert.initialCertification} – {cert.expiry}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-heading text-3xl font-bold text-apki-navy">
            Product Certifications
          </h2>
          <ul className="mt-8 space-y-3">
            {compliance.map((item) => (
              <li key={item} className="flex gap-3 border-b border-black/10 pb-3 text-sm text-apki-charcoal/80">
                <span className="text-apki-green">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-apki-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Our Policies</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {policies.map((p) => (
              <div key={p.title} className="rounded-sm border border-white/10 bg-white/5 p-6">
                <h3 className="font-heading text-lg font-semibold text-apki-yellow">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical testing partner + government support */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50 sm:text-left">
                Clinical Testing Partner
              </p>
              <PartnerLogos items={partnerLogos.clinical} caption={false} />
            </div>
            <div>
              <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50 sm:text-left">
                Government &amp; Industry Support
              </p>
              <PartnerLogos items={partnerLogos.government} caption={false} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-apki-green py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-10">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Need documentation for a procurement or tender process?
          </h2>
          <Link
            href="/contact"
            className="rounded-sm bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-apki-green transition-colors hover:bg-apki-navy hover:text-white"
          >
            Request Documentation
          </Link>
        </div>
      </section>
    </>
  );
}

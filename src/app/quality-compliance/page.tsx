import Link from "next/link";
import type { Metadata } from "next";
import { compliance } from "@/lib/content";

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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
            Compliance First
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
            Quality &amp; Compliance
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-apki-charcoal/75">
            Every APKI unit is fully compliant — reducing procurement risk and
            paperwork for decision-makers, whether you&apos;re a UK utility, an NGO
            procurement office, or a defence logistics team.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f6f2] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-sm bg-white p-8">
              <h2 className="font-heading text-xl font-bold text-apki-navy">ISO 9001</h2>
              <p className="mt-2 text-sm text-apki-charcoal/70">
                Quality Management System, certified by British Assessment Bureau under
                UKAS accreditation.
              </p>
            </div>
            <div className="rounded-sm bg-white p-8">
              <h2 className="font-heading text-xl font-bold text-apki-navy">ISO 14001</h2>
              <p className="mt-2 text-sm text-apki-charcoal/70">
                Environmental Management System, certified by British Assessment Bureau
                under UKAS accreditation.
              </p>
            </div>
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

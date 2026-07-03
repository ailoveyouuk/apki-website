import type { Metadata } from "next";
import Link from "next/link";
import PixelField from "@/components/PixelField";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ | APKI",
  description:
    "Common questions about the APKI 2200Li Portable Power Station, its independent medical-equipment testing, deployment, certification, and procurement.",
};

const faqs = [
  {
    q: "Is it safe to use with medical equipment?",
    a: "Yes. It has been third-party tested at Queens Medical Centre, Nottingham, on the real medical equipment it's built to power — dialysis machines, powered hospital beds, specialist mattresses, medicine fridges, oxygen concentrators, CPAP/BiPAP machines, nebulisers, and suction machines.",
  },
  {
    q: "What is the APKI 2200Li?",
    a: "A ruggedised, zero-emission Portable Power Station — 2220Wh of lithium battery capacity outputting pure sine wave AC, USB, and 12V DC, designed to be carried and deployed by one person.",
  },
  {
    q: "Who is APKI built for?",
    a: "Healthcare providers and home carers, UK Distribution Network Operators, utilities and emergency services, and NGOs, aid agencies, and defence and government procurement teams operating in the field.",
  },
  {
    q: "Can it be used outdoors and in the field?",
    a: "Yes. It's built to be ruggedised and safe both indoors and in the field, and includes built-in Wi-Fi and G-force impact detection for remote, unattended deployment.",
  },
  {
    q: "How is it charged?",
    a: "From any accepted source: grid/mains AC, an 18–30V solar PV array, a 12/24V vehicle supply, or a petrol/diesel generator's AC output — whichever is available.",
  },
  {
    q: "What certifications does it hold?",
    a: "ISO 9001 and ISO 14001 (UKAS-accredited via Amtivo/British Assessment Bureau), RoHS, CE/UKCA marking, and compliance with relevant EMC and product safety directives. The unit is also WEEE take-back compliant at end of life.",
  },
  {
    q: "What warranty is included?",
    a: "A 2-year comprehensive manufacturer's warranty is included as standard.",
  },
  {
    q: "Are you listed on procurement platforms?",
    a: "Yes — APKI is registered on Achilles, SAP Ariba, GoSupply, and JAGGAER.",
  },
  {
    q: "Do you supply internationally?",
    a: "Yes. APKI units are ready to deploy for humanitarian, NGO, defence, and international utility operations, in addition to our UK utility and home-medical customers. Get in touch with your requirements and we'll advise on availability and lead times.",
  },
  {
    q: "How do I request a deployment or quote?",
    a: "Use the contact form, or email us directly, with a brief outline of your use case, quantities, and timeline, and we'll follow up.",
  },
];

export default function FaqPage() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <PixelField />
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
          Support
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
          Frequently asked questions.
        </h1>
        <p className="mt-5 max-w-xl text-apki-charcoal/75">
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link href="/contact" className="text-apki-green hover:underline">
            Get in touch
          </Link>{" "}
          and we&apos;ll answer directly.
        </p>

        <div className="mt-14 divide-y divide-black/10 border-t border-black/10">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="faq-item py-5">
                <summary className="flex items-center justify-between gap-4">
                  <span className="font-heading text-base font-semibold text-apki-navy sm:text-lg">
                    {item.q}
                  </span>
                  <span className="faq-icon shrink-0 text-2xl font-light text-apki-green">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-apki-charcoal/70">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

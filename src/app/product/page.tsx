import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CountUp from "@/components/CountUp";
import LiveryGallery from "@/components/LiveryGallery";
import PixelField from "@/components/PixelField";
import PixelIcon, {
  BATTERY,
  BOLT,
  CLOCK,
  IMPACT,
  PIN,
  PLUG,
  SHIELD,
  USERS,
  WAVE,
  WEIGHT,
  WIFI,
} from "@/components/PixelIcon";
import PixelUnionJack from "@/components/PixelUnionJack";
import Reveal from "@/components/Reveal";
import { specs } from "@/lib/content";

export const metadata: Metadata = {
  title: "APKI 2200Li Portable Power Station | APKI",
  description:
    "Full specifications for the APKI 2200Li ruggedised Portable Power Station — 2220Wh, pure sine wave AC, solar/vehicle/mains charging, built-in Wi-Fi and remote monitoring.",
};

const images = [
  { src: "/images/pps-angle-1.jpg", alt: "APKI 2200Li, three-quarter angle view" },
  { src: "/images/pps-front.jpg", alt: "APKI 2200Li, front control panel" },
  { src: "/images/pps-angle-2.jpg", alt: "APKI 2200Li, rear angle showing rating label" },
  { src: "/images/pps-back.jpg", alt: "APKI 2200Li, rear operating instructions panel" },
];

const keyFacts: {
  to: number;
  decimals: number;
  prefix: string;
  suffix: string;
  label: string;
  bitmap: string[];
}[] = [
  { to: 2220, decimals: 0, prefix: "", suffix: "Wh", label: "Battery capacity — 600,000mAh", bitmap: BATTERY },
  { to: 2000, decimals: 0, prefix: "", suffix: "W", label: "Continuous rated power output", bitmap: BOLT },
  { to: 18.9, decimals: 1, prefix: "", suffix: "kg", label: "Single-person portable weight", bitmap: WEIGHT },
  { to: 10, decimals: 0, prefix: "≤", suffix: "hrs", label: "Full recharge, empty to 100%", bitmap: CLOCK },
  { to: 4, decimals: 0, prefix: "", suffix: "", label: "Accepted charge sources — grid, solar, vehicle, generator", bitmap: PLUG },
  { to: 2, decimals: 0, prefix: "", suffix: "-yr", label: "Comprehensive manufacturer's warranty", bitmap: SHIELD },
];

const specGroups = [
  {
    title: "Battery & Power",
    bitmap: BATTERY,
    labels: ["Model", "Rated Power / Continuous Power", "Capacity", "Battery Type"],
  },
  {
    title: "Charging Inputs",
    bitmap: PLUG,
    labels: [
      "AC Charge Input",
      "Vehicle (12/24V) Charge Input",
      "Solar (PV) Charge Input",
      "Recharge Time (30–70%)",
      "Recharge Time (0–100%)",
    ],
  },
  {
    title: "Outputs",
    bitmap: WAVE,
    labels: ["AC Output", "USB Output", "USB 3.0", "Type-C Output"],
  },
  {
    title: "Build & Warranty",
    bitmap: SHIELD,
    labels: ["Weight / Dimensions", "Warranty"],
  },
];

const monitoring = [
  { label: "Asset location tracking", sub: "Know where every unit is, in real time.", bitmap: PIN },
  { label: "Consumption alerts", sub: "Battery level and power draw, monitored live.", bitmap: WIFI },
  { label: "G-force impact detection", sub: "Flags mishandling or drops automatically.", bitmap: IMPACT },
  { label: "Unlimited accounts", sub: "Full reporting, no per-seat limits.", bitmap: USERS },
];

const useCases = [
  {
    title: "Humanitarian Aid & NGOs",
    text: "Power for field clinics, water purification, and comms in disaster response and displacement settings.",
  },
  {
    title: "Defence & Field Operations",
    text: "Silent, zero-emission — no fuel resupply chain. Recharges from solar, vehicle, or captured grid power.",
  },
  {
    title: "Emergency Services",
    text: "Backup power for ambulance stations, triage points, and incident command during major incidents.",
  },
  {
    title: "Home & Critical Medical Care",
    text: "Third-party tested at Queens Medical Centre on dialysis machines, hospital beds, and respiratory equipment.",
  },
  {
    title: "Utility & DNO Welfare Support",
    text: "Deployed via four of the UK's six DNOs for Priority Services Register customers during outages.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero — product front and centre, oversized type */}
      <section className="relative overflow-hidden bg-white">
        <PixelField />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-apki-green">
              The Product
            </p>
            <h1 className="mt-6 font-heading text-6xl font-bold leading-[0.95] text-apki-navy sm:text-7xl">
              APKI
              <br />
              2200Li.
            </h1>
            <p className="mt-6 max-w-md text-apki-charcoal/70">
              A high-capacity, zero-emission power station built for safe use
              indoors and in the field — any source in, clean power out.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
              <PixelUnionJack className="h-3.5 w-7 shrink-0" />
              Designed &amp; manufactured in the UK
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-sm bg-apki-green px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy"
            >
              Request a Deployment
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="pixel-frame overflow-hidden bg-[#f5f6f2]">
              <Image
                src="/images/pps-angle-1.jpg"
                alt="APKI 2200Li Portable Power Station"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key facts — animated figures */}
      <section className="relative overflow-hidden bg-apki-navy py-20 text-white lg:py-28">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              The numbers that matter
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {keyFacts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 100}>
                <PixelIcon
                  bitmap={fact.bitmap}
                  className="pixel-pulse h-7 w-7"
                  color="var(--apki-yellow)"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <div className="mt-4 font-heading text-5xl font-bold text-white">
                  <CountUp
                    to={fact.to}
                    decimals={fact.decimals}
                    prefix={fact.prefix}
                    suffix={fact.suffix}
                    delay={150}
                  />
                </div>
                <p className="mt-2 max-w-xs text-sm text-white/60">{fact.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#f5f6f2] py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 lg:grid-cols-4 lg:px-10">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={i * 100}>
              <div className="pixel-frame overflow-hidden bg-white transition-transform duration-500 hover:scale-[1.03]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Livery gallery — upsell: standard liveries + custom client branding */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
              Customisation
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Any livery. Any branding.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-apki-charcoal/70">
              Standard humanitarian, defence, and emergency services liveries
              are available off the shelf — or we&apos;ll finish the unit in
              your organisation&apos;s own colours, markings, and branding.
            </p>
          </Reveal>

          <div className="mt-14">
            <LiveryGallery />
          </div>

          <Reveal delay={200} className="mt-12">
            <Link
              href="/contact"
              className="text-sm font-semibold text-apki-green hover:underline"
            >
              Talk to us about your livery ↗
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Full spec, grouped */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Full Specification
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-14 md:grid-cols-2">
            {specGroups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 120}>
                <div className="flex items-center gap-3">
                  <PixelIcon bitmap={group.bitmap} className="h-6 w-6" color="#28730A" />
                  <h3 className="font-heading text-lg font-semibold text-apki-navy">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-5 divide-y divide-black/10 border-t border-black/10">
                  {specs
                    .filter((row) => group.labels.includes(row.label))
                    .map((row) => (
                      <div key={row.label} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-6">
                        <div className="w-full shrink-0 text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50 sm:w-52">
                          {row.label}
                        </div>
                        <div className="text-sm text-apki-navy">{row.value}</div>
                      </div>
                    ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Remote monitoring */}
      <section className="relative overflow-hidden bg-apki-navy py-20 text-white lg:py-28">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Built-in Wi-Fi &amp; remote monitoring
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              Every unit is tracked, monitored, and managed remotely — no
              physical access required.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {monitoring.map((item, i) => (
              <Reveal key={item.label} delay={i * 120}>
                <PixelIcon
                  bitmap={item.bitmap}
                  className="pixel-pulse h-8 w-8"
                  color="var(--apki-yellow)"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
                <div className="mt-4 font-heading text-base font-semibold uppercase tracking-wide text-white">
                  {item.label}
                </div>
                <p className="mt-2 text-sm text-white/60">{item.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Where it deploys
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-2">
            {useCases.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 120}>
                <h3 className="font-heading text-lg font-semibold text-apki-navy">
                  {uc.title}
                </h3>
                <p className="mt-2 text-sm text-apki-charcoal/70">{uc.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-apki-green py-20 text-white">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Ready to deploy APKI power in your operation?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-apki-green transition-colors hover:bg-apki-navy hover:text-white"
          >
            Request a Deployment
          </Link>
        </Reveal>
      </section>
    </>
  );
}

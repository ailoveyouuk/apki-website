import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CountUp from "@/components/CountUp";
import LiveryGallery from "@/components/LiveryGallery";
import PixelField from "@/components/PixelField";
import PixelWorldMap from "@/components/PixelWorldMap";
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
import { formatSize, getResource, resourceHref } from "@/lib/resources";

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
  { to: 4, decimals: 0, prefix: "", suffix: "", label: "Accepted charge sources — grid, solar, vehicle, generator, any country's rating", bitmap: PLUG },
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

const protectionLayers = [
  { title: "Dual protection", text: "BMS single-cell charging, certified up to UL2054." },
  { title: "Back-up", text: "A secondary BMS is activated if the first should fail." },
  { title: "Cool under pressure", text: "Units can be used at temperatures up to 50°C." },
  { title: "PTC protection", text: "Built-in positive temperature coefficient protection." },
  { title: "Over-discharge protection", text: "Extra safeguards extend your unit's battery life." },
  { title: "Over-current protection", text: "Integrated measures protect the equipment being used." },
  { title: "Short-circuit protection", text: "Units are protected against faulty or damaged appliances." },
];

const range = [
  { model: "APKI1600LP", chemistry: "Lithium iron phosphate (LiFePO4)", weight: "16.8kg", capacity: "Specification on request", gps: "No" },
  { model: "APKI 2200Li", chemistry: "Lithium NMC", weight: "18.9kg", capacity: "2,220Wh", gps: "Yes", featured: true },
  { model: "APKI369", chemistry: "Lithium NMC", weight: "29.5kg / 25.7kg per unit (1 to 3 units)", capacity: "2,880Wh to 8,640Wh", gps: "No" },
];

const bayPhotos = [
  { src: "/images/bays/bay-1.jpg", alt: "APKI charging and storage bay, empty, with charging leads in place", w: 1050, h: 1400 },
  { src: "/images/bays/bay-2.jpg", alt: "Two APKI charging and storage bays side by side", w: 1400, h: 1050 },
  { src: "/images/bays/bay-3.jpg", alt: "APKI charging and storage bays loaded with power stations and boxed units", w: 1400, h: 1050 },
  { src: "/images/bays/bay-4.jpg", alt: "APKI charging and storage bay installed against a depot wall", w: 1050, h: 1400 },
  { src: "/images/bays/bay-5.jpg", alt: "APKI charging and storage bay installed in a utility depot", w: 1050, h: 1400 },
];

const productDocs = [
  "user-manual-serial-above-002392",
  "user-manual-english-impaired-vision",
  "wifi-instructions",
  "fault-codes",
  "un38-3-test-report",
].map(getResource);

const monitoring = [
  { label: "Asset location tracking", sub: "Know where every unit is, in real time.", bitmap: PIN },
  { label: "Live status & fault codes", sub: "Battery level, power draw and fault codes, updated in real time — so you know when a fresh unit is needed without a site visit.", bitmap: WIFI },
  { label: "G-force impact detection", sub: "Flags mishandling or drops automatically.", bitmap: IMPACT },
  { label: "Unlimited accounts", sub: "Full reporting, no per-seat limits.", bitmap: USERS },
];

const useCases = [
  {
    title: "Home & Critical Medical Care",
    text: "The proving ground: third-party tested at Queens Medical Centre, Nottingham, on dialysis machines, hospital beds, medicine fridges, and respiratory equipment including oxygen concentrators and CPAP/BiPAP machines.",
  },
  {
    title: "Utility & DNO Welfare Support",
    text: "Deployed via four of the UK's six DNOs to power exactly this equipment for Priority Services Register customers during outages.",
  },
  {
    title: "Emergency Services",
    text: "Ambulance stations and triage points run the same oxygen, monitoring, and infusion equipment — proven medical-grade reliability, on demand.",
  },
  {
    title: "Humanitarian Aid & NGOs",
    text: "Field clinics and displacement camps depend on cold-chain vaccine storage, dialysis, and respiratory support — the same equipment category APKI is proven on, plus power for comms and water purification.",
  },
  {
    title: "Defence & Field Operations",
    text: "Combat medical units and field hospitals carry the same life-support and diagnostic equipment, silently powered with no fuel resupply chain and no signature.",
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
              Tested on Real Medical Equipment
            </p>
            <h1 className="mt-6 font-heading text-6xl font-bold leading-[0.95] text-apki-navy sm:text-7xl">
              APKI
              <br />
              2200Li.
            </h1>
            <p className="mt-6 max-w-md text-apki-charcoal/70">
              A high-capacity, zero-emission power station independently
              tested at Queens Medical Centre, Nottingham, to keep dialysis
              machines, hospital beds, and respiratory equipment running —
              then built to deploy anywhere.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
              <PixelUnionJack className="h-3.5 w-7 shrink-0" />
              Designed &amp; manufactured in the UK
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/contact"
                className="inline-block rounded-sm bg-apki-green px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy"
              >
                Partner With Us
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-apki-green hover:underline"
              >
                See the testing evidence ↗
              </Link>
            </div>
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

      {/* Seven layers of built-in protection */}
      <section className="bg-[#f5f6f2] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
              Safety by design
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Seven layers of built-in protection
            </h2>
            <p className="mt-4 max-w-2xl text-apki-charcoal/70">
              Alongside a built-in 30mA residual current device (RCD) to
              BS 7671 18th Edition.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {protectionLayers.map((layer, i) => (
              <Reveal key={layer.title} delay={i * 80}>
                <div className="font-heading text-sm font-semibold text-apki-green">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1 font-heading text-lg font-semibold text-apki-navy">
                  {layer.title}
                </h3>
                <p className="mt-2 text-sm text-apki-charcoal/70">{layer.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The APKI range */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
              The range
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Developed for vulnerable people during prolonged outages
            </h2>
            <p className="mt-4 max-w-2xl text-apki-charcoal/70">
              APKI power stations are built to run sensitive medical and welfare
              equipment through a prolonged power cut, silently, with zero
              emissions, low EMF and no maintenance. Every model charges from
              mains, a 12/24V vehicle supply or solar, and has 4G/5G
              connectivity.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {range.map((m, i) => (
              <Reveal key={m.model} delay={i * 120}>
                <div
                  className={`h-full border p-6 ${
                    m.featured ? "border-apki-green" : "border-black/10"
                  }`}
                >
                  <h3 className="font-heading text-2xl font-bold text-apki-navy">
                    {m.model}
                  </h3>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">Battery</dt>
                      <dd className="text-apki-navy">{m.chemistry}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">Capacity</dt>
                      <dd className="text-apki-navy">{m.capacity}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">Weight</dt>
                      <dd className="text-apki-navy">{m.weight}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">Dimensions</dt>
                      <dd className="text-apki-navy">H335 × W320 × D235mm</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">GPS tracking</dt>
                      <dd className="text-apki-navy">{m.gps}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-apki-charcoal/50">
            Need full specifications for another model?{" "}
            <Link href="/contact?enquiry=data-sheets" className="underline">
              Request the data sheet
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Charging & storage bays */}
      <section className="bg-[#f5f6f2] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
              Supplied and installed
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Charging &amp; storage bays
            </h2>
            <p className="mt-4 max-w-2xl text-apki-charcoal/70">
              APKI supplies and installs policy-compliant charging and storage
              bays, so units are ready when they are needed.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {bayPhotos.map((img, i) => (
              <Reveal key={img.src} delay={i * 80}>
                <div className="pixel-frame aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Remote monitoring — the pixel world map earns its place here:
          this is the capability that tracks every unit, wherever it's deployed */}
      <section className="relative overflow-hidden bg-apki-navy py-20 text-white lg:py-28">
        <PixelWorldMap />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Built-in Wi-Fi &amp; remote monitoring, anywhere in the world
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              Every unit is tracked, monitored, and managed remotely from the
              UK — no physical access required, wherever it&apos;s deployed.
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

      {/* Manuals & downloads */}
      <section className="bg-[#f5f6f2] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Manuals &amp; downloads
            </h2>
          </Reveal>
          <ul className="mt-8 divide-y divide-black/10 border-t border-black/10">
            {productDocs.map((d) => (
              <li key={d.slug}>
                <a
                  href={resourceHref(d)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-4"
                >
                  <span className="font-semibold text-apki-navy group-hover:text-apki-green">
                    {d.title}
                  </span>
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-apki-green">
                    PDF · {formatSize(d.sizeKb)} ↓
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-apki-charcoal/60">
            The declaration of conformity is available on request.{" "}
            <Link href="/resources" className="underline">
              All resources and policies
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Use cases — one differentiator (medical-device reliability),
          expressed across every sector that also depends on it */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              One differentiator, every sector
            </h2>
            <p className="mt-4 max-w-2xl text-apki-charcoal/70">
              Home care, utilities, emergency services, humanitarian aid, and
              defence all run medical devices in the field. That&apos;s where
              this reliability applies everywhere.
            </p>
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
            Partner With Us
          </Link>
        </Reveal>
      </section>
    </>
  );
}

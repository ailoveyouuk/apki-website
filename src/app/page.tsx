import Link from "next/link";
import CountUp from "@/components/CountUp";
import FeatureDiagram from "@/components/FeatureDiagram";
import PixelField from "@/components/PixelField";
import PixelWorldMap from "@/components/PixelWorldMap";
import PixelIcon, {
  AMBULANCE,
  CAR,
  CROSS_CIRCLE,
  GENERATOR,
  HOUSE,
  PLUG,
  SHIELD,
  SUN,
  TENT,
} from "@/components/PixelIcon";
import PartnerLogos from "@/components/PartnerLogos";
import PixelUnionJack from "@/components/PixelUnionJack";
import Reveal from "@/components/Reveal";
import SnakeTimeline from "@/components/SnakeTimeline";
import {
  certifications,
  medicalTesting,
  partnerLogos,
  sectors,
  universalPower,
} from "@/lib/content";

const sectorIcons: Record<string, string[]> = {
  HOUSE,
  AMBULANCE,
  CROSS_CIRCLE,
  TENT,
};

export default function Home() {
  return (
    <>
      {/* Hero — the medical-device proof point leads, before anything else,
          over a pixel-art world map reinforcing global reach from the UK */}
      <section className="relative overflow-hidden bg-white">
        <PixelWorldMap />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 pb-4 text-center lg:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-apki-green">
            Independently Tested. Medically Proven.
          </p>
          <h1 className="mt-6 font-heading text-6xl font-bold leading-[0.95] text-apki-navy sm:text-7xl lg:text-8xl">
            Power that keeps
            <br />
            life-critical care running.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-snug text-apki-charcoal/90 sm:text-xl">
            The APKI 2200Li is independently tested on the real medical
            equipment it&apos;s built to power —{" "}
            <span className="text-apki-navy">
              dialysis machines, hospital beds, oxygen concentrators
            </span>{" "}
            — then engineered to charge from anywhere and deploy everywhere,
            from a UK base to the rest of the world.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
            <PixelUnionJack className="h-3.5 w-7 shrink-0" />
            Designed &amp; manufactured in Britain
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/case-studies"
              className="rounded-sm bg-apki-green px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy"
            >
              See the Testing Evidence
            </Link>
            <Link
              href="/product"
              className="rounded-sm border-2 border-apki-navy px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-apki-navy transition-colors hover:bg-apki-navy hover:text-white"
            >
              View the PPS
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-16 lg:pb-28">
          <FeatureDiagram />
        </div>
      </section>

      {/* Proof — the show-stopper claim, right up top: real medical equipment,
          real hospital, real credentials. Everything else on the site supports this. */}
      <section className="relative overflow-hidden bg-apki-navy py-20 text-white lg:py-28">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal className="text-center">
            <PixelIcon
              bitmap={CROSS_CIRCLE}
              className="pixel-pulse mx-auto h-10 w-10"
              color="var(--apki-yellow)"
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-apki-yellow">
              Not a simulated load. A real hospital.
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold sm:text-4xl">
              {medicalTesting.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/75">
              {medicalTesting.detail}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-3 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
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
            className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-center"
          >
            {certifications.map((cert) => (
              <div key={cert.standard} className="flex items-center gap-2">
                <PixelIcon bitmap={SHIELD} className="h-5 w-5" color="var(--apki-yellow)" />
                <span className="text-sm font-medium text-white/85">
                  {cert.standard} · Cert. {cert.certNumber}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={350} className="mt-10 text-center">
            <Link
              href="/contact?enquiry=data-sheets"
              className="inline-block rounded-sm border-2 border-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-apki-navy"
            >
              Request Data Sheets
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Charge from anywhere — the second half of the pitch: medical-grade
          reliability paired with input flexibility across any country's grid */}
      <section className="bg-apki-navy py-20 text-white lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {universalPower.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              {universalPower.detail}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Grid / Mains",
                text: "Any voltage, frequency, or connector standard — accepts what the local grid provides.",
                bitmap: PLUG,
                color: "#ffffff",
              },
              {
                title: "Solar PV",
                text: "Fully off-grid charging in remote locations.",
                bitmap: SUN,
                color: "var(--apki-yellow)",
              },
              {
                title: "Vehicle / 12V",
                text: "Charge on the move, no fixed infrastructure.",
                bitmap: CAR,
                color: "#7fd858",
              },
              {
                title: "Generator",
                text: "Standard AC input from a petrol or diesel genset, when that's what's on hand.",
                bitmap: GENERATOR,
                color: "#ffffff",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="flex justify-center">
                  <PixelIcon
                    bitmap={item.bitmap}
                    color={item.color}
                    className="pixel-pulse h-9 w-9"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                </div>
                <div className="mt-4 font-heading text-lg font-semibold text-apki-yellow">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-white/60">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey — snake timeline */}
      <section className="bg-[#f5f6f2] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Three decades in the making
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-apki-charcoal/70">
              From generators and garden machinery to zero-emission power
              built for the field.
            </p>
          </Reveal>
          <div className="mt-16">
            <SnakeTimeline />
          </div>
          <Reveal className="mt-14 text-center">
            <Link
              href="/company"
              className="text-sm font-semibold text-apki-green hover:underline"
            >
              Read the full story ↗
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Sectors — not peer categories to "medical". Every one of these
          sectors runs medical equipment in the field, which is exactly
          where APKI's proven reliability applies. */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              One differentiator, every sector.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-apki-charcoal/70">
              Home care, emergency response, humanitarian aid, and defence all
              rely on the same category of equipment in the field — medical
              devices. That&apos;s exactly what APKI is independently proven
              on.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-black/10 pt-10 text-left sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <PixelIcon
                  bitmap={sectorIcons[item.bitmap]}
                  className="pixel-pulse h-8 w-8"
                  color="#28730A"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
                <h3 className="mt-4 font-heading text-lg font-semibold text-apki-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-apki-charcoal/70">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / stats */}
      <section className="relative overflow-hidden bg-[#f5f6f2] py-20 lg:py-28">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Field-tested. Not a prototype.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              to={8}
              suffix=" types"
              label="Categories of home medical equipment independently tested"
              delay={0}
            />
            <Stat
              to={4}
              suffix=" of 6"
              label="UK DNOs deploy APKI units for vulnerable customers"
              delay={100}
            />
            <Stat
              to={18.9}
              decimals={1}
              suffix="kg"
              label="Single-person portable, no lifting equipment"
              delay={200}
            />
            <Stat
              prefix="≤"
              to={10}
              suffix=" hrs"
              label="Full recharge from empty, any accepted source"
              delay={300}
            />
          </div>

        </div>
      </section>

      {/* Trusted by — the logo wall: energy networks, the NHS testing
          partner, certification bodies, and government support, all in one
          place so the credibility claims above are backed by recognisable
          marks rather than just text. */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
              Certified, Tested, Trusted
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Backed by the organisations that matter.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-12">
            <div>
              <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
                UK Energy Network Partners
              </p>
              <PartnerLogos items={partnerLogos.energyNetworks} />
            </div>
            <div>
              <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
                Clinical Testing Partner
              </p>
              <PartnerLogos items={partnerLogos.clinical} />
            </div>
            <div>
              <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
                Certifications &amp; Compliance
              </p>
              <PartnerLogos items={partnerLogos.certifications} />
            </div>
            <div>
              <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
                Government &amp; Industry Support
              </p>
              <PartnerLogos items={partnerLogos.government} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-apki-green py-24 text-white">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Access to power is a right, not a privilege.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/85">
            Proven on real medical equipment at Queens Medical Centre,
            Nottingham — and ready for utilities, emergency services,
            humanitarian, and defence deployment. Talk to us.
          </p>
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

function Stat({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  delay,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="font-heading text-4xl font-bold text-apki-green">
        <CountUp to={to} decimals={decimals} prefix={prefix} suffix={suffix} delay={150} />
      </div>
      <p className="mt-2 text-sm text-apki-charcoal/70">{label}</p>
    </Reveal>
  );
}

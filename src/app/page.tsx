import Link from "next/link";
import CountUp from "@/components/CountUp";
import FeatureDiagram from "@/components/FeatureDiagram";
import PixelField from "@/components/PixelField";
import PixelIcon, {
  AMBULANCE,
  CAR,
  CROSS_CIRCLE,
  GENERATOR,
  HOUSE,
  PLUG,
  SUN,
  TENT,
} from "@/components/PixelIcon";
import PixelUnionJack from "@/components/PixelUnionJack";
import Reveal from "@/components/Reveal";
import SnakeTimeline from "@/components/SnakeTimeline";
import { dnoList } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero — product front and centre, core functions labelled immediately */}
      <section className="relative overflow-hidden bg-white">
        <PixelField />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 pb-4 text-center lg:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-apki-green">
            Ruggedised Portable Power
          </p>
          <h1 className="mt-6 font-heading text-6xl font-bold leading-[0.95] text-apki-navy sm:text-7xl lg:text-8xl">
            Power that
            <br />
            arrives.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-apki-charcoal/70">
            Zero-emission power stations that charge from anywhere and deploy
            everywhere — home care, disaster response, the field.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
            <PixelUnionJack className="h-3.5 w-7 shrink-0" />
            Designed &amp; manufactured in Britain
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-sm bg-apki-green px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy"
            >
              Request a Deployment
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

      {/* Charge from anywhere */}
      <section className="bg-apki-navy py-20 text-white lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Charge from any power source
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              Grid mains, solar PV, a 12/24V vehicle, or a generator — the unit
              takes what&apos;s available and outputs clean, silent AC.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Grid / Mains",
                text: "Standard AC, wherever mains power is present.",
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

      {/* Deployment scenarios */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Built for the moment power fails
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-apki-charcoal/70">
              The reliability that keeps dialysis machines running in UK homes,
              now proven at the edge of a response operation.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-black/10 pt-10 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Humanitarian Aid",
                text: "Mobile power for NGOs and aid agencies in disaster zones and displacement camps.",
                bitmap: CROSS_CIRCLE,
              },
              {
                title: "Defence & Field Ops",
                text: "Silent, zero-emission power in the field — no fuel logistics, no signature.",
                bitmap: TENT,
              },
              {
                title: "Emergency Services",
                text: "Rapid-deploy backup power for ambulance stations, triage points, and incident response.",
                bitmap: AMBULANCE,
              },
              {
                title: "Home & Medical Care",
                text: "Third-party tested on dialysis machines, hospital beds, and medicine fridges.",
                bitmap: HOUSE,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <PixelIcon
                  bitmap={item.bitmap}
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
              to={4}
              suffix=" of 6"
              label="UK DNOs deploy APKI units for vulnerable customers"
              delay={0}
            />
            <Stat
              to={23}
              suffix="M+"
              label="Customers across DNO territories on standby coverage"
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

          <Reveal
            delay={400}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-black/10 pt-8"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
              Deployed via
            </span>
            {dnoList.map((dno) => (
              <span key={dno} className="text-sm font-medium text-apki-navy">
                {dno}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-apki-green py-24 text-white">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Access to power is a right, not a privilege.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/85">
            Need ruggedised, deployable power for humanitarian, defence, or
            emergency response operations? Talk to us.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-apki-green transition-colors hover:bg-apki-navy hover:text-white"
          >
            Start a Conversation
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

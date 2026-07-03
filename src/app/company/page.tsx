import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LinkedInFeed from "@/components/LinkedInFeed";
import PixelUnionJack from "@/components/PixelUnionJack";
import Reveal from "@/components/Reveal";
import SnakeTimeline from "@/components/SnakeTimeline";

export const metadata: Metadata = {
  title: "Company | APKI",
  description:
    "From AP Kawasaki in 1994 to pioneers in energy equality — APKI's story, vision, and mission as it expands into humanitarian aid and defence deployment.",
};

const leadership = [
  {
    initials: "AG",
    name: "Alan Greig",
    title: "Founder",
    bio: "Alan founded APKI in response to a challenge from the Energy Innovation Centre, on behalf of three UK Distribution Network Operators: build a fully compliant portable power solution, with no compromises. That challenge became the APKI 2200Li, now trusted by four of the UK's six DNOs — and Alan is now driving the company's expansion into humanitarian aid, NGO, and defence deployment worldwide.",
    linkedin: "https://www.linkedin.com/in/apkindustries/",
  },
  {
    initials: "LW",
    name: "Lucy Watts",
    title: "Head of Policy and Partnerships",
    bio: "Lucy leads policy engagement and partnership development as APKI expands beyond UK utilities into humanitarian aid, NGOs, and defence. Her background in bid and tender writing, funding, and policy communications for mission-led organisations underpins the partnerships APKI is building with NGOs, charities, and aid agencies worldwide.",
    linkedin: "https://www.linkedin.com/in/lucy-watts/",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
            Our Story
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
            Pioneers in Energy Equality
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-apki-charcoal/75">
            APK Industries began in generators and garden machinery. Three decades
            later, it&apos;s a UKAS-accredited manufacturer of zero-emission portable
            power, trusted by four of the UK&apos;s six energy networks — and now
            building toward humanitarian aid and defence deployment worldwide.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
            <PixelUnionJack className="h-3.5 w-7 shrink-0" />
            Proudly British — designed and manufactured in Lincoln, UK
          </div>
          <a
            href="https://www.linkedin.com/company/apk-industries-ltd"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-semibold text-apki-green hover:underline"
          >
            Follow APK Industries on LinkedIn ↗
          </a>
        </div>
      </section>

      {/* Our Journey — snake timeline, featured high up */}
      <section className="bg-[#f5f6f2] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 max-w-lg text-apki-charcoal/70">
              Three decades, thirteen milestones — from generators and garden
              machinery to zero-emission power built for the field.
            </p>
          </Reveal>
          <div className="mt-16">
            <SnakeTimeline />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-apki-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:px-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-apki-yellow">
              Vision Statement
            </h2>
            <p className="mt-4 text-white/80">
              Our vision is to become the global leader in pioneering sustainable
              innovation in the portable power sector. We know through feedback from
              DNOs how vital our equipment is in safeguarding those in need. As our
              company grows, we aim to move and expand towards humanitarian aid work,
              so that we can help more people.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-apki-yellow">
              Mission Statement
            </h2>
            <p className="mt-4 text-white/80">
              Our mission is simple. We believe that access to energy is a fundamental
              right, not a privilege. With this in mind, we strive to be a catalyst for
              positive change in the energy sector. Through cross-industry
              collaboration, extensive testing, and innovative product design, we
              create state-of-the-art technology to facilitate reliable, clean energy
              outputs in even the most demanding conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#f5f6f2] py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Leadership
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 120}>
                <div className="pixel-frame h-full bg-white p-8">
                  <div className="flex h-16 w-16 items-center justify-center bg-apki-navy font-heading text-lg font-bold text-white">
                    {person.initials}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-apki-navy">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-apki-green">
                    {person.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-apki-charcoal/70">
                    {person.bio}
                  </p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block rounded-sm border-2 border-apki-navy px-5 py-2 text-xs font-semibold uppercase tracking-wide text-apki-navy transition-colors hover:bg-apki-navy hover:text-white"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supported by */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:text-left">
            <div className="pixel-frame bg-[#f5f6f2] p-5">
              <Image
                src="/images/dbt-great-logo.png"
                alt="Department for Business and Trade — GREAT Britain & Northern Ireland"
                width={900}
                height={235}
                className="h-10 w-auto sm:h-12"
              />
            </div>
            <p className="max-w-md text-sm text-apki-charcoal/70">
              APKI is proud to be supported by the{" "}
              <span className="font-semibold text-apki-navy">
                Department for Business and Trade
              </span>{" "}
              and the <span className="font-semibold text-apki-navy">GREAT</span> campaign,
              backing British innovation as it goes global.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Latest from LinkedIn */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Latest from LinkedIn
            </h2>
            <p className="mt-4 max-w-lg text-apki-charcoal/70">
              Updates from Alan, Lucy, and the APKI company page.
            </p>
          </Reveal>
          <div className="mt-4">
            <LinkedInFeed />
          </div>
        </div>
      </section>

      {/* Expansion narrative */}
      <section className="bg-[#f5f6f2] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-heading text-3xl font-bold text-apki-navy">
            The Next Chapter: Humanitarian Aid &amp; Defence
          </h2>
          <p className="mt-4 text-apki-charcoal/75">
            APKI does not yet operate in humanitarian aid or defence — but it is the
            focus of where the company is heading next. Every capability that makes
            the APKI 2200Li trustworthy inside a UK home during a life-critical medical
            moment is exactly what NGOs, aid agencies, ministries, defence forces, and
            emergency services need in the field: ruggedised construction, silent
            zero-emission operation, charging from any available power source, and
            remote monitoring that works without connectivity dependent on local
            infrastructure.
          </p>
          <p className="mt-4 text-apki-charcoal/75">
            We&apos;re actively building partnerships with NGOs, charities, aid
            agencies, intergovernmental organisations, emergency services, and
            government and defence bodies who need mobile power that can save the
            day in a pinch — wherever that day happens.
          </p>
        </div>
      </section>

      <section className="bg-apki-green py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-10">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Building toward the field, together.
          </h2>
          <Link
            href="/contact"
            className="rounded-sm bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-apki-green transition-colors hover:bg-apki-navy hover:text-white"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  );
}

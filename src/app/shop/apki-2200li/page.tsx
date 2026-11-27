import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BuyBox from "@/components/BuyBox";
import PixelUnionJack from "@/components/PixelUnionJack";
import Reveal from "@/components/Reveal";
import TrackEvent from "@/components/TrackEvent";
import { specs } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import { PRODUCT, PRODUCT_URL, shopEnabled } from "@/lib/shop";

export function generateMetadata(): Metadata {
  return {
    title: `${PRODUCT.name} — 2,220Wh Home Emergency Power Backup`,
    description: PRODUCT.description,
    alternates: { canonical: PRODUCT_URL },
    // Keep the page out of Google until the shop is genuinely live.
    robots: shopEnabled() ? { index: true, follow: true } : { index: false, follow: true },
  };
}

const highlights = [
  {
    title: "2,220Wh of backup power",
    text: "2,000W rated output with 230V 50Hz pure sine wave AC. Runs household essentials, tools and electronics through a power cut — no fuel, fumes or engine noise.",
  },
  {
    title: "UK sockets, USB-C and 12V",
    text: "Two UK 3-pin sockets plus USB and USB-C outputs, so everyday kit plugs straight in.",
  },
  {
    title: "Recharge three ways",
    text: "Mains, 12/24V vehicle or solar panels (panels not supplied). Full recharge in up to 10 hours.",
  },
  {
    title: "Trusted by network operators",
    text: "Supplied since 2021 to four UK electricity distribution network operators for customers' homes during outages, and third-party tested on home medical equipment at Queens Medical Centre, Nottingham.",
  },
  {
    title: "Single-person portable",
    text: "18.9kg and compact enough to carry between rooms or load into a vehicle.",
  },
  {
    title: "Made in the UK, 2-year warranty",
    text: "Designed and manufactured in Britain by an ISO 9001 and ISO 14001 certified manufacturer.",
  },
];

const shopSpecLabels = [
  "Model",
  "Rated Power / Continuous Power",
  "Capacity",
  "Battery Type",
  "AC Charge Input",
  "Vehicle (12/24V) Charge Input",
  "Solar (PV) Charge Input",
  "Recharge Time (0–100%)",
  "AC Output",
  "USB Output",
  "USB 3.0",
  "Type-C Output",
  "Weight / Dimensions",
  "Warranty",
];

export default function ProductShopPage() {
  const live = shopEnabled();

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT.name,
    description: PRODUCT.description,
    image: PRODUCT.images.map((src) => `${SITE_URL}${src}`),
    sku: PRODUCT.mpn,
    mpn: PRODUCT.mpn,
    ...(PRODUCT.gtin ? { gtin: PRODUCT.gtin } : {}),
    brand: { "@type": "Brand", name: PRODUCT.brand },
    manufacturer: { "@type": "Organization", name: "APK Industries Ltd" },
    countryOfOrigin: { "@type": "Country", name: "United Kingdom" },
    url: PRODUCT_URL,
    // Only advertise an Offer when the shop can actually sell it, otherwise
    // Google could show a price we cannot honour.
    ...(live
      ? {
          offers: {
            "@type": "Offer",
            url: PRODUCT_URL,
            priceCurrency: "GBP",
            price: PRODUCT.priceGbp.toFixed(2),
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "APK Industries Ltd" },
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <TrackEvent
        name="view_item"
        params={{
          currency: "GBP",
          ...(live ? { value: PRODUCT.priceGbp } : {}),
          items: [
            {
              item_id: PRODUCT.mpn,
              item_name: PRODUCT.name,
              item_brand: PRODUCT.brand,
              ...(live ? { price: PRODUCT.priceGbp } : {}),
            },
          ],
        }}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="pixel-frame overflow-hidden bg-[#f5f6f2]">
              <Image
                src={PRODUCT.images[0]}
                alt="APKI 2200Li Portable Power Station, three-quarter view"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {PRODUCT.images.slice(1).map((src, i) => (
                <div key={src} className="pixel-frame overflow-hidden bg-[#f5f6f2]">
                  <Image
                    src={src}
                    alt={`APKI 2200Li Portable Power Station, view ${i + 2}`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-apki-green">
              Home Emergency Power Backup
            </p>
            <h1 className="mt-5 font-heading text-5xl font-bold leading-[0.95] text-apki-navy sm:text-6xl">
              APKI 2200Li
              <br />
              Power Station.
            </h1>
            <p className="mt-6 max-w-lg text-apki-charcoal/70">
              The same power station supplied to UK electricity network
              operators to keep vulnerable households connected during
              outages — now available for your home, workplace or remote
              location.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50">
              <PixelUnionJack className="h-3.5 w-7 shrink-0" />
              Designed &amp; manufactured in the UK
            </div>

            <BuyBox />

            <p className="mt-6 text-xs text-apki-charcoal/50">
              Solar panels not supplied. Buying for an organisation or
              deployment?{" "}
              <Link href="/product" className="underline">
                See our professional range and services
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f6f2] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Always ready when the power fails
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 100}>
                <h3 className="font-heading text-lg font-semibold text-apki-navy">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-apki-charcoal/70">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-apki-navy sm:text-4xl">
              Technical specification
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
            {specs
              .filter((row) => shopSpecLabels.includes(row.label))
              .map((row) => (
                <div key={row.label} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-6">
                  <div className="w-full shrink-0 text-xs font-semibold uppercase tracking-wide text-apki-charcoal/50 sm:w-60">
                    {row.label}
                  </div>
                  <div className="text-sm text-apki-navy">{row.value}</div>
                </div>
              ))}
          </div>
          <p className="mt-6 text-xs text-apki-charcoal/50">
            Certifications and test evidence are on our{" "}
            <Link href="/quality-compliance" className="underline">
              Quality &amp; Compliance
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}

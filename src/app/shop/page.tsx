import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PRODUCT, PRODUCT_PATH, shopEnabled } from "@/lib/shop";

export function generateMetadata(): Metadata {
  return {
    title: "Shop — APKI Portable Power Stations",
    description:
      "Buy the UK-made APKI 2200Li portable power station direct from the manufacturer.",
    alternates: { canonical: "/shop" },
    robots: shopEnabled() ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default function ShopPage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
            Shop
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
            Buy direct from the manufacturer.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <Link
            href={PRODUCT_PATH}
            className="mt-12 grid items-center gap-8 border border-black/10 p-6 transition-colors hover:border-apki-green md:grid-cols-2"
          >
            <div className="pixel-frame overflow-hidden bg-[#f5f6f2]">
              <Image
                src={PRODUCT.images[0]}
                alt={PRODUCT.name}
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-apki-navy">
                {PRODUCT.name}
              </h2>
              <p className="mt-3 text-sm text-apki-charcoal/70">{PRODUCT.description}</p>
              <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-apki-green">
                View product ↗
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import BuyForm from "@/components/BuyForm";
import { PRODUCT, shopEnabled } from "@/lib/shop";

export default function BuyBox() {
  const live = shopEnabled();
  const price = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(PRODUCT.priceGbp);

  if (!live) {
    return (
      <div className="mt-8 border-t border-black/10 pt-8">
        <p className="text-sm text-apki-charcoal/70">
          Online ordering is opening soon. Register your interest and we&apos;ll
          get back to you with availability and delivery details.
        </p>
        <Link
          href="/contact?enquiry=shop"
          className="mt-5 inline-block rounded-sm bg-apki-green px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy"
        >
          Register your interest
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 border-t border-black/10 pt-8">
      <div className="flex items-baseline gap-3">
        <span className="font-heading text-5xl font-bold text-apki-navy">{price}</span>
        <span className="text-sm text-apki-charcoal/60">
          {PRODUCT.priceIncludesVat ? "incl. VAT" : "excl. VAT"}
        </span>
      </div>
      <BuyForm itemId={PRODUCT.mpn} itemName={PRODUCT.name} price={PRODUCT.priceGbp} />
      <p className="mt-4 text-xs text-apki-charcoal/60">
        Delivery is calculated at secure Shopify checkout. 14-day returns,
        with collection paid by APKI. See{" "}
        <Link href="/delivery-returns" className="underline">
          delivery &amp; returns
        </Link>
        .
      </p>
    </div>
  );
}

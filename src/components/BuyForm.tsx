"use client";

import { buyNow } from "@/app/shop/actions";
import { trackEvent } from "@/lib/analytics";

export default function BuyForm({
  itemId,
  itemName,
  price,
}: {
  itemId: string;
  itemName: string;
  price: number;
}) {
  return (
    <form
      action={buyNow}
      className="mt-6 flex flex-wrap items-center gap-4"
      onSubmit={(e) => {
        const qty = Number(new FormData(e.currentTarget).get("quantity") ?? 1) || 1;
        trackEvent("begin_checkout", {
          currency: "GBP",
          value: price * qty,
          items: [{ item_id: itemId, item_name: itemName, price, quantity: qty }],
        });
      }}
    >
      <label className="text-xs font-semibold uppercase tracking-wide text-apki-charcoal/60">
        Quantity
        <select
          name="quantity"
          defaultValue="1"
          className="ml-3 rounded-sm border border-black/20 bg-white px-3 py-2 text-sm"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="rounded-sm bg-apki-green px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-apki-navy"
      >
        Buy now
      </button>
    </form>
  );
}

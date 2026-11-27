"use server";

import { redirect } from "next/navigation";
import { createCheckout } from "@/lib/shop";

export async function buyNow(formData: FormData) {
  const raw = parseInt(String(formData.get("quantity") ?? "1"), 10);
  const quantity = Math.min(Math.max(Number.isNaN(raw) ? 1 : raw, 1), 5);

  const checkoutUrl = await createCheckout(quantity);
  // If Shopify is unreachable or misconfigured, never strand the visitor:
  // send them to the enquiry form instead.
  redirect(checkoutUrl ?? "/contact?enquiry=shop");
}

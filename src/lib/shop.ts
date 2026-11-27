// Shop configuration + Shopify Storefront API client.
//
// The shop is OFF until these environment variables are set (Netlify > Site
// settings > Environment variables, or .env.local for local work):
//
//   SHOPIFY_STORE_DOMAIN       e.g. apki-shop.myshopify.com
//   SHOPIFY_STOREFRONT_TOKEN   Storefront API access token (Headless channel)
//   SHOPIFY_VARIANT_ID         e.g. gid://shopify/ProductVariant/1234567890
//   NEXT_PUBLIC_SHOP_ENABLED   "true" to show the Shop link in the header/footer
//
// Optional:
//   SHOPIFY_API_VERSION        defaults to the value below
//   SHOP_GTIN                  GS1 barcode; emitted in Product structured data
//   SHOP_MPN                   manufacturer part number (see note below)
//
// While the shop is off, shop pages render in "enquiry" mode, are marked
// noindex, show no price and are left out of the sitemap, so nothing half-built
// can reach Google.

import { SITE_URL } from "@/lib/site";

export const SHOPIFY_API_VERSION = process.env.SHOPIFY_API_VERSION ?? "2026-10";

export const PRODUCT = {
  slug: "apki-2200li",
  name: "APKI 2200Li Portable Power Station",
  brand: "APKI",
  // Model naming is inconsistent across APKI documents (2200Li on the site,
  // APKI2220Li on the spec sheet, APKI2200 on the battery passport page).
  // Confirm the canonical part number with Alan, then set SHOP_MPN.
  mpn: process.env.SHOP_MPN ?? "APKI2200Li",
  gtin: process.env.SHOP_GTIN,
  // TODO(Lewis): confirm whether £2,250 is the VAT-inclusive consumer price.
  // UK consumer prices must include VAT.
  priceGbp: 2250,
  priceIncludesVat: true,
  images: [
    "/images/pps-angle-1.jpg",
    "/images/pps-front.jpg",
    "/images/pps-angle-2.jpg",
    "/images/pps-back.jpg",
  ],
  description:
    "Designed and manufactured in the UK. 2,220Wh lithium battery, 2,000W rated pure sine wave output, UK sockets, USB-C and 12V. Recharges from mains, vehicle or solar. 18.9kg, with a 2-year manufacturer's warranty.",
} as const;

export const PRODUCT_PATH = `/shop/${PRODUCT.slug}`;
export const PRODUCT_URL = `${SITE_URL}${PRODUCT_PATH}`;

export function shopEnabled(): boolean {
  return Boolean(
    process.env.SHOPIFY_STORE_DOMAIN &&
      process.env.SHOPIFY_STOREFRONT_TOKEN &&
      process.env.SHOPIFY_VARIANT_ID,
  );
}

/**
 * Creates a Shopify cart for the product and returns the hosted checkout URL,
 * or null if anything goes wrong (callers fall back to the enquiry form).
 */
export async function createCheckout(quantity: number): Promise<string | null> {
  if (!shopEnabled()) return null;

  const domain = process.env.SHOPIFY_STORE_DOMAIN!;
  const token = process.env.SHOPIFY_STOREFRONT_TOKEN!;
  const variantId = process.env.SHOPIFY_VARIANT_ID!;

  const query = /* GraphQL */ `
    mutation CartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  try {
    const res = await fetch(
      `https://${domain}/api/${SHOPIFY_API_VERSION}/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": token,
        },
        body: JSON.stringify({
          query,
          variables: {
            input: {
              lines: [{ merchandiseId: variantId, quantity }],
              buyerIdentity: { countryCode: "GB" },
            },
          },
        }),
        cache: "no-store",
      },
    );
    if (!res.ok) return null;
    const json = await res.json();
    const result = json?.data?.cartCreate;
    if (!result || result.userErrors?.length) return null;
    return result.cart?.checkoutUrl ?? null;
  } catch {
    return null;
  }
}

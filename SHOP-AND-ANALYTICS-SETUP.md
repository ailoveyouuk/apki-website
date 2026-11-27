# Shop + analytics setup

Everything here is OFF until the environment variables below are set
(Netlify > Site configuration > Environment variables). Pages are statically
built, so **redeploy after changing any of them**.

| Variable | Purpose |
|---|---|
| `SHOPIFY_STORE_DOMAIN` | e.g. `apki-shop.myshopify.com` |
| `SHOPIFY_STOREFRONT_TOKEN` | Storefront API token (Headless channel in Shopify admin) |
| `SHOPIFY_VARIANT_ID` | `gid://shopify/ProductVariant/...` for the APKI 2200Li |
| `NEXT_PUBLIC_SHOP_ENABLED` | `true` shows Shop in header/footer |
| `SHOPIFY_API_VERSION` | optional, defaults in `src/lib/shop.ts` |
| `SHOP_MPN` / `SHOP_GTIN` | part number / barcode, emitted in Product JSON-LD |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 `G-XXXXXXXXXX`. Turns on the consent banner + analytics |
| `NEXT_PUBLIC_GSC_VERIFICATION` | token from Search Console "HTML tag" method (token only) |
| `NEXT_PUBLIC_SHOP_CHECKOUT_DOMAIN` | optional, Shopify checkout domain for GA cross-domain linking |

## What the site sends to GA4 (only after consent)
`page_view` (every route), `view_item` (product page), `begin_checkout`
(Buy now), `generate_lead` (contact form). `purchase` happens inside Shopify
checkout, so it must come from Shopify's Google & YouTube app / GA4 connection.

## Setup checklist (outside the code)
1. GA4: create property + web stream; copy the Measurement ID. In Admin, turn on
   Google signals (needed for demographics), and review data retention.
2. Search Console: add the domain, verify, submit `/sitemap.xml`; link GA4 to it.
3. Shopify: create store, product, GB shipping profile, returns policy; add the
   Headless channel for the Storefront token; install Google & YouTube app.
4. Merchant Center: claim the site (Search Console verification), set shipping
   and return policies to match the website (14-day returns, free return
   collection), and connect the Shopify feed.
5. Test a real order end to end, then check GA4 DebugView and Merchant Center
   diagnostics before turning `NEXT_PUBLIC_SHOP_ENABLED` on.
6. Old-site cutover: map old apkindustries.com URLs to new ones with 301s,
   keeping `/battery-passport`.

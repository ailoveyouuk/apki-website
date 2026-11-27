// Analytics configuration + helpers.
//
// Analytics is OFF until NEXT_PUBLIC_GA_MEASUREMENT_ID is set (Netlify > Site
// settings > Environment variables). When it is on, nothing loads and no
// cookies are set until the visitor opts in through the consent banner
// (UK PECR). "Advertising" consent is separate, and is what unlocks Google
// Signals features such as demographics and remarketing audiences.

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const ANALYTICS_ENABLED = GA_ID.length > 0;

export const CONSENT_KEY = "apki-consent-v1";
export const OPEN_SETTINGS_EVENT = "apki-open-cookie-settings";

export type Consent = { analytics: boolean; ads: boolean };

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { analytics: Boolean(parsed.analytics), ads: Boolean(parsed.ads) };
  } catch {
    return null;
  }
}

export function writeConsent(consent: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    /* storage unavailable: the choice simply won't persist */
  }
}

const CHECKOUT_DOMAIN = process.env.NEXT_PUBLIC_SHOP_CHECKOUT_DOMAIN;

function consentState(consent: Consent) {
  return {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.ads ? "granted" : "denied",
    ad_user_data: consent.ads ? "granted" : "denied",
    ad_personalization: consent.ads ? "granted" : "denied",
  };
}

let initialised = false;

/**
 * Loads Google's tag exactly once, and only ever called after the visitor has
 * opted in. Consent Mode v2 defaults are set to "denied" first, then updated
 * to the visitor's actual choice before anything is measured.
 */
export function initGtag(consent: Consent) {
  if (typeof window === "undefined" || !ANALYTICS_ENABLED || initialised) return;
  initialised = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js requires the `arguments` object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", consentState(consent));

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    send_page_view: false, // page_view is sent manually on every route change
    ...(CHECKOUT_DOMAIN ? { linker: { domains: [CHECKOUT_DOMAIN] } } : {}),
  });
}

/** Tells Google about a changed choice (e.g. from the footer link). */
export function updateConsent(consent: Consent) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", consentState(consent));
}

/**
 * Sends a GA4 event. Does nothing unless the visitor has consented to
 * analytics. Safe to call before the tag has loaded: it initialises it from
 * the saved choice if needed.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !ANALYTICS_ENABLED) return;
  const consent = readConsent();
  if (!consent?.analytics) return;
  initGtag(consent);
  window.gtag("event", name, params);
}

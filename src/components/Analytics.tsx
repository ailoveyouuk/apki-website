"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  ANALYTICS_ENABLED,
  OPEN_SETTINGS_EVENT,
  initGtag,
  readConsent,
  trackEvent,
  updateConsent,
  writeConsent,
  type Consent,
} from "@/lib/analytics";

export default function Analytics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [draft, setDraft] = useState<Consent>({ analytics: false, ads: false });

  const apply = useCallback((next: Consent) => {
    setConsent(next);
    if (next.analytics || next.ads) initGtag(next);
    updateConsent(next);
  }, []);

  // Restore a saved choice, or ask.
  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;
    const saved = readConsent();
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      apply(saved);
    } else {
      setBannerOpen(true);
    }
    const reopen = () => {
      const current = readConsent();
      setDraft(current ?? { analytics: false, ads: false });
      setCustomising(true);
      setBannerOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, [apply]);

  // One page_view per route change, only once analytics consent exists.
  const analyticsOn = Boolean(consent?.analytics);
  useEffect(() => {
    if (!analyticsOn) return;
    trackEvent("page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, analyticsOn]);

  if (!ANALYTICS_ENABLED || !bannerOpen) return null;

  const choose = (next: Consent) => {
    writeConsent(next);
    apply(next);
    setBannerOpen(false);
    setCustomising(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-black/10 bg-white p-5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-apki-charcoal">
          We&apos;d like to use cookies to understand how the site is used and
          to improve it. Nothing is set unless you agree. See our{" "}
          <a href="/cookies" className="underline">
            Cookie Policy
          </a>
          .
        </p>

        {customising && (
          <div className="mt-4 space-y-3 text-sm text-apki-charcoal">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <strong>Strictly necessary</strong> — always on; needed for the
                site to work.
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={draft.analytics}
                onChange={(e) => setDraft({ ...draft, analytics: e.target.checked })}
                className="mt-1"
              />
              <span>
                <strong>Analytics</strong> — page views and how visitors use the
                site, in aggregate (Google Analytics).
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={draft.ads}
                onChange={(e) => setDraft({ ...draft, ads: e.target.checked })}
                className="mt-1"
              />
              <span>
                <strong>Advertising &amp; personalisation</strong> — lets Google
                provide audience and demographic insights and show relevant ads.
              </span>
            </label>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => choose({ analytics: true, ads: true })}
            className="rounded-sm bg-apki-green px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-apki-navy"
          >
            Accept all
          </button>
          <button
            onClick={() => choose({ analytics: false, ads: false })}
            className="rounded-sm bg-apki-green px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-apki-navy"
          >
            Reject all
          </button>
          {customising ? (
            <button
              onClick={() => choose(draft)}
              className="rounded-sm border border-apki-navy px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-apki-navy hover:bg-apki-navy hover:text-white"
            >
              Save choices
            </button>
          ) : (
            <button
              onClick={() => setCustomising(true)}
              className="rounded-sm border border-apki-navy px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-apki-navy hover:bg-apki-navy hover:text-white"
            >
              Customise
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

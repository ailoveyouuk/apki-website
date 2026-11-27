"use client";

import { ANALYTICS_ENABLED, OPEN_SETTINGS_EVENT } from "@/lib/analytics";

export default function CookieSettingsLink({ className }: { className?: string }) {
  if (!ANALYTICS_ENABLED) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      Cookie settings
    </button>
  );
}

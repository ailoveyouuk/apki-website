"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Fires a GA4 event once when the page mounts (e.g. view_item). */
export default function TrackEvent({
  name,
  params,
}: {
  name: string;
  params?: Record<string, unknown>;
}) {
  useEffect(() => {
    // trackEvent does nothing without analytics consent.
    trackEvent(name, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

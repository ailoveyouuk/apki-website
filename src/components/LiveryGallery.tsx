"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PixelIcon, { AMBULANCE, CROSS_CIRCLE, FLAME, SHIELD, TENT } from "@/components/PixelIcon";

type Livery = {
  src: string;
  alt: string;
  sector: string;
  caption: string;
  bitmap: string[];
};

// Standard off-the-shelf liveries — cycled here purely to demonstrate range.
// A client's own colours, markings, and branding can be applied the same way.
const LIVERIES: Livery[] = [
  {
    src: "/images/liveries/aid-1.jpg",
    alt: "APKI 2200Li in a white humanitarian aid livery with red cross markings",
    sector: "Humanitarian Aid",
    caption: "Red cross markings for NGO and field medical deployment.",
    bitmap: CROSS_CIRCLE,
  },
  {
    src: "/images/liveries/aid-2.jpg",
    alt: "APKI 2200Li in a custom white and yellow 'AID' branded livery",
    sector: "Humanitarian Aid — custom branding",
    caption: "Your organisation's own name and colours, applied the same way.",
    bitmap: CROSS_CIRCLE,
  },
  {
    src: "/images/liveries/defence.jpg",
    alt: "APKI 2200Li in a woodland camouflage defence livery",
    sector: "Defence & Field Ops",
    caption: "Woodland camouflage for concealed field deployment.",
    bitmap: TENT,
  },
  {
    src: "/images/liveries/ambulance.jpg",
    alt: "APKI 2200Li in a green and yellow battenburg ambulance livery",
    sector: "Emergency Services — Ambulance",
    caption: "Battenburg-style markings used by ambulance services worldwide.",
    bitmap: AMBULANCE,
  },
  {
    src: "/images/liveries/fire.jpg",
    alt: "APKI 2200Li in a red and yellow battenburg fire and rescue livery",
    sector: "Emergency Services — Fire & Rescue",
    caption: "Battenburg-style markings used by fire and rescue services worldwide.",
    bitmap: FLAME,
  },
  {
    src: "/images/liveries/police.jpg",
    alt: "APKI 2200Li in a blue and yellow battenburg police livery",
    sector: "Emergency Services — Police",
    caption: "Battenburg-style markings used by police services worldwide.",
    bitmap: SHIELD,
  },
];

const SHOWN_MS = 2600;
const RETRACT_MS = 700;

export default function LiveryGallery() {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let hideTimer: number;
    let advanceTimer: number;
    let current = 0;

    function scheduleHide() {
      hideTimer = window.setTimeout(() => {
        if (cancelled) return;
        setShown(false);
        advanceTimer = window.setTimeout(() => {
          if (cancelled) return;
          current = (current + 1) % LIVERIES.length;
          setIndex(current);
          setShown(true);
          scheduleHide();
        }, RETRACT_MS);
      }, SHOWN_MS);
    }

    scheduleHide();

    return () => {
      cancelled = true;
      window.clearTimeout(hideTimer);
      window.clearTimeout(advanceTimer);
    };
  }, []);

  const current = LIVERIES[index];

  return (
    <div className="mx-auto grid max-w-4xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-6">
      <div className="pixel-frame relative aspect-square w-full max-w-sm justify-self-center overflow-hidden bg-white lg:justify-self-end">
        {LIVERIES.map((l, i) => (
          <div
            key={l.src}
            className="absolute inset-0 transition-opacity duration-500 ease-linear"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <Image
              src={l.src}
              alt={l.alt}
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div
          className="hidden h-0 w-8 shrink-0 border-t-2 border-dashed border-apki-green/50 transition-transform duration-500 lg:block"
          style={{
            transform: shown ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
          }}
        />

        <div
          className="text-center transition-all duration-500 lg:text-left"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(10px)",
            transitionDelay: shown ? "150ms" : "0ms",
          }}
        >
          <PixelIcon
            bitmap={current.bitmap}
            className="pixel-pulse mx-auto h-8 w-8 lg:mx-0"
            color="#28730A"
          />
          <div className="mt-3 font-heading text-lg font-semibold text-apki-navy">
            {current.sector}
          </div>
          <p className="mt-1 max-w-xs text-sm text-apki-charcoal/60">{current.caption}</p>
        </div>
      </div>
    </div>
  );
}

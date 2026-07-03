"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PixelIcon, {
  BATTERY,
  BOLT,
  CLOCK,
  IMPACT,
  SHIELD,
  WAVE,
  WEIGHT,
  WIFI,
} from "./PixelIcon";

type Feature = {
  label: string;
  sub: string;
  bitmap: string[];
  side: "left" | "right";
};

type Frame = {
  src: string;
  alt: string;
  features: Feature[];
};

// The unit "rotates" through its photographed angles; each angle surfaces the
// pair of capabilities most associated with that view of the housing.
const FRAMES: Frame[] = [
  {
    src: "/images/pps-front.jpg",
    alt: "APKI 2200Li Portable Power Station, front view",
    features: [
      { label: "Any power source", sub: "Grid, solar, vehicle, or generator.", bitmap: BOLT, side: "left" },
      { label: "Pure sine wave AC", sub: "Safe for dialysis, CPAP, hospital beds.", bitmap: WAVE, side: "right" },
    ],
  },
  {
    src: "/images/pps-angle-1.jpg",
    alt: "APKI 2200Li Portable Power Station, three-quarter angle",
    features: [
      { label: "Remote monitoring", sub: "Built-in Wi-Fi, app and portal control.", bitmap: WIFI, side: "left" },
      { label: "G-force detection", sub: "Impact-aware, tamper alerts.", bitmap: IMPACT, side: "right" },
    ],
  },
  {
    src: "/images/pps-angle-2.jpg",
    alt: "APKI 2200Li Portable Power Station, reverse angle",
    features: [
      { label: "18.9kg, one person", sub: "No lifting gear, no team required.", bitmap: WEIGHT, side: "left" },
      { label: "ISO 9001 / 14001", sub: "UKAS-certified, ruggedised build.", bitmap: SHIELD, side: "right" },
    ],
  },
  {
    src: "/images/pps-back.jpg",
    alt: "APKI 2200Li Portable Power Station, rear view",
    features: [
      { label: "2220Wh capacity", sub: "600,000mAh in a single unit.", bitmap: BATTERY, side: "left" },
      { label: "≤10hr recharge", sub: "Full recharge from empty.", bitmap: CLOCK, side: "right" },
    ],
  },
];

const SHOWN_MS = 2600;
const RETRACT_MS = 700;

export default function FeatureDiagram() {
  const [index, setIndex] = useState(0);
  // Labels start already "shown" so the first frame's callouts are visible as
  // soon as the hero mounts — the effect below only schedules retract/advance.
  const [shown, setShown] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

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
          current = (current + 1) % FRAMES.length;
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
  }, [reducedMotion]);

  const frame = FRAMES[index];
  const left = frame.features.filter((f) => f.side === "left");
  const right = frame.features.filter((f) => f.side === "right");

  return (
    <div className="grid items-center gap-12 xl:grid-cols-[320px_1fr_320px] xl:gap-8">
      <div className="hidden flex-col justify-center gap-14 xl:flex">
        {left.map((feature, i) => (
          <FeatureRow
            key={feature.label}
            feature={feature}
            side="left"
            visible={shown}
            delay={i * 160}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-md">
        <div className="pixel-frame relative aspect-square overflow-hidden bg-[#f5f6f2]">
          {/* All four angles are mounted from the start (so nothing has to
              load/decode mid-cycle) and simply cross-dissolve via opacity —
              a plain simultaneous 0.5s fade out / 0.5s fade in, no motion. */}
          {FRAMES.map((f, i) => (
            <div
              key={f.src}
              className="absolute inset-0 transition-opacity duration-500 ease-linear"
              style={{ opacity: i === index ? 1 : 0 }}
            >
              <Image
                src={f.src}
                alt={f.alt}
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden flex-col justify-center gap-10 xl:flex">
        {right.map((feature, i) => (
          <FeatureRow
            key={feature.label}
            feature={feature}
            side="right"
            visible={shown}
            delay={i * 160 + 80}
          />
        ))}
      </div>

      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:hidden">
        {frame.features.map((feature, i) => (
          <FeatureRow
            key={feature.label}
            feature={feature}
            side="mobile"
            visible={shown}
            delay={i * 100}
          />
        ))}
      </div>
    </div>
  );
}

function getPrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(getPrefersReducedMotion);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return reduced;
}

function FeatureRow({
  feature,
  side,
  visible,
  delay,
}: {
  feature: Feature;
  side: "left" | "right" | "mobile";
  visible: boolean;
  delay: number;
}) {
  const icon = (
    <div
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center transition-all duration-500"
      style={{
        backgroundColor: "rgba(1, 35, 63, 0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.5)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <PixelIcon bitmap={feature.bitmap} className="h-5 w-5" color="#28730A" />
    </div>
  );

  const text = (
    <div
      className="transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0, 0)"
          : side === "left"
            ? "translateX(-10px)"
            : side === "right"
              ? "translateX(10px)"
              : "translateY(10px)",
        transitionDelay: `${delay + 100}ms`,
      }}
    >
      <div className="text-sm font-semibold uppercase tracking-wide text-apki-navy">
        {feature.label}
      </div>
      <p className="mt-1 max-w-[200px] text-xs leading-snug text-apki-charcoal/60">
        {feature.sub}
      </p>
    </div>
  );

  const line = side !== "mobile" && (
    <div
      className="pixel-line hidden w-10 border-apki-green/60 xl:block"
      style={{
        transform: visible ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: side === "left" ? "right" : "left",
        transition: `transform 500ms ease-out ${delay + 220}ms`,
      }}
    />
  );

  if (side === "left") {
    return (
      <div className="flex items-center justify-end gap-3 text-right">
        <div className="flex items-center gap-3">
          {text}
          {icon}
        </div>
        {line}
      </div>
    );
  }

  if (side === "right") {
    return (
      <div className="flex items-center gap-3">
        {line}
        <div className="flex items-center gap-3">
          {icon}
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      {icon}
      {text}
    </div>
  );
}

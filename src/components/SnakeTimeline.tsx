"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import PixelIcon, { BOLT } from "@/components/PixelIcon";
import { timeline } from "@/lib/content";

const STEP_MS = 90;

// Boustrophedon ("snake") layout across a 9-column grid — 5 node columns
// (1, 3, 5, 7, 9) interleaved with 4 connector columns (2, 4, 6, 8), and 5
// grid rows: node row, vertical connector, node row, vertical connector,
// node row. Row 1 reads left-to-right, row 2 right-to-left, row 3
// left-to-right again — reading (and reveal) order stays chronological
// throughout, so the whole thing animates in as one continuous path.
const ROW1 = [0, 1, 2, 3, 4]; // 1st–5th, L→R
const ROW2 = [5, 6, 7, 8, 9]; // 6th–10th, R→L
const ROW3 = [10, 11, 12]; // 11th–13th, L→R

export default function SnakeTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const elements: ReactNode[] = [];
  let step = 0;
  const delay = () => step++ * STEP_MS;

  // Row 1 — grid row 1, columns 1/3/5/7/9, left to right.
  ROW1.forEach((idx, i) => {
    const col = i * 2 + 1;
    elements.push(
      <Node key={`n${idx}`} idx={idx} col={col} row={1} visible={visible} delay={delay()} />
    );
    if (i < ROW1.length - 1) {
      elements.push(
        <HConnector
          key={`c1-${i}`}
          col={col + 1}
          row={1}
          origin="left"
          visible={visible}
          delay={delay()}
        />
      );
    }
  });

  elements.push(<VConnector key="v1" col={9} row={2} visible={visible} delay={delay()} />);

  // Row 2 — grid row 3, columns 9/7/5/3/1, right to left.
  ROW2.forEach((idx, i) => {
    const col = 9 - i * 2;
    elements.push(
      <Node key={`n${idx}`} idx={idx} col={col} row={3} visible={visible} delay={delay()} />
    );
    if (i < ROW2.length - 1) {
      elements.push(
        <HConnector
          key={`c2-${i}`}
          col={col - 1}
          row={3}
          origin="right"
          visible={visible}
          delay={delay()}
        />
      );
    }
  });

  elements.push(<VConnector key="v2" col={1} row={4} visible={visible} delay={delay()} />);

  // Row 3 — grid row 5, columns 1/3/5, left to right (13th = today, highlighted).
  ROW3.forEach((idx, i) => {
    const col = i * 2 + 1;
    elements.push(
      <Node key={`n${idx}`} idx={idx} col={col} row={5} visible={visible} delay={delay()} />
    );
    if (i < ROW3.length - 1) {
      elements.push(
        <HConnector
          key={`c3-${i}`}
          col={col + 1}
          row={5}
          origin="left"
          visible={visible}
          delay={delay()}
        />
      );
    }
  });

  return (
    <div ref={containerRef}>
      {/* Desktop / tablet: the snake grid */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_0.35fr_1fr_0.35fr_1fr_0.35fr_1fr_0.35fr_1fr] lg:grid-rows-[auto_2.5rem_auto_2.5rem_auto]">
        {elements}
      </div>

      {/* Mobile / tablet fallback: compact staggered left/right zigzag,
          overlapping slightly so the whole story takes less scroll. */}
      <div className="relative -space-y-3 lg:hidden">
        <div className="absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 border-l-2 border-dashed border-apki-green/30" />
        {timeline.map((item, i) => {
          const isCurrent = i === timeline.length - 1;
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div key={item.year} className="relative py-2">
              <span className="absolute left-1/2 top-3.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[#f5f6f2] bg-apki-green" />
              <div
                className={`w-[46%] transition-all duration-500 ${
                  side === "left" ? "pr-2 text-right" : "ml-auto pl-2 text-left"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : `translateY(10px) translateX(${side === "left" ? "-6px" : "6px"})`,
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <div
                  className={`font-heading text-base font-bold ${
                    isCurrent ? "text-apki-green" : "text-apki-navy"
                  }`}
                >
                  {item.year}
                </div>
                <p className="mt-0.5 text-xs leading-snug text-apki-charcoal/70">
                  {item.short}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Node({
  idx,
  col,
  row,
  visible,
  delay,
}: {
  idx: number;
  col: number;
  row: number;
  visible: boolean;
  delay: number;
}) {
  const item = timeline[idx];
  const isCurrent = idx === timeline.length - 1;

  return (
    <div style={{ gridColumn: col, gridRow: row }} className="flex items-center justify-center px-2 py-3">
      <div
        className={`pixel-frame w-full p-4 transition-all duration-500 xl:p-5 ${
          isCurrent ? "bg-apki-green" : "bg-white"
        }`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.92)",
          transitionDelay: `${delay}ms`,
        }}
      >
        {isCurrent && (
          <PixelIcon
            bitmap={BOLT}
            className="pixel-pulse mb-2 h-5 w-5"
            color="var(--apki-yellow)"
          />
        )}
        <div
          className={`font-heading text-xl font-bold xl:text-2xl ${
            isCurrent ? "text-white" : "text-apki-navy"
          }`}
        >
          {item.year}
        </div>
        <p
          className={`mt-1 text-xs leading-snug xl:text-sm ${
            isCurrent ? "text-white/85" : "text-apki-charcoal/65"
          }`}
        >
          {item.short}
        </p>
      </div>
    </div>
  );
}

function HConnector({
  col,
  row,
  origin,
  visible,
  delay,
}: {
  col: number;
  row: number;
  origin: "left" | "right";
  visible: boolean;
  delay: number;
}) {
  return (
    <div style={{ gridColumn: col, gridRow: row }} className="flex items-center px-1">
      <div
        className="pixel-line h-0 w-full border-apki-green/50 transition-transform duration-500"
        style={{
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: origin,
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

function VConnector({
  col,
  row,
  visible,
  delay,
}: {
  col: number;
  row: number;
  visible: boolean;
  delay: number;
}) {
  return (
    <div style={{ gridColumn: col, gridRow: row }} className="flex justify-center py-1">
      <div
        className="h-full w-0 border-l-2 border-dashed border-apki-green/50 transition-transform duration-500"
        style={{
          transform: visible ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

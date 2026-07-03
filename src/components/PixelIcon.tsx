import type { CSSProperties } from "react";

// Abstract 5x5 pixel-art glyphs. "1" = filled pixel. Deliberately loose/abstract
// rather than literal icon-set art — a quiet nod to the pixel-art direction.
export const BOLT = ["00100", "01110", "11100", "00111", "00100"];
export const WAVE = ["10000", "11000", "01100", "00110", "00011"];
export const WIFI = ["00100", "01110", "10001", "00000", "00100"];
export const IMPACT = ["00100", "01110", "11011", "01110", "00100"];
export const WEIGHT = ["01110", "01010", "11111", "01010", "01010"];
export const PLUG = ["01010", "01010", "11111", "01110", "00100"];
export const SUN = ["00100", "10101", "01110", "10101", "00100"];
export const CAR = ["00000", "01110", "11111", "10101", "00000"];
export const PIN = ["01110", "10001", "10001", "01110", "00100"];
export const USERS = ["01010", "01010", "11111", "10101", "10101"];
export const SHIELD = ["01110", "11111", "11111", "01110", "00100"];
export const BATTERY = ["00100", "11111", "10101", "10101", "11111"];
export const CLOCK = ["01110", "10101", "10111", "10001", "01110"];
export const CROSS_CIRCLE = ["01110", "10101", "11111", "10101", "01110"];
export const TENT = ["00100", "01110", "11111", "10001", "10001"];
export const HOUSE = ["00100", "01110", "11111", "10101", "11111"];
export const GENERATOR = ["01010", "01010", "11111", "10101", "11111"];
export const AMBULANCE = ["00100", "01110", "11111", "10101", "01010"];
export const FLAME = ["00100", "01110", "01110", "11111", "01110"];

export default function PixelIcon({
  bitmap,
  className,
  color = "currentColor",
  style,
}: {
  bitmap: string[];
  className?: string;
  color?: string;
  style?: CSSProperties;
}) {
  const rows = bitmap.length;
  const cols = bitmap[0].length;
  const unit = 4;
  const gap = 0.6;

  return (
    <svg
      viewBox={`0 0 ${cols * unit} ${rows * unit}`}
      className={className}
      style={style}
      aria-hidden="true"
    >
      {bitmap.map((row, y) =>
        row.split("").map((cell, x) =>
          cell === "1" ? (
            <rect
              key={`${x}-${y}`}
              x={x * unit + gap / 2}
              y={y * unit + gap / 2}
              width={unit - gap}
              height={unit - gap}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  );
}

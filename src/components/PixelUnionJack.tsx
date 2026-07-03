import type { CSSProperties } from "react";

// Pixel-art Union Jack, rasterised onto a 20x10 grid (matches the flag's
// official 1:2 ratio) so it renders in the same blocky, abstract style as
// the rest of the site's pixel iconography rather than a smooth vector flag.
const COLS = 40;
const ROWS = 20;

const NAVY = "#012169";
const WHITE = "#FFFFFF";
const RED = "#C8102E";

function cellColor(x: number, y: number): string {
  const cx = x + 0.5;
  const cy = y + 0.5;
  const slope = ROWS / COLS;
  const norm = Math.sqrt(1 + slope * slope);

  const d1 = Math.abs(cy - slope * cx) / norm; // top-left → bottom-right
  const d2 = Math.abs(cy - (ROWS - slope * cx)) / norm; // top-right → bottom-left

  const onWhiteDiag = d1 < 2.3 || d2 < 2.3;
  const onRedDiag = d1 < 1.1 || d2 < 1.1;
  const onWhiteCross = Math.abs(cx - COLS / 2) < 3.2 || Math.abs(cy - ROWS / 2) < 3.2;
  const onRedCross = Math.abs(cx - COLS / 2) < 1.6 || Math.abs(cy - ROWS / 2) < 1.6;

  if (onRedCross) return RED;
  if (onWhiteCross) return WHITE;
  if (onRedDiag) return RED;
  if (onWhiteDiag) return WHITE;
  return NAVY;
}

export default function PixelUnionJack({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const cells: { x: number; y: number; color: string }[] = [];
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      cells.push({ x, y, color: cellColor(x, y) });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${COLS} ${ROWS}`}
      className={className}
      style={style}
      role="img"
      aria-label="United Kingdom flag"
    >
      {cells.map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width={1.02} height={1.02} fill={c.color} />
      ))}
    </svg>
  );
}

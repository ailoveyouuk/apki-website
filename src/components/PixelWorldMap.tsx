import type { CSSProperties } from "react";

// A deliberately loose/abstract pixel-art world map, traced (band by band)
// from a reference equirectangular world silhouette so the continents are
// actually recognisable — Greenland, Scandinavia, the Arabian peninsula,
// India, the Horn of Africa, Madagascar, Indonesia, and Australia all get
// their own shape rather than a single bounding rectangle per continent.
// Positioned on a 150x75 grid across the 600x300 viewBox (4 units per cell —
// the same unit PixelIcon uses), standard equirectangular framing centred on
// the prime meridian: North America left, UK/Europe/Africa in the middle,
// South East Asia and Australia on the right.
const UNIT = 4;
const GAP = 0.6;

// Individual pixels are drawn at 25% of the grid's native size (i.e. 75%
// smaller) — a light scatter of dots along each coastline rather than a
// near-solid line.
const DOT_SIZE = (UNIT - GAP) * 0.25;

const REGIONS: { rowStart: number; rowEnd: number; colStart: number; colEnd: number }[] = [
  // Arctic Canada / Greenland
  { rowStart: 3, rowEnd: 6, colStart: 3, colEnd: 15 },
  { rowStart: 3, rowEnd: 6, colStart: 29, colEnd: 39 },
  { rowStart: 6, rowEnd: 9, colStart: 3, colEnd: 21 },
  { rowStart: 6, rowEnd: 9, colStart: 27, colEnd: 41 },
  { rowStart: 6, rowEnd: 9, colStart: 68, colEnd: 75 }, // Scandinavia (north)
  // North America
  { rowStart: 9, rowEnd: 12, colStart: 3, colEnd: 30 },
  { rowStart: 9, rowEnd: 12, colStart: 29, colEnd: 41 }, // Greenland
  { rowStart: 9, rowEnd: 12, colStart: 45, colEnd: 50 }, // Iceland
  { rowStart: 9, rowEnd: 12, colStart: 66, colEnd: 90 }, // Scandinavia / W. Russia
  { rowStart: 12, rowEnd: 15, colStart: 5, colEnd: 38 },
  { rowStart: 12, rowEnd: 15, colStart: 59, colEnd: 63 }, // UK
  { rowStart: 12, rowEnd: 15, colStart: 66, colEnd: 113 }, // Russia (wide band)
  { rowStart: 12, rowEnd: 15, colStart: 135, colEnd: 144 }, // Kamchatka
  { rowStart: 15, rowEnd: 18, colStart: 8, colEnd: 45 }, // USA
  { rowStart: 15, rowEnd: 18, colStart: 59, colEnd: 81 }, // Europe
  { rowStart: 15, rowEnd: 18, colStart: 81, colEnd: 140 }, // Russia / Asia
  { rowStart: 15, rowEnd: 18, colStart: 134, colEnd: 141 }, // Japan
  { rowStart: 18, rowEnd: 21, colStart: 9, colEnd: 47 },
  { rowStart: 18, rowEnd: 21, colStart: 63, colEnd: 84 },
  { rowStart: 18, rowEnd: 21, colStart: 84, colEnd: 137 },
  { rowStart: 18, rowEnd: 21, colStart: 129, colEnd: 141 }, // Korea / Japan
  { rowStart: 21, rowEnd: 24, colStart: 12, colEnd: 42 },
  { rowStart: 21, rowEnd: 24, colStart: 59, colEnd: 87 }, // N. Africa / S. Europe
  { rowStart: 21, rowEnd: 24, colStart: 87, colEnd: 134 },
  { rowStart: 21, rowEnd: 24, colStart: 131, colEnd: 138 },
  // Mexico / Central America
  { rowStart: 24, rowEnd: 27, colStart: 15, colEnd: 38 },
  { rowStart: 24, rowEnd: 27, colStart: 59, colEnd: 96 }, // N. Africa / Arabia
  { rowStart: 24, rowEnd: 27, colStart: 96, colEnd: 134 },
  { rowStart: 24, rowEnd: 27, colStart: 129, colEnd: 134 },
  { rowStart: 27, rowEnd: 30, colStart: 20, colEnd: 32 },
  { rowStart: 27, rowEnd: 30, colStart: 57, colEnd: 111 }, // Sahara / Arabia / India (N)
  { rowStart: 27, rowEnd: 30, colStart: 113, colEnd: 137 },
  // South America (N) / Africa / Arabia / India / SE Asia
  { rowStart: 30, rowEnd: 33, colStart: 20, colEnd: 44 },
  { rowStart: 30, rowEnd: 33, colStart: 56, colEnd: 96 },
  { rowStart: 30, rowEnd: 33, colStart: 99, colEnd: 108 }, // India (S)
  { rowStart: 30, rowEnd: 33, colStart: 113, colEnd: 137 },
  { rowStart: 33, rowEnd: 36, colStart: 21, colEnd: 50 },
  { rowStart: 33, rowEnd: 36, colStart: 74, colEnd: 101 }, // Horn of Africa
  { rowStart: 33, rowEnd: 36, colStart: 107, colEnd: 110 }, // Sri Lanka
  { rowStart: 33, rowEnd: 36, colStart: 120, colEnd: 141 },
  { rowStart: 36, rowEnd: 39, colStart: 23, colEnd: 51 },
  { rowStart: 36, rowEnd: 39, colStart: 77, colEnd: 101 },
  { rowStart: 36, rowEnd: 39, colStart: 92, colEnd: 98 }, // Madagascar
  { rowStart: 36, rowEnd: 39, colStart: 122, colEnd: 144 },
  { rowStart: 39, rowEnd: 42, colStart: 24, colEnd: 50 },
  { rowStart: 39, rowEnd: 42, colStart: 72, colEnd: 96 },
  { rowStart: 39, rowEnd: 42, colStart: 90, colEnd: 98 },
  { rowStart: 39, rowEnd: 42, colStart: 125, colEnd: 147 },
  { rowStart: 42, rowEnd: 45, colStart: 26, colEnd: 47 },
  { rowStart: 42, rowEnd: 45, colStart: 71, colEnd: 93 },
  { rowStart: 42, rowEnd: 45, colStart: 90, colEnd: 96 },
  { rowStart: 42, rowEnd: 45, colStart: 131, colEnd: 150 }, // Australia (N)
  { rowStart: 45, rowEnd: 48, colStart: 26, colEnd: 44 },
  { rowStart: 45, rowEnd: 48, colStart: 71, colEnd: 90 },
  { rowStart: 45, rowEnd: 48, colStart: 131, colEnd: 150 },
  { rowStart: 48, rowEnd: 51, colStart: 27, colEnd: 42 },
  { rowStart: 48, rowEnd: 51, colStart: 74, colEnd: 86 }, // S. Africa
  { rowStart: 48, rowEnd: 51, colStart: 131, colEnd: 149 },
  { rowStart: 51, rowEnd: 54, colStart: 27, colEnd: 41 },
  { rowStart: 51, rowEnd: 54, colStart: 132, colEnd: 149 },
  { rowStart: 51, rowEnd: 54, colStart: 140, colEnd: 144 }, // Tasmania
  // South America, tapering to Patagonia
  { rowStart: 54, rowEnd: 57, colStart: 29, colEnd: 39 },
  { rowStart: 57, rowEnd: 60, colStart: 29, colEnd: 38 },
  { rowStart: 60, rowEnd: 63, colStart: 30, colEnd: 36 },
  { rowStart: 63, rowEnd: 66, colStart: 32, colEnd: 36 },
  { rowStart: 66, rowEnd: 69, colStart: 33, colEnd: 35 },
];

// Flatten the rectangles into a single "filled" set, then keep only the
// cells that sit on the edge of that shape (i.e. at least one direct
// neighbour is empty) — this is what turns solid blocks into a coastline
// outline rather than filled landmasses.
const filled = new Set<string>();
REGIONS.forEach((region) => {
  for (let row = region.rowStart; row < region.rowEnd; row++) {
    for (let col = region.colStart; col < region.colEnd; col++) {
      filled.add(`${row},${col}`);
    }
  }
});

const OUTLINE_CELLS: { row: number; col: number }[] = [];
filled.forEach((key) => {
  const [row, col] = key.split(",").map(Number);
  const hasEmptyNeighbour =
    !filled.has(`${row - 1},${col}`) ||
    !filled.has(`${row + 1},${col}`) ||
    !filled.has(`${row},${col - 1}`) ||
    !filled.has(`${row},${col + 1}`);
  if (hasEmptyNeighbour) OUTLINE_CELLS.push({ row, col });
});

// Deployment sites: the UK anchor plus the regions APKI serves for
// humanitarian, NGO, and defence deployment. Illustrative reach, not a claim
// of confirmed in-country operations — deliberately unlabelled.
const SATELLITES: { x: number; y: number }[] = [
  { x: 313, y: 135 }, // West Africa
  { x: 362, y: 148 }, // East Africa
  { x: 360, y: 98 }, // Middle East
  { x: 430, y: 115 }, // South Asia
  { x: 503, y: 128 }, // Southeast Asia
  { x: 177, y: 143 }, // South America
];

const ORIGIN = { x: 297, y: 60 }; // United Kingdom — home base

// A tiny hollow ring of pixels (outline only, no fill) for every pulsing
// deployment marker — same tiny-pixel scale as the landmass dots.
const RING_BITMAP = ["01110", "10001", "10001", "10001", "01110"];

function PixelCircle({
  cx,
  cy,
  spacing,
  delay = 0,
}: {
  cx: number;
  cy: number;
  spacing: number;
  delay?: number;
}) {
  const size = RING_BITMAP.length;
  const offset = (size * spacing) / 2;
  const dot = spacing * 0.82 * 0.25; // same 75%-smaller treatment as the landmass dots

  return (
    <g className="map-pulse" style={{ animationDelay: `${delay}s` }}>
      {RING_BITMAP.map((row, y) =>
        row.split("").map((cell, x) =>
          cell === "1" ? (
            <rect
              key={`${x}-${y}`}
              x={cx - offset + x * spacing + spacing / 2 - dot / 2}
              y={cy - offset + y * spacing + spacing / 2 - dot / 2}
              width={dot}
              height={dot}
              fill="var(--apki-green)"
            />
          ) : null
        )
      )}
    </g>
  );
}

// Deterministic pseudo-random hash (no Math.random) so pixel opacity varies
// without ever mismatching between server and client render.
function hash(x: number, y: number) {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

export default function PixelWorldMap({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 600 300"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Landmass — a faint scatter of tiny dots along the coastline only
          (no filled land), barely visible so it never competes with
          foreground text. */}
      <g>
        {OUTLINE_CELLS.map(({ row, col }) => {
          const n = hash(col, row);
          return (
            <rect
              key={`${row}-${col}`}
              x={col * UNIT + UNIT / 2 - DOT_SIZE / 2}
              y={row * UNIT + UNIT / 2 - DOT_SIZE / 2}
              width={DOT_SIZE}
              height={DOT_SIZE}
              fill="var(--apki-navy)"
              opacity={0.03 + n * 0.04}
            />
          );
        })}
      </g>

      {/* Satellite sites — tiny pulsing pixel rings */}
      {SATELLITES.map((site, i) => (
        <PixelCircle key={i} cx={site.x} cy={site.y} spacing={2.2} delay={i * 0.5} />
      ))}

      {/* UK — origin, a slightly larger pixel ring */}
      <PixelCircle cx={ORIGIN.x} cy={ORIGIN.y} spacing={3} />
    </svg>
  );
}

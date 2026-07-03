// A scattered field of small square "pixels" that twinkle independently —
// deliberately hand-placed (not a repeating tile) so the motion is actually
// perceptible, unlike a uniform drifting grid.
const PIXELS = [
  { x: 4, y: 14, size: 6, color: "var(--apki-navy)", op: 0.16, dur: 4.2, delay: 0 },
  { x: 11, y: 62, size: 4, color: "var(--apki-green)", op: 0.2, dur: 5.1, delay: 0.6 },
  { x: 18, y: 30, size: 8, color: "var(--apki-navy)", op: 0.12, dur: 3.6, delay: 1.4 },
  { x: 9, y: 84, size: 5, color: "var(--apki-yellow)", op: 0.22, dur: 4.8, delay: 2.1 },
  { x: 26, y: 8, size: 4, color: "var(--apki-green)", op: 0.18, dur: 5.6, delay: 0.9 },
  { x: 31, y: 46, size: 6, color: "var(--apki-navy)", op: 0.14, dur: 4.4, delay: 3.2 },
  { x: 6, y: 40, size: 4, color: "var(--apki-navy)", op: 0.15, dur: 6.2, delay: 1.8 },
  { x: 22, y: 92, size: 6, color: "var(--apki-green)", op: 0.16, dur: 3.9, delay: 0.3 },
  { x: 90, y: 18, size: 6, color: "var(--apki-navy)", op: 0.16, dur: 4.6, delay: 0.5 },
  { x: 82, y: 58, size: 5, color: "var(--apki-green)", op: 0.2, dur: 5.3, delay: 1.1 },
  { x: 94, y: 36, size: 8, color: "var(--apki-navy)", op: 0.12, dur: 3.8, delay: 2.4 },
  { x: 87, y: 80, size: 4, color: "var(--apki-yellow)", op: 0.22, dur: 4.9, delay: 1.6 },
  { x: 74, y: 12, size: 4, color: "var(--apki-green)", op: 0.18, dur: 5.8, delay: 0.2 },
  { x: 96, y: 66, size: 6, color: "var(--apki-navy)", op: 0.14, dur: 4.1, delay: 3.5 },
  { x: 78, y: 92, size: 5, color: "var(--apki-navy)", op: 0.15, dur: 6.4, delay: 2.7 },
  { x: 91, y: 48, size: 6, color: "var(--apki-green)", op: 0.16, dur: 3.7, delay: 1.2 },
  { x: 50, y: 6, size: 5, color: "var(--apki-navy)", op: 0.14, dur: 5.4, delay: 0.8 },
  { x: 58, y: 94, size: 6, color: "var(--apki-green)", op: 0.17, dur: 4.3, delay: 2.9 },
  { x: 40, y: 20, size: 4, color: "var(--apki-yellow)", op: 0.2, dur: 4.7, delay: 1.5 },
  { x: 66, y: 34, size: 4, color: "var(--apki-navy)", op: 0.15, dur: 5.9, delay: 0.4 },
];

export default function PixelField({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {PIXELS.map((p, i) => (
        <span
          key={i}
          className="pixel-twinkle absolute block"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            ["--pixel-opacity-min" as string]: p.op * 0.5,
            ["--pixel-opacity-max" as string]: p.op,
          }}
        />
      ))}
    </div>
  );
}

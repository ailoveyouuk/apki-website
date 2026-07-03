import Image from "next/image";
import Reveal from "@/components/Reveal";

type PartnerLogo = { name: string; src: string; width: number; height: number };

// A consistent logo card: same height and padding regardless of the source
// logo's own aspect ratio, so a tall square badge (ISO, UKAS) and a wide
// logotype (a DNO wordmark) read as equally-weighted proof points rather
// than whichever happened to be the biggest file.
export default function PartnerLogos({
  items,
  caption = true,
  delayStep = 60,
}: {
  items: PartnerLogo[];
  caption?: boolean;
  delayStep?: number;
}) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-6">
      {items.map((item, i) => (
        <Reveal key={item.name} delay={i * delayStep} className="w-36 sm:w-40">
          <div className="pixel-frame flex h-20 items-center justify-center bg-white px-5 py-3 sm:h-24">
            <Image
              src={item.src}
              alt={item.name}
              width={item.width}
              height={item.height}
              className="h-full w-auto max-w-full object-contain"
            />
          </div>
          {caption && (
            <p className="mt-2 text-center text-xs font-medium leading-snug text-apki-charcoal/55">
              {item.name}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}

import Reveal from "@/components/Reveal";
import { linkedinPosts } from "@/lib/linkedinPosts";

const FOLLOW_LINKS = [
  { label: "Alan Greig", href: "https://www.linkedin.com/in/apkindustries/" },
  { label: "Lucy Watts", href: "https://www.linkedin.com/in/lucy-watts/" },
  { label: "APK Industries", href: "https://www.linkedin.com/company/apk-industries-ltd" },
];

export default function LinkedInFeed() {
  if (linkedinPosts.length === 0) {
    return (
      <Reveal className="flex flex-col items-center gap-6 border-t border-black/10 pt-10 text-center">
        <p className="max-w-md text-sm text-apki-charcoal/60">
          Posts featured here are curated by hand — check back soon, or follow
          along directly on LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {FOLLOW_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border-2 border-apki-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-apki-navy transition-colors hover:bg-apki-navy hover:text-white"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </Reveal>
    );
  }

  return (
    <div className="grid gap-8 border-t border-black/10 pt-10 md:grid-cols-2 lg:grid-cols-3">
      {linkedinPosts.map((post, i) => (
        <Reveal key={post.id} delay={i * 100}>
          <div className="pixel-frame overflow-hidden bg-white">
            <iframe
              src={post.embedSrc}
              height={post.height ?? 570}
              width="100%"
              loading="lazy"
              title={`LinkedIn post by ${post.author}`}
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

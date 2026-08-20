import Image from "next/image";
import Link from "next/link";
import PixelUnionJack from "@/components/PixelUnionJack";

export default function Footer() {
  return (
    <footer className="bg-apki-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="font-heading text-xl font-bold tracking-wider">APKI</div>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Pioneers in Energy Equality. Ruggedised, zero-emission portable power —
              built for the moments when power failure is not an option.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              <PixelUnionJack className="h-3.5 w-7 shrink-0" />
              Designed &amp; manufactured in Britain
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-apki-yellow">
              Site
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/product" className="hover:text-white">Product</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/quality-compliance" className="hover:text-white">Quality &amp; Compliance</Link></li>
              <li><Link href="/company" className="hover:text-white">Company</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-apki-yellow">
              Compliance
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>ISO 9001 — Quality Management</li>
              <li>ISO 14001 — Environmental Management</li>
              <li>UKAS Accredited Testing</li>
              <li>RoHS · CE · UKCA</li>
              <li>WEEE Take-Back Scheme</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-apki-yellow">
              Legal
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
              <li><Link href="/accessibility" className="hover:text-white">Accessibility</Link></li>
              <li><Link href="/modern-slavery-statement" className="hover:text-white">Modern Slavery Statement</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-apki-yellow">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>APK Industries Ltd</li>
              <li>Sparkhouse, Rope Walk</li>
              <li>Lincoln LN6 7DQ, United Kingdom</li>
              <li>
                <a href="mailto:alan@apkindustries.com" className="hover:text-white">
                  alan@apkindustries.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/apk-industries-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Supported by
            </span>
            <div className="rounded-sm bg-white px-4 py-2.5">
              <Image
                src="/images/dbt-great-logo.png"
                alt="Department for Business and Trade — GREAT Britain & Northern Ireland"
                width={900}
                height={235}
                className="h-7 w-auto sm:h-8"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <span>
            Copyright {new Date().getFullYear()} APK Industries Ltd, registered in the UK
            no: 07071667
          </span>
          <span>Portable Power Stations (PPS) · Zero Emission Generators</span>
        </div>

        <div className="mt-4 text-xs text-white/40">
          <span>Website built by AI Love You</span>
        </div>
      </div>
    </footer>
  );
}

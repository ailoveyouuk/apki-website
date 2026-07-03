import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | APKI",
  description:
    "Get in touch with APK Industries about humanitarian, defence, utility, or medical power deployments.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apki-green">
            Get in Touch
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-apki-navy sm:text-5xl">
            Let&apos;s talk deployment.
          </h1>
          <p className="mt-5 max-w-md text-apki-charcoal/75">
            Whether you&apos;re an NGO, a defence procurement office, an emergency
            services provider, a utility, or a healthcare provider, tell us about
            your requirements and we&apos;ll be in touch.
          </p>

          <div className="mt-10 space-y-2 text-sm text-apki-charcoal/80">
            <p className="font-semibold text-apki-navy">APK Industries Ltd</p>
            <p>Sparkhouse, Rope Walk</p>
            <p>Lincoln LN6 7DQ, United Kingdom</p>
            <p className="pt-2">
              <a href="mailto:alan@apkindustries.com" className="text-apki-green hover:underline">
                alan@apkindustries.com
              </a>
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-apki-charcoal/50">
              Registered on procurement platforms
            </p>
            <p className="mt-2 text-sm text-apki-charcoal/70">
              Achilles · SAP Ariba · GoSupply · JAGGAER
            </p>
          </div>
        </div>

        <div className="rounded-sm bg-[#f5f6f2] p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

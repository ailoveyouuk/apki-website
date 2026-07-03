import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | APKI",
  description: "Terms of use for the APK Industries Ltd website.",
};

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms &amp; Conditions" updated="3 July 2026">
      <h2>About these terms</h2>
      <p>
        These terms govern your use of this website, operated by APK
        Industries Ltd (&ldquo;APKI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;),
        company number 07071667, registered office at Sparkhouse, Rope Walk,
        Lincoln LN6 7DQ, United Kingdom. By using this site, you accept these
        terms. This is a marketing and information site — it does not itself
        process orders or sales, which are handled separately by agreement
        with our commercial team.
      </p>

      <h2>Use of this site</h2>
      <p>
        You may view, download, and print content from this site for your own
        information or for evaluating our products and services. You must not
        misuse the site — including attempting to gain unauthorised access,
        scraping content at scale, or using it in any way that could damage,
        disable, or impair it.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The APKI name, logo, and brand assets, and all content on this site
        (including text, images, diagrams, and specifications) are owned by
        or licensed to APK Industries Ltd and protected by copyright and
        trade mark law. You may not reproduce, distribute, or create
        derivative works from this content without our prior written consent,
        other than for the permitted use described above.
      </p>

      <h2>Product information &amp; accuracy</h2>
      <p>
        We take care to keep specifications, certifications, and case study
        information on this site accurate and up to date, but product
        specifications may change without notice as our products evolve.
        Nothing on this site constitutes a binding quotation, offer, or
        guarantee of fitness for a particular purpose. Please confirm current
        specifications and compliance documentation directly with us before
        making a procurement or deployment decision.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        This site and its content are provided &ldquo;as is&rdquo;, without
        warranties of any kind, to the fullest extent permitted by law. We
        are not liable for any loss or damage arising from your use of, or
        inability to use, this site, except where such liability cannot be
        excluded by law (including death or personal injury caused by our
        negligence, or fraud).
      </p>

      <h2>Third-party links</h2>
      <p>
        This site may link to third-party websites (for example, procurement
        platforms). We are not responsible for the content or practices of
        those sites.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales, and any
        disputes will be subject to the exclusive jurisdiction of the courts
        of England and Wales.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The date at the top of
        this page shows when it was last revised.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:alan@apkindustries.com">alan@apkindustries.com</a>.
      </p>
    </LegalLayout>
  );
}

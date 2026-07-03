import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement | APKI",
  description: "Our approach to making this website accessible to all users.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Accessibility Statement" updated="3 July 2026">
      <h2>Our commitment</h2>
      <p>
        APK Industries Ltd wants this website to be usable by as many people
        as possible, including organisations and individuals using assistive
        technology such as screen readers, screen magnifiers, or voice
        control software. We aim to meet the Web Content Accessibility
        Guidelines (WCAG) 2.1 at level AA wherever practicable.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Structure pages with clear headings and landmarks.</li>
        <li>Provide descriptive alternative text for meaningful images.</li>
        <li>
          Support keyboard navigation throughout the site, including the
          contact form and navigation menu.
        </li>
        <li>
          Respect your device or browser setting for reduced motion —
          animated elements on this site are minimised or disabled
          accordingly.
        </li>
        <li>Maintain sufficient colour contrast in body text.</li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        This is an ongoing effort. Some documents linked from this site
        (such as PDF certificates and technical files) are supplied by
        third-party certification bodies and may not fully meet accessibility
        standards. If you need any content on this site in an alternative
        format, contact us and we will do our best to help.
      </p>

      <h2>Reporting an issue</h2>
      <p>
        If you find an accessibility problem, or need information on this
        site in a different format, please contact{" "}
        <a href="mailto:alan@apkindustries.com">alan@apkindustries.com</a>.
        We will respond as quickly as we can.
      </p>
    </LegalLayout>
  );
}

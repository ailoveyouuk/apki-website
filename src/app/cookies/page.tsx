import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | APKI",
  description: "How this website uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Cookie Policy" updated="3 July 2026">
      <h2>Our current use of cookies</h2>
      <p>
        This website does not currently use analytics, advertising, or
        tracking cookies. Any cookies that are set are strictly necessary for
        the site to function correctly — for example, to maintain basic
        security when submitting the contact form.
      </p>
      <p>
        If this changes and we introduce analytics or other non-essential
        cookies in future, we will update this policy and, where required by
        law, ask for your consent via a cookie banner before those cookies
        are set.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They are widely used to make sites work, or work more
        efficiently, and to provide information to the site owner. Cookies
        are generally grouped into these categories:
      </p>
      <ul>
        <li>
          <strong>Strictly necessary</strong> — required for the site to
          function; cannot be switched off.
        </li>
        <li>
          <strong>Performance / analytics</strong> — help us understand how
          the site is used, in aggregate. Not currently used on this site.
        </li>
        <li>
          <strong>Functional</strong> — remember choices you make to provide
          a more personalised experience. Not currently used on this site.
        </li>
        <li>
          <strong>Targeting / advertising</strong> — used to deliver
          relevant advertising. Not used on this site.
        </li>
      </ul>

      <h2>Managing cookies</h2>
      <p>
        Most web browsers let you control cookies through their settings,
        including blocking or deleting them. Because this site does not rely
        on non-essential cookies, disabling cookies in your browser should
        not affect your ability to browse the site or submit an enquiry.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about this policy, contact{" "}
        <a href="mailto:alan@apkindustries.com">alan@apkindustries.com</a>.
      </p>
    </LegalLayout>
  );
}

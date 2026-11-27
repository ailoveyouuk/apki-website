import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { ANALYTICS_ENABLED } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Cookie Policy | APKI",
  description: "How this website uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Cookie Policy" updated="27 November 2026">
      <h2>Our use of cookies</h2>
      {ANALYTICS_ENABLED ? (
        <>
          <p>
            We use a small number of cookies. Strictly necessary cookies are
            always on. Analytics and advertising cookies are only set if you
            agree through the cookie banner, and you can change your mind at any
            time using &ldquo;Cookie settings&rdquo; in the footer.
          </p>
          <ul>
            <li>
              <strong>Analytics (Google Analytics 4)</strong> — records page
              views and how visitors move through the site, in aggregate, so we
              can improve it. Set only with your consent.
            </li>
            <li>
              <strong>Advertising &amp; personalisation (Google)</strong> — lets
              Google provide audience and demographic insights and show relevant
              adverts for our products. Set only with your consent.
            </li>
          </ul>
          <p>
            Where you consent, Google may process this data in the United States
            and other countries. See our{" "}
            <a href="/privacy-policy">Privacy Policy</a> for how we handle
            personal data.
          </p>
        </>
      ) : (
        <>
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
        </>
      )}

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
          the site is used, in aggregate.{ANALYTICS_ENABLED ? " Only with your consent." : " Not currently used on this site."}
        </li>
        <li>
          <strong>Functional</strong> — remember choices you make to provide
          a more personalised experience. Not used on this site.
        </li>
        <li>
          <strong>Targeting / advertising</strong> — used to deliver
          relevant advertising.{ANALYTICS_ENABLED ? " Only with your consent." : " Not used on this site."}
        </li>
      </ul>

      <h2>Managing cookies</h2>
      <p>
        Most web browsers let you control cookies through their settings,
        including blocking or deleting them. Because this site does not rely
        on non-essential cookies, disabling cookies in your browser should
        not affect your ability to browse the site or submit an enquiry.
        {ANALYTICS_ENABLED && " You can also change your choices at any time using Cookie settings in the footer."}
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about this policy, contact{" "}
        <a href="mailto:alan@apkindustries.com">alan@apkindustries.com</a>.
      </p>
    </LegalLayout>
  );
}

import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { shopEnabled } from "@/lib/shop";

export function generateMetadata(): Metadata {
  return {
    title: "Delivery, Returns & Warranty",
    description:
      "Delivery, 14-day returns and 2-year warranty for the APKI 2200Li. APKI pays for collection of returns.",
    alternates: { canonical: "/delivery-returns" },
    robots: shopEnabled() ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default function DeliveryReturnsPage() {
  return (
    <LegalLayout
      eyebrow="Shop"
      title="Delivery, Returns & Warranty"
      updated="27 November 2026"
    >
      <h2>Delivery</h2>
      <p>
        Delivery charges and the estimated delivery date for your address are
        shown at checkout before you pay. Because the APKI 2200Li contains a
        lithium battery, it is classed as dangerous goods for transport and is
        sent by carriers approved to carry it. Please make sure someone is
        available to receive and sign for the delivery, and check the unit and
        packaging on arrival. If anything is damaged, tell us within 48 hours
        and keep the packaging.
      </p>

      <h2>Your right to cancel (14 days)</h2>
      <p>
        If you are buying as a consumer, you have the right to cancel your
        order for any reason within 14 days of receiving the goods, under the
        Consumer Contracts (Information, Cancellation and Additional Charges)
        Regulations 2013. You do not need to give a reason.
      </p>
      <ul>
        <li>
          Tell us you want to cancel using our <a href="/contact">contact form</a>{" "}
          or by emailing{" "}
          <a href="mailto:alan@apkindustries.com">alan@apkindustries.com</a>.
        </li>
        <li>
          <strong>APKI pays for the return.</strong> We will arrange and pay
          for a specialist carrier to collect the unit from you. Please do not
          post it or send it with a standard courier, as it contains a lithium
          battery.
        </li>
        <li>
          You must make the unit available for collection within 14 days of
          telling us you wish to cancel. Please keep it in its original
          packaging if you can, and take reasonable care of it while it is with
          you.
        </li>
        <li>
          We will refund the price you paid, including standard delivery, to
          your original payment method within 14 days of receiving the unit
          back, or of you providing proof that you have returned it, whichever
          is earlier.
        </li>
      </ul>
      <p>
        If the unit has been used or handled more than was needed to check it
        works, we may reduce your refund to reflect any loss in its value. This
        is a statutory right and we will tell you before we do so.
      </p>

      <h2>Faulty goods</h2>
      <p>
        Your rights under the Consumer Rights Act 2015 are not affected. Goods
        must be of satisfactory quality, fit for purpose and as described. If
        the unit is faulty you can reject it for a full refund within 30 days of
        delivery. Within the first six months, a fault is presumed to have been
        there from delivery unless we can show otherwise. After that, you are
        entitled to a repair or replacement at no cost to you.
      </p>

      <h2>2-year manufacturer&apos;s warranty</h2>
      <p>
        Every APKI 2200Li comes with a 2-year manufacturer&apos;s warranty,
        which is in addition to your statutory rights. If you need to use the
        warranty, contact us. We will arrange and pay for collection of the unit
        and its return to you once it has been repaired or replaced. The
        warranty does not cover damage caused by misuse, accident, unauthorised
        modification or repair, or fair wear and tear.
      </p>

      <h2>Business customers</h2>
      <p>
        The consumer rights above apply to individuals buying for personal use.
        If you are buying on behalf of a business or organisation, our{" "}
        <a href="/terms">Terms &amp; Conditions</a> apply and the warranty
        described above still applies.
      </p>

      <h2>Recycling</h2>
      <p>
        APK Industries operates a WEEE take-back scheme. Contact us when your
        unit reaches the end of its life and we will arrange collection.
      </p>

      <h2>Contact</h2>
      <p>
        APK Industries Ltd, Sparkhouse, Rope Walk, Lincoln LN6 7DQ. Please use
        our <a href="/contact">contact form</a> or email{" "}
        <a href="mailto:alan@apkindustries.com">alan@apkindustries.com</a>.
      </p>
    </LegalLayout>
  );
}

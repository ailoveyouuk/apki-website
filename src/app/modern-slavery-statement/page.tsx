import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Modern Slavery Statement | APKI",
  description:
    "APK Industries Ltd's statement on modern slavery and human trafficking in its business and supply chains.",
};

export default function ModernSlaveryPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Modern Slavery Statement"
      updated="3 July 2026"
    >
      <p>
        In the spirit of section 54 of the UK Modern Slavery Act 2015, APK
        Industries Ltd voluntarily publishes this statement setting out the
        steps we take to prevent modern slavery and human trafficking in our
        business and supply chains.
      </p>

      <h2>Our business</h2>
      <p>
        APK Industries Ltd designs and manufactures ruggedised, zero-emission
        Portable Power Stations, supplying UK Distribution Network Operators,
        healthcare providers, utilities, and emergency services, and —
        increasingly — humanitarian, NGO, and defence organisations operating
        internationally.
      </p>

      <h2>Our supply chain</h2>
      <p>
        Our products depend on a global supply chain, including battery
        cells, electronic components, and manufacturing partners. We expect
        our suppliers to operate to standards consistent with our own ethical
        trading policy and supplier code of conduct.
      </p>

      <h2>Our policies</h2>
      <ul>
        <li>
          An ethical trading policy and supplier code of conduct setting out
          the standards we expect throughout our supply chain.
        </li>
        <li>
          Quality and environmental management systems certified to ISO 9001
          and ISO 14001.
        </li>
        <li>
          A waste management policy, including participation in the WEEE
          take-back scheme for end-of-life units.
        </li>
      </ul>

      <h2>Due diligence</h2>
      <p>
        We work with suppliers we know and can hold accountable, and we
        review our supplier relationships as our business grows
        internationally, particularly as we expand into new markets and
        supply chains for humanitarian and field deployment.
      </p>

      <h2>Review</h2>
      <p>
        This statement is reviewed periodically as our business and supply
        chain evolve. Questions can be directed to{" "}
        <a href="mailto:alan@apkindustries.com">alan@apkindustries.com</a>.
      </p>
    </LegalLayout>
  );
}

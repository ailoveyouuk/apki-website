// Downloadable documents. Files live in /public/downloads and were carried
// over from the old site's Resources and Products pages (see
// content/old-site-assets). The old "Cookie & GDPR Notice" PDF is deliberately
// not included: the on-site Cookie Policy and Privacy Policy replace it.

export type Resource = {
  slug: string;
  group: string;
  title: string;
  description: string;
  pages: number;
  sizeKb: number;
};

export const resources: Resource[] = [
  {
    "slug": "user-manual-serial-above-002392",
    "group": "Product documentation",
    "title": "User manual \u2014 serial numbers above 002392",
    "description": "Safety, operating and charging instructions for current units.",
    "pages": 2,
    "sizeKb": 1009
  },
  {
    "slug": "user-manual-english-impaired-vision",
    "group": "Product documentation",
    "title": "User manual \u2014 English (impaired vision)",
    "description": "Safety, operating and charging instructions. April 2024 issue.",
    "pages": 2,
    "sizeKb": 1020
  },
  {
    "slug": "wifi-instructions",
    "group": "Product documentation",
    "title": "Wi-Fi router fitting instructions",
    "description": "How to attach and power the Wi-Fi router on the power station.",
    "pages": 1,
    "sizeKb": 233
  },
  {
    "slug": "fault-codes",
    "group": "Product documentation",
    "title": "Display fault codes",
    "description": "What each display fault means, and how to reset or remedy it.",
    "pages": 1,
    "sizeKb": 262
  },
  {
    "slug": "un38-3-test-report",
    "group": "Product documentation",
    "title": "UN38.3 lithium battery transport test report",
    "description": "Report TCT210111B694 for model APKI2200Li, issued 25 February 2021 by Shenzhen TCT Testing Technology (CNAS-accredited). Conclusion: qualified.",
    "pages": 20,
    "sizeKb": 1336
  },
  {
    "slug": "weee-directive",
    "group": "Environment & sustainability",
    "title": "WEEE Regulation Notice",
    "description": "APKI's obligations and take-back arrangements under the WEEE Regulations.",
    "pages": 3,
    "sizeKb": 116
  },
  {
    "slug": "environmental-policy",
    "group": "Environment & sustainability",
    "title": "Environmental Policy",
    "description": "APKI's approach to managing its environmental impact.",
    "pages": 3,
    "sizeKb": 99
  },
  {
    "slug": "waste-management",
    "group": "Environment & sustainability",
    "title": "Waste Management Policy",
    "description": "How waste is reduced, segregated and recycled.",
    "pages": 5,
    "sizeKb": 128
  },
  {
    "slug": "carbon-reduction-plan",
    "group": "Environment & sustainability",
    "title": "Carbon Reduction Plan",
    "description": "APKI's commitment and plan to reduce its carbon emissions.",
    "pages": 2,
    "sizeKb": 108
  },
  {
    "slug": "sustainable-delivery-policy",
    "group": "Environment & sustainability",
    "title": "Sustainable Delivery Policy",
    "description": "How APKI keeps the impact of its deliveries low.",
    "pages": 1,
    "sizeKb": 332
  },
  {
    "slug": "code-of-ethics",
    "group": "Ethics & people",
    "title": "Code of Ethics",
    "description": "The standards of conduct expected of everyone at APKI.",
    "pages": 4,
    "sizeKb": 116
  },
  {
    "slug": "ethical-trading",
    "group": "Ethics & people",
    "title": "Ethical Trading Policy",
    "description": "APKI's ethical trading commitments.",
    "pages": 4,
    "sizeKb": 115
  },
  {
    "slug": "supplier-code-of-conduct",
    "group": "Ethics & people",
    "title": "Supplier Code of Conduct",
    "description": "The standards APKI expects of its suppliers.",
    "pages": 6,
    "sizeKb": 135
  },
  {
    "slug": "human-rights-modern-slavery",
    "group": "Ethics & people",
    "title": "Human Rights & Anti-Modern Slavery Policy",
    "description": "APKI's position on human rights and modern slavery.",
    "pages": 4,
    "sizeKb": 115
  },
  {
    "slug": "social-accountability-srp",
    "group": "Ethics & people",
    "title": "Social Accountability Policy",
    "description": "APKI's social accountability commitments.",
    "pages": 5,
    "sizeKb": 150
  },
  {
    "slug": "equality-diversity",
    "group": "Ethics & people",
    "title": "Equality & Diversity Policy",
    "description": "APKI's commitment to equality, diversity and inclusion.",
    "pages": 3,
    "sizeKb": 95
  },
  {
    "slug": "harassment-policy",
    "group": "Ethics & people",
    "title": "Harassment Policy",
    "description": "APKI's anti-harassment policy.",
    "pages": 4,
    "sizeKb": 121
  },
  {
    "slug": "whistleblower-policy",
    "group": "Ethics & people",
    "title": "Whistle Blower Policy",
    "description": "How concerns can be raised and handled.",
    "pages": 5,
    "sizeKb": 136
  },
  {
    "slug": "complaints-procedure",
    "group": "Ethics & people",
    "title": "Complaints Procedure",
    "description": "How to make a complaint and how it is handled.",
    "pages": 4,
    "sizeKb": 156
  },
  {
    "slug": "terms-conditions-of-sale",
    "group": "Commercial & legal",
    "title": "Terms & Conditions for Sale of Goods",
    "description": "Terms for business customers buying APKI goods.",
    "pages": 7,
    "sizeKb": 119
  },
  {
    "slug": "privacy-notice-b2b",
    "group": "Commercial & legal",
    "title": "Privacy Notice (business customers)",
    "description": "How APKI handles personal data in its business-to-business dealings.",
    "pages": 5,
    "sizeKb": 123
  }
];

export const resourceGroups = [
  "Product documentation",
  "Environment & sustainability",
  "Ethics & people",
  "Commercial & legal",
] as const;

export const resourceHref = (r: Pick<Resource, "slug">) =>
  `/downloads/apki-${r.slug}.pdf`;

export const getResource = (slug: string) => resources.find((r) => r.slug === slug)!;

export function formatSize(kb: number) {
  return kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`;
}

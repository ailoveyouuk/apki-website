export const timeline = [
  {
    year: "1994",
    short: "AP Kawasaki founded",
    text: "AP Kawasaki is established as a supplier of Kawasaki-branded generators and garden machinery, sold to companies throughout Europe.",
  },
  {
    year: "2006",
    short: "Rebrands to APK Industries",
    text: "AP Kawasaki rebrands to APK Industries and begins building petrol and diesel generators for other brands, including Hyundai and JCB.",
  },
  {
    year: "2006–2021",
    short: "Petrol & diesel generators",
    text: "For over a decade, APK Industries builds and sells petrol and diesel generators to a wide range of clients across a variety of industries.",
  },
  {
    year: "2020",
    short: "Pivots to clean energy",
    text: "In response to growing environmental concern surrounding petrol and diesel generators, APKI ventures into clean energy.",
  },
  {
    year: "Spring 2021",
    short: "EIC clean energy challenge",
    text: "The EIC calls for innovation in clean energy — clean generators to support vulnerable people during power outages. APKI responds.",
  },
  {
    year: "Summer 2021",
    short: "Trials with 4 of 6 UK DNOs",
    text: "APKI is invited to supply zero-emission generator samples to four of the UK's six Distribution Network Operators. Units are trialled over the following year.",
  },
  {
    year: "2021–2022",
    short: "UKAS accreditation",
    text: "APKI applies for third-party compliance verification through UKAS and is subsequently accredited.",
  },
  {
    year: "Winter 2023",
    short: "First DNO contract",
    text: "APKI moves to business-as-usual with Northern Powergrid — its first UK DNO contract. Other DNOs follow.",
  },
  {
    year: "Spring 2023",
    short: "Built-in Wi-Fi developed",
    text: "APKI develops a built-in Wi-Fi system for the portable power station, enabling remote power and remote connectivity.",
  },
  {
    year: "2024",
    short: "Scottish Power & SSEN frameworks",
    text: "APKI is awarded tender and framework agreements with Scottish Power and Scottish & Southern Energy Networks.",
  },
  {
    year: "2024–2025",
    short: "Remote monitoring & charging racks",
    text: "APKI develops a remote monitoring system and compliant charging racks, installed in DNO depots across the country.",
  },
  {
    year: "2025",
    short: "G-force impact detection",
    text: "Units are equipped with enhanced remote monitoring, including G-force impact detection.",
  },
  {
    year: "Today",
    short: "Ready for humanitarian, NGO & defence deployment",
    text: "Field-proven in the UK's most safety-critical home care scenarios, APKI brings that same reliability to humanitarian aid, NGO, defence, and disaster-response deployment worldwide.",
  },
];

export const specs = [
  { label: "Model", value: "APKI 2200Li" },
  { label: "Rated Power / Continuous Power", value: "2000W / 2220Wh" },
  { label: "Capacity", value: "2220Wh — 600,000mAh" },
  { label: "Battery Type", value: "Lithium-ion" },
  { label: "AC Charge Input", value: "CC/CV 25.5V/8A, 200W max" },
  { label: "Vehicle (12/24V) Charge Input", value: "8A max, 200W" },
  { label: "Solar (PV) Charge Input", value: "18–30V, 8A max, 200W" },
  { label: "AC Output", value: "230V 50Hz Pure Sine Wave" },
  { label: "USB Output", value: "5V/2.4A max" },
  { label: "USB 3.0", value: "5V/3A, 9V/2A, 12V/1.5A" },
  { label: "Type-C Output", value: "PD60W — 5V/3A, 12V/3A, 15V/3A, 20V/3A" },
  { label: "Weight / Dimensions", value: "18.9kg / H335 × W320 × D235mm" },
  { label: "Recharge Time (30–70%)", value: "≈ 3 hours" },
  { label: "Recharge Time (0–100%)", value: "≤ 10 hours" },
  { label: "Warranty", value: "2-year comprehensive manufacturer's warranty" },
];

export const compliance = [
  "RoHS: BS EN IEC 63000:2011/65/EU",
  "Low Voltage Directive: EN62368-1, EN62133 2014/35/EU",
  "EMC: BS EN 61000-6-2/-3, EN55032:2015+A1:2020, EN55035:2017+A11:2020",
  "Product Safety: BS EN 60950-1, BS EN 62133 (1 & 2), BS EN 62368-1, IEC 60083",
  "ISO 9001 — Quality Management (UKAS / British Assessment Bureau)",
  "ISO 14001 — Environmental Management (UKAS / British Assessment Bureau)",
  "UK CA / UKNI / CE marked",
  "Third-party UKAS test house (PPS), CNAS-accredited test house (battery pack)",
];

// Formal certification records, as issued by Amtivo Group Ltd (t/a British
// Assessment Bureau) — used wherever we cite certificate numbers/validity
// rather than just naming the standard.
export const certifications = [
  {
    standard: "ISO 9001:2015",
    scope: "Design and supply of portable power stations to clients globally",
    certNumber: "264834",
    issuedBy: "Amtivo Group Ltd, t/a British Assessment Bureau (UKAS-accredited)",
    initialCertification: "24 April 2025",
    latestIssue: "24 April 2026",
    expiry: "23 April 2028",
  },
  {
    standard: "ISO 14001:2015",
    scope: "Design and supply of portable power stations to clients globally",
    certNumber: "265636",
    issuedBy: "Amtivo Group Ltd, t/a British Assessment Bureau (UKAS-accredited)",
    initialCertification: "24 April 2025",
    latestIssue: "24 April 2026",
    expiry: "23 April 2028",
  },
];

// The independent, real-world medical-equipment testing programme that
// underpins the "built to power medical devices" claim — sourced from the
// product spec sheet and the NHS Innovation Overview submission.
export const medicalTesting = {
  site: "Queens Medical Centre, Nottingham, UK",
  headline:
    "Third-party tested on the full range of medical equipment used in UK home care settings.",
  detail:
    "The APKI 2200Li is third-party tested and certified to every standard required to operate medical equipment, and independently tested at Queens Medical Centre, Nottingham, on the real devices it's built to power — not simulated loads. To APKI's knowledge, it is the only portable power station tested across the complete range of medical equipment used in UK home settings.",
  equipment: [
    "Home dialysis machines",
    "Electrically powered hospital beds",
    "Specialist pressure-care mattresses",
    "Domestic fridges for temperature-sensitive medicines",
    "Oxygen concentrators",
    "CPAP / BiPAP respiratory machines",
    "Nebulisers",
    "Suction machines",
  ],
  // A short, representative sample of the full equipment list above — used
  // wherever we reference the testing programme in passing rather than
  // listing it exhaustively.
  equipmentExamples: [
    "Home dialysis machines",
    "Electrically powered hospital beds",
    "Oxygen concentrators",
    "Domestic fridges for temperature-sensitive medicines",
  ],
};

// The cross-sector framing: medical-device reliability isn't a separate
// vertical alongside aid, defence, and emergency response — it's the proof
// point every one of those sectors depends on, because they all run medical
// equipment in the field too.
export const sectors = [
  {
    title: "Home & Critical Medical Care",
    text: "The proving ground: dialysis machines, powered hospital beds, respiratory equipment, and medicine fridges, independently tested at Queens Medical Centre, Nottingham.",
    bitmap: "HOUSE",
  },
  {
    title: "Emergency Services",
    text: "Ambulance stations and triage points run the same oxygen, monitoring, and infusion equipment — proven medical-grade reliability, on demand.",
    bitmap: "AMBULANCE",
  },
  {
    title: "Humanitarian Aid & NGOs",
    text: "Field clinics and displacement camps depend on cold-chain vaccine storage, dialysis, and respiratory support — the exact equipment APKI is proven on.",
    bitmap: "CROSS_CIRCLE",
  },
  {
    title: "Defence & Field Operations",
    text: "Combat medical units and field hospitals carry the same life-support and diagnostic equipment, silently powered with no fuel resupply chain.",
    bitmap: "TENT",
  },
];

// The second half of the pitch: input flexibility that matches medical-grade
// reliability. Works off any source, at any rating, on any country's grid.
export const universalPower = {
  headline: "Any source. Any rating. Any country.",
  detail:
    "Grid mains, solar PV, a 12/24V vehicle, or a generator — the APKI 2200Li accepts a wide voltage and frequency range and outputs clean, silent AC regardless of the local supply standard. The same unit that's proven on medical equipment in a UK home works on the power available at a field hospital, a disaster response site, or a deployment anywhere in the world.",
};

export const caseStudies = [
  {
    title: "Home dialysis, uninterrupted",
    org: "Northern Powergrid customer",
    summary:
      "A patient on home dialysis was loaned an APKI 2200Li during a power cut. It powered the dialysis machine, home router, and phone charging — a combined load of around 150 watts, using only 25% of the unit's capacity over the full session. The treatment continued safely at home, and the household later asked to purchase their own unit.",
    tag: "Medical continuity",
  },
  {
    title: "Palliative care, safeguarded",
    org: "DNO welfare deployment",
    summary:
      "A carer supporting a palliative patient relies on an electric hospital bed and mattress to reposition their relative every two hours. During a prolonged outage, care was interrupted for around five hours waiting on backup power — revealing why pre-positioned, ruggedised units matter more than reactive supply.",
    tag: "Complex care at home",
  },
  {
    title: "£20,000 in medicine, protected",
    org: "Scottish Power customer",
    summary:
      "A vulnerable household stores high-value, temperature-sensitive medicines in a domestic fridge. A loaned APKI unit prevented a cold-chain breach during an outage — the household described it as 'fantastic' and sought to buy their own for future resilience.",
    tag: "Cold-chain protection",
  },
];

export const dnoList = [
  "Northern Powergrid",
  "Scottish Power",
  "Scottish & Southern Energy Networks",
  "Electricity North West",
];

// Partner and accreditation logos — trimmed to their own bounding box and
// normalised to a common height so they sit consistently in a logo grid
// regardless of source aspect ratio. Grouped by relationship type so pages
// can pull just the group that's relevant to them.
type PartnerLogo = { name: string; src: string; width: number; height: number };

export const partnerLogos: {
  energyNetworks: PartnerLogo[];
  clinical: PartnerLogo[];
  certifications: PartnerLogo[];
  government: PartnerLogo[];
} = {
  energyNetworks: [
    { name: "Northern Powergrid", src: "/images/partners/northern-powergrid.png", width: 1451, height: 300 },
    { name: "Scottish Power Energy Networks", src: "/images/partners/scottish-power.png", width: 946, height: 300 },
    { name: "Scottish & Southern Electricity Networks", src: "/images/partners/ssen.png", width: 1538, height: 300 },
    { name: "Electricity North West", src: "/images/partners/electricity-north-west.png", width: 1203, height: 300 },
  ],
  clinical: [
    {
      name: "Nottingham University Hospitals NHS Trust",
      src: "/images/partners/nottingham-hospitals.png",
      width: 558,
      height: 300,
    },
  ],
  certifications: [
    { name: "ISO 9001:2015", src: "/images/partners/iso-9001.png", width: 354, height: 300 },
    { name: "ISO 14001:2015", src: "/images/partners/iso-14001.png", width: 300, height: 300 },
    { name: "UKAS Testing", src: "/images/partners/ukas.png", width: 231, height: 300 },
    { name: "RoHS Compliant", src: "/images/partners/rohs.png", width: 300, height: 300 },
    { name: "UKCA / CE Marked", src: "/images/partners/ukca-ce.png", width: 722, height: 300 },
  ],
  government: [
    {
      name: "Department for Business & Trade — GREAT Britain & Northern Ireland",
      src: "/images/partners/dbt-great.png",
      width: 1149,
      height: 300,
    },
  ],
};

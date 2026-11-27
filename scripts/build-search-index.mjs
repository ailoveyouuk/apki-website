// Builds public/search-index.json: one flat list of searchable documents
// (site pages + downloadable PDFs). Runs automatically before `dev` and
// `build`; it needs no external tools. PDF text comes from the committed
// src/data/pdf-text.json (see extract-pdf-text.mjs).
//
// The index is static, so there is no search service to run or pay for.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = join(root, "src", "app");
const shopOn = process.env.NEXT_PUBLIC_SHOP_ENABLED === "true";

const clean = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&rsquo;|&lsquo;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/\\u([0-9a-f]{4})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\s+/g, " ")
    .trim();

function metaOf(src) {
  const t = src.match(/title:\s*"([^"]+)"/);
  const d = src.match(/description:\s*\n?\s*"([^"]+)"/);
  const title = t ? clean(t[1]).replace(/\s*\|\s*APKI$/, "") : "";
  return { title, description: d ? clean(d[1]) : "" };
}

// Visible text: JSX text nodes plus longer string literals (copy held in arrays).
function bodyOf(src) {
  const bits = [];
  for (const m of src.matchAll(/>([^<>{}]{3,})</g)) bits.push(m[1]);
  for (const m of src.matchAll(/"((?:[^"\\\n]|\\.){40,})"/g)) bits.push(m[1]);
  for (const m of src.matchAll(/`([^`$]{40,})`/g)) bits.push(m[1]);
  return clean(bits.join(" "))
    .replace(/\b(?:className|href|src|alt)=\S+/g, "")
    .slice(0, 8000);
}

function pageFiles(dir, base = "") {
  const found = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) found.push(...pageFiles(p, `${base}/${name}`));
    else if (name === "page.tsx") found.push({ url: base || "/", file: p });
  }
  return found;
}

const SKIP = new Set(["/search"]);
const SHOP_ONLY = new Set(["/shop", "/shop/apki-2200li", "/delivery-returns"]);
const FALLBACK = {
  "/": { title: "Home", description: "APKI ruggedised portable power stations." },
  "/shop": { title: "Shop", description: "Buy the APKI 2200Li portable power station." },
  "/shop/apki-2200li": { title: "APKI 2200Li — buy online", description: "Order the APKI 2200Li portable power station with delivery and returns." },
  "/delivery-returns": { title: "Delivery & returns", description: "Delivery, returns and warranty information." },
};
// Extra words people use that the page copy may not.
const KEYWORDS = {
  "/product": "specifications specs battery capacity wh watt sine wave inverter solar charging wifi rugged IP rating weight dimensions lithium NMC 2200Li 2220Wh",
  "/faq": "questions help support how does it work",
  "/contact": "email phone address enquiry get in touch quote sales partner",
  "/company": "about us history AP Kawasaki mission team",
  "/quality-compliance": "ISO 9001 ISO 14001 UKAS RoHS CE UKCA certificates certification standards",
  "/case-studies": "NHS medical hospital Queens Medical Centre utilities DNO deployment evidence",
  "/resources": "downloads pdf documents manuals policies",
  "/shop": "buy purchase order price",
  "/shop/apki-2200li": "buy purchase order price checkout",
  "/delivery-returns": "shipping postage refund warranty returns 14 days",
  "/privacy-policy": "gdpr data protection personal data",
  "/cookies": "consent tracking analytics cookie settings",
  "/terms": "terms conditions website use",
  "/modern-slavery-statement": "human trafficking supply chain ethics",
  "/accessibility": "screen reader wcag disability",
};

const docs = [];

for (const { url, file } of pageFiles(appDir).sort((a, b) => a.url.localeCompare(b.url))) {
  if (SKIP.has(url)) continue;
  if (SHOP_ONLY.has(url) && !shopOn) continue;
  const src = readFileSync(file, "utf8");
  const m = metaOf(src);
  const fb = FALLBACK[url] ?? {};
  docs.push({
    id: `page:${url}`,
    type: "Page",
    url,
    title: m.title || fb.title || url,
    description: m.description || fb.description || "",
    keywords: KEYWORDS[url] ?? "",
    text: bodyOf(src),
  });
}

// Downloads. resources.ts holds a plain JSON array, so parse it directly.
const resSrc = readFileSync(join(root, "src", "lib", "resources.ts"), "utf8");
const arr = resSrc.slice(resSrc.indexOf("= [", resSrc.indexOf("export const resources")) + 2);
const resources = JSON.parse(arr.slice(0, arr.lastIndexOf("];") + 1));
const pdfTextPath = join(root, "src", "data", "pdf-text.json");
const pdfText = existsSync(pdfTextPath) ? JSON.parse(readFileSync(pdfTextPath, "utf8")) : {};
if (!existsSync(pdfTextPath)) console.warn("search: src/data/pdf-text.json missing — PDFs indexed by title only");

for (const r of resources) {
  const file = `apki-${r.slug}.pdf`;
  docs.push({
    id: `file:${r.slug}`,
    type: r.group === "Product documentation" ? "Download" : "Policy",
    url: `/downloads/${file}`,
    title: r.title,
    description: r.description,
    keywords: `${r.group} pdf download`,
    text: (pdfText[file] ?? "").slice(0, 60000),
    meta: `PDF · ${r.pages} page${r.pages === 1 ? "" : "s"} · ${r.sizeKb >= 1024 ? (r.sizeKb / 1024).toFixed(1) + " MB" : r.sizeKb + " KB"}`,
  });
}

writeFileSync(join(root, "public", "search-index.json"), JSON.stringify(docs));
console.log(`search: indexed ${docs.length} documents (${docs.filter((d) => d.type !== "Page").length} downloads, shop ${shopOn ? "on" : "off"})`);

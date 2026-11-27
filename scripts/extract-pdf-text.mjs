// Extracts the text of every PDF in public/downloads into src/data/pdf-text.json
// so the search index can include document contents without needing pdftotext
// on the build server. Re-run after adding or changing a PDF:
//
//   npm run search:pdfs     (needs `pdftotext`, from poppler: brew install poppler)
//
// then commit src/data/pdf-text.json.
import { execFileSync } from "node:child_process";
import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "public", "downloads");
const out = {};

for (const file of readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf")).sort()) {
  const raw = execFileSync("pdftotext", [join(dir, file), "-"], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  // Collapse layout whitespace and re-join hyphenated line breaks.
  out[file] = raw
    .replace(/-\n(?=[a-z])/g, "")
    .replace(/\s+/g, " ")
    .trim();
  console.log(`${file}: ${out[file].length} chars`);
}

mkdirSync(join(root, "src", "data"), { recursive: true });
writeFileSync(join(root, "src", "data", "pdf-text.json"), JSON.stringify(out, null, 1) + "\n");

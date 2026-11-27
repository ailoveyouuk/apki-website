// Client-side search over /search-index.json (built by scripts/build-search-index.mjs).
import MiniSearch from "minisearch";

export type SearchDoc = {
  id: string;
  type: "Page" | "Download" | "Policy";
  url: string;
  title: string;
  description: string;
  keywords: string;
  text: string;
  meta?: string;
};

export type SearchHit = SearchDoc & { score: number; snippet: string };

type Engine = { mini: MiniSearch<SearchDoc>; byId: Map<string, SearchDoc> };

let enginePromise: Promise<Engine> | null = null;

export function loadSearch(): Promise<Engine> {
  if (!enginePromise) {
    enginePromise = fetch("/search-index.json")
      .then((r) => {
        if (!r.ok) throw new Error(`search index ${r.status}`);
        return r.json() as Promise<SearchDoc[]>;
      })
      .then((docs) => {
        const mini = new MiniSearch<SearchDoc>({
          fields: ["title", "description", "keywords", "text"],
          storeFields: [],
          searchOptions: {
            boost: { title: 6, keywords: 3, description: 2, text: 1 },
            prefix: true,
            fuzzy: (term) => (term.length > 4 ? 0.2 : false),
            combineWith: "AND",
          },
        });
        mini.addAll(docs);
        return { mini, byId: new Map(docs.map((d) => [d.id, d])) };
      })
      .catch((e) => {
        enginePromise = null; // allow a retry
        throw e;
      });
  }
  return enginePromise;
}

function snippetFor(doc: SearchDoc, terms: string[]): string {
  const hay = doc.text;
  if (!hay) return doc.description;
  const lower = hay.toLowerCase();
  let at = -1;
  for (const t of terms) {
    const i = lower.indexOf(t.toLowerCase());
    if (i !== -1 && (at === -1 || i < at)) at = i;
  }
  if (at === -1) return doc.description || hay.slice(0, 160);
  const start = Math.max(0, at - 70);
  const end = Math.min(hay.length, at + 130);
  return `${start > 0 ? "…" : ""}${hay.slice(start, end).trim()}${end < hay.length ? "…" : ""}`;
}

export async function runSearch(query: string, limit = 30): Promise<SearchHit[]> {
  const q = query.trim();
  if (!q) return [];
  const { mini, byId } = await loadSearch();
  let results = mini.search(q);
  // If every word must match and nothing does, fall back to any word.
  if (results.length === 0 && q.includes(" ")) results = mini.search(q, { combineWith: "OR" });
  return results.slice(0, limit).flatMap((r) => {
    const doc = byId.get(r.id as string);
    if (!doc) return [];
    return [{ ...doc, score: r.score, snippet: snippetFor(doc, r.terms.length ? r.terms : q.split(/\s+/)) }];
  });
}

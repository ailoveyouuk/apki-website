"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { runSearch, type SearchHit } from "@/lib/search";
import { trackEvent } from "@/lib/analytics";

const TYPE_STYLE: Record<string, string> = {
  Page: "bg-apki-navy/10 text-apki-navy",
  Download: "bg-apki-green/15 text-apki-green",
  Policy: "bg-black/10 text-apki-charcoal",
};

export default function SearchResults() {
  const params = useSearchParams();
  const query = (params.get("q") ?? "").trim();
  const [res, setRes] = useState<{ q: string; hits: SearchHit[]; failed: boolean } | null>(null);
  const logged = useRef("");

  useEffect(() => {
    if (!query) return;
    let cancelled = false;
    runSearch(query)
      .then((r) => {
        if (cancelled) return;
        setRes({ q: query, hits: r, failed: false });
        // GA4 "search" event (consent-gated inside trackEvent). Logged once per query.
        if (logged.current !== query) {
          logged.current = query;
          trackEvent("search", { search_term: query, results_count: r.length });
        }
      })
      .catch(() => !cancelled && setRes({ q: query, hits: [], failed: true }));
    return () => {
      cancelled = true;
    };
  }, [query]);

  const ready = res !== null && res.q === query;
  const hits = ready ? res.hits : null;
  const failed = ready && res.failed;

  return (
    <div>
      <SearchForm key={query} initial={query} />
      <Results query={query} hits={query ? hits : []} failed={failed} />
    </div>
  );
}

function SearchForm({ initial }: { initial: string }) {
  const router = useRouter();
  const [input, setInput] = useState(initial);
  return (
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          const t = input.trim();
          if (t) router.push(`/search?q=${encodeURIComponent(t)}`);
        }}
        className="flex max-w-2xl gap-2"
      >
        <label htmlFor="search-page-input" className="sr-only">
          Search
        </label>
        <input
          id="search-page-input"
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. user manual, fault codes, UN38.3, returns"
          className="min-w-0 flex-1 rounded-sm border border-black/20 px-4 py-3 text-base outline-none focus:border-apki-green"
        />
        <button className="rounded-sm bg-apki-green px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-apki-navy">
          Search
        </button>
      </form>
  );
}

function Results({ query, hits, failed }: { query: string; hits: SearchHit[] | null; failed: boolean }) {
  return (
      <div className="mt-8" aria-live="polite">
        {!query ? (
          <p className="text-apki-charcoal/70">Search the site and every downloadable document, including the contents of the PDFs.</p>
        ) : hits === null ? (
          <p className="text-apki-charcoal/70">Searching…</p>
        ) : failed ? (
          <p className="text-apki-charcoal/70">Search is unavailable right now. Try the <Link href="/resources" className="font-semibold text-apki-green underline">Resources page</Link> or <Link href="/contact" className="font-semibold text-apki-green underline">contact us</Link>.</p>
        ) : hits.length === 0 ? (
          <div className="text-apki-charcoal/80">
            <p>No results for &ldquo;{query}&rdquo;.</p>
            <p className="mt-2">
              Try fewer or different words, browse the <Link href="/resources" className="font-semibold text-apki-green underline">Resources &amp; Downloads</Link>, or{" "}
              <Link href="/contact" className="font-semibold text-apki-green underline">contact us</Link>.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-apki-charcoal/70">
              {hits.length} result{hits.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
            </p>
            <ul className="mt-4 divide-y divide-black/10 border-y border-black/10">
              {hits.map((h) => {
                const isFile = h.type !== "Page";
                return (
                  <li key={h.id} className="py-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`rounded-sm px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${TYPE_STYLE[h.type]}`}>{h.type}</span>
                      {h.meta && <span className="text-xs text-apki-charcoal/60">{h.meta}</span>}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-apki-navy">
                      {isFile ? (
                        <a href={h.url} target="_blank" rel="noopener" className="hover:text-apki-green">{h.title}</a>
                      ) : (
                        <Link href={h.url} className="hover:text-apki-green">{h.title}</Link>
                      )}
                    </h2>
                    <p className="mt-1 text-sm text-apki-charcoal/80">{h.snippet}</p>
                    <p className="mt-1 text-xs text-apki-charcoal/50">{h.url}</p>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { loadSearch, runSearch, type SearchHit } from "@/lib/search";

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

/**
 * Header search. `variant="icon"` is a button that expands a panel (desktop);
 * `variant="inline"` is an always-open field (mobile menu).
 */
export default function SearchBox({
  variant = "icon",
  onNavigate,
}: {
  variant?: "icon" | "inline";
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(variant === "inline");
  const [q, setQ] = useState("");
  const [res, setRes] = useState<{ q: string; hits: SearchHit[] }>({ q: "", hits: [] });
  const hits = res.q === q ? res.hits : [];
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!q.trim()) return;
    let cancelled = false;
    runSearch(q, 6)
      .then((r) => !cancelled && setRes({ q, hits: r }))
      .catch(() => !cancelled && setRes({ q, hits: [] }));
    return () => {
      cancelled = true;
    };
  }, [q]);

  useEffect(() => {
    if (variant !== "icon" || !open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, variant]);

  const done = () => {
    setOpen(variant === "inline");
    setQ("");
    onNavigate?.();
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    router.push(`/search?q=${encodeURIComponent(term)}`);
    done();
  };

  const field = (
    <form onSubmit={submit} role="search" className="relative">
      <label htmlFor={`site-search-${variant}`} className="sr-only">
        Search the site
      </label>
      <input
        id={`site-search-${variant}`}
        ref={inputRef}
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => void loadSearch().catch(() => {})}
        placeholder="Search pages and downloads"
        autoComplete="off"
        className="w-full rounded-sm border border-black/15 bg-white px-3 py-2 pr-10 text-sm text-apki-charcoal outline-none focus:border-apki-green"
      />
      <button type="submit" aria-label="Search" className="absolute right-2 top-1/2 -translate-y-1/2 text-apki-charcoal hover:text-apki-green">
        <SearchIcon className="h-4 w-4" />
      </button>
      {q.trim() && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-sm border border-black/10 bg-white shadow-lg">
          {hits.length === 0 ? (
            <p className="px-3 py-3 text-sm text-apki-charcoal/70">No quick matches. Press Enter to search everything.</p>
          ) : (
            <ul>
              {hits.map((h) => (
                <li key={h.id}>
                  <a
                    href={h.url}
                    {...(h.type === "Page" ? {} : { target: "_blank", rel: "noopener" })}
                    onClick={done}
                    className="flex items-baseline justify-between gap-3 px-3 py-2 text-sm hover:bg-apki-green/10"
                  >
                    <span className="font-semibold text-apki-navy">{h.title}</span>
                    <span className="shrink-0 text-xs uppercase tracking-wide text-apki-charcoal/60">{h.type}</span>
                  </a>
                </li>
              ))}
              <li className="border-t border-black/5">
                <button type="submit" className="w-full px-3 py-2 text-left text-sm font-semibold text-apki-green hover:bg-apki-green/10">
                  See all results
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </form>
  );

  if (variant === "inline") return <div className="py-2">{field}</div>;

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-label="Search the site"
        aria-expanded={open}
        onClick={() => {
          setOpen((v) => !v);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        className="text-apki-charcoal transition-colors hover:text-apki-green"
      >
        <SearchIcon />
      </button>
      {open && <div className="absolute right-0 top-full mt-3 w-80">{field}</div>}
    </div>
  );
}

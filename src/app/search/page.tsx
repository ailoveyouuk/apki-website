import type { Metadata } from "next";
import { Suspense } from "react";
import SearchResults from "@/components/SearchResults";

// Internal search results are not useful to Google, so keep them out of the index.
export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h1 className="font-heading text-3xl font-bold text-apki-navy lg:text-4xl">Search</h1>
        <div className="mt-8">
          <Suspense fallback={<p className="text-apki-charcoal/70">Loading…</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

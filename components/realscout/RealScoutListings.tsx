"use client";

import { Button } from "@/components/ui/button";
import PalmsListingCard from "./PalmsListingCard";

function formatPrice(n: number) {
  return n >= 1_000_000
    ? `$${parseFloat((n / 1_000_000).toFixed(2))}M`
    : `$${Math.round(n / 1000)}K`;
}

type RealScoutListingsProps = {
  /** Compact: used inside a page's container directly below the hero. */
  compact?: boolean;
  /** Price range for this page's buyers (see lib/realscout-ranges.ts). */
  priceMin?: number;
  priceMax?: number;
};

export default function RealScoutListings({
  compact = false,
  priceMin = 500000,
  priceMax = 800000,
}: RealScoutListingsProps) {
  return (
    <section
      aria-label="Office listings"
      className={compact ? "mb-16 rounded-2xl bg-slate-50 px-4 py-10 md:px-8" : "py-16 md:py-24 bg-slate-50"}
    >
      <div className={compact ? "" : "container mx-auto px-4"}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-600 text-lg">
              Homes for sale from {formatPrice(priceMin)} to {formatPrice(priceMax)}
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">View All Properties</a>
          </Button>
        </div>

        {/* RealScout Widget - using dangerouslySetInnerHTML per rules */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="NEWEST"
              listing-status="For Sale"
              property-types=",SFR,MF,TC"
              price-min="${priceMin}"
              price-max="${priceMax}"
            ></realscout-office-listings>`,
          }}
        />
        <PalmsListingCard />
      </div>
    </section>
  );
}

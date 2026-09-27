import dynamic from "next/dynamic";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ARCADIA_COMMUNITY, type AmenityCategoryId } from "@/lib/amenities/arcadia-community";
import AmenityMapFallback from "@/components/amenities/AmenityMapFallback";

const AmenityMap = dynamic(() => import("@/components/amenities/AmenityMap"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[420px] rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 text-sm">
      Loading interactive map…
    </div>
  ),
});

type AmenityMapSectionProps = {
  title?: string;
  subtitle?: string;
  defaultCategory?: AmenityCategoryId;
  showViewAllLink?: boolean;
  variant?: "default" | "compact";
};

export default function AmenityMapSection({
  title = `Life Near ${ARCADIA_COMMUNITY.name}`,
  subtitle = `Explore dining, parks, golf, healthcare, and everyday essentials around ${ARCADIA_COMMUNITY.name} in ${ARCADIA_COMMUNITY.areaLabel}, Las Vegas.`,
  defaultCategory = "restaurants",
  showViewAllLink = true,
  variant = "default",
}: AmenityMapSectionProps) {
  return (
    <section
      className={variant === "compact" ? "py-10 md:py-12" : "py-16 md:py-20 bg-slate-50"}
      aria-labelledby="amenity-map-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold mb-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                What&apos;s Nearby
              </div>
              <h2 id="amenity-map-heading" className="text-3xl md:text-4xl font-bold text-slate-900">
                {title}
              </h2>
              <p className="mt-3 text-lg text-slate-600 max-w-3xl">{subtitle}</p>
            </div>
            {showViewAllLink && (
              <Link
                href="/amenities"
                className="inline-flex shrink-0 items-center justify-center rounded-md border border-blue-600 text-blue-600 px-5 py-2.5 font-semibold hover:bg-blue-50 transition-colors"
              >
                Full Nearby Amenities guide →
              </Link>
            )}
          </div>
          <AmenityMap
            defaultCategory={defaultCategory}
            heightClassName={variant === "compact" ? "min-h-[320px]" : "min-h-[420px]"}
            showCuratedOnFallback={variant !== "compact"}
          />
        </div>
      </div>
    </section>
  );
}

/** Server-safe fallback block for pages that need a static preview without client bundle. */
export function AmenityMapSectionFallback() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <AmenityMapFallback />
      </div>
    </section>
  );
}

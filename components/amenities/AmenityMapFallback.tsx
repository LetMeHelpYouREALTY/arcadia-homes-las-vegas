import {
  ARCADIA_COMMUNITY,
  CURATED_NEARBY_PLACES,
  type AmenityCategoryId,
} from "@/lib/amenities/arcadia-community";
import { formatCuratedAddress } from "@/lib/amenities/curated-place-utils";
import { buildEmbedMapUrl } from "@/lib/amenities/maps-env";
import Link from "next/link";

type AmenityMapFallbackProps = {
  activeCategory?: AmenityCategoryId;
  showCuratedList?: boolean;
  compact?: boolean;
};

export default function AmenityMapFallback({
  activeCategory,
  showCuratedList = true,
  compact = false,
}: AmenityMapFallbackProps) {
  const { lat, lng } = ARCADIA_COMMUNITY.coordinates;
  const embedSrc = buildEmbedMapUrl(lat, lng, ARCADIA_COMMUNITY.mapZoom);

  const filtered =
    activeCategory != null
      ? CURATED_NEARBY_PLACES.filter(
          (p) => p.category === activeCategory || p.category === "community"
        )
      : CURATED_NEARBY_PLACES;

  return (
    <div className="space-y-4">
      <div
        className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
        style={{ minHeight: compact ? 320 : 420 }}
      >
        <iframe
          title={`Map centered on ${ARCADIA_COMMUNITY.name}, ${ARCADIA_COMMUNITY.areaLabel}, Las Vegas`}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="text-sm text-slate-600">
        Map centered on {ARCADIA_COMMUNITY.name} in {ARCADIA_COMMUNITY.areaLabel}.{" "}
        <Link href="/amenities" className="text-blue-600 hover:underline font-medium">
          View the full Nearby Amenities guide
        </Link>
        .
      </p>
      {showCuratedList && (
        <ul className="grid gap-3 sm:grid-cols-2" aria-label="Featured nearby places">
          {filtered.map((place) => (
            <li
              key={`${place.name}-${place.postalCode}`}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm"
            >
              <p className="font-semibold text-slate-900">{place.name}</p>
              <p className="text-slate-600 mt-1">{formatCuratedAddress(place)}</p>
              {place.note && <p className="text-slate-500 mt-2 text-xs">{place.note}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import type { AmenityCategoryId } from "@/lib/amenities/arcadia-community";

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
  types: string[],
  radiusMeters: number
): Promise<google.maps.places.Place[]> {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
        locationRestriction: { center, radius: radiusMeters },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Places API expects string enum
        rankPreference: "POPULARITY" as any,
      });
      return places ?? [];
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}

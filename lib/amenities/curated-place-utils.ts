import type { CuratedPlace } from "@/lib/amenities/arcadia-community";

export function formatCuratedAddress(place: CuratedPlace): string {
  return `${place.streetAddress}, ${place.locality}, ${place.region} ${place.postalCode}`;
}

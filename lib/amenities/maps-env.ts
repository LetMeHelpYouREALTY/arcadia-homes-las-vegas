export function getGoogleMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  return key && key.length > 0 ? key : undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
  return mapId && mapId.length > 0 ? mapId : undefined;
}

export function buildDirectionsUrl(lat: number, lng: number, placeName?: string): string {
  const query = placeName
    ? encodeURIComponent(`${placeName} @${lat},${lng}`)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

export function buildEmbedMapUrl(lat: number, lng: number, zoom = 14): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

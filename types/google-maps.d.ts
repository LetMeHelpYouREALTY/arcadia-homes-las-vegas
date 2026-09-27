/** Minimal typings for Google Maps JS API + Places (New) used by AmenityMap. */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions);
    setCenter(latLng: LatLng | LatLngLiteral): void;
    fitBounds(bounds: LatLngBounds): void;
  }
  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }
  class InfoWindow {
    constructor(opts?: InfoWindowOptions);
    setContent(content: string | HTMLElement): void;
    open(opts?: { map?: Map; anchor?: Marker }): void;
    close(): void;
  }
  class LatLngBounds {
    extend(point: LatLng | LatLngLiteral): void;
  }
  class Circle {
    constructor(opts?: CircleOptions);
    getBounds(): LatLngBounds | null;
  }
  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    mapId?: string;
    disableDefaultUI?: boolean;
    zoomControl?: boolean;
    fullscreenControl?: boolean;
  }
  interface MarkerOptions {
    map?: Map;
    position?: LatLngLiteral;
    title?: string;
    label?: string | { text: string; color?: string };
  }
  interface InfoWindowOptions {
    content?: string;
  }
  interface CircleOptions {
    map?: Map;
    center?: LatLngLiteral;
    radius?: number;
    visible?: boolean;
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  type LatLng = LatLngLiteral;
  function importLibrary(name: "maps"): Promise<{ Map: typeof Map }>;
  function importLibrary(name: "places"): Promise<PlacesLibrary>;
  function importLibrary(name: "marker"): Promise<unknown>;
}

interface PlacesLibrary {
  Place: {
    searchNearby(request: PlaceSearchNearbyRequest): Promise<{ places: PlaceResult[] }>;
  };
}

interface PlaceSearchNearbyRequest {
  fields: string[];
  locationRestriction: {
    center: google.maps.LatLngLiteral;
    radius: number;
  };
  includedPrimaryTypes?: string[];
  maxResultCount?: number;
}

interface PlaceResult {
  displayName?: string | { text?: string };
  formattedAddress?: string;
  rating?: number;
  location?: google.maps.LatLngLiteral | { lat: number; lng: number };
  fetchFields(options: { fields: string[] }): Promise<void>;
}

interface Window {
  google?: typeof google;
}

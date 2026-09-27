"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AMENITY_CATEGORIES,
  ARCADIA_COMMUNITY,
  type AmenityCategoryId,
} from "@/lib/amenities/arcadia-community";
import {
  buildDirectionsUrl,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
} from "@/lib/amenities/maps-env";
import AmenityMapFallback from "@/components/amenities/AmenityMapFallback";

type AmenityMapProps = {
  defaultCategory?: AmenityCategoryId;
  heightClassName?: string;
  showCuratedOnFallback?: boolean;
};

type PlaceMarker = {
  id: string;
  name: string;
  address?: string;
  rating?: number;
  lat: number;
  lng: number;
  isCommunity?: boolean;
};

const MAP_MIN_HEIGHT = 420;

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("No window"));
  }
  if (window.google?.maps) {
    return Promise.resolve();
  }

  const existing = document.querySelector<HTMLScriptElement>(
    'script[data-amenity-map="google-maps"]'
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Maps script failed")), {
        once: true,
      });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&libraries=places,marker&loading=async`;
    script.async = true;
    script.defer = true;
    script.dataset.amenityMap = "google-maps";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Maps script failed"));
    document.head.appendChild(script);
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getPlaceDisplayName(place: PlaceResult): string {
  if (typeof place.displayName === "string") return place.displayName;
  return place.displayName?.text ?? "Place";
}

function getPlaceLatLng(
  location: PlaceResult["location"]
): { lat: number; lng: number } | null {
  if (!location) return null;
  const lat = (location as google.maps.LatLngLiteral).lat;
  const lng = (location as google.maps.LatLngLiteral).lng;
  if (typeof lat === "number" && typeof lng === "number") {
    return { lat, lng };
  }
  return null;
}

export default function AmenityMap({
  defaultCategory = "restaurants",
  heightClassName,
  showCuratedOnFallback = true,
}: AmenityMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const groupId = useId();

  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const placeMarkersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [loadState, setLoadState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((m) => m.setMap(null));
    placeMarkersRef.current = [];
  }, []);

  const showInfoWindow = useCallback((marker: google.maps.Marker, place: PlaceMarker) => {
    if (!mapRef.current) return;
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    const ratingLine =
      place.rating != null && !place.isCommunity
        ? `<p style="margin:4px 0 0;font-size:13px;">Rating: ${place.rating.toFixed(1)}</p>`
        : "";
    const addressLine = place.address
      ? `<p style="margin:4px 0 0;font-size:13px;color:#475569;">${escapeHtml(place.address)}</p>`
      : "";
    const directions = buildDirectionsUrl(place.lat, place.lng, place.name);
    infoWindowRef.current.setContent?.(
      `<div style="max-width:240px;font-family:system-ui,sans-serif;">
        <strong>${escapeHtml(place.name)}</strong>
        ${ratingLine}
        ${addressLine}
        <p style="margin:8px 0 0;"><a href="${directions}" target="_blank" rel="noopener noreferrer">Directions</a></p>
      </div>`
    );
    infoWindowRef.current.open({ map: mapRef.current, anchor: marker });
  }, []);

  const renderMarkers = useCallback(
    (places: PlaceMarker[]) => {
      if (!mapRef.current) return;
      clearPlaceMarkers();

      const bounds = new google.maps.LatLngBounds();
      bounds.extend(ARCADIA_COMMUNITY.coordinates);

      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map: mapRef.current ?? undefined,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
          label: place.isCommunity ? "★" : undefined,
        });
        marker.addListener("click", () => showInfoWindow(marker, place));
        placeMarkersRef.current.push(marker);
        bounds.extend({ lat: place.lat, lng: place.lng });
      });

      if (places.length > 0) {
        mapRef.current.fitBounds(bounds);
      }
    },
    [clearPlaceMarkers, showInfoWindow]
  );

  const searchCategory = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current || !window.google?.maps) return;
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;

      setStatusMessage(`Loading ${category.label.toLowerCase()}…`);

      const communityPlace: PlaceMarker = {
        id: "community",
        name: `${ARCADIA_COMMUNITY.name} — ${ARCADIA_COMMUNITY.areaLabel}`,
        address: ARCADIA_COMMUNITY.streetAddress,
        lat: ARCADIA_COMMUNITY.coordinates.lat,
        lng: ARCADIA_COMMUNITY.coordinates.lng,
        isCommunity: true,
      };

      try {
        const { Place } = await google.maps.importLibrary("places");
        const allResults: PlaceMarker[] = [communityPlace];
        const seen = new Set<string>();

        for (const primaryType of category.primaryTypes) {
          try {
            const { places } = await Place.searchNearby({
              fields: ["displayName", "formattedAddress", "rating", "location"],
              locationRestriction: {
                center: ARCADIA_COMMUNITY.coordinates,
                radius: ARCADIA_COMMUNITY.searchRadiusMeters,
              },
              includedPrimaryTypes: [primaryType],
              maxResultCount: 12,
            });

            for (const p of places ?? []) {
              await p.fetchFields({
                fields: ["displayName", "formattedAddress", "rating", "location"],
              });
              const loc = getPlaceLatLng(p.location);
              if (!loc) continue;
              const name = getPlaceDisplayName(p);
              const key = `${name}-${loc.lat}-${loc.lng}`;
              if (seen.has(key)) continue;
              seen.add(key);
              allResults.push({
                id: key,
                name,
                address: p.formattedAddress,
                rating: p.rating,
                lat: loc.lat,
                lng: loc.lng,
              });
            }
          } catch {
            // Some primary types may be unsupported in a given region; continue.
          }
        }

        renderMarkers(allResults.slice(0, 16));
        setStatusMessage(
          allResults.length > 1
            ? `Showing ${allResults.length - 1} nearby ${category.label.toLowerCase()} (plus ${ARCADIA_COMMUNITY.name}).`
            : `No ${category.label.toLowerCase()} found in this radius; community marker shown.`
        );
      } catch {
        setStatusMessage("Unable to load places for this category.");
        renderMarkers([communityPlace]);
      }
    },
    [renderMarkers]
  );

  useEffect(() => {
    if (!isVisible || !apiKey) return;
    if (loadState === "ready" || loadState === "loading") return;

    let cancelled = false;
    setLoadState("loading");

    loadGoogleMapsScript(apiKey)
      .then(async () => {
        if (cancelled || !mapDivRef.current || !window.google?.maps) {
          throw new Error("Map container unavailable");
        }
        const { Map } = await google.maps.importLibrary("maps");
        mapRef.current = new Map(mapDivRef.current, {
          center: ARCADIA_COMMUNITY.coordinates,
          zoom: ARCADIA_COMMUNITY.mapZoom,
          mapId,
          zoomControl: true,
          fullscreenControl: true,
        });

        communityMarkerRef.current = new google.maps.Marker({
          map: mapRef.current,
          position: ARCADIA_COMMUNITY.coordinates,
          title: ARCADIA_COMMUNITY.name,
          label: "★",
        });
        communityMarkerRef.current.addListener("click", () => {
          if (communityMarkerRef.current) {
            showInfoWindow(communityMarkerRef.current, {
              id: "community",
              name: ARCADIA_COMMUNITY.name,
              address: ARCADIA_COMMUNITY.streetAddress,
              lat: ARCADIA_COMMUNITY.coordinates.lat,
              lng: ARCADIA_COMMUNITY.coordinates.lng,
              isCommunity: true,
            });
          }
        });

        setLoadState("ready");
        await searchCategory(activeCategory);
      })
      .catch(() => {
        if (!cancelled) setLoadState("error");
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when visible
  }, [isVisible, apiKey]);

  useEffect(() => {
    if (loadState !== "ready") return;
    void searchCategory(activeCategory);
  }, [activeCategory, loadState, searchCategory]);

  if (!apiKey || loadState === "error") {
    return (
      <div ref={containerRef}>
        <AmenityMapFallback
          activeCategory={activeCategory}
          showCuratedList={showCuratedOnFallback}
        />
      </div>
    );
  }

  const heightStyle = heightClassName ? undefined : { minHeight: MAP_MIN_HEIGHT };

  return (
    <div ref={containerRef} className="space-y-4">
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2"
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`${groupId}-${cat.id}`}
              aria-selected={selected}
              aria-controls={`${groupId}-map-panel`}
              aria-label={cat.ariaLabel}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${groupId}-map-panel`}
        role="tabpanel"
        aria-labelledby={`${groupId}-${activeCategory}`}
        aria-label={`Map of ${activeCategory} near ${ARCADIA_COMMUNITY.name}`}
        className={`relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 ${
          heightClassName ?? ""
        }`}
        style={heightStyle}
      >
        {!isVisible && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-500">
            Map loads when scrolled into view…
          </div>
        )}
        <div ref={mapDivRef} className="absolute inset-0 h-full w-full" />
        {loadState === "loading" && isVisible && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 text-sm text-slate-600">
            Loading map…
          </div>
        )}
      </div>
      <p className="text-sm text-slate-600" aria-live="polite">
        {statusMessage}
      </p>
    </div>
  );
}

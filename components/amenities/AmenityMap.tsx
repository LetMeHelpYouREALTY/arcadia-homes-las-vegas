"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AMENITY_CATEGORIES,
  ARCADIA_COMMUNITY,
  CURATED_NEARBY_PLACES,
  type AmenityCategoryId,
} from "@/lib/amenities/arcadia-community";
import { formatCuratedAddress } from "@/lib/amenities/curated-place-utils";
import { searchCategory } from "@/lib/amenities/search-category";
import {
  buildDirectionsUrl,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
} from "@/lib/amenities/maps-env";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";
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
  lat: number;
  lng: number;
  isCommunity?: boolean;
};

const MAP_MIN_HEIGHT = 420;

function getPlaceDisplayName(place: google.maps.places.Place): string {
  const name = place.displayName;
  if (!name) return "Place";
  if (typeof name === "string") return name;
  return (name as { text?: string }).text ?? "Place";
}

function getPlaceLatLng(
  location: google.maps.places.Place["location"]
): { lat: number; lng: number } | null {
  if (!location) return null;
  if (typeof location.lat === "function") {
    return { lat: location.lat(), lng: location.lng() };
  }
  const literal = location.toJSON?.();
  if (literal) {
    return { lat: literal.lat, lng: literal.lng };
  }
  return null;
}

function buildInfoWindowContent(place: PlaceMarker): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "240px";
  wrap.style.fontFamily = "system-ui, sans-serif";

  const title = document.createElement("strong");
  title.textContent = place.name;
  wrap.appendChild(title);

  if (place.address) {
    const addr = document.createElement("p");
    addr.style.margin = "4px 0 0";
    addr.style.fontSize = "13px";
    addr.style.color = "#475569";
    addr.textContent = place.address;
    wrap.appendChild(addr);
  }

  const link = document.createElement("a");
  link.href = buildDirectionsUrl(place.lat, place.lng, place.name);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  link.style.display = "inline-block";
  link.style.marginTop = "8px";
  wrap.appendChild(link);

  return wrap;
}

function CuratedPlacesList({
  activeCategory,
  className = "",
}: {
  activeCategory: AmenityCategoryId;
  className?: string;
}) {
  const filtered = CURATED_NEARBY_PLACES.filter(
    (p) => p.category === activeCategory || p.category === "community"
  );

  if (filtered.length === 0) return null;

  return (
    <ul
      className={`grid gap-3 sm:grid-cols-2 ${className}`}
      aria-label="Featured nearby places for this category"
    >
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
  );
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
  const [useFallback, setUseFallback] = useState(() => !apiKey || mapsAuthFailed);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [showCuratedList, setShowCuratedList] = useState(false);

  useEffect(() => {
    const onAuthFailure = () => {
      setUseFallback(true);
      mapRef.current = null;
      communityMarkerRef.current?.setMap(null);
      communityMarkerRef.current = null;
      placeMarkersRef.current.forEach((m) => m.setMap(null));
      placeMarkersRef.current = [];
      infoWindowRef.current?.close();
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, []);

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
    infoWindowRef.current.setContent(buildInfoWindowContent(place));
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

  const communityMarkerPlace = useCallback((): PlaceMarker => ({
    id: "community",
    name: `${ARCADIA_COMMUNITY.name} — ${ARCADIA_COMMUNITY.areaLabel}`,
    address: ARCADIA_COMMUNITY.streetAddress,
    lat: ARCADIA_COMMUNITY.coordinates.lat,
    lng: ARCADIA_COMMUNITY.coordinates.lng,
    isCommunity: true,
  }), []);

  const runCategorySearch = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current) return;
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;

      setStatusMessage(`Loading ${category.label.toLowerCase()}…`);
      setShowCuratedList(false);

      const communityPlace = communityMarkerPlace();

      try {
        const places = await searchCategory(
          ARCADIA_COMMUNITY.coordinates,
          categoryId,
          category.primaryTypes,
          ARCADIA_COMMUNITY.searchRadiusMeters
        );

        const allResults: PlaceMarker[] = [communityPlace];
        const seen = new Set<string>();

        for (const p of places) {
          const loc = getPlaceLatLng(p.location ?? null);
          if (!loc) continue;
          const name = getPlaceDisplayName(p);
          const key = `${name}-${loc.lat}-${loc.lng}`;
          if (seen.has(key)) continue;
          seen.add(key);
          allResults.push({
            id: key,
            name,
            address: p.formattedAddress ?? undefined,
            lat: loc.lat,
            lng: loc.lng,
          });
        }

        renderMarkers(allResults.slice(0, 11));
        setStatusMessage(
          allResults.length > 1
            ? `Showing ${allResults.length - 1} nearby ${category.label.toLowerCase()} (plus ${ARCADIA_COMMUNITY.name}).`
            : `No live ${category.label.toLowerCase()} results in this radius; see featured places below.`
        );
        if (allResults.length <= 1) {
          setShowCuratedList(true);
        }
      } catch {
        setStatusMessage(`Showing featured ${category.label.toLowerCase()} near ${ARCADIA_COMMUNITY.name}.`);
        renderMarkers([communityPlace]);
        setShowCuratedList(true);
      }
    },
    [communityMarkerPlace, renderMarkers]
  );

  useEffect(() => {
    if (!isVisible || !apiKey || useFallback) return;
    if (mapsAuthFailed) {
      setUseFallback(true);
      return;
    }
    if (loadState === "ready" || loadState === "loading") return;

    let cancelled = false;
    setLoadState("loading");

    loadGoogleMaps(apiKey)
      .then(async () => {
        if (cancelled || !mapDivRef.current) {
          throw new Error("Map container unavailable");
        }
        const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
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
            showInfoWindow(communityMarkerRef.current, communityMarkerPlace());
          }
        });

        setLoadState("ready");
        await runCategorySearch(activeCategory);
      })
      .catch(() => {
        if (!cancelled) {
          setLoadState("error");
          setUseFallback(true);
        }
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when visible
  }, [isVisible, apiKey, useFallback]);

  useEffect(() => {
    if (loadState !== "ready" || useFallback) return;
    void runCategorySearch(activeCategory);
  }, [activeCategory, loadState, useFallback, runCategorySearch]);

  const categoryChips = (
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
  );

  if (useFallback || loadState === "error") {
    return (
      <div ref={containerRef} className="space-y-4">
        {categoryChips}
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
      {categoryChips}

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
      {showCuratedList && <CuratedPlacesList activeCategory={activeCategory} />}
    </div>
  );
}

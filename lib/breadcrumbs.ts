import type { BreadcrumbItem } from "@/lib/schema";

const SEGMENT_LABELS: Record<string, string> = {
  buyers: "Buyers",
  sellers: "Sellers",
  neighborhoods: "Neighborhoods",
  "55-plus-communities": "55+ Communities",
  listings: "Listings",
  about: "About",
  contact: "Contact",
  faq: "FAQ",
  services: "Services",
  relocation: "Relocation",
  "luxury-homes": "Luxury Homes",
  "new-construction": "New Construction",
  "investment-properties": "Investment Properties",
  "home-valuation": "Home Valuation",
  "market-report": "Market Report",
  "market-update": "Market Update",
  "market-insights": "Market Insights",
  "why-berkshire-hathaway": "Why Berkshire Hathaway",
  "google-business": "Google Business Profile",
  "security-policy": "Security Policy",
};

const SLUG_LABELS: Record<string, string> = {
  arcadia: "Arcadia",
  summerlin: "Summerlin",
  henderson: "Henderson",
  "green-valley": "Green Valley",
  "the-ridges": "The Ridges",
  "southern-highlands": "Southern Highlands",
  "north-las-vegas": "North Las Vegas",
  "skye-canyon": "Skye Canyon",
  "centennial-hills": "Centennial Hills",
  inspirada: "Inspirada",
  "mountains-edge": "Mountains Edge",
  "luxury-homes-las-vegas": "Luxury Homes Las Vegas",
  "california-relocator": "California Relocator",
  "first-time-buyers": "First-Time Buyers",
  "divorce-probate": "Divorce & Probate",
  downsizing: "Downsizing",
  "move-up": "Move-Up",
  "trilogy-summerlin": "Trilogy Summerlin",
  "sun-city-aliante": "Sun City Aliante",
  "sun-city-summerlin": "Sun City Summerlin",
  "sun-city-anthem": "Sun City Anthem",
  "solera-anthem": "Solera Anthem",
  "heritage-stonebridge": "Heritage at Stonebridge",
  "del-webb-lake-las-vegas": "Del Webb Lake Las Vegas",
};

function labelForSegment(segment: string, index: number, segments: string[]): string {
  if (index === segments.length - 1 && segments[0] === "listings" && segments.length > 1) {
    return "Property Details";
  }

  return SLUG_LABELS[segment] ?? SEGMENT_LABELS[segment] ?? titleFromSlug(segment);
}

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Build breadcrumb trail for inner pages (homepage returns null).
 */
export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] | null {
  const normalized = pathname.split("?")[0].replace(/\/$/, "") || "/";
  if (normalized === "/") {
    return null;
  }

  const segments = normalized.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: "Home", url: "/" }];

  let path = "";
  segments.forEach((segment, index) => {
    path += `/${segment}`;
    items.push({
      name: labelForSegment(segment, index, segments),
      url: path,
    });
  });

  return items;
}

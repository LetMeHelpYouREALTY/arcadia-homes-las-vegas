import { siteConfig, agentInfo } from "@/lib/site-config";
import {
  AMENITIES_PAGE_FAQS,
  ARCADIA_COMMUNITY,
  CURATED_NEARBY_PLACES,
} from "@/lib/amenities/arcadia-community";

const BASE_URL = siteConfig.url;
const PAGE_URL = `${BASE_URL}/amenities`;

function placeListItem(place: (typeof CURATED_NEARBY_PLACES)[number], index: number) {
  return {
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": place.schemaType,
      name: place.name,
      url: place.sourceUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: place.streetAddress,
        addressLocality: place.locality,
        addressRegion: place.region,
        postalCode: place.postalCode,
        addressCountry: "US",
      },
    },
  };
}

export function generateAmenitiesPageSchema() {
  const breadcrumbs = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nearby Amenities",
        item: PAGE_URL,
      },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: AMENITIES_PAGE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const communityPlace = {
    "@type": "Place",
    "@id": `${PAGE_URL}#community`,
    name: `${ARCADIA_COMMUNITY.name} — ${ARCADIA_COMMUNITY.areaLabel}, Las Vegas`,
    description:
      "Arcadia by SHAWOOD: gated luxury new construction in Grand Park Village, Summerlin West.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1020 Natural Harmony Street",
      addressLocality: ARCADIA_COMMUNITY.city,
      addressRegion: ARCADIA_COMMUNITY.region,
      postalCode: ARCADIA_COMMUNITY.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ARCADIA_COMMUNITY.coordinates.lat,
      longitude: ARCADIA_COMMUNITY.coordinates.lng,
    },
  };

  const itemList = {
    "@type": "ItemList",
    name: `Featured places near ${ARCADIA_COMMUNITY.name}`,
    itemListElement: CURATED_NEARBY_PLACES.map(placeListItem),
  };

  const agent = {
    "@type": "RealEstateAgent",
    "@id": `${BASE_URL}#organization`,
    name: `${agentInfo.name} - ${agentInfo.brokerage}`,
    telephone: "+17025000337",
    email: agentInfo.email,
    url: BASE_URL,
    areaServed: {
      "@type": "Place",
      name: `${ARCADIA_COMMUNITY.name}, ${ARCADIA_COMMUNITY.areaLabel}`,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [breadcrumbs, communityPlace, itemList, faq, agent],
  };
}

export const amenitiesPageCanonical = PAGE_URL;

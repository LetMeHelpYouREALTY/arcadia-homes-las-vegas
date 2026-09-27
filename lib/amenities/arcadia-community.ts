/**
 * Arcadia (SHAWOOD) — Grand Park Village, Summerlin West, Las Vegas
 *
 * Map center: SHAWOOD Arcadia sales center / model homes at
 * 1020 Natural Harmony Street, Las Vegas, NV 89138 (Grand Park, Summerlin West).
 * Coordinates from OpenStreetMap Nominatim (2026-03-27).
 */

export const ARCADIA_COMMUNITY = {
  name: "Arcadia",
  shortLabel: "Arcadia",
  city: "Las Vegas",
  region: "NV",
  postalCode: "89138",
  areaLabel: "Summerlin West",
  streetAddress: "1020 Natural Harmony Street, Las Vegas, NV 89138",
  coordinates: {
    lat: 36.1930562,
    lng: -115.3598135,
  },
  coordinatesSource:
    "OpenStreetMap geocode of SHAWOOD Arcadia model home address (1020 Natural Harmony St, 89138), cross-checked with shawood.com community listing.",
  mapZoom: 14,
  searchRadiusMeters: 8000,
} as const;

export type AmenityCategoryId =
  | "restaurants"
  | "cafes"
  | "grocery"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Places API (New) primary types for searchNearby */
  primaryTypes: string[];
  ariaLabel: string;
};

/** Luxury family community — balanced order; schools included (not 55+ or high-rise). */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
    ariaLabel: "Show restaurants near Arcadia",
  },
  {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
    ariaLabel: "Show cafes near Arcadia",
  },
  {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["grocery_store", "supermarket"],
    ariaLabel: "Show grocery stores near Arcadia",
  },
  {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park"],
    ariaLabel: "Show parks near Arcadia",
  },
  {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
    ariaLabel: "Show golf courses near Arcadia",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor"],
    ariaLabel: "Show healthcare near Arcadia",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy", "drugstore"],
    ariaLabel: "Show pharmacies near Arcadia",
  },
  {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
    ariaLabel: "Show shopping near Arcadia",
  },
  {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
    ariaLabel: "Show parking near Arcadia",
  },
  {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym", "fitness_center"],
    ariaLabel: "Show fitness centers near Arcadia",
  },
  {
    id: "schools",
    label: "Schools",
    primaryTypes: ["school", "primary_school", "secondary_school"],
    ariaLabel: "Show schools near Arcadia",
  },
];

export type CuratedPlace = {
  name: string;
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  sourceUrl: string;
  category: AmenityCategoryId | "community" | "recreation";
  schemaType:
    | "Place"
    | "Restaurant"
    | "Park"
    | "GolfCourse"
    | "Hospital"
    | "Pharmacy"
    | "Store"
    | "School"
    | "ShoppingCenter";
  note?: string;
};

/** Verified public places — used for static HTML, fallback list, and ItemList schema. */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: "Arcadia at Grand Park Village",
    streetAddress: "1020 Natural Harmony Street",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89138",
    sourceUrl: "https://www.shawood.com/communities/arcadia",
    category: "community",
    schemaType: "Place",
    note: "Gated SHAWOOD luxury new-home community (40 homes).",
  },
  {
    name: "Downtown Summerlin",
    streetAddress: "1980 Festival Plaza Drive",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89135",
    sourceUrl: "https://www.downtownsummerlin.com/",
    category: "shopping",
    schemaType: "ShoppingCenter",
    note: "Open-air dining, retail, and services in Summerlin West.",
  },
  {
    name: "Whole Foods Market — Summerlin",
    streetAddress: "2475 South Town Center Drive",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89135",
    sourceUrl: "https://www.wholefoodsmarket.com/stores/summerlin",
    category: "grocery",
    schemaType: "Store",
  },
  {
    name: "Smith's Food and Drug",
    streetAddress: "9851 West Charleston Boulevard",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89117",
    sourceUrl: "https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/charleston/706/00325",
    category: "grocery",
    schemaType: "Store",
  },
  {
    name: "Exploration Peak Park",
    streetAddress: "9700 South Buffalo Drive",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89178",
    sourceUrl: "https://parkslocator.clarkcountynv.gov/Search/ParkDetail?parkId=62",
    category: "parks",
    schemaType: "Park",
    note: "Clark County regional park (~80 acres) with trails and Exploration Peak.",
  },
  {
    name: "TPC Las Vegas",
    streetAddress: "9851 Canyon Run Drive",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89144",
    sourceUrl: "https://tpc.com/lasvegas/contact-directions/",
    category: "golf",
    schemaType: "GolfCourse",
  },
  {
    name: "Summerlin Hospital Medical Center",
    streetAddress: "657 North Town Center Drive",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89144",
    sourceUrl: "https://www.summerlinhospital.com/about/contact-us",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    name: "Red Rock Canyon National Conservation Area",
    streetAddress: "1000 Scenic Loop Drive",
    locality: "Blue Diamond",
    region: "NV",
    postalCode: "89005",
    sourceUrl: "https://www.nps.gov/redr/planyourvisit/basicinfo.htm",
    category: "parks",
    schemaType: "Park",
    note: "Scenic loop, hiking, and visitor center west of Summerlin.",
  },
  {
    name: "Palo Verde High School",
    streetAddress: "333 South Pavilion Center Drive",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89144",
    sourceUrl: "https://pvh.ccsd.net/",
    category: "schools",
    schemaType: "School",
  },
  {
    name: "Ernest Becker Middle School",
    streetAddress: "9700 West Maule Avenue",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89148",
    sourceUrl: "https://beckerms.ccsd.net/",
    category: "schools",
    schemaType: "School",
  },
];

export const AMENITIES_PAGE_FAQS: { question: string; answer: string }[] = [
  {
    question: "What grocery stores are near Arcadia in Summerlin West?",
    answer:
      "Residents near Arcadia in Grand Park Village often shop Whole Foods Market at 2475 South Town Center Drive in Summerlin and Smith's Food and Drug at 9851 West Charleston Boulevard, along with other grocers along Charleston Boulevard and in Downtown Summerlin.",
  },
  {
    question: "How far is Arcadia from the Las Vegas Strip?",
    answer:
      "Arcadia in Summerlin West is roughly 18–22 miles from the Las Vegas Strip depending on route and traffic; plan on about 25–40 minutes by car in typical conditions (approximate).",
  },
  {
    question: "Are there hospitals near Arcadia Summerlin?",
    answer:
      "Yes. Summerlin Hospital Medical Center on North Town Center Drive in Summerlin is a major full-service hospital a short drive from Arcadia and Grand Park Village.",
  },
  {
    question: "Where do Arcadia residents shop and dine?",
    answer:
      "Downtown Summerlin on Festival Plaza Drive is the primary open-air shopping and dining hub for Summerlin West, with additional retail and restaurants along Charleston Boulevard.",
  },
  {
    question: "Is there golf near Arcadia Las Vegas?",
    answer:
      "Yes. TPC Las Vegas on Canyon Run Drive and other Summerlin-area courses are within a few miles of Arcadia in Summerlin West.",
  },
  {
    question: "What outdoor recreation is near Arcadia?",
    answer:
      "Grand Park in Summerlin West is developing in phases adjacent to Grand Park Village. Exploration Peak Park (Clark County) and Red Rock Canyon National Conservation Area are regional outdoor destinations west and southwest of Summerlin.",
  },
  {
    question: "What schools serve the Arcadia area?",
    answer:
      "Arcadia homes in Summerlin West are in the Clark County School District; nearby public schools include Ernest Becker Middle School and Palo Verde High School (verify assignment with CCSD for a specific address).",
  },
  {
    question: "How far is Arcadia from Harry Reid International Airport?",
    answer:
      "Harry Reid International Airport is approximately 20–25 miles from Summerlin West depending on route; allow about 30–45 minutes by car in normal traffic (approximate).",
  },
];

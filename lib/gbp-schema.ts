// Google Business Profile Schema Data
// Supports GBP ranking factors: Relevance, Distance, Prominence

import { generateRealEstateAgentSchema } from "@/lib/schema";
import { officeInfo } from "@/lib/site-config";

export const businessInfo = {
  // NAP - Must match GBP exactly
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    addressCountry: "US",
  },
  phone: {
    display: "(702) 500-0337",
    tel: "+17025000337",
  },
  email: "DrDuffy@arcadiahomeslasvegas.com",
  url: "https://www.arcadiahomeslasvegas.com",

  // Business Details
  license: "S.0197614.LLC",
  priceRange: "$$",

  // Hours - Match GBP exactly
  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "By Appointment",
  },

  // Geo coordinates for distance ranking
  geo: {
    latitude: officeInfo.coordinates.lat,
    longitude: officeInfo.coordinates.lng,
  },

  // Service areas - Start focused, expand with prominence
  serviceAreas: [
    // Primary (immediate city)
    "Las Vegas, NV",
    "Summerlin, NV",
    // Secondary (close ZIPs)
    "Henderson, NV",
    "North Las Vegas, NV",
    // Tertiary (county expansion)
    "Clark County, NV",
  ],

  // Categories - Primary + Secondary for GBP
  categories: {
    primary: "Real Estate Agent",
    secondary: [
      "Real Estate Agency",
      "Real Estate Consultant",
    ],
  },

  // Services - Each creates searchable fields in GBP
  services: [
    // Core Services
    { name: "Buyer Representation", description: "Full-service home buying assistance" },
    { name: "Seller Representation", description: "List and sell your home for top dollar" },
    { name: "Luxury Home Sales", description: "High-end properties $1M+" },
    // Niche Services (trigger intent phrases)
    { name: "California Relocation Services", description: "Helping CA buyers transition to Las Vegas" },
    { name: "55+ Community Specialist", description: "Sun City, Anthem, Del Webb communities" },
    { name: "First-Time Home Buyer Guidance", description: "FHA, VA, down payment assistance" },
    { name: "Probate Real Estate Sales", description: "Estate and probate property transactions" },
    { name: "Divorce Real Estate Sales", description: "Neutral representation for marital asset division" },
    { name: "Relocation Services", description: "Corporate and individual relocation assistance" },
    { name: "Investment Property Consulting", description: "Rental properties and investment analysis" },
    { name: "New Construction Representation", description: "Builder negotiations and buyer protection" },
    { name: "Military/VA Home Buying", description: "Specialized service for veterans" },
    { name: "Downsizing Consultation", description: "Transition to smaller, maintenance-free living" },
    { name: "Luxury Condo Sales", description: "High-rise and resort-style condominiums" },
  ],

  // Attributes for GBP - Fill out ALL available
  attributes: {
    // Accessibility (important for GBP)
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible restroom",
    ],
    // Service options
    serviceOptions: [
      "Online appointments",
      "Onsite services",
      "Same-day appointments",
    ],
    // Highlights
    highlights: [
      "Identifies as women-owned",
      "LGBTQ+ friendly",
      "Veteran-led",
    ],
    // Offerings
    offerings: [
      "Free consultation",
      "Free estimates",
    ],
    // Amenities
    amenities: [
      "Free Wi-Fi",
      "Free parking",
    ],
    // Planning
    planning: [
      "Appointment required",
      "Accepts new clients",
    ],
    // Payments (if applicable)
    payments: [
      "Credit cards",
      "Checks",
      "Wire transfer",
    ],
  },

  // Social profiles for sameAs schema
  socialProfiles: [
    "https://www.facebook.com/drjanduffy",
    "https://www.instagram.com/drjanduffy",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.youtube.com/@drjanduffy",
    "https://twitter.com/drjanduffy",
  ],

  // Languages spoken
  languages: ["English", "Spanish"],

  // Payment methods accepted
  paymentAccepted: ["Credit Card", "Check", "Wire Transfer"],

  // Year established
  foundingDate: "2010",
};

// 750-word GBP Description (3 sections)
export const gbpDescription = {
  // Section 1: Who you are/mission (~250 words)
  whoWeAre: `Dr. Jan Duffy is a REALTOR® with 35 years in the Las Vegas real estate market. Through Arcadia Homes Las Vegas, she represents buyers and sellers in Arcadia at Grand Park, Summerlin West, 55+ communities and luxury neighborhoods across the valley.

With $127 million in closed transactions and hundreds of satisfied clients, Dr. Jan has earned a reputation for integrity, market knowledge, and personalized service. Whether you're a first-time buyer navigating the process, a luxury home seeker exploring The Ridges or MacDonald Highlands, or a California buyer relocating for Nevada's tax advantages, Dr. Jan provides the guidance you need to make confident real estate decisions.`,

  // Section 2: What/why - Value proposition (~250 words)
  whatWeDo: `What sets Dr. Jan apart is a commitment to education and advocacy. Clients receive comprehensive market analysis, expert negotiation, and honest advice—not sales pressure. Sellers get full MLS marketing and pricing backed by current sales data. Buyers get access to off-market and coming-soon opportunities.

Specialized services include: buyer and seller representation, luxury home sales, 55+ active adult community expertise (Sun City Summerlin, Sun City Anthem, Del Webb Lake Las Vegas), California relocation assistance, probate and divorce real estate, investment property consulting, new construction representation, and first-time buyer programs including FHA, VA, and down payment assistance guidance.

Dr. Jan's approach is simple: treat every client like family, know the market inside and out, and never stop working until the deal closes successfully.`,

  // Section 3: Where - Areas served (~250 words)
  whereWeServe: `Dr. Jan serves the entire Las Vegas Valley with specialized knowledge of Las Vegas, Summerlin, Henderson, North Las Vegas, and all of Clark County. Neighborhood expertise includes Summerlin's master-planned communities, Henderson's Green Valley and Inspirada, the luxury enclaves of The Ridges and Southern Highlands, Centennial Hills and Skye Canyon, and affordable options in Mountains Edge and North Las Vegas.

55+ active adult community specialization covers Sun City Summerlin (Nevada's largest 55+ community), Sun City Anthem in Henderson, Del Webb Lake Las Vegas, and Solera at Anthem. Investment property expertise spans single-family rentals, multi-family opportunities, and short-term rental analysis across the Las Vegas metro area.

Office located at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Available Monday through Friday 9am-6pm, Saturday 10am-4pm, and Sunday by appointment. Call (702) 500-0337 for a free consultation or visit arcadiahomeslasvegas.com to start your Las Vegas real estate journey today.`,
};

// FAQ Schema for GBP Q&A section
export const gbpFAQs = [
  {
    question: "What areas does Dr. Jan Duffy serve in Las Vegas?",
    answer: "Dr. Jan serves all of Las Vegas, Summerlin, Henderson, North Las Vegas, and Clark County. Specialized neighborhood expertise includes Summerlin, Green Valley, The Ridges, Southern Highlands, Centennial Hills, Skye Canyon, Inspirada, and Mountains Edge.",
  },
  {
    question: "Does Dr. Jan help buyers relocating from California?",
    answer: "Yes! California relocation is a specialty. Dr. Jan helps CA buyers understand Nevada's 0% state income tax advantage, compare home values (40-60% lower than comparable CA properties), and find the perfect Las Vegas neighborhood. Call (702) 500-0337 for California relocation assistance.",
  },
  {
    question: "What 55+ communities does Dr. Jan specialize in?",
    answer: "Dr. Jan specializes in Sun City Summerlin (Nevada's largest 55+ community with 7,700+ homes), Sun City Anthem in Henderson, Del Webb Lake Las Vegas, and Solera at Anthem. Each community offers different amenities and price points for active adult living.",
  },
  {
    question: "Does Dr. Jan help with new construction?",
    answer: "Yes! Dr. Jan provides free buyer representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities. The builder pays the commission, but Dr. Jan works exclusively for you—protecting your interests during the build process.",
  },
  {
    question: "How does Dr. Jan help with probate or divorce real estate sales?",
    answer: "Dr. Jan handles sensitive transactions with discretion and professionalism. For probate sales, she coordinates with estate attorneys and ensures court compliance. For divorce sales, she provides neutral representation and works with both parties' attorneys. Call (702) 500-0337 for a confidential consultation.",
  },
  {
    question: "What is the average home price in Las Vegas in 2026?",
    answer: "In September 2026, the Las Vegas single-family median was $470,000, flat from a year earlier (Las Vegas REALTORS). In August 2026, Henderson's median sold price was $505,000 and Summerlin's single-family median was $660,000 (MLS closed sales). The Ridges ran a $3.46 million median over the 12 months to August. Contact Dr. Jan for current figures on your street.",
  },
  {
    question: "Does Dr. Jan work with first-time home buyers?",
    answer: "Absolutely! Dr. Jan guides first-time buyers through every step, including pre-approval, loan programs (FHA 3.5% down, VA 0% down, conventional options), Nevada down payment assistance programs, and new construction incentives. Free buyer consultations available.",
  },
  {
    question: "Why choose Dr. Jan Duffy?",
    answer: "35 years in Las Vegas real estate, $127M+ in closed transactions, and a focus on Summerlin West and 55+ communities. You work with Dr. Jan directly, from first call to closing.",
  },
  {
    question: "How do I schedule a consultation with Dr. Jan Duffy?",
    answer: "Call or text (702) 500-0337 for immediate assistance, or email DrDuffy@arcadiahomeslasvegas.com. Office visits available at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday by appointment.",
  },
  {
    question: "Does Dr. Jan help with investment properties in Las Vegas?",
    answer: "Yes! Dr. Jan provides investment property consulting including rental property analysis, cap rate calculations, short-term rental regulations, and multi-family opportunities across the Las Vegas Valley. Contact (702) 500-0337 for investment property guidance.",
  },
];

// Single RealEstateAgent node (@id #organization) — extended with GBP service catalog
export function generateLocalBusinessSchema() {
  const agent = generateRealEstateAgentSchema();
  const { "@context": _ctx, ...agentNode } = agent as {
    "@context": string;
    [key: string]: unknown;
  };

  return {
    "@context": "https://schema.org",
    ...agentNode,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    sameAs: businessInfo.socialProfiles,
  };
}

// Generate FAQPage Schema
export function generateFAQSchema(faqs = gbpFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

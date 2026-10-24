// GBP Posts - Weekly posts for freshness signal
// Posts are a modest but real ranking factor (a few percent)

export interface GBPPost {
  id: string;
  type: "update" | "offer" | "event" | "product";
  title: string;
  content: string;
  cta?: {
    text: string;
    url: string;
  };
  publishDate: string;
  expiresDate?: string;
  keywords: string[]; // Natural keyword inclusion
}

// Template posts - Rotate these weekly
export const gbpPostTemplates: GBPPost[] = [
  {
    id: "market-update-sep-2026",
    type: "update",
    title: "Las Vegas Market Update - September 2026",
    content: `Las Vegas prices held flat in September. Supply is climbing.

📊 Single-family median: $470,000 (same as Sept 2025)
📦 Supply: 5 months, up from about 4 a year ago
⏱️ 53.4% of homes sold within 30 days
🏦 30-year rate: 7.40% (Freddie Mac, Oct 15)

Source: Las Vegas REALTORS, September 2026.

What does this mean for your street? Tap Call now for a free market analysis.`,
    cta: {
      text: "Get Free Market Analysis",
      url: "https://www.arcadiahomeslasvegas.com/home-valuation",
    },
    publishDate: "2026-10-19",
    keywords: ["Las Vegas real estate", "Henderson homes", "Summerlin", "55+ communities", "market update"],
  },
  {
    id: "california-relocation",
    type: "update",
    title: "California Buyers: Your Home Equity Goes Further in Las Vegas",
    content: `Thinking about relocating from California to Las Vegas? Here's why 37% of Las Vegas home buyers come from CA:

✅ 0% state income tax (save thousands annually)
✅ 40-60% lower home prices vs. comparable CA properties
✅ Same-quality schools, better affordability
✅ 4-hour drive to LA, easy flights everywhere

A $1.2M California home could buy you a luxury property in Summerlin or The Ridges. Dr. Jan Duffy specializes in California-to-Nevada relocations and can help you maximize your equity.

Tap Call now for a free California equity comparison.`,
    cta: {
      text: "California Relocation Guide",
      url: "https://www.arcadiahomeslasvegas.com/buyers/california-relocator",
    },
    publishDate: "2026-01-13",
    keywords: ["California relocation", "Las Vegas", "no state income tax", "Summerlin", "The Ridges"],
  },
  {
    id: "55-plus-spotlight",
    type: "update",
    title: "55+ Active Adult Communities in Las Vegas - Your Options",
    content: `Looking for 55+ living in the Las Vegas Valley? Here are the top communities:

🏌️ Sun City Summerlin - Nevada's largest 55+ community (7,700+ homes, 3 golf courses)
🌄 Sun City Anthem - Henderson location with mountain views
🌊 Del Webb Lake Las Vegas - Resort-style lakefront living
⛳ Solera at Anthem - Boutique community feel

Each offers different amenities, price points, and lifestyles. Dr. Jan Duffy specializes in 55+ communities and can help you find the perfect fit.

Tap Call now to schedule a community tour.`,
    cta: {
      text: "Explore 55+ Communities",
      url: "https://www.arcadiahomeslasvegas.com/55-plus-communities",
    },
    publishDate: "2026-01-06",
    keywords: ["55+ communities", "Sun City Summerlin", "Sun City Anthem", "Del Webb", "active adult"],
  },
  {
    id: "first-time-buyer",
    type: "offer",
    title: "First-Time Home Buyer? Down Payment Assistance Available",
    content: `Nevada offers several programs to help first-time buyers:

💰 FHA loans: Only 3.5% down required
🎖️ VA loans: 0% down for veterans
🏗️ Builder incentives: Many offering closing cost credits

Dr. Jan Duffy guides first-time buyers through every step—from pre-approval to keys. Free consultation, no pressure.

Popular first-time buyer neighborhoods:
- North Las Vegas (median sold $405K, Aug 2026)
- Mountains Edge (median sold $472.5K, Aug 2026)
- Centennial Hills (median sold $535K, fall 2026)

Tap Call now to start your homeownership journey.`,
    cta: {
      text: "First-Time Buyer Guide",
      url: "https://www.arcadiahomeslasvegas.com/buyers/first-time-buyers",
    },
    publishDate: "2025-12-30",
    keywords: ["first-time buyer", "down payment assistance", "FHA", "VA loan", "Las Vegas"],
  },
  {
    id: "seller-tips",
    type: "update",
    title: "Selling Your Las Vegas Home? 5 Tips for Top Dollar",
    content: `Thinking about selling? Here's how to maximize your sale price:

1️⃣ Price right from day one (overpriced homes sit)
2️⃣ Professional photography is non-negotiable
3️⃣ Declutter and depersonalize
4️⃣ Address minor repairs before listing
5️⃣ Work with an agent who knows your neighborhood

Las Vegas, September 2026 (Las Vegas REALTORS):
📊 $470,000 single-family median, flat vs. last year
⏱️ 53.4% sold within 30 days
📦 5 months of supply

Tap Call now for a free home valuation.`,
    cta: {
      text: "Get Free Home Valuation",
      url: "https://www.arcadiahomeslasvegas.com/home-valuation",
    },
    publishDate: "2025-12-23",
    keywords: ["sell home Las Vegas", "home valuation", "listing agent", "Summerlin", "Henderson"],
  },
  {
    id: "luxury-homes",
    type: "update",
    title: "Luxury Living in Las Vegas: The Ridges, MacDonald Highlands & More",
    content: `Las Vegas luxury real estate offers world-class living at Nevada prices:

🏔️ The Ridges, Summerlin - Guard-gated, custom estates, $3.46M median sale (12 mo. to Aug 2026)
⛰️ MacDonald Highlands - Henderson hillside luxury with Strip views
🌆 Strip High-Rises - Waldorf, Veer, Panorama condos
🌳 Southern Highlands - Golf course living, about $610K median sale (spring 2026)

Why luxury buyers choose Las Vegas:
✅ No state income tax
✅ Privacy and discretion
✅ World-class dining, entertainment, golf
✅ 40-60% lower than comparable CA/NY properties

Tap Call now for a confidential luxury home search.`,
    cta: {
      text: "Luxury Home Search",
      url: "https://www.arcadiahomeslasvegas.com/buyers/luxury-homes-las-vegas",
    },
    publishDate: "2025-12-16",
    keywords: ["luxury homes Las Vegas", "The Ridges", "MacDonald Highlands", "high-rise condos"],
  },
];

// Review Response Templates
// Respond promptly and in depth using who/what/when/where/why
export const reviewResponseTemplates = {
  fiveStarBuyer: (clientName: string, neighborhood: string, details: string) => `
Thank you so much, ${clientName}! It was truly a pleasure helping you find your perfect home in ${neighborhood}. ${details}

Working with buyers who know what they want makes my job a joy. I'm always here if you have questions about your new home or need recommendations for local services.

Welcome to the neighborhood! 🏠

- Dr. Jan Duffy, REALTOR®
`,

  fiveStarSeller: (clientName: string, neighborhood: string, details: string) => `
Thank you for the kind words, ${clientName}! Selling your ${neighborhood} home was a great experience, and I'm thrilled we were able to ${details}.

The Las Vegas market is competitive, but with the right pricing strategy and marketing, we got you excellent results. Wishing you all the best in your next chapter!

- Dr. Jan Duffy, REALTOR®
`,

  fourStar: (clientName: string, details: string) => `
Thank you for your review, ${clientName}! I appreciate your feedback about ${details}. Your satisfaction is my priority, and I'm always looking for ways to improve.

If there's anything I can help with going forward, please don't hesitate to reach out. I value your trust.

- Dr. Jan Duffy
`,

  constructive: (clientName: string, issue: string, resolution: string) => `
${clientName}, thank you for sharing your experience. I take all feedback seriously, and I apologize that ${issue}.

${resolution}

Real estate transactions can be complex, and I'm committed to learning from every experience. If you'd like to discuss this further, please call me directly at (702) 500-0337.

- Dr. Jan Duffy, REALTOR®
`,
};

// Citation Sources for NAP consistency
export const citationSources = {
  // Tier 1: Major aggregators
  tier1: [
    { name: "Google Business Profile", url: "https://business.google.com", priority: "critical" },
    { name: "Bing Places", url: "https://www.bingplaces.com", priority: "high" },
    { name: "Apple Maps", url: "https://mapsconnect.apple.com", priority: "high" },
    { name: "Yelp", url: "https://biz.yelp.com", priority: "high" },
  ],
  // Tier 2: Real estate specific
  tier2: [
    { name: "Realtor.com", url: "https://www.realtor.com/realestateagents", priority: "critical" },
    { name: "Zillow", url: "https://www.zillow.com/agent-finder", priority: "critical" },
    { name: "Homes.com", url: "https://www.homes.com", priority: "high" },
    { name: "Trulia", url: "https://www.trulia.com", priority: "high" },
    { name: "Redfin", url: "https://www.redfin.com", priority: "medium" },
  ],
  // Tier 3: Local Nevada/Las Vegas directories
  tier3: [
    { name: "Nevada Real Estate Division", url: "https://red.nv.gov", priority: "high" },
    { name: "Las Vegas Chamber of Commerce", url: "https://www.lvchamber.com", priority: "medium" },
    { name: "Henderson Chamber of Commerce", url: "https://www.hendersonchamber.com", priority: "medium" },
    { name: "Vegas.com Business Directory", url: "https://www.vegas.com", priority: "low" },
  ],
  // Tier 4: General business directories
  tier4: [
    { name: "Facebook Business", url: "https://www.facebook.com/business", priority: "high" },
    { name: "LinkedIn", url: "https://www.linkedin.com", priority: "high" },
    { name: "BBB", url: "https://www.bbb.org", priority: "medium" },
    { name: "Yellow Pages", url: "https://www.yellowpages.com", priority: "low" },
  ],
};

// Photo categories for GBP
export const photoCategories = [
  {
    category: "Office & Team",
    description: "Exterior office, interior, team photos",
    examples: ["Office exterior", "Reception area", "Dr. Jan headshot", "Team photo"],
    count: "5-10 photos",
  },
  {
    category: "Neighborhoods",
    description: "Local area photos showing geography expertise",
    examples: ["Summerlin views", "Henderson parks", "Las Vegas Strip", "Red Rock Canyon"],
    count: "10-15 photos",
  },
  {
    category: "Listings & Closings",
    description: "Active listings, sold properties, closing day photos",
    examples: ["Featured listings", "Sold signs", "Key handoff photos", "Happy clients"],
    count: "15-20 photos",
  },
  {
    category: "55+ Communities",
    description: "Community amenities, clubhouses, golf courses",
    examples: ["Sun City clubhouse", "Golf courses", "Recreation centers", "Community pools"],
    count: "10-15 photos",
  },
  {
    category: "Luxury Properties",
    description: "High-end listings and neighborhoods",
    examples: ["The Ridges homes", "Custom estates", "Strip views", "Pool/backyard features"],
    count: "10-15 photos",
  },
];

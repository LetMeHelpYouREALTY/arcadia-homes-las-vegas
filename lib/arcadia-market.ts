/**
 * Arcadia at Grand Park — monthly market data.
 * Update this one file each month; the market report page and the
 * Arcadia floor plan cards read from it.
 */

export type Source = { label: string; url: string; checked: string };

export const arcadiaMarket = {
  month: "October 2026",
  updated: "2026-10-17",
  nextUpdate: "November 2026",
  totalHomes: 40,
  zip: "89138",
  hoaMonthly: 179,

  plans: [
    { name: "Bristlecone", sqft: 3176, beds: 3, baths: "4.5", basePrice: 1584990 },
    { name: "Juniper", sqft: 3209, beds: 4, baths: "4.5", basePrice: 1620990 },
    { name: "Pinyon", sqft: 3399, beds: 4, baths: "4.5", basePrice: 1674990 },
  ],

  /** Finished homes the builder is selling now. */
  moveInReady: [{ label: "Pinyon, Homesite 37", plan: "Pinyon", sqft: 3399, price: 1990887 }],

  builderClosings: {
    period: "January–June 2026",
    count: 9,
    low: 1600000,
    high: 2470000,
  },

  mlsResaleListings: 0,

  /** ZIP 89138 context — the whole ZIP, not Arcadia alone. */
  zipContext: {
    medianList: 827000,
    medianDaysOnMarket: 39,
    asOf: "2026-10-17",
    activeListings: 373,
    activeAsOf: "2026-09-29",
  },

  sources: [
    {
      label: "SHAWOOD — Arcadia plans and move-in-ready homes",
      url: "https://shawood.com/community/arcadia/",
      checked: "2026-10-17",
    },
    {
      label: "Las Vegas Review-Journal — $1M-plus home sales (Home Builders Research, Jan–Jun 2026)",
      url: "https://www.reviewjournal.com/homes/new-homes/1m-plus-home-sales-hold-steady-3882295",
      checked: "2026-10-17",
    },
    {
      label: "Nevada Real Estate Group — Grand Park / ZIP 89138 MLS figures",
      url: "https://www.nevadarealestategroup.com/las-vegas/summerlin-grand-park/",
      checked: "2026-10-17",
    },
    {
      label: "Homes.com — Arcadia HOA fee and home count",
      url: "https://www.homes.com/new-homes/community/grand-park-at-summerlin-arcadia/s4pcxx6tg5xzj/",
      checked: "2026-10-17",
    },
  ] satisfies Source[],
};

export const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export const perSqft = (price: number, sqft: number) => Math.round(price / sqft);

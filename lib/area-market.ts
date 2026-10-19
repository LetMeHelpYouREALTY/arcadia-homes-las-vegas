/**
 * Neighborhood-level market figures for the neighborhood pages, home-valuation and investment tables.
 * Update monthly with /lib/vegas-market.ts. Every figure carries its own period and source,
 * because sub-area data comes out on different schedules.
 *
 * "sold" = median closed price. Area boundaries follow each source (city, plat names, or ZIP codes).
 */

export type AreaStat = { value: string; label: string };

export type AreaMarket = {
  name: string;
  /** Median closed price, in dollars. */
  median: number;
  /** Plain-English period the median covers. */
  period: string;
  /** What the median covers (boundary). */
  scope: string;
  yoy?: string;
  dom?: number;
  /** Extra card when YoY or DOM is missing. */
  extra?: AreaStat;
  /** One sentence of context for the FAQ answer. */
  context: string;
  source: { label: string; url: string; checked: string };
};

const NREG_CHECKED = "2026-10-19";

export const areaMarket: Record<string, AreaMarket> = {
  summerlin: {
    name: "Summerlin",
    median: 660000,
    period: "August 2026",
    scope: "single-family homes",
    yoy: "-2.1%",
    dom: 31,
    context:
      "Village medians run from about $510,000 in Sun City Summerlin to about $3.46 million in The Ridges (12 months to Aug. 31, 2026).",
    source: {
      label: "Nevada Real Estate Group — Summerlin market report (MLS closed sales)",
      url: "https://www.nevadarealestategroup.com/market-report/cities/summerlin/",
      checked: NREG_CHECKED,
    },
  },
  henderson: {
    name: "Henderson",
    median: 505000,
    period: "August 2026",
    scope: "city of Henderson",
    yoy: "+5.2%",
    dom: 35,
    context: "Prices run from condos in the $300,000s to guard-gated estates above $2 million in MacDonald Highlands.",
    source: {
      label: "Nevada Real Estate Group — Las Vegas market by city (MLS closed sales)",
      url: "https://www.nevadarealestategroup.com/data/las-vegas-market/",
      checked: NREG_CHECKED,
    },
  },
  "north-las-vegas": {
    name: "North Las Vegas",
    median: 405000,
    period: "August 2026",
    scope: "city of North Las Vegas",
    yoy: "-1.9%",
    dom: 23,
    context: "It remains one of the lowest-priced cities in the valley, and homes there sell faster than the valley median.",
    source: {
      label: "Nevada Real Estate Group — Las Vegas market by city (MLS closed sales)",
      url: "https://www.nevadarealestategroup.com/data/las-vegas-market/",
      checked: NREG_CHECKED,
    },
  },
  "green-valley": {
    name: "Green Valley",
    median: 596000,
    period: "July 2026",
    scope: "Green Valley ZIP codes",
    yoy: "+1.9%",
    dom: 34,
    context: "Homes took about eight days longer to go under contract than a year earlier.",
    source: {
      label: "Nevada Real Estate Group — Green Valley market report (MLS closed sales)",
      url: "https://www.nevadarealestategroup.com/market-report/cities/green-valley/",
      checked: NREG_CHECKED,
    },
  },
  "mountains-edge": {
    name: "Mountains Edge",
    median: 472500,
    period: "August 2026",
    scope: "Mountains Edge",
    yoy: "-4.5%",
    extra: { value: "99.2%", label: "Sale-to-list price (12 mo.)" },
    context:
      "On October 5, 2026, 46% of Mountains Edge listings had cut their asking price at least once.",
    source: {
      label: "Nevada Real Estate Group — Mountains Edge market report (MLS closed sales)",
      url: "https://www.nevadarealestategroup.com/market-report/cities/mountains-edge/",
      checked: NREG_CHECKED,
    },
  },
  inspirada: {
    name: "Inspirada",
    median: 540500,
    period: "12 months to Aug. 31, 2026",
    scope: "Inspirada and South Edge plats, ZIP 89044",
    dom: 34,
    extra: { value: "372", label: "Closings (12 mo.)" },
    context: "Those 372 sales ran from $355,000 to $1,150,000, and townhomes and condos were 30% of them.",
    source: {
      label: "Nevada Real Estate Group — Summerlin vs. Inspirada (MLS pull, Oct. 5, 2026)",
      url: "https://www.nevadarealestategroup.com/blog/summerlin-vs-inspirada-community-comparison",
      checked: NREG_CHECKED,
    },
  },
  "centennial-hills": {
    name: "Centennial Hills",
    median: 535000,
    period: "100 days to October 2026",
    scope: "ZIPs 89131, 89149 and 89143",
    dom: 28,
    extra: { value: "$649,500", label: "Median asking price (Oct.)" },
    context: "Asking prices run well above what homes actually close at, so offers should start from sold comps.",
    source: {
      label: "Nevada Real Estate Group — Centennial Hills guide (MLS closed sales)",
      url: "https://www.nevadarealestategroup.com/las-vegas/centennial-hills",
      checked: NREG_CHECKED,
    },
  },
  "skye-canyon": {
    name: "Skye Canyon",
    median: 511100,
    period: "6 months to Oct. 19, 2026",
    scope: "ZIP 89166",
    extra: { value: "$441K–$575K", label: "Middle half of sales" },
    context:
      "That figure covers 375 tracked sales across ZIP 89166, which also includes Trilogy Sunstone and part of Providence, so treat it as a corridor figure.",
    source: {
      label: "Resideline — ZIP 89166 market snapshot (closed sales sample)",
      url: "https://resideline.com/market/89166/",
      checked: NREG_CHECKED,
    },
  },
  "southern-highlands": {
    name: "Southern Highlands",
    median: 610000,
    period: "90 days to July 12, 2026",
    scope: "Southern Highlands",
    dom: 20,
    extra: { value: "$975,000", label: "Median asking price" },
    context:
      "Asking prices skew higher because the guard-gated Estates make up much of the for-sale inventory.",
    source: {
      label: "Nevada Real Estate Group — Las Vegas vs. Southern Highlands (GLVAR data)",
      url: "https://www.nevadarealestategroup.com/blog/las-vegas-vs-southern-highlands/",
      checked: NREG_CHECKED,
    },
  },
  "the-ridges": {
    name: "The Ridges",
    median: 3462500,
    period: "12 months to Aug. 31, 2026",
    scope: "Summerlin Village 18",
    extra: { value: "$797", label: "Median price per sq ft" },
    dom: undefined,
    context: "Its 36 closings ran from $1,750,000 to $16,000,000.",
    source: {
      label: "Nevada Real Estate Group — Summerlin villages ranked by price (MLS)",
      url: "https://www.nevadarealestategroup.com/blog/most-expensive-summerlin-villages-ranked-2026",
      checked: NREG_CHECKED,
    },
  },
};

function money(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2).replace(/0$/, "")}M`;
  return `$${n.toLocaleString("en-US")}`;
}

export function areaStats(key: string): AreaStat[] {
  const a = areaMarket[key];
  const stats: AreaStat[] = [{ value: money(a.median), label: "Median sold price" }];
  if (a.yoy) stats.push({ value: a.yoy, label: "vs. a year earlier" });
  if (a.dom) stats.push({ value: `${a.dom} days`, label: "Median days on market" });
  if (a.extra) stats.push(a.extra);
  return stats;
}

/** FAQ answer for "What is the current median home price in X?" */
export function areaFaq(key: string): string {
  const a = areaMarket[key];
  const change = a.yoy ? `, ${a.yoy.startsWith("-") ? "down" : "up"} ${a.yoy.replace(/^[+-]/, "")} from a year earlier` : "";
  return `The median sold price in ${a.name} was ${money(a.median)} (${a.period}, ${a.scope})${change}. ${a.context}`;
}

/** One-paragraph market summary for the body copy of a neighborhood page. */
export function areaSummary(key: string): string {
  const a = areaMarket[key];
  const parts = [`${a.name} homes sold at a median of ${money(a.median)} (${a.period}, ${a.scope})`];
  if (a.yoy) parts.push(`${a.yoy} from a year earlier`);
  if (a.dom) parts.push(`with a median of ${a.dom} days on market`);
  return `${parts.join(", ")}. ${a.context}`;
}

export const areaMoney = money;

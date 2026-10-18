/**
 * Price range for the office RealScout widget on each page.
 * Community pages use Las Vegas MLS-fed asking prices checked 2026-10-17
 * (roughly the 10th–90th percentile of active single-family/townhome listings).
 * Topic pages use the band that page's reader shops in.
 * Update monthly with the market report.
 */
export type PriceRange = { priceMin: number; priceMax: number };

const r = (priceMin: number, priceMax: number): PriceRange => ({ priceMin, priceMax });

export const REALSCOUT_RANGES: Record<string, PriceRange> = {
  // Farm core
  "/": r(900000, 2500000),
  "/neighborhoods/arcadia": r(1400000, 2500000),
  "/neighborhoods/summerlin": r(550000, 1500000),
  "/neighborhoods/the-ridges": r(2400000, 19000000),

  // Neighborhoods
  "/neighborhoods": r(400000, 1500000),
  "/neighborhoods/southern-highlands": r(460000, 5750000),
  "/neighborhoods/green-valley": r(410000, 790000),
  "/neighborhoods/henderson": r(375000, 2000000),
  "/neighborhoods/inspirada": r(430000, 850000),
  "/neighborhoods/mountains-edge": r(395000, 800000),
  "/neighborhoods/centennial-hills": r(380000, 1000000),
  "/neighborhoods/skye-canyon": r(425000, 850000),
  "/neighborhoods/north-las-vegas": r(325000, 650000),

  // 55+
  "/55-plus-communities": r(300000, 1000000),
  "/55-plus-communities/sun-city-summerlin": r(300000, 750000),
  "/55-plus-communities/sun-city-anthem": r(390000, 930000),
  "/55-plus-communities/sun-city-aliante": r(325000, 450000),
  "/55-plus-communities/solera-anthem": r(375000, 475000),
  "/55-plus-communities/trilogy-summerlin": r(750000, 1150000),
  "/55-plus-communities/heritage-stonebridge": r(450000, 950000),
  "/55-plus-communities/del-webb-lake-las-vegas": r(475000, 950000),

  // Luxury
  "/luxury-homes": r(1000000, 6000000),
  "/buyers/luxury-homes-las-vegas": r(1500000, 10000000),

  // Buyers
  "/buyers": r(400000, 900000),
  "/buyers/first-time-buyers": r(300000, 450000),
  "/buyers/california-relocator": r(600000, 1500000),
  "/relocation": r(450000, 1000000),
  "/new-construction": r(475000, 1250000),
  "/investment-properties": r(250000, 550000),
  "/listings": r(300000, 3000000),

  // Sellers (comparable homes on the market)
  "/sellers": r(450000, 1200000),
  "/sellers/move-up": r(700000, 1500000),
  "/sellers/downsizing": r(350000, 700000),
  "/sellers/divorce-probate": r(350000, 800000),
  "/sellers/relocation": r(425000, 950000),
  "/home-valuation": r(400000, 1200000),

  // Market
  "/market-insights": r(400000, 1000000),
  "/market-report": r(425000, 1100000),
  "/market-update": r(440000, 950000),

  // About / contact / utility
  "/about": r(500000, 2000000),
  "/services": r(500000, 1500000),
  "/contact": r(500000, 1800000),
  "/faq": r(460000, 1200000),
  "/google-business": r(525000, 1500000),
  "/security-policy": r(500000, 1200000),
};

export function realscoutRange(path: string): PriceRange {
  const range = REALSCOUT_RANGES[path];
  if (!range) throw new Error(`No RealScout price range set for ${path}`);
  return range;
}

/**
 * Las Vegas valley market data for /market-report.
 * Update monthly after Las Vegas REALTORS releases its stats (first week of the month).
 */

export const vegasMarket = {
  month: "September 2026",
  updated: "2026-10-17",
  nextUpdate: "November 2026 (October figures)",

  /** Las Vegas REALTORS, September 2026, released 2026-10-06. Existing homes, Southern Nevada MLS. */
  lvr: {
    sfMedian: 470000,
    sfMedianYoY: "0.0%",
    sfMedianMoM: "-1.1%",
    sfRecord: 490000,
    sfRecordMonths: "May and June 2026",
    condoMedian: 290000,
    condoMedianYoY: "-1.4%",
    totalSales: 2169,
    sfSalesYoY: "-7.4%",
    condoSalesYoY: "-12.6%",
    monthsSupply: 5,
    monthsSupplyLastYear: 4,
    sfNoOffer: 7995,
    sfNoOfferYoY: "+6.6%",
    condoNoOffer: 2796,
    soldWithin30: "53.4%",
    soldWithin60: "75.9%",
    cashShare: "23.5%",
    distressedShare: "1.1%",
  },

  /** Freddie Mac PMMS, week of 2026-10-15. */
  rate: { thirtyYear: 7.4, yearAgo: 6.27, asOf: "2026-10-15" },

  /** Nevada Real Estate Group analysis of MLS closed sales, August 2026 (resale + new construction). */
  areas: [
    { area: "Las Vegas (city)", median: 440000, yoy: "+2.3%", dom: 29 },
    { area: "Henderson", median: 505000, yoy: "+5.2%", dom: 35 },
    { area: "North Las Vegas", median: 405000, yoy: "-1.9%", dom: 23 },
    { area: "Summerlin (single-family)", median: 660000, yoy: "-2.1%", dom: 31 },
  ],
  areasMonth: "August 2026",

  sources: [
    {
      label: "Las Vegas REALTORS — September 2026 statistics",
      url: "https://members.lasvegasrealtor.com/statistics/pdf/2026-09-GLVAR-Housing-Stats%28t3govm4R8h4%29.pdf",
      checked: "2026-10-17",
    },
    {
      label: "Nevada Business Magazine — LVR September 2026 release",
      url: "https://nevadabusiness.com/2026/10/lvr-reports-fewer-homes-selling-as-interest-rates-rise/",
      checked: "2026-10-17",
    },
    {
      label: "Freddie Mac — Primary Mortgage Market Survey",
      url: "https://www.freddiemac.com/pmms",
      checked: "2026-10-17",
    },
    {
      label: "Nevada Real Estate Group — Las Vegas market by city (August 2026)",
      url: "https://www.nevadarealestategroup.com/data/las-vegas-market/",
      checked: "2026-10-17",
    },
    {
      label: "Nevada Real Estate Group — Summerlin market report (August 2026)",
      url: "https://www.nevadarealestategroup.com/market-report/cities/summerlin/",
      checked: "2026-10-17",
    },
  ],
};

/** Monthly principal + interest on a 30-year fixed loan. */
export function monthlyPayment(loan: number, ratePct: number) {
  const i = ratePct / 1200;
  return Math.round((loan * i) / (1 - (1 + i) ** -360));
}

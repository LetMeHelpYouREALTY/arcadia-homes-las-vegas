import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { realscoutRange } from "@/lib/realscout-ranges";
import { Home, DollarSign, Phone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import { selfCanonicalMetadata } from "@/lib/page-metadata";
import { agentInfo, siteConfig } from "@/lib/site-config";
import AgentPhoto from "@/components/AgentPhoto";
import PageIllustration from "@/components/PageIllustration";
import { vegasMarket as v, monthlyPayment } from "@/lib/vegas-market";
import { usd } from "@/lib/arcadia-market";

const title = `Las Vegas Real Estate Market Report ${v.month}`;
const description = `Las Vegas ${v.month}: single-family median ${usd(v.lvr.sfMedian)}, ${v.lvr.monthsSupply} months of supply, 30-year rate ${v.rate.thirtyYear}%. Plain-English analysis from Dr. Jan Duffy.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Las Vegas real estate market",
    "Las Vegas home prices 2026",
    "Henderson real estate market",
    "Las Vegas median home price",
  ],
  ...selfCanonicalMetadata,
};

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: title,
  description,
  url: `${siteConfig.url}/market-report`,
  author: { "@type": "Person", name: "Dr. Jan Duffy" },
  datePublished: v.updated,
  dateModified: v.updated,
  about: { "@type": "Place", name: "Las Vegas, Nevada" },
};

const loan = Math.round(v.lvr.sfMedian * 0.8);
const payNow = monthlyPayment(loan, v.rate.thirtyYear);
const payYearAgo = monthlyPayment(loan, v.rate.yearAgo);
const payGap = payNow - payYearAgo;

const snapshot = [
  { value: usd(v.lvr.sfMedian), label: "Single-family median", note: `${v.lvr.sfMedianYoY} vs. Sept 2025` },
  { value: `${v.lvr.monthsSupply} months`, label: "Housing supply", note: `About ${v.lvr.monthsSupplyLastYear} months a year ago` },
  { value: v.lvr.sfNoOffer.toLocaleString(), label: "Homes listed with no offer", note: `${v.lvr.sfNoOfferYoY} vs. last year` },
  { value: `${v.rate.thirtyYear.toFixed(2)}%`, label: "30-year fixed rate", note: `${v.rate.yearAgo}% a year ago` },
];

const faqs = [
  {
    q: "Are Las Vegas home prices falling?",
    a: `Flat, not falling. The September single-family median was ${usd(v.lvr.sfMedian)}, the same as September 2025, and ${usd(v.lvr.sfRecord - v.lvr.sfMedian)} below the ${usd(v.lvr.sfRecord)} record set in ${v.lvr.sfRecordMonths}.`,
  },
  {
    q: "Is this a buyer's or seller's market?",
    a: `Las Vegas is at ${v.lvr.monthsSupply} months of supply, up from about ${v.lvr.monthsSupplyLastYear} a year ago. That leans toward buyers in most price ranges, but ${v.lvr.soldWithin30} of homes still sold within 30 days in September.`,
  },
  {
    q: "How much do higher rates change my payment?",
    a: `On a ${usd(v.lvr.sfMedian)} home with 20% down, principal and interest is about ${usd(payNow)} a month at ${v.rate.thirtyYear.toFixed(2)}%. At last year's ${v.rate.yearAgo}%, it was about ${usd(payYearAgo)}.`,
  },
  {
    q: "How many buyers are paying cash?",
    a: `${v.lvr.cashShare} of September sales were cash, close to last year's level. Short sales and foreclosures were ${v.lvr.distressedShare} of sales.`,
  },
];

export default function MarketReportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PageIllustration scene="market" palette="golden" label="Illustration of rising bar chart beside a city skyline" />
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Updated {v.updated}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Real Estate Market Report — {v.month}
            </h1>
            <p className="text-xl text-slate-600">
              Prices held flat at {usd(v.lvr.sfMedian)} while supply grew to {v.lvr.monthsSupply} months. Rates at{" "}
              {v.rate.thirtyYear.toFixed(2)}% are doing most of the work.
            </p>
          </div>
          <RealScoutListings compact {...realscoutRange("/market-report")} />

          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Las Vegas Snapshot — {v.month}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {snapshot.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{s.value}</div>
                  <div className="text-slate-200 text-sm font-semibold">{s.label}</div>
                  <div className="text-slate-400 text-sm mt-1">{s.note}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-400">
              Condos and townhomes: {usd(v.lvr.condoMedian)} median ({v.lvr.condoMedianYoY} vs. last year).{" "}
              {v.lvr.totalSales.toLocaleString()} total sales in September.
            </p>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Median Price by Area</h2>
            <p className="text-slate-600 mb-8 text-center">Closed sales, {v.areasMonth}, resale and new construction.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {v.areas.map((a) => (
                <div key={a.area} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">{a.area}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median sold</span>
                      <span className="font-semibold text-slate-900">{usd(a.median)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">vs. last year</span>
                      <span className="font-semibold text-slate-900">{a.yoy ?? "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median days on market</span>
                      <span className="font-semibold text-slate-900">{a.dom ?? "—"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What It Means</h2>
            <div className="flex gap-4 items-start mb-8">
              <AgentPhoto size={64} className="mt-1 ring-2 ring-amber-400" />
              <p className="text-lg text-slate-700">
                The rate is the story this fall. On a {usd(v.lvr.sfMedian)} home with 20% down, the monthly
                payment is about {usd(payGap)} higher than a year ago — at the same price. Sellers are holding
                price, home sales are down {v.lvr.sfSalesYoY.replace("-", "")} from last year, and listings without offers keep stacking up.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <Home className="h-5 w-5 text-blue-600 mr-2" />
                  For Buyers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• {v.lvr.sfNoOffer.toLocaleString()} homes sit with no offer — more room to negotiate</li>
                  <li>• Ask for seller credits toward a rate buydown</li>
                  <li>• Builder rate incentives can beat the {v.rate.thirtyYear.toFixed(2)}% market rate</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  For Sellers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Price to September, not to the {usd(v.lvr.sfRecord)} spring record</li>
                  <li>• {v.lvr.soldWithin30} of homes still sold within 30 days</li>
                  <li>• Offering a rate buydown widens your buyer pool</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Market Questions We&apos;re Hearing</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sources</h2>
            <ul className="space-y-2 text-slate-600">
              {v.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} className="text-blue-600 hover:underline" rel="noopener" target="_blank">
                    {s.label}
                  </a>{" "}
                  — checked {s.checked}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              Las Vegas REALTORS figures cover existing homes sold through the MLS across Southern Nevada; they
              exclude most new builder sales. Payment estimates are principal and interest only. Next update:{" "}
              {v.nextUpdate}. For Arcadia specifically, see the{" "}
              <Link href="/neighborhoods/arcadia/market-report" className="text-blue-600 hover:underline">
                Arcadia market report
              </Link>
              .
            </p>
          </section>

          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Do These Numbers Mean for You?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the numbers for your street, your price range, and your timing.
            </p>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call or text {agentInfo.phone}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

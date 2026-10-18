import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { realscoutRange } from "@/lib/realscout-ranges";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import { combineSchemas, schemaToJsonLd } from "@/lib/schema";
import { siteConfig, agentInfo } from "@/lib/site-config";
import { selfCanonicalMetadata } from "@/lib/page-metadata";
import AgentPhoto from "@/components/AgentPhoto";
import PageIllustration from "@/components/PageIllustration";
import { arcadiaMarket as m, usd, perSqft } from "@/lib/arcadia-market";

const path = "/neighborhoods/arcadia/market-report";
const canonicalUrl = `${siteConfig.url}${path}`;
const title = `Arcadia Market Report ${m.month}`;
const description = `Arcadia at Grand Park, ${m.month}: builder base prices from ${usd(
  m.plans[0].basePrice,
)}, ${m.builderClosings.count} closings Jan–Jun 2026, price per square foot by plan. Updated monthly by Dr. Jan Duffy.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Arcadia Summerlin market report",
    "Arcadia Grand Park home prices",
    "SHAWOOD Arcadia prices",
    "Grand Park Summerlin market",
    "89138 home prices",
  ],
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: siteConfig.name,
    type: "article",
    locale: "en_US",
    images: [
      {
        url: siteConfig.ogImage.path,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  ...selfCanonicalMetadata,
};

const finished = m.moveInReady[0];
const finishedPlan = m.plans.find((p) => p.name === finished.plan)!;
const finishedPremium = finished.price - finishedPlan.basePrice;
const finishedPremiumPct = Math.round((finishedPremium / finishedPlan.basePrice) * 100);

const structuredData = combineSchemas(
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: title,
    url: canonicalUrl,
    description,
    isPartOf: { "@id": `${siteConfig.url}#website` },
    about: { "@id": `${siteConfig.url}/neighborhoods/arcadia#place` },
    dateModified: m.updated,
    author: { "@type": "Person", name: "Dr. Jan Duffy" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Neighborhoods", item: `${siteConfig.url}/neighborhoods` },
      { "@type": "ListItem", position: 3, name: "Arcadia", item: `${siteConfig.url}/neighborhoods/arcadia` },
      { "@type": "ListItem", position: 4, name: "Market Report", item: canonicalUrl },
    ],
  },
);

const stats = [
  { value: usd(m.plans[0].basePrice), label: "Lowest builder base price", note: "Bristlecone plan" },
  { value: usd(finished.price), label: "Finished home for sale now", note: finished.label },
  {
    value: String(m.builderClosings.count),
    label: "Builder closings",
    note: `${m.builderClosings.period}, ${usd(m.builderClosings.low)}–${usd(m.builderClosings.high)}`,
  },
  { value: String(m.mlsResaleListings), label: "Resale listings on the MLS", note: `${m.totalHomes} homes total` },
];

export default function ArcadiaMarketReportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToJsonLd(structuredData) }} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <Link href="/neighborhoods/arcadia" className="hover:text-blue-600">Arcadia</Link>
              {" / "}
              <span className="text-slate-900">Market Report</span>
            </nav>
          </div>

          <PageIllustration scene="market" label="Illustration of a skyline with rising price bars" />
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Updated {m.month}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Arcadia at Grand Park Market Report — {m.month}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Real prices for Arcadia&apos;s {m.totalHomes} SHAWOOD homes in Grand Park village, Summerlin
              West ({m.zip}). Builder base prices start at {usd(m.plans[0].basePrice)}. A finished Pinyon
              is listed at {usd(finished.price)}.
            </p>
          </div>
          <RealScoutListings compact {...realscoutRange(path)} />

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Arcadia by the Numbers</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                  <p className="mt-1 font-semibold text-slate-700">{s.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Price per Square Foot by Plan</h2>
            <p className="text-slate-600 mb-6">
              Builder base prices before lot premium and options, checked {m.updated}.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Size</th>
                    <th className="px-4 py-3">Beds / baths</th>
                    <th className="px-4 py-3">Base price</th>
                    <th className="px-4 py-3">Per sq ft</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {m.plans.map((p) => (
                    <tr key={p.name}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{p.name}</td>
                      <td className="px-4 py-3">{p.sqft.toLocaleString()} sq ft</td>
                      <td className="px-4 py-3">{p.beds} / {p.baths}</td>
                      <td className="px-4 py-3">{usd(p.basePrice)}</td>
                      <td className="px-4 py-3">${perSqft(p.basePrice, p.sqft)}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">{finished.label} (finished)</td>
                    <td className="px-4 py-3">{finished.sqft.toLocaleString()} sq ft</td>
                    <td className="px-4 py-3">{finishedPlan.beds} / {finishedPlan.baths}</td>
                    <td className="px-4 py-3">{usd(finished.price)}</td>
                    <td className="px-4 py-3">${perSqft(finished.price, finished.sqft)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What the Numbers Mean</h2>
            <div className="flex gap-4 items-start">
              <AgentPhoto size={64} className="mt-1 ring-2 ring-amber-400" />
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  <strong>Budget for the finished price, not the base price.</strong> The finished Pinyon on
                  Homesite 37 lists {usd(finishedPremium)} above the Pinyon base — about {finishedPremiumPct}%
                  more for lot premium and options.
                </p>
                <p>
                  <strong>Resale is not an option right now.</strong> No Arcadia home is listed on the MLS.
                  With only {m.totalHomes} homes, buying here means a builder contract or an off-market
                  conversation.
                </p>
                <p>
                  <strong>The builder has been closing steadily.</strong> SHAWOOD closed{" "}
                  {m.builderClosings.count} Arcadia homes from January to June 2026, between{" "}
                  {usd(m.builderClosings.low)} and {usd(m.builderClosings.high)}.
                </p>
                <p>
                  <strong>Arcadia sits well above its ZIP.</strong> The median list price across ZIP {m.zip} is{" "}
                  {usd(m.zipContext.medianList)}, with homes taking a median {m.zipContext.medianDaysOnMarket}{" "}
                  days to sell. Monthly HOA dues at Arcadia are ${m.hoaMonthly}, and Grand Park homes carry a
                  special improvement district assessment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sources</h2>
            <ul className="space-y-2 text-slate-600">
              {m.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} className="text-blue-600 hover:underline" rel="noopener" target="_blank">
                    {s.label}
                  </a>{" "}
                  — checked {s.checked}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              ZIP {m.zip} figures cover the whole ZIP, not Arcadia alone. Builder prices change without notice.
              Next update: {m.nextUpdate}.
            </p>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Explore More</h2>
            <ul className="flex flex-wrap gap-4 text-blue-600">
              <li><Link href="/neighborhoods/arcadia" className="hover:underline">Arcadia floor plans</Link></li>
              <li><Link href="/neighborhoods/summerlin" className="hover:underline">Summerlin homes</Link></li>
              <li><Link href="/new-construction" className="hover:underline">New construction</Link></li>
              <li><Link href="/home-valuation" className="hover:underline">What is my home worth?</Link></li>
            </ul>
          </section>

          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Arcadia Pricing?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the lot premiums and current incentives before your first visit to the sales office.
            </p>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50"
            >
              <Phone className="h-5 w-5" />
              Call or text {agentInfo.phone}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

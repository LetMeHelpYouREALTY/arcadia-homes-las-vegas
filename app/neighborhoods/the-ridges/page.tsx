import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { realscoutRange } from "@/lib/realscout-ranges";
import Link from "next/link";
import { Phone, Shield, Mountain } from "lucide-react";
import type { Metadata } from "next";
import { AreaStatsBlock } from "@/components/MarketStatsBlock";
import { areaFaq, areaSummary } from "@/lib/area-market";

import { selfCanonicalMetadata } from "@/lib/page-metadata";
import AgentPhoto from "@/components/AgentPhoto";
import PageIllustration from "@/components/PageIllustration";

export const metadata: Metadata = {
  title: "The Ridges Homes for Sale | Las Vegas Luxury Real Estate",
  description:
    "Find luxury homes in The Ridges with Dr. Jan Duffy of Arcadia Homes Las Vegas. Dr. Jan specializes in Summerlin's guard-gated luxury community. Call (702) 500-0337.",
  keywords: [
    "Dr. Jan Duffy The Ridges",
    "The Ridges homes for sale",
    "The Ridges Summerlin",
    "luxury homes Las Vegas",
    "guard gated Summerlin",
  ],
  ...selfCanonicalMetadata,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in The Ridges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: areaFaq("the-ridges"),
      },
    },
    {
      "@type": "Question",
      name: "What makes The Ridges community unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Ridges has 24/7 guard-gated security, nearly 400 custom homes on 793 acres, and strict architectural guidelines ensuring estate-quality construction throughout.",
      },
    },
    {
      "@type": "Question",
      name: "How private is The Ridges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very. The Ridges has a 24/7 guard gate with roving patrols and nearly 400 custom homes across 793 acres, so homes sit farther apart than in most Summerlin neighborhoods.",
      },
    },
    {
      "@type": "Question",
      name: "Why work with Dr. Jan Duffy on a luxury home purchase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luxury transactions call for trust and discretion. Dr. Jan Duffy has access to off-market listings, understands high-end buyer requirements, and provides the confidentiality luxury clients expect.",
      },
    },
  ],
};

export default function TheRidgesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <span className="text-slate-900">The Ridges</span>
            </nav>
          </div>

          <PageIllustration scene="golf" palette="golden" label="Illustration of estate homes beside a golf green" />
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Dr. Jan Duffy | Arcadia Homes Las Vegas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              The Ridges Homes for Sale
            </h1>
            <p className="text-xl text-slate-600">
              Las Vegas's most prestigious address. Experience The Ridges luxury with{" "}
              <strong>Dr. Jan Duffy</strong>.
            </p>
          </div>
          <RealScoutListings compact {...realscoutRange("/neighborhoods/the-ridges")} />

          <AreaStatsBlock area="the-ridges" title="The Ridges Luxury Market" />

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                The Ridges: Las Vegas's Ultimate Address for Discerning Buyers
              </h2>
              <p>
                <strong>The Ridges</strong> represents the pinnacle of Las Vegas luxury living. Nestled
                within Summerlin along the foothills of Red Rock Canyon, this guard-gated
                community offers estate-quality homes with panoramic views of the Las Vegas Strip, the
                surrounding mountains, and the pristine desert landscape. When discerning buyers
                search for Las Vegas luxury, <strong>Dr. Jan Duffy</strong>, in real estate since 1983, brings
                experience to match The Ridges' standard of excellence.
              </p>
              <p>
                First opened in 2000, The Ridges is a guard-gated village of a dozen-plus individually gated
                enclaves—among them Azure, Promontory, Falcon Ridge, Arrowhead, Indigo, Talon Ridge, Topaz
                Ridge, Boulder Ridge, and Fairway Hills—wrapped around the former Bear's Best golf course, now being rebuilt as the private Amara Golf Club (reopening targeted for late 2026). With nearly 400 custom homes across 793 acres, low density is
                built into The Ridges' DNA. Strict architectural guidelines ensure that every home meets
                the community's exacting standards, protecting property values and ensuring a cohesive
                aesthetic throughout.
              </p>
              <p>
                <strong>Dr. Jan Duffy</strong> represents buyers and sellers in The Ridges. She
                understands that luxury transactions require more than market knowledge—they demand
                discretion, sophisticated marketing, and access to qualified buyers.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Unmatched Privacy & Security</h4>
                  </div>
                  <p className="text-slate-600">
                    The Ridges offers 24/7 guard-gated security with roving patrols, giving residents
                    the privacy residents expect at this price point. Low density—nearly 400 custom homes
                    among roughly 1,000 residences across 793 acres—is hard to find in newer developments.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Unrivaled Views & Location</h4>
                  </div>
                  <p className="text-slate-600">
                    Positioned along Red Rock Canyon's foothills, The Ridges offers views that no other
                    Las Vegas community can match. Properties feature vistas of the Strip's glittering
                    skyline, the rugged Spring Mountains, and the desert floor stretching to the horizon.
                    The golf course that winds through the community—Jack Nicklaus' former Bear's Best—is being
                    rebuilt as the private, members-only Amara Golf Club, targeted to reopen in late 2026.
                  </p>
                </div>
              </div>

              {/* Enclaves */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Enclaves Inside The Ridges</h3>
              <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Azure</h5>
                  <p className="text-slate-600 text-sm">About 115 custom homes on lots from about a quarter acre to 1.2 acres; many front the golf course (the former Bear's Best, now Amara). Two of the final five Ridges homesites are here.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Indigo</h5>
                  <p className="text-slate-600 text-sm">Half-acre homesites beside the golf course (now Amara). Three of the final five Ridges homesites, released June 2026, are here, priced from $2.5 million.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Promontory</h5>
                  <p className="text-slate-600 text-sm">About 54 estate homes; Promontory's CC&Rs originally called for homes of at least about 6,000 square feet.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Falcon Ridge</h5>
                  <p className="text-slate-600 text-sm">61 custom homesites near Club Ridges, the residents-only fitness club.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Arrowhead</h5>
                  <p className="text-slate-600 text-sm">About two dozen custom homes, every one on the golf course.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Talon Ridge</h5>
                  <p className="text-slate-600 text-sm">17 view homesites of a quarter to a third of an acre; the last custom neighborhood to open, in 2019.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Boulder Ridge</h5>
                  <p className="text-slate-600 text-sm">About 46 homes built by Christopher Homes.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Fairway Hills</h5>
                  <p className="text-slate-600 text-sm">Attached homes and the most accessible entry point; 12-month median sale about $1.04 million (3 sales, to Sept. 2026).</p>
                </div>
              </div>
              <p className="not-prose mt-4 text-xs text-slate-500">
                Sources: Summerlin (Howard Hughes) announcements, Jan. 2019 and June 2026; Nevada Real Estate Group MLS
                analysis, Sept. 2026; local brokerage community guides. Homes and lot counts are approximate.
              </p>

              {/* Commute & Location */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Location & Accessibility</h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Distance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Drive Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr><td className="px-4 py-3">Downtown Summerlin</td><td className="px-4 py-3">3 miles</td><td className="px-4 py-3">8 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Red Rock Canyon</td><td className="px-4 py-3">4 miles</td><td className="px-4 py-3">10 min</td></tr>
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Harry Reid International Airport (LAS)</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Luxury Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Nearby Luxury Amenities</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Golf & Recreation</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Amara Golf Club (formerly Bear's Best):</strong> The Ridges' course closed in 2025 for a $300 million rebuild as a private, members-only club; reopening is targeted for late 2026. Membership is separate from home ownership.</li>
                    <li><strong>Red Rock Country Club:</strong> Two Arnold Palmer courses, just outside The Ridges gates.</li>
                    <li><strong>TPC Summerlin:</strong> Home of the PGA Tour's Shriners Children's Open, a short drive away.</li>
                    <li><strong>Red Rock Canyon:</strong> World-class hiking, biking, and rock climbing minutes away.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Downtown Summerlin:</strong> High-end shopping including Apple, Nordstrom, Williams Sonoma.</li>
                    <li><strong>Tivoli Village:</strong> Upscale outdoor shopping with Restoration Hardware, fine dining.</li>
                    <li><strong>Concierge Services:</strong> Private chefs, housekeeping, property management available.</li>
                    <li><strong>Private Aviation:</strong> Private jet terminals at Harry Reid International and Henderson Executive Airport.</li>
                  </ul>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Schools Serving The Ridges</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  The Ridges is served by the Clark County School District. Attendance zones change, so confirm
                  any address with CCSD&apos;s zoning search before writing an offer. Private schools are nearby too.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Public Schools (current zoning)</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Judy &amp; John L. Goolsby Elementary</li>
                      <li>• Victoria Fertitta Middle School</li>
                      <li>• Durango High School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• The Meadows School (K-12)</li>
                      <li>• Bishop Gorman High School</li>
                      <li>• Faith Lutheran Middle & High</li>
                      <li>• Alexander Dawson School</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mt-8">{areaSummary("the-ridges")}</p>
              <p>
                Working with <strong>Dr. Jan Duffy</strong> in The Ridges means working
                with an agent who understands that luxury isn't just about price—it's about lifestyle,
                privacy, and attention to detail. She provides the white-glove service that
                Ridges buyers and sellers expect, from confidential off-market transactions to coordination
                with architects, designers, and property managers. When the stakes are measured in millions,
                experience matters.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "The Ridges attracts clients who expect the very best. In luxury real estate, discretion and
                trust are everything. My clients know their privacy is protected and their interests come first.
                That's how I handle every high-end transaction."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                <span className="inline-flex items-center gap-3 not-italic">
                  <AgentPhoto size={48} />
                  <span>— Dr. Jan Duffy, Arcadia Homes Las Vegas</span>
                </span>
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About The Ridges
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the current median home price in The Ridges?
                </h3>
                <p className="text-slate-600">{areaFaq("the-ridges")}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What makes The Ridges community unique?
                </h3>
                <p className="text-slate-600">
                  The Ridges has 24/7 guard-gated security, nearly 400 custom homes on 793 acres, and strict architectural guidelines ensuring estate-quality construction throughout.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How private is The Ridges?
                </h3>
                <p className="text-slate-600">
                  Very. The Ridges has a 24/7 guard gate with roving patrols and nearly 400 custom homes
                  across 793 acres, so homes sit farther apart than in most Summerlin neighborhoods.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Why work with Dr. Jan Duffy on a luxury home purchase?
                </h3>
                <p className="text-slate-600">
                  Luxury transactions call for trust and discretion. Dr. Jan Duffy has access to off-market listings, understands high-end buyer requirements, and provides the confidentiality luxury clients expect.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience The Ridges Luxury
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for a confidential consultation about buying or selling
              in Las Vegas's most prestigious community.
            </p>
            <a
              href="tel:+17025000337"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-0337
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Dr. Jan Duffy | Arcadia Homes Las Vegas
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Market figures updated October 2026</div>
      </main>
      <Footer />
    </>
  );
}

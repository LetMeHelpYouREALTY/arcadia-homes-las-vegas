import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, TreePine, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

import { selfCanonicalMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = {
  title: "Green Valley Homes for Sale | Henderson Real Estate | Arcadia Homes Las Vegas",
  description:
    "Find Green Valley homes with Dr. Jan Duffy of Arcadia Homes Las Vegas. Henderson's original master-planned community, with mature trees and larger lots. Median price $520K. Call (702) 500-0337.",
  keywords: [
    "Dr. Jan Duffy Green Valley",
    "Green Valley homes for sale",
    "Green Valley Henderson",
    "Green Valley real estate",
    "Green Valley Ranch",
  ],
  ...selfCanonicalMetadata,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in Green Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of January 2026, Green Valley's median home price is $520,000, with 4.8% appreciation year-over-year. Prices range from $400,000 for smaller homes to over $1.2 million for luxury properties.",
      },
    },
    {
      "@type": "Question",
      name: "How long do homes stay on the market in Green Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Green Valley homes average 26 days on market. Properties near The District at Green Valley Ranch and those with upgraded features often sell faster, sometimes within the first two weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Green Valley different from newer Henderson communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Green Valley, built starting in 1988, offers what newer communities can't: mature trees, larger lots, tree-lined streets, and quick access to The District at Green Valley Ranch and Paseo Verde Park.",
      },
    },
    {
      "@type": "Question",
      name: "Is Green Valley a good investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Green Valley has shown consistent appreciation due to its central Henderson location, built-out infrastructure, and steady buyer demand. Dr. Jan can provide a detailed market analysis.",
      },
    },
  ],
};

export default function GreenValleyPage() {
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
              <span className="text-slate-900">Green Valley</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Arcadia Homes Las Vegas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Green Valley Homes for Sale
            </h1>
            <p className="text-xl text-slate-600">
              Henderson's original master-planned community. Find your Green Valley home with{" "}
              <strong>Dr. Jan Duffy</strong>.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Green Valley Real Estate Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$520,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">26 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">187</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Green Valley: Henderson's Original Master-Planned Community
              </h2>
              <p>
                <strong>Green Valley</strong> holds a special place in Henderson's history as the city's
                original master-planned community. Established in 1988, Green Valley pioneered the concept
                of thoughtfully designed neighborhoods in Southern Nevada—long before master-planned
                communities became the norm. Today, <strong>Dr. Jan Duffy</strong> helps buyers and
                sellers across Green Valley find the right home, street, and price point.
              </p>
              <p>
                What makes Green Valley unique is something that can't be replicated: time. Over three
                decades, the community has matured into a green oasis with towering trees, mature
                landscaping, and tree-lined streets. While newer communities offer new construction,
                Green Valley offers larger lots, grown-in shade, and parks, trails, and shopping
                that are already built out.
              </p>
              <p>
                <strong>Dr. Jan Duffy</strong> brings 35 years of Las Vegas real estate experience to
                Green Valley. She knows which streets offer the best mountain views, how lot sizes and
                floor plans vary, and which HOAs maintain their communities to the highest standards.
                That local knowledge gives Green Valley buyers and sellers a real advantage.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Mature Landscaping & Character</h4>
                  </div>
                  <p className="text-slate-600">
                    Green Valley's 35+ years of growth have created tree-lined streets and lush landscaping
                    that newer communities simply can't match. The mature vegetation provides shade,
                    privacy, and a sense of permanence. Many homes feature larger lots than you'll find in
                    newer developments, with mature fruit trees and professional landscaping.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">The District at Green Valley Ranch</h4>
                  </div>
                  <p className="text-slate-600">
                    The District is Henderson's premier outdoor shopping and entertainment destination.
                    This pedestrian-friendly center features upscale retailers, diverse dining options,
                    a luxury movie theater, and regular community events. Green Valley residents enjoy
                    easy access to this lifestyle amenity that draws visitors from across the valley.
                  </p>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Green Valley School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Green Valley is served by Clark County School District. Schools in and near the
                  area include the following. Check CCSD for current zoning and boundaries:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Elise L. Wolff Elementary</li>
                      <li>• C.T. Sewell Elementary</li>
                      <li>• Gordon McCaw Elementary</li>
                      <li>• John C. Vanderburg Elementary</li>
                      <li>• Gene Ward Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Green Valley High School</li>
                      <li>• Coronado High School</li>
                      <li>• Bob Miller Middle School</li>
                      <li>• Burkholder Middle School</li>
                      <li>• Greenspun Junior High</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Options</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Henderson International School</li>
                      <li>• Pinecrest Academy (Charter)</li>
                      <li>• Coral Academy of Science</li>
                      <li>• St. Peter the Apostle School</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Green Valley</h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Distance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Drive Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rush Hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">7 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">18-25 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Henderson</td><td className="px-4 py-3">3 miles</td><td className="px-4 py-3">8 min</td><td className="px-4 py-3">10-15 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">20 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr><td className="px-4 py-3">Lake Mead</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">25-30 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Recreation</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Entertainment</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>The District at Green Valley Ranch:</strong> Premier outdoor shopping with Anthropologie, Crate & Barrel, REI, and 60+ shops.</li>
                    <li><strong>Green Valley Ranch Resort:</strong> Casino, spa, multiple restaurants, concert venue.</li>
                    <li><strong>Trader Joe's & Whole Foods:</strong> Both locations within 5 minutes of most Green Valley homes.</li>
                    <li><strong>Galleria at Sunset:</strong> 10-minute drive to major mall with Macy's, Dillard's, 140+ stores.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Parks & Recreation</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Whitney Mesa Recreation Area:</strong> Dog park, trails, mountain views.</li>
                    <li><strong>Paseo Verde Park:</strong> 19-acre park with splash pad, tennis courts, playground.</li>
                    <li><strong>Green Valley Athletic Club:</strong> Full-service gym with pools, tennis, dining.</li>
                    <li><strong>Legacy Golf Club:</strong> Challenging 18-hole public course designed by Arthur Hills.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current Green Valley market shows <strong>187 active listings</strong> with homes
                averaging <strong>26 days on market</strong>. The median price of <strong>$520,000</strong>
                reflects steady demand and the premium buyers pay for mature trees and larger lots.
                Properties range from well-maintained townhomes in the $400,000s to custom homes
                exceeding $1.2 million in Green Valley's luxury enclaves.
              </p>
              <p>
                Working with Dr. Jan in Green Valley
                means understanding the subtle differences between Green Valley proper, Green Valley Ranch,
                and Green Valley South. Each area has distinct characteristics, price points, and lifestyle
                offerings. Dr. Jan Duffy helps buyers navigate these nuances and find the right fit—whether
                that's a first home, a move-up home, or a smaller single-story home for someone looking to
                downsize without leaving the area.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Green Valley offers something newer communities can't replicate—35 years of mature
                trees, larger lots, and parks and shopping close to home. When clients tell me they
                want tree-lined streets and a central Henderson location, I show them Green Valley.
                It's the original, and still one of the best."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Arcadia Homes Las Vegas
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Green Valley Real Estate
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the current median home price in Green Valley?
                </h3>
                <p className="text-slate-600">
                  As of January 2026, Green Valley's median home price is $520,000, with 4.8% appreciation
                  year-over-year. Prices range from $400,000 for smaller homes to over $1.2 million for
                  luxury properties.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How long do homes stay on the market in Green Valley?
                </h3>
                <p className="text-slate-600">
                  Green Valley homes average 26 days on market. Properties near The District at Green Valley
                  Ranch and those with upgraded features often sell faster, sometimes within the first two weeks.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What makes Green Valley different from newer Henderson communities?
                </h3>
                <p className="text-slate-600">
                  Green Valley, built starting in 1988, offers what newer communities can't: mature trees, larger lots, tree-lined streets, and quick access to The District at Green Valley Ranch and Paseo Verde Park.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Is Green Valley a good investment?
                </h3>
                <p className="text-slate-600">
                  Green Valley has shown consistent appreciation due to its central Henderson location, built-out infrastructure, and steady buyer demand. Dr. Jan can provide a detailed market analysis.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Green Valley Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Green Valley specialist, for expert guidance
              in Henderson's original master-planned community.
            </p>
            <a
              href="tel:+17025000337"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-0337
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Arcadia Homes Las Vegas
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";

import { selfCanonicalMetadata } from "@/lib/page-metadata";
import AgentPhoto from "@/components/AgentPhoto";

export const metadata: Metadata = {
  title: "Henderson Homes & Real Estate",
  description:
    "Find Henderson homes with Dr. Jan Duffy, Arcadia Homes Las Vegas. Green Valley, Inspirada, MacDonald Highlands, and Lake Las Vegas. Median price $485K. Call (702) 500-0337.",
  keywords: [
    "Henderson homes for sale",
    "Henderson real estate agent",
    "Henderson Nevada",
    "Green Valley Henderson",
  ],
  ...selfCanonicalMetadata,
};

const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Henderson, Nevada",
  description: "Nevada's second-largest city with 60+ parks, master-planned communities, and quick access to the 215 Beltway",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.0395",
    longitude: "-114.9817",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in Henderson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of January 2026, Henderson's median home price is $485,000, up 5.1% from last year. Prices range from $350,000 for condos to over $2 million in luxury communities like MacDonald Highlands.",
      },
    },
    {
      "@type": "Question",
      name: "How does Henderson compare to Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Henderson is Nevada's second-largest city, with over 60 parks, multiple recreation centers, and quick access to the 215 Beltway and I-515/US-95. The Strip is about 15 minutes away and the airport about 12 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best neighborhoods in Henderson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Henderson's top neighborhoods include Green Valley (mature landscaping), Inspirada (resort-style amenities), MacDonald Highlands (luxury), Anthem, and Lake Las Vegas (waterfront living). Each offers distinct lifestyle options.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Dr. Jan Duffy for Henderson real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Jan Duffy brings 35 years in Las Vegas real estate and $127M+ in closed transactions. She knows Henderson's communities, school zoning, and HOAs, and she works with both buyers and sellers.",
      },
    },
  ],
};

export default function HendersonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neighborhoodSchema) }}
      />
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
              <span className="text-slate-900">Henderson</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Arcadia Homes Las Vegas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Henderson Homes &amp; Real Estate
            </h1>
            <p className="text-xl text-slate-600">
              Nevada's second-largest city. Find your Henderson home with{" "}
              <strong>Dr. Jan Duffy</strong>, your trusted Henderson specialist.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Henderson Real Estate Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$485,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">24 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,280</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.1%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Henderson Is Nevada's Best-Kept Secret
              </h2>
              <p>
                <strong>Henderson</strong> has quietly become one of the most desirable cities in the American
                Southwest. As Nevada's second-largest city with over 320,000 residents, Henderson offers the
                perfect balance of suburban tranquility and urban convenience. <strong>Dr. Jan Duffy</strong> brings
                35 years in Las Vegas real estate to every Henderson transaction.
              </p>
              <p>
                What sets Henderson apart? Start with space to get outside. The city operates over 60 parks and
                multiple recreation centers, and the 215 Beltway puts the Strip about 15 minutes away. Add in the fact that Nevada has no state income tax, and you understand why
                so many Californians are making Henderson their new home.
              </p>
              <p>
                The Henderson real estate market offers remarkable diversity. From the tree-lined
                streets of <strong>Green Valley</strong> to the resort-style amenities of <strong>Inspirada</strong>,
                from the luxury estates of <strong>MacDonald Highlands</strong> to the waterfront properties at
                <strong> Lake Las Vegas</strong>—Henderson has a community for every lifestyle and budget.
                <strong> Dr. Jan Duffy</strong> knows each of these communities intimately.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Parks &amp; Recreation</h4>
                  </div>
                  <p className="text-slate-600">
                    The city operates over 60 parks and multiple recreation centers. Lake Mead is about
                    20 minutes away, and the 215 Beltway connects you to the rest of the valley.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Community Life</h4>
                  </div>
                  <p className="text-slate-600">
                    The Henderson Libraries system is award-winning,
                    and community events throughout the year—from the Henderson Farmers Market to the annual
                    Heritage Parade—bring neighbors together.
                  </p>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Henderson School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Henderson is served by Clark County School District, plus charter and private options.
                  Ask Dr. Jan which schools are zoned for any home you're considering:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• John C. Vanderburg Elementary</li>
                      <li>• Elise L. Wolff Elementary</li>
                      <li>• C.T. Sewell Elementary</li>
                      <li>• Pinecrest Academy (Charter)</li>
                      <li>• Coral Academy (Charter)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Coronado High School</li>
                      <li>• Green Valley High School</li>
                      <li>• Foothill High School</li>
                      <li>• Bob Miller Middle School</li>
                      <li>• Del E. Webb Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Henderson International School</li>
                      <li>• Coral Academy of Science</li>
                      <li>• Pinecrest Academy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Henderson</h3>
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
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">6 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">15-25 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">22 miles</td><td className="px-4 py-3">28 min</td><td className="px-4 py-3">40-55 min</td></tr>
                    <tr><td className="px-4 py-3">Lake Mead</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">20-25 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Henderson's central location provides excellent access to the 215 Beltway and I-515/US-95,
                making commutes to all parts of the valley convenient.
              </p>

              {/* Major Employers */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Major Henderson Employers</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <ul className="text-slate-600 space-y-2">
                  <li><strong>Barclays:</strong> Credit card operations center (~3,000 employees)</li>
                  <li><strong>Credit One Bank:</strong> Corporate headquarters</li>
                  <li><strong>City of Henderson:</strong> Municipal services</li>
                  <li><strong>Henderson Hospital:</strong> Healthcare services</li>
                </ul>
                <ul className="text-slate-600 space-y-2">
                  <li><strong>Station Casinos:</strong> Green Valley Ranch, Sunset Station</li>
                  <li><strong>Levi Strauss:</strong> Distribution center</li>
                  <li><strong>Amazon:</strong> Fulfillment center nearby</li>
                  <li><strong>St. Rose Dominican:</strong> Hospital system</li>
                </ul>
              </div>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Entertainment</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>The District at Green Valley Ranch:</strong> Outdoor shopping, restaurants, movie theater.</li>
                    <li><strong>Galleria at Sunset:</strong> Major mall with Macy's, Dillard's, 140+ stores.</li>
                    <li><strong>Green Valley Ranch Resort:</strong> Casino, spa, restaurants, concerts.</li>
                    <li><strong>Henderson Farmers Market:</strong> Weekly local produce and artisan goods.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare Facilities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Henderson Hospital:</strong> Full-service hospital, 24/7 ER, labor & delivery.</li>
                    <li><strong>St. Rose Dominican:</strong> Three locations in Henderson—Siena, San Martin, Rose de Lima.</li>
                    <li><strong>Southwest Medical:</strong> Multiple clinics throughout Henderson.</li>
                    <li><strong>Dignity Health:</strong> Urgent care and primary care facilities.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                With <strong>1,280 active listings</strong> and homes averaging just <strong>24 days on market</strong>,
                Henderson's real estate market moves quickly. The median price of <strong>$485,000</strong> offers
                excellent value compared to similar communities in California, Arizona, or Colorado. First-time
                buyers find attainable options starting in the $350,000s, while luxury buyers can explore
                properties exceeding $2 million in guard-gated communities.
              </p>
              <p>
                Working with <strong>Dr. Jan Duffy</strong> on your Henderson home search means working with
                someone who understands the subtle differences between Henderson's many communities. She can
                help you check school zoning for a specific address, see which HOAs are well-managed, and
                compare which areas offer the strongest investment potential. That local knowledge makes all
                the difference.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Henderson offers something for every budget—from condos in the $350,000s to guard-gated estates
                over $2 million. With 35 years in Las Vegas real estate, I help clients cut through the options and find
                the community that fits their lifestyle. There's a reason Henderson keeps winning 'Best Places
                to Live' awards."
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
              Frequently Asked Questions About Henderson Real Estate
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the current median home price in Henderson?
                </h3>
                <p className="text-slate-600">
                  As of January 2026, Henderson's median home price is $485,000, up 5.1% from last year.
                  Prices range from $350,000 for condos to over $2 million in luxury communities like
                  MacDonald Highlands.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How does Henderson compare to Las Vegas?
                </h3>
                <p className="text-slate-600">
                  Henderson is Nevada's second-largest city, with over 60 parks, multiple recreation centers,
                  and quick access to the 215 Beltway and I-515/US-95. The Strip is about 15 minutes away and
                  the airport about 12 minutes.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What are the best neighborhoods in Henderson?
                </h3>
                <p className="text-slate-600">
                  Henderson's top neighborhoods include Green Valley (mature landscaping),
                  Inspirada (resort-style amenities), MacDonald Highlands (luxury), Anthem,
                  and Lake Las Vegas (waterfront living). Each offers distinct lifestyle options.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Why choose Dr. Jan Duffy for Henderson real estate?
                </h3>
                <p className="text-slate-600">
                  Dr. Jan Duffy brings 35 years in Las Vegas real estate and $127M+ in closed transactions.
                  She knows Henderson's communities, school zoning, and HOAs, and she works with both buyers
                  and sellers.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Henderson Home Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Henderson expert,
              for personalized guidance and local market insights.
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
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}

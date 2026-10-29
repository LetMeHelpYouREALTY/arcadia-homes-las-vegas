import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { realscoutRange } from "@/lib/realscout-ranges";
import Link from "next/link";
import { Phone, Shield, Star } from "lucide-react";
import type { Metadata } from "next";
import { AreaStatsBlock } from "@/components/MarketStatsBlock";
import { areaFaq, areaSummary } from "@/lib/area-market";

import { selfCanonicalMetadata } from "@/lib/page-metadata";
import AgentPhoto from "@/components/AgentPhoto";
import PageIllustration from "@/components/PageIllustration";

export const metadata: Metadata = {
  title: "Southern Highlands Homes for Sale | Las Vegas Golf Community",
  description:
    "Find Southern Highlands homes with Dr. Jan Duffy, a 35-year Las Vegas real estate expert. She specializes in this premier golf community. Call (702) 500-0337.",
  keywords: [
    "Dr. Jan Duffy Southern Highlands",
    "Southern Highlands homes for sale",
    "Southern Highlands golf",
    "Las Vegas golf community",
    "guard gated Las Vegas",
  ],
  ...selfCanonicalMetadata,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in Southern Highlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: areaFaq("southern-highlands"),
      },
    },
    {
      "@type": "Question",
      name: "Does Southern Highlands have guard-gated sections?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Southern Highlands features multiple guard-gated luxury sections including Southern Highlands Golf Club estates and private enclaves with 24/7 guard gates. Non-gated sections also offer excellent value with community amenities.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Southern Highlands Golf Club like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Southern Highlands Golf Club features an award-winning Robert Trent Jones Jr. designed course. It offers private membership, a stunning clubhouse, fine dining, and is consistently ranked among Nevada's best golf courses.",
      },
    },
    {
      "@type": "Question",
      name: "How does Southern Highlands compare to Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Southern Highlands offers similar luxury and amenities to Summerlin but in southwest Las Vegas, providing faster access to the Strip, airport, and I-15. It's ideal for buyers who want premier living with southern valley convenience.",
      },
    },
  ],
};

export default function SouthernHighlandsPage() {
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
              <span className="text-slate-900">Southern Highlands</span>
            </nav>
          </div>

          <PageIllustration scene="golf" label="Illustration of estate homes beside a golf green" />
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Arcadia Homes Las Vegas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Southern Highlands Homes for Sale
            </h1>
            <p className="text-xl text-slate-600">
              Premier golf course living in southwest Las Vegas. Discover Southern Highlands with
              Dr. Jan Duffy.
            </p>
          </div>
          <RealScoutListings compact {...realscoutRange("/neighborhoods/southern-highlands")} />

          <AreaStatsBlock area="southern-highlands" title="Southern Highlands Market" />

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Southern Highlands: Southwest Las Vegas's Premier Master-Planned Community
              </h2>
              <p>
                <strong>Southern Highlands</strong> stands as southwest Las Vegas's answer to Summerlin—a
                meticulously planned 2,200-acre community centered around an award-winning championship
                golf course. For buyers seeking luxury living with convenient access to the Strip, airport,
                and I-15 corridor, <strong>Dr. Jan Duffy</strong> considers Southern
                Highlands among Las Vegas's finest residential options.
              </p>
              <p>
                The community's crown jewel is the Southern Highlands Golf Club, featuring a stunning
                Robert Trent Jones Jr. designed course that winds through the community's terrain.
                The private club offers members world-class golf, elegant dining, and a social calendar
                that brings the community together. Even non-golfing residents benefit from the course's
                presence—golf course views command premium prices and the manicured greens enhance the
                entire community's aesthetic.
              </p>
              <p>
                <strong>Dr. Jan Duffy</strong> understands the community's various sections—from the
                guard-gated luxury estates surrounding the golf course to the non-gated neighborhoods
                in the community's newer phases. Whether you're seeking a golf course lot with Strip
                views or a larger home near community parks, she has the local expertise to guide
                your search.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Star className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Championship Golf Course</h4>
                  </div>
                  <p className="text-slate-600">
                    The Robert Trent Jones Jr. designed course at Southern Highlands Golf Club is
                    consistently rated among Nevada's finest. The private club offers members exceptional
                    playing conditions year-round, a fully appointed clubhouse, fine dining, and a
                    calendar of social events. Golf course homes enjoy premium values and stunning views.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Guard-Gated Luxury Sections</h4>
                  </div>
                  <p className="text-slate-600">
                    Multiple guard-gated enclaves within Southern Highlands offer staffed gate
                    access and added privacy. These sections feature custom and semi-custom homes on larger lots,
                    with architectural standards ensuring estate-quality construction. 24/7 security
                    provides residents peace of mind and protects property values.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Southern Highlands School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Southern Highlands is served by Clark County School District. Schools serving the
                  area include:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Elise Wolff Elementary (9/10)</li>
                      <li>• Janet Lundahl Elementary</li>
                      <li>• Robert Forbuss Elementary</li>
                      <li>• Floyd Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Coronado High School (8/10)</li>
                      <li>• Liberty High School</li>
                      <li>• Del Webb Middle School</li>
                      <li>• Mannion Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Options</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Bishop Gorman High School</li>
                      <li>• Pinecrest Academy</li>
                      <li>• Henderson International</li>
                      <li>• Coral Academy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Southern Highlands</h3>
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
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">18-25 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Harry Reid Airport (LAS)</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-30 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-45 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Southern Highlands' I-15 access provides the fastest route to the Strip and airport from
                any Las Vegas master-planned community—a key advantage for frequent travelers.
              </p>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Entertainment</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Southern Highlands Marketplace:</strong> Grocery, restaurants, services within the community.</li>
                    <li><strong>Town Square Las Vegas:</strong> 10 minutes—outdoor mall with Apple, Whole Foods, movie theater.</li>
                    <li><strong>Las Vegas Premium Outlets South:</strong> 5 minutes—designer outlet shopping.</li>
                    <li><strong>M Resort Spa Casino:</strong> Adjacent to community—gaming, dining, entertainment.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>St. Rose Dominican - Siena:</strong> Full-service hospital, 10 minutes.</li>
                    <li><strong>Southern Hills Hospital:</strong> 24/7 ER, comprehensive services, 12 minutes.</li>
                    <li><strong>Southwest Medical:</strong> Multiple urgent care and primary care locations nearby.</li>
                    <li><strong>Dignity Health:</strong> Clinics throughout the southwest valley.</li>
                  </ul>
                </div>
              </div>

              {/* Golf Club Details */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Southern Highlands Golf Club</h3>
              <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  The Robert Trent Jones Jr. designed course is the community's centerpiece, offering
                  private membership to residents and non-residents:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Course Rating:</strong> 74.1 / Slope 140 (Championship)</li>
                    <li><strong>Membership:</strong> Equity and non-equity options</li>
                    <li><strong>Facilities:</strong> 35,000 sq ft clubhouse, fine dining</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Practice:</strong> Full range, short game area, putting greens</li>
                    <li><strong>Events:</strong> Private tournaments, member socials</li>
                    <li><strong>Dining:</strong> Multiple restaurants, bars, banquet facilities</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">{areaSummary("southern-highlands")}</p>
              <p>
                Choosing <strong>Dr. Jan Duffy</strong> for Southern Highlands means working with an
                agent who understands the community's unique value. She can explain the differences
                between various sections, which lots offer the best views, and how HOA fees vary
                across the community. Thirty-five years in Las Vegas real estate means Southern
                Highlands buyers and sellers get sharp, local service.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Southern Highlands delivers luxury living at prices that often surprise buyers—especially
                those relocating from California. You get championship golf, guard-gated sections, mountain
                views, and community parks, all just 15 minutes from the Strip. Licensed since 2008 · 35 years in Las Vegas, I help clients see beyond the golf course to the community's full potential."
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
              Frequently Asked Questions About Southern Highlands
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the current median home price in Southern Highlands?
                </h3>
                <p className="text-slate-600">{areaFaq("southern-highlands")}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Does Southern Highlands have guard-gated sections?
                </h3>
                <p className="text-slate-600">
                  Yes, Southern Highlands features multiple guard-gated luxury sections including
                  Southern Highlands Golf Club estates and private enclaves with 24/7 guard gates.
                  Non-gated sections also offer excellent value with community amenities.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the Southern Highlands Golf Club like?
                </h3>
                <p className="text-slate-600">
                  Southern Highlands Golf Club features an award-winning Robert Trent Jones Jr. designed
                  course. It offers private membership, a stunning clubhouse, fine dining, and is
                  consistently ranked among Nevada's best golf courses.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How does Southern Highlands compare to Summerlin?
                </h3>
                <p className="text-slate-600">
                  Southern Highlands offers similar luxury and amenities to Summerlin but in southwest
                  Las Vegas, providing faster access to the Strip, airport, and I-15. It's ideal for
                  buyers who want premier living with southern valley convenience.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Southern Highlands Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Southern Highlands specialist,
              for expert guidance in this premier golf community.
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
        <div className="text-center text-sm text-slate-500 mt-8">Market figures updated October 2026</div>
      </main>
      <Footer />
    </>
  );
}

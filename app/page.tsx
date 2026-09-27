import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import AmenityMapSection from "@/components/amenities/AmenityMapSection";
import Link from "next/link";
import type { Metadata } from "next";
import { Home as HomeIcon, TrendingUp, Shield, Users, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Arcadia Homes Las Vegas | Dr. Jan Duffy, REALTOR® | Summerlin West",
  description:
    "Expert real estate for Arcadia and Summerlin West (89135). Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties—buy, sell, or invest. Call (702) 500-0337.",
  keywords: [
    "Arcadia Homes Las Vegas",
    "Summerlin West real estate",
    "89135 homes",
    "Dr. Jan Duffy realtor",
    "BHHS Nevada Properties",
  ],
};

export const revalidate = 3600;

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  url: "https://www.arcadiahomeslasvegas.com",
  telephone: "+17025000337",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I choose a Berkshire Hathaway HomeServices agent in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents. When you're making the biggest purchase of your life, that trust matters.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Berkshire Hathaway HomeServices Nevada Properties serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BHHS Nevada Properties serves all of Las Vegas, Henderson, North Las Vegas, and surrounding areas, with specialized expertise in Summerlin, The Ridges, Skye Canyon, Southern Highlands, Green Valley, and all Henderson communities.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Dr. Jan Duffy at Berkshire Hathaway HomeServices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Dr. Jan Duffy at (702) 500-0337 or email DrDuffy@arcadiahomeslasvegas.com. Office located at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
    },
    {
      "@type": "Question",
      name: "Does Berkshire Hathaway HomeServices help with new construction homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! BHHS agents provide free buyer representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities—the builder pays the commission, not you.",
      },
    },
    {
      "@type": "Question",
      name: "What is the current Las Vegas real estate market like in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of January 2026, the Las Vegas median home price is $450,000 (+4.2% YoY), with homes selling in an average of 28 days. Henderson's median is slightly higher at $485,000. The market remains competitive but balanced.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />

        {/* Berkshire Hathaway Value Proposition Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Berkshire Hathaway HomeServices?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                When you work with a <strong>Berkshire Hathaway HomeServices</strong> agent, you're
                backed by a name synonymous with trust, ethical standards, and financial
                strength—the same principles that built Warren Buffett's empire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Trusted Brand</h3>
                <p className="text-slate-600 text-sm">
                  Backed by Warren Buffett's Berkshire Hathaway Inc.—unmatched financial stability
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Global Network</h3>
                <p className="text-slate-600 text-sm">
                  50,000+ agents worldwide for seamless referrals and relocations
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Market Expertise</h3>
                <p className="text-slate-600 text-sm">
                  Serving Las Vegas since 2008, $127M+ in closed transactions
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <HomeIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Full Service</h3>
                <p className="text-slate-600 text-sm">
                  Buying, selling, luxury, investment, relocation—we do it all
                </p>
              </div>
            </div>

            {/* Expert Quote */}
            <div className="max-w-3xl mx-auto mt-12 bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I
                tell them: you're not just getting me—you're getting a global network of 50,000
                agents, world-class marketing, and a brand that's synonymous with trust."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </div>
        </section>

        {/* About Arcadia */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Arcadia in Summerlin®
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Boutique gated community of 40 luxury single-family homes in Summerlin West 89135.
                Japanese-inspired, eco-friendly design in Grand Park village. Three floor plans from
                $1.5M–$2M+. Learn more and explore availability.
              </p>
              <Link
                href="/neighborhoods/arcadia"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn more about Arcadia
              </Link>
            </div>
          </div>
        </section>

        <AmenityMapSection
          title="What's Nearby Arcadia"
          subtitle="Restaurants, grocery, parks, golf, and healthcare around Grand Park Village in Summerlin West—filter the map or open the full amenities guide."
          defaultCategory="grocery"
        />

        {/* Market Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Las Vegas Real Estate Market | January 2026
              </h2>
              <p className="text-slate-300">
                Current market data from Berkshire Hathaway HomeServices Nevada Properties
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$450K</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
                <div className="text-green-400 text-sm">+4.2% YoY</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">28</div>
                <div className="text-slate-300 text-sm">Avg Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">4,850</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">2.1</div>
                <div className="text-slate-300 text-sm">Months Inventory</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/market-report"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                View Full Market Report
              </Link>
            </div>
          </div>
        </section>

        <RealScoutListings />

        {/* Neighborhoods Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Las Vegas Neighborhoods We Serve
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Berkshire Hathaway HomeServices Nevada Properties covers all of Southern Nevada
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {[
                { name: "Summerlin", price: "$625K", slug: "summerlin" },
                { name: "Henderson", price: "$485K", slug: "henderson" },
                { name: "Green Valley", price: "$520K", slug: "green-valley" },
                { name: "The Ridges", price: "$2.5M", slug: "the-ridges" },
                { name: "Southern Highlands", price: "$750K", slug: "southern-highlands" },
                { name: "North Las Vegas", price: "$385K", slug: "north-las-vegas" },
                { name: "Skye Canyon", price: "$550K", slug: "skye-canyon" },
                { name: "Centennial Hills", price: "$495K", slug: "centennial-hills" },
                { name: "Inspirada", price: "$525K", slug: "inspirada" },
                { name: "Mountains Edge", price: "$475K", slug: "mountains-edge" },
              ].map((area) => (
                <Link
                  key={area.slug}
                  href={`/neighborhoods/${area.slug}`}
                  className="bg-slate-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors group"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                    {area.name}
                  </h3>
                  <p className="text-sm text-slate-500">From {area.price}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/neighborhoods"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View All Neighborhoods →
              </Link>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Berkshire Hathaway HomeServices?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're buying, selling, or investing in Las Vegas real estate, Dr. Jan Duffy
              is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025000337"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-0337
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
          Last Updated: January 2026 | HeyBerkshire.com - Berkshire Hathaway HomeServices Nevada
          Properties
        </div>
      </main>
      <Footer />
    </>
  );
}

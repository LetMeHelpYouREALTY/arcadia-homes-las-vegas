import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { realscoutRange } from "@/lib/realscout-ranges";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { areaMarket, areaMoney } from "@/lib/area-market";
import { vegasMarket } from "@/lib/vegas-market";
import { valleyStats, valleySource } from "@/components/MarketStatsBlock";
import { Home as HomeIcon, TrendingUp, Users, Phone, MapPin } from "lucide-react";
import { arcadiaHomeFaqs } from "@/lib/arcadia-home-faqs";
import { siteConfig } from "@/lib/site-config";
import {
  combineSchemas,
  generateFAQSchema,
  generateWebPageSchema,
  schemaToJsonLd,
} from "@/lib/schema";
import { selfCanonicalMetadata } from "@/lib/page-metadata";
import AgentPhoto from "@/components/AgentPhoto";

const homeTitle = "Arcadia at Grand Park | Homes by Dr. Jan Duffy";
const homeDescription =
  "SHAWOOD at Arcadia in Grand Park village, Summerlin West. Dr. Jan Duffy, Arcadia Homes Las Vegas—Arcadia new construction expert. (702) 500-0337.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "Arcadia Homes Las Vegas",
    "Summerlin West real estate",
    "89138 homes",
    "Dr. Jan Duffy realtor",
    "Arcadia new construction",
    "SHAWOOD Arcadia",
  ],
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
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
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [siteConfig.ogImage.path],
  },
  ...selfCanonicalMetadata,
};

export const revalidate = 3600;

const homeStructuredData = combineSchemas(
  generateWebPageSchema({
    name: homeTitle,
    description: homeDescription,
    url: "/",
    dateModified: "2026-10-17",
    aboutId: `${siteConfig.url}/neighborhoods/arcadia#place`,
    primaryImage: siteConfig.ogImage.path,
    speakableSelectors: ["#hero-heading", "#arcadia-summary"],
  }),
  generateFAQSchema(
    arcadiaHomeFaqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
  ),
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToJsonLd(homeStructuredData) }}
      />
      <Navbar />
      <main>
        <HeroSection />

        <RealScoutListings {...realscoutRange("/")} />

        {/* Why Work with Dr. Jan */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="mb-4"><AgentPhoto size={96} /></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Work with Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                When you work with <strong>Dr. Jan Duffy</strong>, you get 35 years of Las Vegas
                real estate experience and one agent who handles your move from first call to
                closing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Summerlin West & 55+ Specialist</h3>
                <p className="text-slate-600 text-sm">
                  Deep knowledge of Summerlin West new construction and 55+ active adult communities
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">500+ Transactions</h3>
                <p className="text-slate-600 text-sm">
                  500+ successful transactions and satisfied clients
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Market Expertise</h3>
                <p className="text-slate-600 text-sm">
                  35 years in Las Vegas real estate, $127M+ in closed transactions
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
                "When clients ask why they should work with me, I tell them: you get 35 years of Las
                Vegas experience, honest pricing advice, and someone who picks up the phone. Call
                me at (702) 500-0337."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                <span className="inline-flex items-center gap-3 not-italic">
                  <AgentPhoto size={48} />
                  <span>— Dr. Jan Duffy, Arcadia Homes Las Vegas</span>
                </span>
              </cite>
            </div>
          </div>
        </section>

        {/* About Arcadia */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id="arcadia-summary"
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
              >
                Arcadia in Summerlin®
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Boutique gated community of 40 luxury single-family homes in Summerlin West 89138.
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

        {/* Market Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Las Vegas Real Estate Market | {vegasMarket.month}
              </h2>
              <p className="text-slate-300">
                Valley-wide figures for existing homes. Your street can run well above or below them.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {valleyStats().map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 mt-6">Source: {valleySource}</p>
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


        {/* Neighborhoods Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Las Vegas Neighborhoods We Serve
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Dr. Jan Duffy covers all of Southern Nevada
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {[
                { name: "Arcadia at Grand Park", price: "New construction", slug: "arcadia" },
                { name: "Summerlin", price: `Median ${areaMoney(areaMarket["summerlin"].median)}`, slug: "summerlin" },
                { name: "Henderson", price: `Median ${areaMoney(areaMarket["henderson"].median)}`, slug: "henderson" },
                { name: "Green Valley", price: `Median ${areaMoney(areaMarket["green-valley"].median)}`, slug: "green-valley" },
                { name: "The Ridges", price: `Median ${areaMoney(areaMarket["the-ridges"].median)}`, slug: "the-ridges" },
                { name: "Southern Highlands", price: `Median ${areaMoney(areaMarket["southern-highlands"].median)}`, slug: "southern-highlands" },
                { name: "North Las Vegas", price: `Median ${areaMoney(areaMarket["north-las-vegas"].median)}`, slug: "north-las-vegas" },
                { name: "Skye Canyon", price: `Median ${areaMoney(areaMarket["skye-canyon"].median)}`, slug: "skye-canyon" },
                { name: "Centennial Hills", price: `Median ${areaMoney(areaMarket["centennial-hills"].median)}`, slug: "centennial-hills" },
                { name: "Inspirada", price: `Median ${areaMoney(areaMarket["inspirada"].median)}`, slug: "inspirada" },
                { name: "Mountains Edge", price: `Median ${areaMoney(areaMarket["mountains-edge"].median)}`, slug: "mountains-edge" },
              ].map((area) => (
                <Link
                  key={area.slug}
                  href={`/neighborhoods/${area.slug}`}
                  className="bg-slate-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors group"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                    {area.name}
                  </h3>
                  <p className="text-sm text-slate-500">{area.price}</p>
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
        <FAQSection
          faqs={arcadiaHomeFaqs}
          title="Arcadia at Grand Park — Frequently Asked Questions"
          subtitle="Answers about SHAWOOD at Arcadia in Summerlin West from Dr. Jan Duffy"
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Dr. Jan Duffy?
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
              Dr. Jan Duffy | License S.0197614.LLC | Arcadia Homes Las Vegas
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
          Last Updated: October 2026 | arcadiahomeslasvegas.com — Arcadia Homes Las Vegas
        </div>
      </main>
      <Footer />
    </>
  );
}

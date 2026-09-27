import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import AmenityMapSection from "@/components/amenities/AmenityMapSection";
import Link from "next/link";
import { Phone, MapPin, Home } from "lucide-react";
import type { Metadata } from "next";

const canonicalUrl = "https://www.arcadiahomeslasvegas.com/neighborhoods/arcadia";

// Image alt template for Arcadia: "[Subject] – Arcadia luxury new construction, Summerlin West Las Vegas 89135, Grand Park Village"

export const metadata: Metadata = {
  title: "Arcadia Homes Las Vegas | Luxury New Construction Summerlin West 89135 | Dr. Jan Duffy",
  description:
    "Luxury new construction in Arcadia, Summerlin West 89135. Gated community, 40 homes, $1.5M–$2M+. Dr. Jan Duffy, BHHS. (702) 500-0337.",
  keywords: [
    "Arcadia homes Las Vegas",
    "Arcadia Las Vegas 89135",
    "luxury new construction Summerlin West",
    "Arcadia Summerlin floor plans",
    "Grand Park Village Summerlin new homes",
    "Japanese inspired luxury homes Las Vegas",
    "gated community Summerlin West",
    "new construction Summerlin $1.5M $2M",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Arcadia Homes Las Vegas | Luxury New Construction Summerlin West 89135 | Dr. Jan Duffy",
    description:
      "Luxury new construction in Arcadia, Summerlin West 89135. Gated community, 40 homes, $1.5M–$2M+. Dr. Jan Duffy, BHHS. (702) 500-0337.",
    url: canonicalUrl,
    siteName: "Arcadia Homes Las Vegas",
  },
};

// AEO FAQ verbatim (plan)
const arcadiaFaqs = [
  {
    q: "What are Arcadia homes in Las Vegas?",
    a: "Arcadia is an exclusive gated community of 40 luxury single-family homes in Summerlin West, Las Vegas 89135, located in Grand Park Village near Red Rock Canyon. Homes range from 3,176 to 3,399 sq ft with Japanese-inspired design, eco-friendly construction, and prices from $1.5M to $2M+.",
  },
  {
    q: "How many homes are in Arcadia Summerlin?",
    a: "Arcadia is a boutique gated community with just 40 single-family homes in Summerlin West, Las Vegas.",
  },
  {
    q: "What floor plans are available at Arcadia Las Vegas?",
    a: "Arcadia offers three floor plans — Bristlecone (3,176 sq ft, 3 bed/4.5 bath from $1,499,990), Juniper (3,209 sq ft, 4 bed/4.5 bath), and Pinyon (3,399 sq ft, 4 bed/5.5 bath with bonus room) — all two-story with 3-car garages.",
  },
  {
    q: "Who is the real estate agent for Arcadia homes Las Vegas?",
    a: "Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties specializes in Arcadia homes at arcadiahomeslasvegas.com. Contact: (702) 500-0337.",
  },
  {
    q: "Are there eco-friendly homes in Summerlin West?",
    a: "Yes. Arcadia in Summerlin West features precision-engineered, sustainably built luxury homes with fire-resistant exteriors and wellness-focused design, priced from $1.5M.",
  },
];

// JSON-LD: Residential community + RealEstateAgent + FAQPage (GEO)
const arcadiaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ResidentialComplex",
      "@id": `${canonicalUrl}#place`,
      name: "Arcadia",
      description:
        "Exclusive gated community of 40 luxury single-family homes in Summerlin West, Las Vegas 89135, in Grand Park Village. Japanese-inspired design, eco-friendly construction, $1.5M to $2M+.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89135",
      },
      containedInPlace: {
        "@type": "Place",
        name: "Summerlin West",
      },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${canonicalUrl}#agent`,
      name: "Dr. Jan Duffy",
      jobTitle: "REALTOR®",
      telephone: "+17025000337",
      url: "https://www.arcadiahomeslasvegas.com",
      description: "Specialist in Arcadia homes Las Vegas and Summerlin West luxury new construction.",
    },
    {
      "@type": "FAQPage",
      mainEntity: arcadiaFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

const floorplans = [
  {
    name: "Bristlecone",
    sqft: "3,176",
    beds: 3,
    baths: "4.5",
    price: "$1,499,990",
    features: ["Spacious great room and loggia", "Dual closets in primary suite", "Fitness room"],
  },
  {
    name: "Juniper",
    sqft: "3,209",
    beds: 4,
    baths: "4.5",
    price: "$1,515,990",
    features: ["First-floor ensuite guest room", "Pocket office/workspace"],
  },
  {
    name: "Pinyon",
    sqft: "3,399",
    beds: 4,
    baths: "5.5",
    price: "$1,605,990",
    features: ["Bonus room", "First-floor flexible room for work or play"],
  },
];

export default function ArcadiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arcadiaSchema) }}
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
              <span className="text-slate-900">Arcadia</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Arcadia Homes Las Vegas — Luxury New Construction Summerlin West 89135
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              <strong>Arcadia</strong> is an exclusive gated community of 40 luxury single-family
              homes in Summerlin West, Las Vegas 89135, located in Grand Park Village near Red Rock
              Canyon. Homes feature Japanese-inspired design, eco-friendly luxury construction, and
              prices from $1.5M to $2M+.
            </p>
          </div>

          {/* Citable GEO block: What is Arcadia */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What Is Arcadia in Summerlin Las Vegas?
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Arcadia is an exclusive gated community of 40 luxury single-family homes in
                Summerlin West, Las Vegas 89135, in Grand Park Village near Red Rock Canyon. The
                community offers three floor plans (Bristlecone, Juniper, Pinyon) from 3,176 to
                3,399 sq ft, with Japanese-inspired design, eco-friendly construction, and prices
                from $1.5M to $2M+.
              </p>
            </div>
          </section>

          {/* Arcadia Summerlin Floor Plans */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Arcadia Summerlin Floor Plans
            </h2>
            <p className="text-slate-600 mb-8">
              Arcadia offers three single-family home floor plans, each with two-story elevations
              and three-bay garages.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {floorplans.map((plan) => (
                <div
                  key={plan.name}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Home className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  </div>
                  <div className="text-slate-600 text-sm space-y-1 mb-4">
                    <p><strong>{plan.sqft} sq ft</strong></p>
                    <p>{plan.beds} bedrooms · {plan.baths} baths</p>
                    <p className="text-blue-600 font-semibold text-base mt-2">From {plan.price}</p>
                  </div>
                  <ul className="text-slate-600 text-sm space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-green-600 shrink-0">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* What Makes Construction Unique */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Japanese-Inspired, Eco-Friendly Luxury Construction
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Arcadia features precision-engineered, sustainably built luxury homes with
                fire-resistant exteriors and wellness-focused design. Nature-inspired interiors
                include spacious great rooms and private balconies, blending indoor and outdoor
                living. The gated community Summerlin West offers versatile spaces for fitness,
                work, and relaxation.
              </p>
            </div>
          </section>

          {/* Grand Park Village */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Grand Park Village Summerlin</h2>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  Arcadia is in Summerlin&apos;s <strong>Grand Park village</strong>, one of several
                  neighborhoods near the village&apos;s namesake park—Grand Park—the largest park to
                  date in the community upon completion (90 acres). Grand Park is under development
                  in phases, with the first phase expected by year-end 2025.
                </p>
              </div>
            </div>
          </section>

          <AmenityMapSection
            variant="compact"
            title="Life Near Arcadia"
            subtitle="See dining, parks, golf, and services within a short drive of Grand Park Village."
            defaultCategory="parks"
          />

          {/* Dr. Jan Duffy Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                &quot;Arcadia represents the best of Summerlin: new construction with a focus on
                wellness, sustainability, and thoughtful design. I help buyers navigate new
                construction and find the right floor plan and lot for their lifestyle.&quot;
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section — 5 AEO Q&As verbatim */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Arcadia
            </h2>
            <div className="space-y-6">
              {arcadiaFaqs.map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Explore More</h2>
            <ul className="flex flex-wrap gap-4 text-blue-600">
              <li>
                <Link href="/amenities" className="hover:underline">
                  Nearby amenities in Arcadia
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/summerlin" className="hover:underline">
                  Luxury new construction Summerlin West
                </Link>
              </li>
              <li>
                <Link href="/new-construction" className="hover:underline">
                  New construction Summerlin
                </Link>
              </li>
              <li>
                <Link href="/luxury-homes" className="hover:underline">
                  Luxury homes Las Vegas
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" className="hover:underline">
                  Home valuation
                </Link>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Arcadia Homes Las Vegas</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices agent, for current
              availability, floor plan details, and expert guidance on Arcadia and Summerlin West
              new construction.
            </p>
            <a
              href="tel:+17025000337"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-0337
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Email:{" "}
              <a
                href="mailto:DrDuffy@arcadiahomeslasvegas.com"
                className="underline hover:text-white"
              >
                DrDuffy@arcadiahomeslasvegas.com
              </a>
            </p>
            <p className="mt-2 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { MapPin, Phone, Home, GraduationCap } from "lucide-react";
import type { Metadata } from "next";
import { selfCanonicalMetadata } from "@/lib/page-metadata";
import AgentPhoto from "@/components/AgentPhoto";

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods",
  description:
    "Explore Las Vegas and Henderson neighborhoods with Dr. Jan Duffy at Arcadia Homes Las Vegas. Summerlin, Henderson, The Ridges, Southern Highlands & more.",
  keywords: [
    "Las Vegas neighborhoods",
    "Henderson communities",
    "Summerlin real estate",
    "best neighborhoods Las Vegas",
    "where to live Las Vegas",
  ],
  ...selfCanonicalMetadata,
};

const neighborhoods = [
  {
    name: "Arcadia",
    slug: "arcadia",
    medianPrice: "From $1.5M",
    priceChange: "New",
    description:
      "Boutique gated community of 40 luxury single-family homes in Summerlin West 89135. Grand Park village, Japanese-inspired design, $1.5M–$2M+.",
    highlights: ["Summerlin West 89135", "Grand Park Village", "40 Homes", "New Construction", "Wellness-Focused"],
    lifestyleNote: "SHAWOOD new construction, Grand Park village, Summerlin West",
  },
  {
    name: "Summerlin",
    slug: "summerlin",
    medianPrice: "$625,000",
    priceChange: "+6.8%",
    description: "Premier master-planned community with parks, trails, and village amenities",
    highlights: ["150+ Parks", "Trail network", "Red Rock Views", "Downtown Summerlin"],
    lifestyleNote: "Master-planned villages, outdoor recreation, retail hubs",
  },
  {
    name: "Henderson",
    slug: "henderson",
    medianPrice: "$485,000",
    priceChange: "+5.1%",
    description: "Nevada's second-largest city with master-planned neighborhoods and lake access",
    highlights: ["Lake Las Vegas", "Green Valley", "Parks", "Shopping districts"],
    lifestyleNote: "Suburban amenities, commute options, wide range of home types",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    medianPrice: "$520,000",
    priceChange: "+4.8%",
    description: "Henderson community with mature landscaping, golf, and trails",
    highlights: ["Golf Courses", "Walking Trails", "The District", "Mature Trees"],
    lifestyleNote: "Golf, dining, tree-lined streetscapes",
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    medianPrice: "$2,500,000",
    priceChange: "+8.5%",
    description: "Ultra-luxury guard-gated community with custom estates and golf",
    highlights: ["Guard-Gated", "Custom Estates", "Bear's Best Golf", "Strip Views"],
    lifestyleNote: "Custom lots, golf, luxury finishes",
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    medianPrice: "$750,000",
    priceChange: "+7.2%",
    description: "Master-planned luxury community with championship golf and mountain views",
    highlights: ["Golf Community", "Guard-Gated", "Mountain Views", "Luxury Amenities"],
    lifestyleNote: "Golf course living, guard-gated sections",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    medianPrice: "$385,000",
    priceChange: "+3.2%",
    description: "Growing area with new construction and entry-level price points",
    highlights: ["New Construction", "Affordable", "Growing Area", "Parks"],
    lifestyleNote: "New builds, value-oriented inventory",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    medianPrice: "$550,000",
    priceChange: "+5.5%",
    description: "Newer master-planned community in northwest Las Vegas with mountain views",
    highlights: ["New Homes", "Mountain Views", "Skye Center", "Trail network"],
    lifestyleNote: "Resort-style amenities, newer construction",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    medianPrice: "$495,000",
    priceChange: "+4.8%",
    description: "Northwest Las Vegas community with mountain proximity and parks",
    highlights: ["Mountain Access", "Parks", "Shopping", "Trails"],
    lifestyleNote: "Northwest location, outdoor access",
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    medianPrice: "$525,000",
    priceChange: "+5.0%",
    description: "Henderson master-planned community with resort-style pools and modern homes",
    highlights: ["Resort Pools", "Walking Trails", "New Construction", "Parks"],
    lifestyleNote: "Resort pools, newer Henderson builds",
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    medianPrice: "$475,000",
    priceChange: "+4.5%",
    description: "Southwest Las Vegas master-planned community with mountain views and parks",
    highlights: ["Mountain Views", "Parks", "Growing Area", "Affordable Luxury"],
    lifestyleNote: "Southwest valley, park-centric layout",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Dr. Jan Duffy | Arcadia Homes Las Vegas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas & Henderson Neighborhoods
            </h1>
            <p className="text-xl text-slate-600">
              Explore Southern Nevada communities with Dr. Jan Duffy, your{" "}
              neighborhood expert—including{" "}
              <Link href="/neighborhoods/arcadia" className="text-blue-600 hover:underline">
                Arcadia at Grand Park (SHAWOOD)
              </Link>
              .
            </p>
          </div>

          {/* Neighborhood Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {neighborhood.name}
                      </h2>
                      <p className="text-sm text-slate-500">{neighborhood.lifestyleNote}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{neighborhood.medianPrice}</div>
                      <div className="text-sm text-green-600">{neighborhood.priceChange} YoY</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Every Las Vegas neighborhood has its own personality. Whether you want the parks and
                trails of Summerlin, the mature landscaping of Green Valley, or the luxury of The
                Ridges, I'll help you find the community that matches your lifestyle. That's
                personalized guidance backed by 35 years of local expertise."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                <span className="inline-flex items-center gap-3 not-italic">
                  <AgentPhoto size={48} />
                  <span>— Dr. Jan Duffy, Arcadia Homes Las Vegas</span>
                </span>
              </cite>
            </div>
          </section>

          {/* Neighborhood Services */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Neighborhood Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Home className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Market Analysis</h3>
                <p className="text-slate-300 text-sm">
                  Hyperlocal pricing trends and inventory by neighborhood
                </p>
              </div>
              <div className="text-center">
                <GraduationCap className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Area Research</h3>
                <p className="text-slate-300 text-sm">
                  Schools, commute times, and amenities—described factually for your criteria
                </p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Private Tours</h3>
                <p className="text-slate-300 text-sm">
                  Guided tours of communities that match your must-haves
                </p>
              </div>
            </div>
          </section>

          <RealScoutListings />

          {/* CTA */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Explore Las Vegas Neighborhoods?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Dr. Jan Duffy provides personalized neighborhood guidance backed by 35 years
              in Las Vegas real estate.
            </p>
            <a
              href="tel:+17025000337"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-0337
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AmenityMapSection from "@/components/amenities/AmenityMapSection";
import AmenitiesWrittenContent from "@/components/amenities/AmenitiesWrittenContent";
import Link from "next/link";
import type { Metadata } from "next";
import { ARCADIA_COMMUNITY } from "@/lib/amenities/arcadia-community";
import {
  amenitiesPageCanonical,
  generateAmenitiesPageSchema,
} from "@/lib/amenities/amenities-schema";

export const metadata: Metadata = {
  title: `Nearby Amenities in ${ARCADIA_COMMUNITY.name}, Las Vegas | Summerlin West`,
  description:
    "Interactive map and local guide to dining, parks, golf, healthcare, shopping, and schools near Arcadia in Grand Park Village, Summerlin West. Dr. Jan Duffy, BHHS. (702) 500-0337.",
  alternates: { canonical: amenitiesPageCanonical },
  openGraph: {
    title: `Nearby Amenities in ${ARCADIA_COMMUNITY.name}, Las Vegas`,
    description:
      "Explore what's near Arcadia luxury homes in Summerlin West—maps, drive times, and buyer FAQs.",
    url: amenitiesPageCanonical,
    siteName: "Arcadia Homes Las Vegas",
  },
};

export default function AmenitiesPage() {
  const schema = generateAmenitiesPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-slate-500 mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            {" / "}
            <span className="text-slate-900">Nearby Amenities</span>
          </nav>

          <header className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nearby Amenities in {ARCADIA_COMMUNITY.name}, Las Vegas
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Hyperlocal guide for {ARCADIA_COMMUNITY.name} in {ARCADIA_COMMUNITY.areaLabel}{" "}
              (Grand Park Village). Map center: {ARCADIA_COMMUNITY.streetAddress}. Filter restaurants,
              grocery, parks, golf, healthcare, and more—or read the curated sections below for
              crawlers and AI answers.
            </p>
          </header>
        </div>

        <AmenityMapSection
          title="Interactive Amenity Map"
          subtitle={`Search within about ${ARCADIA_COMMUNITY.searchRadiusMeters / 1000} km of ${ARCADIA_COMMUNITY.name}. The ★ marker is the community center at the SHAWOOD sales center address.`}
          showViewAllLink={false}
          variant="default"
        />

        <div className="container mx-auto px-4 mt-16">
          <AmenitiesWrittenContent />
        </div>
      </main>
      <Footer />
    </>
  );
}

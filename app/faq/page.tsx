import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import {
  generateFAQSchema,
  generateWebPageSchema,
  combineSchemas,
} from "@/lib/schema";

import { selfCanonicalMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = {
  title: "FAQ | Arcadia Homes Las Vegas Real Estate",
  description:
    "Frequently asked questions about Las Vegas real estate, buying, selling, investing, and working with Dr. Jan Duffy at Arcadia Homes Las Vegas.",
  keywords: [
    "Arcadia Homes Las Vegas FAQ",
    "Las Vegas real estate questions",
    "buying a home Las Vegas",
    "selling a home Henderson",
    "Dr. Jan Duffy questions",
  ],
  ...selfCanonicalMetadata,
};

const faqCategories = [
  {
    title: "Buying a Home in Las Vegas",
    faqs: [
      {
        q: "How long does the home buying process take?",
        a: "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days. The timeline depends on financing, inspections, and contingencies.",
      },
      {
        q: "Do I need a pre-approval before looking at homes?",
        a: "Yes, a pre-approval letter is essential. It shows sellers you're serious and gives you a clear budget. Dr. Jan can connect you with trusted local lenders who offer competitive rates.",
      },
      {
        q: "How much do I need for a down payment?",
        a: "Down payment requirements vary: FHA loans require 3.5%, conventional loans typically 3-20%, and VA/USDA loans may require 0% down. Dr. Jan can connect you with lenders who specialize in various loan programs.",
      },
      {
        q: "Is now a good time to buy in Las Vegas?",
        a: "Yes. With more inventory, returning negotiating power, and stable interest rates, buyers have more options than they've had in years. Well-priced homes still move quickly, but you won't face the bidding wars of 2021-2022.",
      },
      {
        q: "Does Dr. Jan help with new construction homes?",
        a: "Yes! Dr. Jan provides free buyer representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities—the builder pays the commission, not you. Having representation protects your interests.",
      },
    ],
  },
  {
    title: "Selling Your Home",
    faqs: [
      {
        q: "What is my home worth in today's market?",
        a: "Home values depend on location, condition, size, and recent comparable sales. Dr. Jan provides free, comprehensive home valuations using current MLS data and her 35 years of Las Vegas real estate expertise.",
      },
      {
        q: "How long will it take to sell my home?",
        a: "Currently, well-priced homes in Las Vegas are selling in an average of 28 days. Luxury homes may take longer (45+ days). Pricing strategy is crucial—overpriced homes can sit for months.",
      },
      {
        q: "What do I need to do to prepare my home for sale?",
        a: "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional photography are the highest-ROI improvements.",
      },
      {
        q: "How will Dr. Jan market my home?",
        a: "Dr. Jan's marketing includes professional photography, virtual tours, MLS syndication to 100+ websites, social media promotion, and targeted digital advertising.",
      },
      {
        q: "Should I wait for prices to go higher?",
        a: "Current appreciation of 4.2% YoY suggests prices are stable with gradual increases. Timing the market is difficult—most sellers do better by listing when ready rather than waiting. Dr. Jan can provide a personalized market analysis.",
      },
    ],
  },
  {
    title: "Investment Properties",
    faqs: [
      {
        q: "Is Las Vegas good for real estate investing?",
        a: "Yes. Las Vegas offers strong rental yields, appreciation potential, no state income tax, and a growing population. However, not all areas perform equally—Dr. Jan can identify neighborhoods with the best investment potential.",
      },
      {
        q: "What kind of returns can I expect?",
        a: "Returns vary by property type and location. Typical Las Vegas rental properties generate 5-8% cash-on-cash returns. Dr. Jan can analyze specific opportunities and provide realistic projections.",
      },
      {
        q: "Does Dr. Jan help with rental properties?",
        a: "Yes. Dr. Jan specializes in investment properties and can help identify opportunities, analyze returns, and connect you with property management resources.",
      },
    ],
  },
  {
    title: "Relocating to Las Vegas",
    faqs: [
      {
        q: "Can Dr. Jan help with relocations?",
        a: "Absolutely! Dr. Jan provides expert guidance on Las Vegas neighborhoods, commute times, and communities, so you can plan your move with confidence.",
      },
      {
        q: "How do I choose the right neighborhood?",
        a: "Summerlin, Henderson (Green Valley, Inspirada), and Centennial Hills offer parks, trails, and community amenities. Dr. Jan can match you with the right neighborhood based on your priorities—commute, budget, home size, and amenities.",
      },
      {
        q: "How is the cost of living in Las Vegas?",
        a: "Las Vegas offers lower costs than most major metros, especially California. No state income tax, affordable housing compared to coastal cities, and reasonable utility costs make it attractive for relocators.",
      },
    ],
  },
  {
    title: "Working with Dr. Jan Duffy",
    faqs: [
      {
        q: "What is Dr. Jan Duffy's experience?",
        a: "Dr. Jan has 35 years of Las Vegas real estate experience, with $127M+ in closed transactions and 500+ satisfied clients. She specializes in residential, luxury, investment, and relocation services throughout Southern Nevada.",
      },
      {
        q: "How do I contact Dr. Jan Duffy?",
        a: "Call or text (702) 500-0337 or email DrDuffy@arcadiahomeslasvegas.com. Office located at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
      {
        q: "Does working with Dr. Jan cost more?",
        a: "No. Commission rates are negotiable and comparable to other brokerages. Experienced representation often helps homes sell faster and for more money.",
      },
      {
        q: "What areas does Dr. Jan cover?",
        a: "Dr. Jan serves all of Las Vegas, Henderson, Summerlin, Green Valley, North Las Vegas, Southern Highlands, Skye Canyon, Centennial Hills, The Ridges, and surrounding communities.",
      },
    ],
  },
];

// Flatten all FAQs for schema generation
const allFaqs = faqCategories.flatMap((category) =>
  category.faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }))
);

// Combined page schemas including all FAQs
const pageSchemas = combineSchemas(
  generateWebPageSchema({
    name: "Frequently Asked Questions | Berkshire Hathaway HomeServices Las Vegas",
    description:
      "Comprehensive FAQ about Las Vegas real estate, buying, selling, investing, and working with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties.",
    url: "/faq",
    dateModified: "2026-01-25",
  }),
  generateFAQSchema(allFaqs)
);

export default function FAQPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + WebPage + FAQPage (all categories) */}
      <SchemaScript schema={pageSchemas} id="faq-page-schema" />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Dr. Jan Duffy | Arcadia Homes Las Vegas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600">
              Everything you need to know about working with{" "}
              <strong>Dr. Jan Duffy</strong> in Las Vegas
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <section key={category.title}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                      <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                      <p className="text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-16 text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Dr. Jan Duffy is happy to answer any questions about Las Vegas real estate or working
              together.
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

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}

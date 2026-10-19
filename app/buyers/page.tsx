import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { realscoutRange } from "@/lib/realscout-ranges";
import Link from "next/link";
import {
  Phone,
  Search,
  FileText,
  Home,
  Key,
  CheckCircle,
  DollarSign,
  Shield,
  MapPin,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { vegasMarket } from "@/lib/vegas-market";
import MarketStatsBlock, { valleyStats, valleySource } from "@/components/MarketStatsBlock";
import { areaMarket, areaMoney } from "@/lib/area-market";

import { selfCanonicalMetadata } from "@/lib/page-metadata";
import AgentPhoto from "@/components/AgentPhoto";
import PageIllustration from "@/components/PageIllustration";

export const metadata: Metadata = {
  title: "Home Buying Guide Las Vegas",
  description:
    "Looking to buy a home in Las Vegas? Dr. Jan Duffy of Arcadia Homes Las Vegas guides you through every step. Free buyer consultation. Call (702) 500-0337.",
  keywords: [
    "buy home Las Vegas",
    "Las Vegas home buyer",
    "Las Vegas buyer agent",
    "Henderson homes for sale",
    "first time home buyer Las Vegas",
    "California relocation Las Vegas",
    "55+ communities Las Vegas",
  ],
  ...selfCanonicalMetadata,
};

const buyerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Buying Services Las Vegas",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025000337",
  },
  areaServed: "Las Vegas, Henderson, Summerlin, Clark County NV",
  serviceType: "Buyer Representation",
};

const buyingSteps = [
  {
    icon: DollarSign,
    title: "Get Pre-Approved for Financing",
    description:
      "Know your budget before you start looking. Dr. Jan connects you with trusted local lenders who offer competitive rates and programs for every situation—FHA, VA, conventional, and down payment assistance programs.",
  },
  {
    icon: Search,
    title: "Define Your Priorities & Search",
    description:
      "Dr. Jan provides access to all MLS listings, off-market opportunities, and new construction. She'll help you identify which Las Vegas neighborhoods match your lifestyle while setting up automated alerts so you never miss a new listing.",
  },
  {
    icon: FileText,
    title: "Tour Properties & Make an Offer",
    description:
      "Dr. Jan's market expertise ensures your offer is competitive yet protects your interests. She negotiates on your behalf to get the best price and terms possible, with contingencies that protect you.",
  },
  {
    icon: Home,
    title: "Due Diligence & Inspections",
    description:
      "Coordinate home inspections, review disclosures, and ensure you understand exactly what you're buying. Dr. Jan helps negotiate repairs or credits if issues arise during the inspection period.",
  },
  {
    icon: Key,
    title: "Close & Get Your Keys",
    description:
      "Dr. Jan coordinates with lenders, title, and escrow to ensure a smooth closing. The typical closing process takes 30-45 days from offer acceptance—then you get the keys to your new Las Vegas home!",
  },
];

const neighborhoods = [
  { name: "Summerlin", price: `Median ${areaMoney(areaMarket["summerlin"].median)}`, description: "Master-planned community with Red Rock views" },
  { name: "Henderson", price: `Median ${areaMoney(areaMarket["henderson"].median)}`, description: "Master-planned communities and new construction" },
  { name: "Green Valley", price: `Median ${areaMoney(areaMarket["green-valley"].median)}`, description: "Mature landscaping, golf, and dining" },
  { name: "The Ridges", price: `Median ${areaMoney(areaMarket["the-ridges"].median)}`, description: "Ultra-luxury guard-gated estates" },
  { name: "North Las Vegas", price: `Median ${areaMoney(areaMarket["north-las-vegas"].median)}`, description: "Affordable new construction" },
  { name: "Southern Highlands", price: `Median ${areaMoney(areaMarket["southern-highlands"].median)}`, description: "Golf course community" },
];

export default function BuyersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buyerSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PageIllustration scene="home" label="Illustration of a home among neighborhood rooftops at dusk" />
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Dr. Jan Duffy | 35 Years in Las Vegas Real Estate
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Buy Your Las Vegas Home with Confidence
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              When you work with <strong>Dr. Jan Duffy</strong> as your buyer's agent, you get
              35 years of Las Vegas experience on your side—and it costs you nothing.
              The seller pays the commission, but the representation is yours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Free Buyer Representation</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Full MLS Access</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Expert Negotiation</span>
            </div>
          </div>
          <RealScoutListings compact {...realscoutRange("/buyers")} />

          {/* Value Prop */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why You Need a Buyer's Agent</h2>
                <p className="text-slate-300 mb-6">
                  Here's what many buyers don't know: having your own agent costs you nothing. The
                  seller pays the commission, but the representation is yours.{" "}
                  Dr. Jan protects your interests, not the seller's. In a competitive market like Las Vegas, having expert 
                  representation can mean the difference between winning your dream home and losing out.
                </p>
                <ul className="space-y-2">
                  {[
                    "Full MLS access + off-market opportunities",
                    "Expert negotiation on your behalf",
                    "Contract and disclosure review",
                    "Inspection coordination and repair negotiation",
                    "Lender and service provider referrals",
                    "35 years of local market expertise",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-2xl font-bold mb-2">Your Agent, Your Advocate</p>
                <p className="text-slate-400 mb-4">
                  Dr. Jan Duffy works exclusively for your interests throughout the entire
                  transaction—from the first showing to the closing table and beyond.
                </p>
                <div className="text-sm text-slate-500">
                  35 years in Las Vegas | $127M+ in transactions
                </div>
              </div>
            </div>
          </section>

          {/* Buying Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              The Home Buying Process in Las Vegas
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Buying a home is one of the most significant financial decisions you'll make. 
              Understanding the process helps reduce stress and ensures you're prepared at each 
              step. Here's what to expect when purchasing a home in Las Vegas with Dr. Jan Duffy.
            </p>
            <div className="space-y-6">
              {buyingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-6 items-start bg-white border border-slate-200 rounded-lg p-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Neighborhood Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Las Vegas Neighborhoods for Home Buyers
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Las Vegas offers a wide range of neighborhoods for every budget. Whether you're 
              seeking luxury estates in guard-gated communities, single-family homes near parks and 
              trails, or affordable new construction, Dr. Jan helps you find the perfect neighborhood. Here's 
              a quick guide to median prices and what each area offers.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="bg-white rounded-lg p-4 border border-slate-200"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-slate-900">{neighborhood.name}</h3>
                    <span className="text-blue-600 font-semibold">{neighborhood.price}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{neighborhood.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/neighborhoods"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                Explore All Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Buyer Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Specialized Guidance for Every Buyer
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Different buyers have different needs. A first-time buyer needs education and 
              hand-holding through the process. A California relocator needs tax guidance and 
              neighborhood matching. A luxury buyer needs discretion and access. Dr. Jan Duffy 
              tailors her approach to match your specific situation and goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/buyers/california-relocator"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">🌴</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  California Relocators
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  0% state income tax, 40-60% lower home prices. See what your CA equity buys in 
                  Las Vegas. Dr. Jan specializes in helping California buyers transition to Nevada.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/buyers/first-time-buyers"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">🔑</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  First-Time Buyers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Down payment assistance programs, FHA/VA loans, and builder incentives explained. 
                  Step-by-step guidance through your first home purchase.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/buyers/luxury-homes-las-vegas"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">💎</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Luxury Home Buyers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  $1M+ properties with discrete service. The Ridges, MacDonald Highlands, Southern 
                  Highlands, and Las Vegas Strip views. Off-market opportunities available.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
            </div>
          </section>

          {/* Why Work with Dr. Jan */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="flex justify-center mb-4"><AgentPhoto size={96} /></div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Why Buy with Dr. Jan Duffy
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Not all real estate agents are created equal. Dr. Jan brings 35 years of Las Vegas
              experience to every purchase.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Local Expertise</h3>
                <p className="text-slate-600 text-sm">
                  Dr. Jan has 35 years in Las Vegas real estate and $127M+ in transactions
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Expert Negotiation</h3>
                <p className="text-slate-600 text-sm">
                  500+ successful transactions mean proven negotiation skills
                </p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "My job isn't just to show you houses—it's to make sure you don't overpay, that you
                understand what you're buying, and that you're protected through every step of the
                transaction. That's what real representation means. I treat 
                every client like family and won't stop until we find the right home for your needs."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                <span className="inline-flex items-center gap-3 not-italic">
                  <AgentPhoto size={48} />
                  <span>— Dr. Jan Duffy, Arcadia Homes Las Vegas | 35 Years in Las Vegas Real Estate</span>
                </span>
              </cite>
            </div>
          </section>

          {/* Market Stats */}
          <MarketStatsBlock
            theme="blue"
            title={`Las Vegas Buyer Market Statistics | ${vegasMarket.month}`}
            intro={`Supply is up to ${vegasMarket.lvr.monthsSupply} months and ${vegasMarket.lvr.sfNoOffer.toLocaleString()} single-family homes sat with no offer at the end of ${vegasMarket.month}. That gives buyers more room to negotiate price, credits, and rate buydowns.`}
            stats={valleyStats()}
            source={valleySource}
          />

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Frequently Asked Questions About Buying in Las Vegas
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Get answers to the most common questions from Las Vegas home buyers. If you don't 
              see your question here, call Dr. Jan Duffy at (702) 500-0337 for a free consultation.
            </p>
            <div className="space-y-4">
              {[
                {
                  q: "How much do I need for a down payment in Las Vegas?",
                  a: "Down payments vary by loan type: FHA requires 3.5%, conventional loans typically 3-20%, VA loans 0% for eligible veterans, and USDA loans 0% for rural areas. Nevada also offers down payment assistance programs for first-time buyers. Dr. Jan can connect you with lenders who specialize in low down payment programs.",
                },
                {
                  q: "Should I get pre-approved before looking at homes?",
                  a: "Yes! Pre-approval shows sellers you're serious and gives you a clear budget. In competitive situations, pre-approved buyers have a significant advantage. The process typically takes 1-3 days with proper documentation.",
                },
                {
                  q: "Does Dr. Jan help with new construction purchases?",
                  a: "Yes! Dr. Jan provides free representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities. The builder pays her commission, but she works for you—reviewing contracts, negotiating upgrades, and protecting your interests during the build process.",
                },
                {
                  q: "What if I'm relocating from another state?",
                  a: "Dr. Jan helps out-of-state buyers find the right Las Vegas home remotely through virtual tours and video calls.",
                },
                {
                  q: "How competitive is the Las Vegas housing market?",
                  a: "Las Vegas is closer to balanced than it was a year ago: about 5 months of supply in September 2026, up from about 4. Well-priced homes still move—53.4% sold within 30 days—but overpriced ones sit, which gives buyers room to negotiate. A pre-approval still matters on the best homes.",
                },
                {
                  q: "How do I choose the right Las Vegas neighborhood?",
                  a: "Summerlin, Henderson (Green Valley, Inspirada), and Centennial Hills offer parks, trails, and community amenities. Dr. Jan can match you with the right neighborhood based on your priorities—commute, budget, home size, and amenities.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Las Vegas Home?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Questions about buying in Las Vegas? Call or text Dr. Jan Duffy for a free buyer
              consultation. Get expert guidance backed by 35 years in Las Vegas real estate—the 
              seller pays the commission, so representation is free for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025000337"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-0337
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-4 text-slate-400 text-sm">
              Dr. Jan Duffy | Arcadia Homes Las Vegas
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Market figures updated October 2026</div>
      </main>
      <Footer />
    </>
  );
}

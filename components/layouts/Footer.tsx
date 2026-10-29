import Link from "next/link";
import AgentPhoto from "@/components/AgentPhoto";
import { Phone, Mail, MapPin } from "lucide-react";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AgentPhoto size={64} />
              <div>
                <h3 className="font-bold text-xl leading-tight">{siteConfig.name}</h3>
                <p className="text-slate-400 text-sm">{agentInfo.name}, {agentInfo.title}</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 text-sm">
              Arcadia, Summerlin West and 55+ real estate with Dr. Jan Duffy. Licensed since 2008 · 35 years in Las Vegas, $127M+ in closed transactions.
            </p>
            <a
              href="http://drjanduffy.realscout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition-colors text-sm font-semibold"
            >
              Search Las Vegas homes →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://drjanduffy.realscout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  All Properties
                </a>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods/arcadia"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Arcadia at Grand Park (SHAWOOD)
                </Link>
              </li>
              <li>
                <Link
                  href="/market-report"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market Report
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Real Estate Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buyers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Buying
                </Link>
              </li>
              <li>
                <Link
                  href="/buyers/california-relocator"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  California Relocators
                </Link>
              </li>
              <li>
                <Link
                  href="/sellers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Selling
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-homes"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Luxury Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/55-plus-communities"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  55+ Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/new-construction"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  New Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/market-insights"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - NAP (Name, Address, Phone) */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Dr. Jan Duffy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  {officeInfo.address.street}
                  <br />
                  {officeInfo.address.city}, {officeInfo.address.state} {officeInfo.address.zip}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={agentInfo.phoneTel}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {agentInfo.phone}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={`mailto:${agentInfo.email}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {agentInfo.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.name} · {agentInfo.name}. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/sitemap.xml" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
              <a
                href="/fair-housing.txt"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Fair Housing
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-xs text-center mt-4 max-w-3xl mx-auto">
            Equal Housing Opportunity. We do not discriminate based on race, color, religion, sex,
            handicap, familial status, national origin, sexual orientation, or gender identity.
          </p>
          {/* Brokerage disclosure — NAC 645.610: brokerage name shown with prominence,
              license number, and franchise independently-owned statement */}
          <div className="mt-6 mx-auto max-w-3xl rounded-lg border border-slate-700 bg-slate-800/60 px-6 py-5 text-center space-y-1">
            <p className="text-white text-base md:text-lg font-bold">
              {agentInfo.brokerage} since September 2008 · License {agentInfo.license}
            </p>
            <p className="text-slate-300 text-sm">
              Each office is independently owned and operated.
            </p>
            <p className="text-slate-300 text-sm">
              <a href={agentInfo.phoneTel} className="hover:text-white">{agentInfo.phone}</a>
              {" · "}
              <a href={siteConfig.url} className="hover:text-white">{siteConfig.url.replace("https://", "").replace("www.", "")}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

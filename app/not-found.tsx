import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { siteConfig, agentInfo } from "@/lib/site-config";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-24 pb-16">
        <h1 className="text-6xl font-bold text-slate-800 mb-2">404</h1>
        <p className="text-xl text-slate-600 mb-6 text-center">
          This page couldn’t be found.
        </p>
        <p className="text-slate-600 mb-8 text-center max-w-md">
          The link may be broken or the page may have been moved. Need help with
          Arcadia or Summerlin West real estate? We’re here.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <a
            href={agentInfo.phoneTel}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call {agentInfo.phoneFormatted}
          </a>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          {siteConfig.name} · {agentInfo.name}
        </p>
      </div>
      <Footer />
    </>
  );
}

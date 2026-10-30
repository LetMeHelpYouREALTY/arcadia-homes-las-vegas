"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import AgentPhoto from "@/components/AgentPhoto";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background: illustrated desert dusk (placeholder until real Arcadia photos are shot) */}
      <div className="absolute inset-0" aria-hidden="true">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="45%" stopColor="#7c3aed" />
              <stop offset="72%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <radialGradient id="heroSun" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fde68a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#heroSky)" />
          <circle cx="1040" cy="610" r="220" fill="url(#heroSun)" />
          <path
            d="M0 640 L120 560 L230 600 L360 500 L470 560 L590 470 L720 545 L840 480 L960 560 L1080 500 L1220 575 L1340 520 L1440 560 L1440 900 L0 900 Z"
            fill="#9a3412"
            opacity="0.85"
          />
          <path
            d="M0 720 L150 650 L300 700 L430 630 L560 690 L700 640 L850 705 L1000 650 L1150 715 L1300 660 L1440 700 L1440 900 L0 900 Z"
            fill="#7c2d12"
          />
          <path
            d="M0 800 L200 760 L420 790 L640 750 L860 795 L1080 760 L1300 790 L1440 770 L1440 900 L0 900 Z"
            fill="#431407"
          />
        </svg>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <AgentPhoto size={96} priority className="mb-4 drop-shadow-xl md:h-28 md:w-28" />
        <h1
          id="hero-heading"
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Arcadia by SHAWOOD in Summerlin West
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Dr. Jan Duffy helps buyers and sellers navigate SHAWOOD at Arcadia in Grand Park village—
          luxury new construction in Summerlin West, backed by a career licensed since 2008 · 35 years in Las Vegas.
        </p>

        {/* RealScout Search Widget */}
        <div className="realscout-wrapper mb-4">
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>`,
            }}
          />
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">500+</span>
            <span>Properties Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Since 2008</span>
            <span>in Las Vegas Real Estate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">5.0★</span>
            <span>Realtor.com (50 reviews)</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 ${
          prefersReducedMotion ? '' : 'animate-bounce'
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}

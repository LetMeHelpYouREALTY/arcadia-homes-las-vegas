/**
 * PalmsListingCard — Featured listing widget for Palms Place #822
 * MLS# 2782527 · $437,777 · Active
 *
 * TO REMOVE when listing sells:
 *   1. Delete this file
 *   2. Remove import + <PalmsListingCard /> from RealScoutListings.tsx
 */

"use client";

export default function PalmsListingCard() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0A2440 0%, #0d2d52 100%)",
        border: "1px solid #C9A84C",
        borderRadius: "12px",
        padding: "28px 32px",
        margin: "32px 0",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Gold accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #C9A84C, #F0D080, #C9A84C)",
        }}
      />

      {/* Listing photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.propertypanorama.com/las/2782527/0.jpg"
        alt="4381 W Flamingo Rd #822 · Palms Place Las Vegas"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover" as const,
          borderRadius: "8px",
          marginBottom: "16px",
          display: "block",
        }}
      />

      {/* Featured badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" as const }}>
        <span
          style={{
            background: "#C9A84C",
            color: "#0A2440",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            padding: "3px 10px",
            borderRadius: "20px",
          }}
        >
          ✦ Featured Listing
        </span>
        <span style={{ fontSize: "12px", color: "#C9A84C", fontWeight: "600" }}>
          Dr. Jan Duffy · BHHS Nevada Properties
        </span>
      </div>

      {/* Price + address */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#F0D080",
            letterSpacing: "-0.5px",
            lineHeight: 1,
            marginBottom: "6px",
          }}
        >
          $437,777
        </div>
        <div style={{ fontSize: "16px", fontWeight: "600", color: "#e8edf2" }}>
          4381 W Flamingo Rd #822 · Palms Place
        </div>
        <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "2px" }}>
          Las Vegas, NV 89103 · MLS# 2782527
        </div>
      </div>

      {/* Feature badges */}
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "20px" }}>
        {[
          "🏨 STR Permitted",
          "💡 HOA Covers All Utilities",
          "🏢 8th Floor Corner",
          "📐 1,220 SF",
          "🌟 Strip Views",
        ].map((badge) => (
          <span
            key={badge}
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#F0D080",
              fontSize: "12px",
              fontWeight: "600",
              padding: "4px 12px",
              borderRadius: "20px",
              whiteSpace: "nowrap" as const,
            }}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* CTA row */}
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "12px", alignItems: "center" }}>
        <a
          href="tel:702-222-1964"
          style={{
            background: "#C9A84C",
            color: "#0A2440",
            fontWeight: "700",
            fontSize: "14px",
            padding: "10px 22px",
            borderRadius: "8px",
            textDecoration: "none",
            display: "inline-block",
            letterSpacing: "0.02em",
          }}
        >
          📞 Call/Text 702-222-1964
        </a>
        <a
          href="https://www.luxevegasliving.com/idx/4381-w-flamingo-rd-las-vegas-nv-89103/1801545223_spid/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#C9A84C",
            fontWeight: "600",
            fontSize: "13px",
            textDecoration: "underline",
          }}
        >
          View Full Details →
        </a>
      </div>
    </div>
  );
}

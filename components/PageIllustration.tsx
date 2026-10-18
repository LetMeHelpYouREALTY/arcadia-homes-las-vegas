/**
 * Code-drawn page header illustrations (no photos, no AI).
 * Clearly artwork, so it never stands in for a real photo of a specific
 * property or community. Swap for real photography when it's shot.
 */

export type Scene =
  | "desert" // mountains + neighborhood rooftops
  | "golf" // luxury: golf green + flag + estate homes
  | "active-adult" // 55+: palms, pool, clubhouse
  | "lake" // lakeside community
  | "skyline" // city / market: Strip-style towers
  | "market" // market data: skyline + rising bars
  | "new-build" // new construction: house framing
  | "road" // relocation: road into the valley
  | "home" // buying/selling: single home with keys-style door light
  | "office"; // about/contact/services: skyline + mountains

type Palette = "dusk" | "day" | "golden";

const SKIES: Record<Palette, [string, string, string]> = {
  dusk: ["#1e1b4b", "#7c3aed", "#f97316"],
  day: ["#0ea5e9", "#7dd3fc", "#fef3c7"],
  golden: ["#7c2d12", "#ea580c", "#fde68a"],
};

const DEFAULT_PALETTE: Record<Scene, Palette> = {
  desert: "dusk",
  golf: "golden",
  "active-adult": "day",
  lake: "day",
  skyline: "dusk",
  market: "dusk",
  "new-build": "golden",
  road: "golden",
  home: "dusk",
  office: "dusk",
};

function Mountains({ tone }: { tone: "warm" | "cool" }) {
  const c = tone === "warm" ? ["#9a3412", "#7c2d12", "#431407"] : ["#475569", "#334155", "#1e293b"];
  return (
    <g>
      <path d="M0 230 L90 170 L170 200 L260 130 L350 185 L450 120 L540 175 L640 135 L740 190 L840 140 L960 200 L1060 150 L1200 190 L1200 360 L0 360 Z" fill={c[0]} opacity="0.85" />
      <path d="M0 270 L120 225 L240 255 L360 215 L480 250 L600 220 L720 262 L840 228 L960 268 L1080 236 L1200 258 L1200 360 L0 360 Z" fill={c[1]} />
    </g>
  );
}

function Rooftops({ y = 300, fill = "#1c1917" }: { y?: number; fill?: string }) {
  const houses = [40, 150, 270, 400, 520, 650, 770, 900, 1020, 1120];
  return (
    <g fill={fill}>
      <rect x="0" y={y} width="1200" height={360 - y} />
      {houses.map((x, i) => {
        const w = i % 3 === 0 ? 110 : 90;
        const h = i % 2 === 0 ? 34 : 26;
        return (
          <g key={x}>
            <rect x={x} y={y - h} width={w} height={h} />
            {/* flat desert-modern roof cap */}
            <rect x={x - 6} y={y - h - 6} width={w + 12} height={6} />
            <rect x={x + w * 0.2} y={y - h + 10} width={12} height={10} fill="#fde68a" opacity="0.85" />
            <rect x={x + w * 0.6} y={y - h + 10} width={12} height={10} fill="#fde68a" opacity="0.6" />
          </g>
        );
      })}
    </g>
  );
}

function Skyline({ fill = "#0f172a" }: { fill?: string }) {
  const towers = [
    [520, 120, 34], [560, 90, 40], [606, 140, 30], [642, 70, 46], [694, 110, 36], [736, 150, 28], [770, 100, 38],
  ];
  return (
    <g fill={fill}>
      {towers.map(([x, top, w]) => (
        <g key={x}>
          <rect x={x} y={top} width={w} height={300 - top} />
          {Array.from({ length: Math.floor((300 - top) / 18) }).map((_, r) => (
            <rect key={r} x={x + 6} y={top + 8 + r * 18} width={w - 12} height={4} fill="#fde68a" opacity={0.35 + ((r * 7 + x) % 5) * 0.1} />
          ))}
        </g>
      ))}
      <rect x="0" y="300" width="1200" height="60" />
    </g>
  );
}

function Palms() {
  const palm = (x: number, s: number) => (
    <g key={x} transform={`translate(${x} 0) scale(${s})`} fill="#14532d">
      <path d="M0 300 C 4 240, 10 200, 6 150 L 12 150 C 18 200, 12 240, 10 300 Z" fill="#422006" />
      <path d="M9 150 C -30 130, -60 140, -80 160 C -50 140, -20 140, 9 152 Z" />
      <path d="M9 150 C 40 128, 75 136, 95 158 C 62 140, 32 140, 9 152 Z" />
      <path d="M9 150 C -10 115, -40 100, -60 98 C -30 112, -10 125, 8 150 Z" />
      <path d="M9 150 C 30 112, 60 102, 80 104 C 50 116, 28 128, 10 151 Z" />
    </g>
  );
  return <g>{[palm(150, 1), palm(250, 0.8), palm(960, 0.95), palm(1060, 0.75)]}</g>;
}

export default function PageIllustration({
  scene,
  label,
  palette,
  className = "",
}: {
  scene: Scene;
  /** Plain description for screen readers, e.g. "Illustration of desert mountains above rooftops". */
  label: string;
  palette?: Palette;
  className?: string;
}) {
  const p = palette ?? DEFAULT_PALETTE[scene];
  const [top, mid, low] = SKIES[p];
  const id = `sky-${scene}-${p}`;
  const warm = p !== "day";

  return (
    <figure className={`relative mx-auto mb-8 w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <svg viewBox="0 0 1200 360" role="img" aria-label={label} className="block h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={top} />
            <stop offset="60%" stopColor={mid} />
            <stop offset="100%" stopColor={low} />
          </linearGradient>
        </defs>
        <rect width="1200" height="360" fill={`url(#${id})`} />
        <circle cx={scene === "active-adult" ? 1010 : 880} cy={p === "day" ? 90 : 210} r={p === "day" ? 46 : 70} fill="#fde68a" opacity={p === "day" ? 0.95 : 0.8} />

        {scene !== "skyline" && scene !== "market" && <Mountains tone={warm ? "warm" : "cool"} />}

        {scene === "desert" && <Rooftops />}

        {scene === "golf" && (
          <g>
            <path d="M0 300 C 300 260, 700 330, 1200 285 L1200 360 L0 360 Z" fill="#166534" />
            <ellipse cx="700" cy="300" rx="120" ry="18" fill="#22c55e" />
            <rect x="700" y="214" width="4" height="86" fill="#f8fafc" />
            <path d="M704 214 L744 226 L704 238 Z" fill="#dc2626" />
            <g fill="#1c1917">
              <rect x="120" y="240" width="200" height="50" />
              <rect x="100" y="232" width="240" height="8" />
              <rect x="880" y="236" width="220" height="54" />
              <rect x="860" y="228" width="260" height="8" />
            </g>
            <rect x="160" y="252" width="40" height="18" fill="#fde68a" opacity="0.8" />
            <rect x="940" y="250" width="50" height="18" fill="#fde68a" opacity="0.8" />
          </g>
        )}

        {scene === "active-adult" && (
          <g>
            <rect x="0" y="292" width="1200" height="68" fill="#a16207" opacity="0.35" />
            <rect x="420" y="230" width="360" height="62" fill="#f8fafc" />
            <path d="M400 232 L600 196 L800 232 Z" fill="#c2410c" />
            {[450, 520, 590, 660, 730].map((x) => (
              <rect key={x} x={x} y={248} width={26} height={30} fill="#0ea5e9" opacity="0.7" />
            ))}
            <rect x="380" y="306" width="440" height="34" rx="17" fill="#38bdf8" />
            <path d="M400 322 h400" stroke="#e0f2fe" strokeWidth="3" strokeDasharray="18 14" />
            <Palms />
          </g>
        )}

        {scene === "lake" && (
          <g>
            <rect x="0" y="270" width="1200" height="90" fill="#0284c7" />
            {[60, 180, 320, 470, 640, 800, 960, 1090].map((x, i) => (
              <path key={x} d={`M${x} ${290 + (i % 3) * 18} h50`} stroke="#bae6fd" strokeWidth="3" opacity="0.8" />
            ))}
            <g fill="#f8fafc">
              <rect x="760" y="226" width="160" height="44" />
              <path d="M748 228 L840 200 L932 228 Z" fill="#c2410c" />
              <rect x="950" y="236" width="120" height="34" />
              <path d="M940 238 L1010 214 L1080 238 Z" fill="#c2410c" />
            </g>
          </g>
        )}

        {scene === "skyline" && (
          <g>
            <Mountains tone="warm" />
            <Skyline />
          </g>
        )}

        {scene === "market" && (
          <g>
            <Mountains tone="warm" />
            <Skyline />
            {[[120, 230], [180, 200], [240, 210], [300, 170], [360, 140]].map(([x, y]) => (
              <rect key={x} x={x} y={y} width="40" height={300 - y} rx="4" fill="#fbbf24" opacity="0.9" />
            ))}
            <path d="M110 240 L180 208 L250 218 L320 176 L400 130" stroke="#fef3c7" strokeWidth="5" fill="none" />
            <path d="M400 130 l-16 2 l10 12 Z" fill="#fef3c7" />
          </g>
        )}

        {scene === "new-build" && (
          <g>
            <rect x="0" y="300" width="1200" height="60" fill="#78350f" />
            <g stroke="#fef3c7" strokeWidth="6" fill="none">
              <path d="M460 300 V200 H760 V300" />
              <path d="M440 204 L610 120 L780 204" />
              {[500, 540, 580, 620, 660, 700].map((x) => (
                <path key={x} d={`M${x} 300 V204`} strokeWidth="4" />
              ))}
              <path d="M460 250 H760" strokeWidth="4" />
            </g>
            <Rooftops y={330} />
          </g>
        )}

        {scene === "road" && (
          <g>
            <path d="M0 300 L1200 280 L1200 360 L0 360 Z" fill="#78350f" />
            <path d="M520 360 C 560 330, 620 300, 640 282 L660 282 C 660 300, 720 330, 800 360 Z" fill="#334155" />
            <path d="M650 290 L652 300 M654 312 L658 326 M662 340 L668 358" stroke="#fde68a" strokeWidth="5" />
            <g transform="translate(690 312)">
              <rect x="0" y="0" width="60" height="22" rx="6" fill="#f8fafc" />
              <rect x="10" y="-12" width="36" height="14" rx="4" fill="#f8fafc" />
              <circle cx="14" cy="24" r="6" fill="#0f172a" />
              <circle cx="46" cy="24" r="6" fill="#0f172a" />
            </g>
          </g>
        )}

        {scene === "home" && (
          <g>
            <rect x="0" y="300" width="1200" height="60" fill="#1c1917" />
            <rect x="470" y="200" width="260" height="100" fill="#f8fafc" />
            <rect x="450" y="190" width="300" height="12" fill="#e2e8f0" />
            <rect x="580" y="236" width="40" height="64" fill="#fbbf24" />
            <rect x="500" y="224" width="50" height="34" fill="#38bdf8" opacity="0.8" />
            <rect x="650" y="224" width="50" height="34" fill="#38bdf8" opacity="0.8" />
            <Rooftops y={330} />
          </g>
        )}

        {scene === "office" && (
          <g>
            <Skyline />
            <Rooftops y={330} />
          </g>
        )}
      </svg>
      <figcaption className="absolute bottom-2 right-3 rounded bg-black/40 px-2 py-0.5 text-[11px] font-medium text-white/90">
        Illustration
      </figcaption>
    </figure>
  );
}

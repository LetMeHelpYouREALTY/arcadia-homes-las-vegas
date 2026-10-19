import { areaMarket, areaStats } from "@/lib/area-market";
import { vegasMarket as v } from "@/lib/vegas-market";

export type Stat = { value: string; label: string };

type Theme = "dark" | "blue" | "light";

const themes: Record<Theme, { box: string; value: string; label: string; note: string }> = {
  dark: { box: "bg-slate-900 text-white", value: "text-blue-400", label: "text-slate-300", note: "text-slate-400" },
  blue: { box: "bg-blue-600 text-white", value: "text-white", label: "text-blue-100", note: "text-blue-100" },
  light: { box: "bg-blue-50 text-slate-900", value: "text-blue-600", label: "text-slate-600", note: "text-slate-500" },
};

const cols: Record<number, string> = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" };

function usd(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

/** Valley-wide snapshot from Las Vegas REALTORS + Freddie Mac. */
export function valleyStats(): Stat[] {
  return [
    { value: usd(v.lvr.sfMedian), label: `Single-family median (${v.lvr.sfMedianYoY} YoY)` },
    { value: `${v.lvr.monthsSupply} months`, label: "Housing supply" },
    { value: v.lvr.soldWithin30, label: "Sold within 30 days" },
    { value: `${v.rate.thirtyYear.toFixed(2)}%`, label: "30-year fixed rate" },
  ];
}

export const valleySource = `Las Vegas REALTORS, ${v.month} (existing homes); Freddie Mac, week of ${v.rate.asOf}.`;

type Props = {
  title: string;
  intro?: string;
  stats: Stat[];
  source: string;
  theme?: Theme;
  className?: string;
};

export default function MarketStatsBlock({ title, intro, stats, source, theme = "dark", className = "" }: Props) {
  const t = themes[theme];
  return (
    <section className={`mb-16 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto ${t.box} ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      {intro && <p className={`text-center max-w-3xl mx-auto mb-8 ${t.label}`}>{intro}</p>}
      <div className={`grid grid-cols-2 ${cols[Math.min(stats.length, 4)] ?? "md:grid-cols-4"} gap-6 ${intro ? "" : "mt-8"}`}>
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className={`text-3xl font-bold mb-1 ${t.value}`}>{s.value}</div>
            <div className={`text-sm ${t.label}`}>{s.label}</div>
          </div>
        ))}
      </div>
      <p className={`mt-8 text-center text-xs ${t.note}`}>Source: {source}</p>
    </section>
  );
}

/** Neighborhood stat block driven by lib/area-market.ts. */
export function AreaStatsBlock({ area, title }: { area: string; title: string }) {
  const a = areaMarket[area];
  return (
    <MarketStatsBlock
      title={`${title} | ${a.period}`}
      stats={areaStats(area)}
      source={`${a.source.label}; ${a.scope}. Checked ${a.source.checked}.`}
    />
  );
}

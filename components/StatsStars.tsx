import type { ResultStats } from "@/data/results";

type StatsStarsProps = {
  stats: ResultStats;
  title?: string;
  className?: string;
};

const statLabels: Record<keyof ResultStats, string> = {
  passion: "情熱",
  lead: "主導",
  action: "行動",
  express: "表現"
};

function stars(value: number) {
  return "★".repeat(value) + "☆".repeat(5 - value);
}

export default function StatsStars({ stats, title = "RPGステータス", className = "" }: StatsStarsProps) {
  return (
    <div className={["status-panel p-5", className].join(" ")}>
      <h2 className="text-lg font-black text-slate-950">{title}</h2>
      <div className="mt-4 grid gap-3">
        {(Object.entries(stats) as [keyof ResultStats, number][]).map(([key, value]) => (
          <div key={key} className="grid grid-cols-[4rem_1fr_2rem] items-center gap-3 rounded-2xl bg-white/78 px-3 py-2 ring-1 ring-amber-100/80">
            <span className="font-bold text-slate-600">{statLabels[key]}</span>
            <span className="text-lg tracking-wide text-amber-400" aria-label={`${statLabels[key]} ${value} / 5`}>
              {stars(value)}
            </span>
            <span className="text-right text-sm font-black text-slate-500">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

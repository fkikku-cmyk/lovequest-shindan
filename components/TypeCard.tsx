import Image from "next/image";
import Link from "next/link";
import type { DiagnosisResult } from "@/data/results";

type TypeCardProps = {
  result: DiagnosisResult;
  compact?: boolean;
  jobNo?: number;
  showButton?: boolean;
  className?: string;
};

export default function TypeCard({
  result,
  compact = false,
  jobNo,
  showButton = true,
  className = ""
}: TypeCardProps) {
  return (
    <Link
      href={`/types/${result.code}`}
      className={[
        "quest-card group block overflow-hidden transition hover:-translate-y-1 hover:border-ruby/30",
        className
      ].join(" ")}
    >
      <div className={["magic-border relative bg-gradient-to-br from-pink-50 via-white to-sky-50", compact ? "h-36 sm:h-44" : "aspect-[4/3] sm:aspect-square"].join(" ")}>
        <div className="absolute left-3 top-3 z-10 rounded-full bg-white/88 px-3 py-1 text-[0.68rem] font-black tracking-wide text-royal shadow-sm ring-1 ring-violet-100">
          {jobNo ? `JOB No.${String(jobNo).padStart(2, "0")}` : "GUILD CARD"}
        </div>
        <Image
          src={result.image}
          alt={`${result.name}のキャラクター`}
          fill
          sizes={compact ? "(max-width: 640px) 46vw, 320px" : "(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 25vw"}
          className="pixel-image object-contain p-3 transition group-hover:scale-105 sm:p-4"
          unoptimized
        />
      </div>
      <div className={compact ? "p-3 sm:p-4" : "p-4"}>
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-black text-ruby">{result.code}</p>
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[0.68rem] font-black text-amber-600">
            TYPE CODE
          </span>
        </div>
        <h3 className={compact ? "mt-1 text-base font-black text-slate-950" : "mt-1 text-lg font-black text-slate-950"}>
          {result.name}
        </h3>
        <p className={compact ? "mt-2 line-clamp-2 text-xs leading-5 text-slate-600" : "mt-2 line-clamp-2 text-sm leading-6 text-slate-600"}>
          {result.catch}
        </p>
        {showButton ? (
          <span className="command-button mt-4 inline-flex min-h-11 w-full items-center justify-center bg-gradient-to-r from-ruby to-royal px-4 text-sm font-black text-white shadow-[0_10px_24px_rgba(255,107,154,0.24)] group-hover:shadow-[0_14px_30px_rgba(124,92,255,0.24)]">
            詳しく見る
          </span>
        ) : null}
      </div>
    </Link>
  );
}

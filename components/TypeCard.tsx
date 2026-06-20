import Image from "next/image";
import Link from "next/link";
import type { DiagnosisResult } from "@/data/results";

type TypeCardProps = {
  result: DiagnosisResult;
  compact?: boolean;
  showButton?: boolean;
  className?: string;
};

export default function TypeCard({
  result,
  compact = false,
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
        <h3 className={compact ? "text-base font-black text-slate-950" : "text-lg font-black text-slate-950"}>
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

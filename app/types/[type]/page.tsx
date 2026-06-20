import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import PixelButton from "@/components/PixelButton";
import SectionCard from "@/components/SectionCard";
import StatsStars from "@/components/StatsStars";
import { getCompatibilityReason, resultSupplements, results } from "@/data/results";
import type { TypeCode } from "@/lib/diagnose";
import { resolveOgImage } from "@/lib/ogp";

type TypePageProps = {
  params: {
    type: string;
  };
};

function getResult(type: string) {
  const normalized = type.toUpperCase();
  if (normalized in results) {
    return results[normalized as TypeCode];
  }
  return null;
}

export function generateStaticParams() {
  return Object.keys(results).map((type) => ({ type }));
}

export function generateMetadata({ params }: TypePageProps): Metadata {
  const result = getResult(params.type);

  if (!result) {
    return {
      title: "役職が見つかりません"
    };
  }

  const ogImageUrl = resolveOgImage(result.ogImage);
  const detailUrl = `/types/${result.code}`;
  const title = `${result.name}（${result.code}）｜ラブクエ診断 役職図鑑`;
  const description = `ラブクエ診断の恋愛タイプ「${result.name}」の特徴、恋愛傾向、強み、弱み、相性を紹介します。`;

  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical: detailUrl
    },
    openGraph: {
      title,
      description,
      url: detailUrl,
      siteName: "ラブクエ診断",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${result.name}（${result.code}）の役職図鑑カード`
        }
      ],
      type: "article",
      locale: "ja_JP"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl]
    }
  };
}

export default function TypeDetailPage({ params }: TypePageProps) {
  const result = getResult(params.type);

  if (!result) {
    notFound();
  }

  const supplement = resultSupplements[result.code];

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4 sm:py-6">
      <SectionCard className="overflow-hidden">
        <div className="grid">
          <div className="bg-gradient-to-br from-pink-50 via-white to-sky-50 p-4 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link href="/types" className="text-sm font-bold text-ruby hover:underline">
                役職図鑑へ戻る
              </Link>
            </div>
            <div className="magic-border relative mx-auto mt-5 aspect-square w-full max-w-[430px] overflow-hidden rounded-[2rem] bg-white">
              <Image
                src={result.image}
                alt={`${result.name}のキャラクター`}
                fill
                sizes="(max-width: 640px) 92vw, 430px"
                className="pixel-image object-contain p-4"
                unoptimized
                priority
              />
            </div>
          </div>

          <div className="space-y-5 p-4 sm:p-8">
            <h1 className="text-3xl font-black text-slate-950 sm:text-5xl">{result.name}</h1>
            <p className="text-lg font-bold leading-8 text-slate-700">{result.catch}</p>

            <SectionCard tone="pink" className="p-5">
              <h2 className="text-sm font-black text-ruby">恋愛傾向</h2>
              <p className="mt-3 leading-8 text-slate-700">{result.description}</p>
              <p className="mt-3 leading-8 text-slate-600">{supplement.detail}</p>
            </SectionCard>

            <div className="grid gap-3 sm:grid-cols-2">
              <InfoBlock title="強み" items={result.strengths} />
              <InfoBlock title="気をつけたいこと" items={result.weaknesses} />
            </div>

            <StatsStars stats={result.stats} title="恋愛ステータス" />

            <InfoBlock title="このタイプっぽい恋愛行動" items={supplement.behaviors} />

            <SectionCard tone="amber" className="p-5">
              <h2 className="text-sm font-black text-amber-600">このタイプへのアドバイス</h2>
              <p className="mt-3 leading-8 text-slate-700">{supplement.advice}</p>
            </SectionCard>

            <SectionCard as="div" tone="plain" className="p-5">
              <h2 className="text-sm font-black text-slate-500">相性の良いタイプ</h2>
              <div className="mt-4 grid gap-3">
                {result.compatible.map((code) => (
                  <Link
                    key={code}
                    href={`/types/${code}`}
                    className="rounded-2xl bg-pink-50 px-4 py-3 transition hover:bg-pink-100"
                  >
                    <span className="block text-sm font-black text-ruby">{results[code].name}</span>
                    <span className="mt-2 block text-[0.68rem] font-black tracking-[0.12em] text-violet-500">
                      なぜ相性がいい？
                    </span>
                    <span className="mt-1 block text-xs font-bold leading-6 text-slate-600">
                      {getCompatibilityReason(result.code, code)}
                    </span>
                  </Link>
                ))}
              </div>
            </SectionCard>

            <div className="grid gap-3 sm:grid-cols-2">
              <PixelButton href="/quiz" className="w-full">診断して自分のタイプを調べる</PixelButton>
              <PixelButton href="/types" variant="secondary" className="w-full">役職図鑑に戻る</PixelButton>
            </div>
          </div>
        </div>
      </SectionCard>

      <AdSlot position="library" />
    </div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <SectionCard as="div" tone="plain" className="p-5">
      <h2 className="text-sm font-black text-slate-500">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-7 text-slate-700">
            <span className="text-amber-400">★</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

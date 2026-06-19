import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import PixelButton from "@/components/PixelButton";
import ResultCard from "@/components/ResultCard";
import { results } from "@/data/results";
import type { TypeCode } from "@/lib/diagnose";
import { resolveOgImage } from "@/lib/ogp";

type ResultPageProps = {
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

export function generateMetadata({ params }: ResultPageProps): Metadata {
  const result = getResult(params.type);

  if (!result) {
    return {
      title: "診断結果が見つかりません"
    };
  }

  const resultUrl = `/result/${result.code}`;
  const ogImageUrl = resolveOgImage(result.ogImage);
  const title = `${result.name}（${result.code}）｜ラブクエ診断`;
  const description = `私の恋愛ジョブは『${result.name}』でした。${result.catch} あなたもラブクエ診断で恋のタイプを診断してみよう！`;

  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical: resultUrl
    },
    openGraph: {
      title,
      description,
      url: resultUrl,
      siteName: "ラブクエ診断",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${result.name}の診断結果画像`
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

export default function ResultPage({ params }: ResultPageProps) {
  const result = getResult(params.type);

  if (!result) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5 py-4 sm:py-6">
      <ResultCard result={result} />
      <AdSlot position="result" />
      <div className="flex flex-wrap justify-center gap-3">
        <PixelButton href="/types" variant="secondary">
          役職図鑑を見る
        </PixelButton>
        <PixelButton href="/" variant="secondary">
          トップへ戻る
        </PixelButton>
      </div>
    </div>
  );
}

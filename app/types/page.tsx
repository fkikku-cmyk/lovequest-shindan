import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import PixelButton from "@/components/PixelButton";
import SectionCard from "@/components/SectionCard";
import TypeCard from "@/components/TypeCard";
import { resultList } from "@/data/results";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "16タイプ 役職図鑑",
  description: "ラブクエ診断に登場する16タイプの恋愛ジョブを一覧で確認できます。",
  path: "/types"
});

export default function TypesPage() {
  return (
    <div className="wide-shell space-y-6 py-4 sm:py-6">
      <SectionCard className="mx-auto max-w-2xl p-4 sm:p-8">
        <h1 className="text-3xl font-black text-slate-950 sm:text-4xl">16タイプ 役職図鑑</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          ラブクエ診断に登場する16の恋愛ジョブをまとめました。診断後の深掘りや、友だちの結果を読むときにも使えます。
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <PixelButton href="/quiz" className="w-full">診断する</PixelButton>
          <PixelButton href="/" variant="secondary" className="w-full">トップへ戻る</PixelButton>
        </div>
      </SectionCard>

      <div className="mx-auto max-w-2xl">
        <AdSlot position="library" />
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resultList.map((result) => (
          <TypeCard key={result.code} result={result} />
        ))}
      </section>
    </div>
  );
}

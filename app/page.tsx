import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import PixelButton from "@/components/PixelButton";
import SectionCard from "@/components/SectionCard";
import TypeCard from "@/components/TypeCard";
import { results } from "@/data/results";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "無料の16タイプ恋愛ジョブ診断",
  description:
    "24問であなたの恋愛ジョブがわかる無料診断。現代RPG風の16タイプで恋愛傾向を楽しくチェックできます。",
  path: "/"
});

const features = [
  {
    title: "24問でわかる",
    text: "直感で5段階回答。すきま時間にあなたの恋愛ジョブを診断できます。"
  },
  {
    title: "16タイプに分類",
    text: "情熱・主導・行動・表現の4軸から、恋の傾向をタイプ化します。"
  },
  {
    title: "RPG風ジョブで楽しく",
    text: "勇者、白魔道士、司書、月影巫女など、結果は物語みたいに読めます。"
  },
  {
    title: "SNSで共有できる",
    text: "結果ページはURLで保存・共有OK。友だちのタイプとも比べられます。"
  }
];

const popularTypes = [results.PLAE, results.CRAE, results.CRIE, results.CRIM];

export default function Home() {
  return (
    <div className="mx-auto max-w-md space-y-8 pb-4 md:max-w-2xl">
      <SectionCard className="overflow-hidden p-4 sm:p-7" label="QUEST">
        <div className="space-y-5">
          <div>
            <span className="quest-chip">⚔️ 無料恋愛ジョブ診断</span>
            <h1 className="sr-only">ラブクエ診断</h1>
            <div className="mt-4 overflow-hidden rounded-3xl bg-[#f8d3c4] ring-1 ring-pink-100">
              <Image
                src="/lovequest-logo.jpg"
                alt="ラブクエ診断 タイトルロゴ"
                width={1600}
                height={900}
                className="pixel-image h-auto w-full"
                priority
                unoptimized
              />
            </div>
            <p className="mt-5 text-2xl font-black leading-relaxed text-slate-950 sm:text-3xl">
              あなたの恋は、どんな冒険タイプ？
            </p>
            <p className="mt-3 text-base leading-8 text-slate-600">
              24問に答えるだけで、あなたの恋愛タイプをRPG風ジョブで診断。結果はURLで保存・共有できます。
            </p>
          </div>

          <div className="grid gap-3">
            <PixelButton href="/quiz" className="w-full">
              無料で診断する
            </PixelButton>
            <PixelButton href="/types" variant="secondary" className="w-full">
              16タイプを見る
            </PixelButton>
          </div>

          <p className="text-center text-sm font-bold leading-7 text-slate-500">
            5段階で答えるだけ。途中保存にも対応しています。
          </p>
        </div>
      </SectionCard>

      <section className="space-y-4">
        <div>
          <span className="quest-chip">📜 冒険の書</span>
          <h2 className="mt-3 text-2xl font-black text-slate-950">診断クエストでわかること</h2>
          <p className="mt-2 leading-7 text-slate-600">
            恋愛のクセを、かわいい現代RPG風のジョブとして楽しく整理します。
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <SectionCard key={feature.title} as="article" className="p-4 sm:p-5" label="BALANCE">
              <h3 className="text-lg font-black text-slate-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.text}</p>
            </SectionCard>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <span className="quest-chip">🧭 ギルド図鑑</span>
            <h2 className="mt-3 text-2xl font-black text-slate-950">人気ジョブ紹介</h2>
          </div>
          <Link href="/types" className="hidden text-sm font-black text-ruby hover:underline sm:inline">
            役職図鑑を見る
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {popularTypes.map((result) => (
            <TypeCard key={result.code} result={result} compact showButton={false} />
          ))}
        </div>

        <PixelButton href="/types" variant="secondary" className="w-full sm:hidden">
          役職図鑑を見る
        </PixelButton>
      </section>

      <AdSlot position="top" />

      <SectionCard className="bg-gradient-to-br from-white via-pink-50 to-violet-50 p-5 text-center sm:p-8" label="START QUEST">
        <span className="quest-chip">✨ 診断クエスト</span>
        <h2 className="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
          あなたの恋愛ジョブを調べよう
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          結果はすぐに表示されます。スクショやSNS共有もしやすい診断ページです。
        </p>
        <div className="mt-6">
          <PixelButton href="/quiz" className="w-full">
            診断をはじめる
          </PixelButton>
        </div>
      </SectionCard>
    </div>
  );
}

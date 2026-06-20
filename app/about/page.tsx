import type { Metadata } from "next";
import Link from "next/link";
import PixelButton from "@/components/PixelButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "ラブクエ診断とは？",
  description:
    "ラブクエ診断は、24問の質問から恋愛タイプを16種類の現代RPG風ジョブに分類する無料診断サイトです。",
  path: "/about"
});

const features = [
  {
    title: "24問で恋愛ジョブを判定",
    text: "情熱、主導、行動、表現の4つの軸から、あなたらしい恋の冒険スタイルを診断します。"
  },
  {
    title: "16タイプの役職図鑑",
    text: "勇者、白魔道士、吟遊詩人、月影巫女など、診断結果を図鑑ページで深掘りできます。"
  },
  {
    title: "SNSでシェアしやすい結果ページ",
    text: "結果ページはURLで共有可能。友だちの恋愛ジョブと見比べて楽しめます。"
  }
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4 sm:py-6">
      <section className="quest-card p-5 sm:p-8">
        <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          ラブクエ診断とは？
        </h1>
        <p className="mt-4 leading-8 text-slate-600">
          ラブクエ診断は、恋愛をRPGの冒険にたとえた16タイプ診断です。24問の質問に5段階で答えると、
          あなたの恋愛傾向を「恋愛ジョブ」として表示します。
        </p>
        <p className="mt-3 leading-8 text-slate-600">
          診断結果はエンタメとして楽しめる内容です。自分の恋のクセを知るきっかけや、友だちとの会話のきっかけとして使ってください。
          恋愛や性格を断定するものではありません。
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <PixelButton href="/quiz" className="w-full">
            診断する
          </PixelButton>
          <PixelButton href="/types" variant="secondary" className="w-full">
            役職図鑑を見る
          </PixelButton>
        </div>
      </section>

      <section className="grid gap-3">
        {features.map((feature) => (
          <article key={feature.title} className="quest-card p-5">
            <h2 className="text-lg font-black text-slate-950">{feature.title}</h2>
            <p className="mt-2 leading-7 text-slate-600">{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="quest-card p-5">
        <h2 className="text-xl font-black text-slate-950">診断データについて</h2>
        <p className="mt-3 leading-8 text-slate-600">
          診断途中の回答はブラウザのlocalStorageに保存されます。外部データベースは使っていないため、
          途中で閉じても同じ端末・同じブラウザなら再開できます。
        </p>
        <Link href="/privacy" className="mt-4 inline-flex min-h-10 items-center text-sm font-bold text-ruby hover:underline">
          プライバシーポリシーを読む
        </Link>
      </section>
    </div>
  );
}

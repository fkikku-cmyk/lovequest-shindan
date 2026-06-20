import type { Metadata } from "next";
import Link from "next/link";
import PixelButton from "@/components/PixelButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "利用規約",
  description:
    "ラブクエ診断の利用条件、禁止事項、診断コンテンツの取り扱いについて説明します。",
  path: "/terms"
});

const sections = [
  {
    title: "本サイトの利用について",
    text: "ラブクエ診断は、恋愛傾向を現代RPG風のジョブとして楽しむ無料診断サイトです。利用者は本規約に同意したうえで本サイトを利用するものとします。"
  },
  {
    title: "診断結果について",
    text: "診断結果は娯楽目的のコンテンツです。恋愛、性格、人間関係、将来の相性などを断定するものではありません。重要な判断はご自身の状況に応じて行ってください。"
  },
  {
    title: "禁止事項",
    text: "本サイトの運営を妨げる行為、第三者の権利を侵害する行為、コンテンツの無断転載や不正利用、法令または公序良俗に反する行為を禁止します。"
  },
  {
    title: "コンテンツの権利",
    text: "本サイトに掲載する文章、画像、ロゴ、タイプ名、デザインなどはラブクエ診断のオリジナルコンテンツとして扱います。引用や共有の範囲を超える利用はお控えください。"
  },
  {
    title: "規約の変更",
    text: "本規約は、サービス改善や運営上の必要に応じて変更される場合があります。変更後の内容は本ページに掲載した時点で効力を持つものとします。"
  }
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4 sm:py-6">
      <section className="quest-card p-5 sm:p-8">
        <h1 className="text-3xl font-black text-slate-950 sm:text-4xl">利用規約</h1>
        <p className="mt-4 leading-8 text-slate-600">
          ラブクエ診断を安心して楽しんでいただくための利用条件をまとめています。
        </p>
      </section>

      <section className="space-y-3">
        {sections.map((section) => (
          <article key={section.title} className="quest-card p-5">
            <h2 className="text-lg font-black text-slate-950">{section.title}</h2>
            <p className="mt-2 leading-8 text-slate-600">{section.text}</p>
          </article>
        ))}
      </section>

      <section className="quest-card p-5">
        <h2 className="text-lg font-black text-slate-950">関連ページ</h2>
        <p className="mt-2 leading-8 text-slate-600">
          個人情報の取り扱いや免責事項もあわせてご確認ください。
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <PixelButton href="/privacy" variant="secondary" className="w-full">
            プライバシーポリシー
          </PixelButton>
          <PixelButton href="/disclaimer" variant="secondary" className="w-full">
            免責事項
          </PixelButton>
        </div>
        <Link href="/" className="mt-5 inline-flex min-h-10 items-center text-sm font-bold text-ruby hover:underline">
          トップページへ戻る
        </Link>
      </section>
    </div>
  );
}

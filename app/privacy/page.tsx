import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "プライバシーポリシー",
  description: "ラブクエ診断のプライバシーポリシー、広告、アクセス解析、保存データについての説明です。",
  path: "/privacy"
});

const sections = [
  {
    title: "取得する情報",
    text: "ラブクエ診断では、診断途中の回答をブラウザのlocalStorageに保存します。外部データベースへ回答内容を送信・保存する仕組みは現在ありません。"
  },
  {
    title: "アクセス解析について",
    text: "今後、サービス改善のためGoogle Analyticsなどのアクセス解析ツールを利用する場合があります。その際はCookieなどを通じて匿名の利用状況を取得することがあります。"
  },
  {
    title: "広告配信について",
    text: "今後、Google AdSenseやアフィリエイト広告を掲載する場合があります。広告配信事業者がCookieを利用し、ユーザーの興味に応じた広告を表示することがあります。"
  },
  {
    title: "免責事項",
    text: "本サイトの診断結果はエンタメを目的としたものであり、恋愛や人間関係に関する専門的な助言を保証するものではありません。"
  }
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4 sm:py-6">
      <section className="quest-card p-5 sm:p-8">
        <span className="quest-chip">Privacy</span>
        <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">プライバシーポリシー</h1>
        <p className="mt-4 leading-8 text-slate-600">
          ラブクエ診断をご利用いただく際の情報の取り扱いについて説明します。
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
        <h2 className="text-lg font-black text-slate-950">お問い合わせ</h2>
        <p className="mt-2 leading-8 text-slate-600">
          本ポリシーに関するお問い合わせは、お問い合わせページからご確認ください。
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex min-h-10 items-center text-sm font-bold text-ruby hover:underline">
            お問い合わせページへ
          </Link>
          <Link href="/terms" className="inline-flex min-h-10 items-center text-sm font-bold text-royal hover:underline">
            利用規約へ
          </Link>
          <Link href="/disclaimer" className="inline-flex min-h-10 items-center text-sm font-bold text-royal hover:underline">
            免責事項へ
          </Link>
        </div>
      </section>
    </div>
  );
}

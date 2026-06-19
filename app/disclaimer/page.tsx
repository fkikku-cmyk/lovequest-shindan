import type { Metadata } from "next";
import PixelButton from "@/components/PixelButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "免責事項",
  description:
    "ラブクエ診断の診断結果、掲載情報、広告、外部リンクに関する免責事項を説明します。",
  path: "/disclaimer"
});

const notices = [
  {
    title: "診断結果は娯楽目的です",
    text: "ラブクエ診断の結果は、恋愛傾向を楽しく表現するエンタメコンテンツです。恋愛、性格、相性、将来の関係性を断定するものではありません。"
  },
  {
    title: "専門的な助言ではありません",
    text: "本サイトの内容は、心理、医療、法律、カウンセリングなどの専門的な助言を提供するものではありません。必要に応じて専門家へご相談ください。"
  },
  {
    title: "掲載情報について",
    text: "正確でわかりやすい情報提供に努めますが、内容の完全性、正確性、最新性を保証するものではありません。"
  },
  {
    title: "広告・外部リンクについて",
    text: "今後、広告や外部サービスへのリンクを掲載する場合があります。リンク先で提供される商品、サービス、情報について本サイトは責任を負いません。"
  },
  {
    title: "損害等の責任について",
    text: "本サイトの利用または利用できなかったことにより生じた損害について、運営者は責任を負いかねます。"
  }
];

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4 sm:py-6">
      <section className="quest-card p-5 sm:p-8">
        <span className="quest-chip">DISCLAIMER</span>
        <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">免責事項</h1>
        <p className="mt-4 leading-8 text-slate-600">
          ラブクエ診断を公開サイトとして運営するため、診断結果や掲載情報の位置づけを明確にしています。
        </p>
      </section>

      <section className="space-y-3">
        {notices.map((notice) => (
          <article key={notice.title} className="quest-card p-5">
            <h2 className="text-lg font-black text-slate-950">{notice.title}</h2>
            <p className="mt-2 leading-8 text-slate-600">{notice.text}</p>
          </article>
        ))}
      </section>

      <section className="quest-card p-5">
        <h2 className="text-lg font-black text-slate-950">診断を楽しむ前に</h2>
        <p className="mt-2 leading-8 text-slate-600">
          結果はあなたの恋を決めつけるものではなく、会話や自己理解のきっかけとしてお楽しみください。
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <PixelButton href="/quiz" className="w-full">
            診断する
          </PixelButton>
          <PixelButton href="/terms" variant="secondary" className="w-full">
            利用規約を見る
          </PixelButton>
        </div>
      </section>
    </div>
  );
}

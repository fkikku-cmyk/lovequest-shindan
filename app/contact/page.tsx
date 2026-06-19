import type { Metadata } from "next";
import PixelButton from "@/components/PixelButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ",
  description: "ラブクエ診断へのお問い合わせ、掲載内容、広告掲載に関するご案内ページです。",
  path: "/contact"
});

const contactTopics = ["診断内容について", "不具合の報告", "広告掲載・タイアップについて", "その他のお問い合わせ"];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4 sm:py-6">
      <section className="quest-card p-5 sm:p-8">
        <span className="quest-chip">Contact</span>
        <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">お問い合わせ</h1>
        <p className="mt-4 leading-8 text-slate-600">
          ラブクエ診断へのご意見、不具合のご報告、広告掲載に関するご相談などはこちらのページをご確認ください。
        </p>
      </section>

      <section className="quest-card p-5">
        <h2 className="text-xl font-black text-slate-950">お問い合わせ窓口について</h2>
        <p className="mt-3 leading-8 text-slate-600">
          現在、お問い合わせフォームを準備中です。公開後はこのページにフォームまたは連絡先を掲載します。
        </p>
        <div className="mt-5 grid gap-2">
          {contactTopics.map((topic) => (
            <div key={topic} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600 ring-1 ring-slate-200">
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section className="quest-card p-5">
        <h2 className="text-xl font-black text-slate-950">先にできること</h2>
        <p className="mt-3 leading-8 text-slate-600">
          診断結果や役職図鑑を確認すると、サイトの内容をより具体的に把握できます。
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <PixelButton href="/quiz" className="w-full">
            診断する
          </PixelButton>
          <PixelButton href="/types" variant="secondary" className="w-full">
            役職図鑑を見る
          </PixelButton>
        </div>
      </section>
    </div>
  );
}

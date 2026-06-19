import Link from "next/link";

const footerLinks = [
  { href: "/quiz", label: "診断する" },
  { href: "/types", label: "役職図鑑" },
  { href: "/about", label: "ラブクエ診断とは" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/disclaimer", label: "免責事項" },
  { href: "/contact", label: "お問い合わせ" }
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-pink-100/80 bg-white/70 px-4 py-8 backdrop-blur-xl sm:px-6">
      <div className="mx-auto w-full max-w-[760px] space-y-5">
        <div>
          <Link href="/" className="text-lg font-black text-slate-950 transition hover:text-ruby">
            ラブクエ診断
          </Link>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            恋愛をRPGの冒険にたとえる、スマホで楽しめる16タイプ診断。
          </p>
          <p className="mt-2 text-xs leading-6 text-slate-400">
            診断結果は娯楽目的のコンテンツです。恋愛や性格を断定するものではありません。
          </p>
        </div>

        <nav aria-label="フッターナビゲーション" className="flex flex-wrap gap-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-10 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-[0_8px_20px_rgba(45,45,53,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:text-ruby hover:ring-ruby/25"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs font-bold text-slate-400">© 2026 ラブクエ診断</p>
      </div>
    </footer>
  );
}

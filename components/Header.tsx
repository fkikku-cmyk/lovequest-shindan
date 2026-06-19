import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/86 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[760px] items-center justify-between px-3 py-2.5 sm:px-6">
        <Link
          href="/"
          className="flex min-h-10 items-center gap-2 rounded-full px-1"
          aria-label="ラブクエ診断 トップへ"
        >
          <Image
            src="/lovequest-logo.jpg"
            alt=""
            width={120}
            height={68}
            className="h-8 w-auto rounded-lg object-cover object-center sm:h-9"
            unoptimized
            priority
          />
        </Link>
        <nav className="flex items-center gap-1 rounded-full bg-slate-100 p-1 text-xs font-bold text-slate-600">
          <Link className="flex min-h-10 items-center rounded-full px-3 transition hover:bg-white hover:text-ruby" href="/quiz">
            診断
          </Link>
          <Link className="flex min-h-10 items-center rounded-full px-3 transition hover:bg-white hover:text-royal" href="/types">
            役職図鑑
          </Link>
        </nav>
      </div>
    </header>
  );
}

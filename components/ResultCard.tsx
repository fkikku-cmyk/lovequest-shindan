"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PixelButton from "@/components/PixelButton";
import ResultImageCard from "@/components/ResultImageCard";
import SectionCard from "@/components/SectionCard";
import StatsStars from "@/components/StatsStars";
import { results, type DiagnosisResult } from "@/data/results";

type ResultCardProps = {
  result: DiagnosisResult;
};

const DEFAULT_OG_IMAGE = "/ogp/default-ogp.png";

function getCurrentShareUrl(code: string) {
  if (typeof window === "undefined") {
    return `/result/${code}`;
  }

  return window.location.href;
}

function buildXShareUrl(text: string, url: string) {
  const params = new URLSearchParams({
    text,
    url
  });

  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

function buildThreadsShareUrl(text: string, url: string) {
  const params = new URLSearchParams({
    text: `${text}\n${url}`
  });

  return `https://www.threads.net/intent/post?${params.toString()}`;
}

export default function ResultCard({ result }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [imageShared, setImageShared] = useState(false);
  const [cardSaved, setCardSaved] = useState(false);
  const [cardSaving, setCardSaving] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [shareUrl, setShareUrl] = useState(`/result/${result.code}`);
  const saveCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, [result.code]);

  const shareText = `私の恋愛ジョブは『${result.name}』でした⚔️💘\nあなたもラブクエ診断で恋のタイプを診断してみよう！\n#ラブクエ診断`;
  const ogImagePath = result.ogImage ?? DEFAULT_OG_IMAGE;
  const shareTitle = `${result.name}（${result.code}）｜ラブクエ診断`;

  const handleCopy = async () => {
    if (typeof navigator === "undefined") return;
    const currentShareUrl = getCurrentShareUrl(result.code);
    setShareUrl(currentShareUrl);
    await navigator.clipboard.writeText(currentShareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleXShare = () => {
    if (typeof window === "undefined") return;

    const currentShareUrl = getCurrentShareUrl(result.code);
    setShareUrl(currentShareUrl);
    window.open(
      buildXShareUrl(shareText, currentShareUrl),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleThreadsShare = () => {
    if (typeof window === "undefined") return;

    const currentShareUrl = getCurrentShareUrl(result.code);
    setShareUrl(currentShareUrl);
    window.open(
      buildThreadsShareUrl(shareText, currentShareUrl),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleImageShare = async () => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return;

    const currentShareUrl = getCurrentShareUrl(result.code);
    setShareUrl(currentShareUrl);

    const shareData = {
      title: shareTitle,
      text: shareText,
      url: currentShareUrl
    };

    try {
      if (navigator.share) {
        const file = await createShareFile(ogImagePath, result.code);

        if (file && navigator.canShare?.({ files: [file], ...shareData })) {
          await navigator.share({ files: [file], ...shareData });
        } else {
          await navigator.share(shareData);
        }

        setImageShared(true);
        window.setTimeout(() => setImageShared(false), 1800);
        return;
      }

      await downloadOgImage(ogImagePath, result.code);
      await navigator.clipboard?.writeText(currentShareUrl);
      setImageShared(true);
      window.setTimeout(() => setImageShared(false), 1800);
    } catch (error) {
      if ((error as DOMException).name === "AbortError") return;

      try {
        await navigator.clipboard?.writeText(currentShareUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } catch {
        window.open(currentShareUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  const handleSaveResultCard = async () => {
    if (!saveCardRef.current || cardSaving) return;

    setCardSaving(true);

    try {
      await document.fonts?.ready;
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(saveCardRef.current, {
        width: 1080,
        height: 1350,
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor: "#fffaf7"
      });

      downloadDataUrl(dataUrl, `${result.code.toLowerCase()}-lovequest-result.png`);
      setCardSaved(true);
      window.setTimeout(() => setCardSaved(false), 1800);
    } catch {
      await downloadOgImage(ogImagePath, result.code);
    } finally {
      setCardSaving(false);
    }
  };

  const handleRetry = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("lovequest-answers");
    }
  };

  return (
    <SectionCard className="mx-auto w-full max-w-2xl overflow-hidden">
      <div className="grid gap-0">
        <div className="bg-gradient-to-br from-pink-50 via-white to-violet-50 p-4 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="quest-chip">あなたの恋愛ジョブは...</p>
            <span className="rpg-label">YOUR LOVE JOB</span>
          </div>
          <div className="magic-border relative mx-auto mt-4 flex aspect-square w-full max-w-[430px] items-center justify-center overflow-hidden rounded-[2rem] bg-white">
            {!imageFailed ? (
              <Image
                src={result.image}
                alt={`${result.name}のキャラクター`}
                fill
                className="pixel-image object-contain p-3"
                sizes="(max-width: 640px) 92vw, 430px"
                onError={() => setImageFailed(true)}
                unoptimized
                priority
              />
            ) : (
              <div className="text-center text-sm font-bold text-slate-400">画像を読み込めません</div>
            )}
          </div>
          <div className="mt-6 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-ruby ring-1 ring-pink-100">
              <span className="text-[0.68rem] tracking-wide text-slate-400">TYPE CODE</span>
              {result.code}
            </p>
            <h1 className="mt-1 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
              {result.name}
            </h1>
            <p className="mt-3 text-base font-bold leading-8 text-slate-700">{result.catch}</p>
          </div>
        </div>

        <div className="space-y-5 p-4 sm:p-8">
          <div>
            <h2 className="text-sm font-black text-slate-500">📜 冒険の書：恋愛傾向</h2>
            <p className="mt-3 leading-8 text-slate-700">{result.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <InfoList label="SKILL" title="⚔️ 強み" items={result.strengths} tone="sky" />
            <InfoList label="BALANCE" title="🛡️ 弱み" items={result.weaknesses} tone="rose" />
          </div>

          <StatsStars stats={result.stats} title="✨ 恋愛ステータス" />

          <div className="status-panel p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-black text-slate-500">🛡️ おすすめパーティ</h2>
              <span className="rpg-label">PARTY</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {result.compatible.map((code) => (
                <Link
                  key={code}
                  href={`/types/${code}`}
                  className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-ruby transition hover:bg-pink-100"
                >
                  {results[code].name} / {code}
                </Link>
              ))}
            </div>
          </div>

          <p className="rounded-2xl bg-slate-50 px-4 py-3 text-xs font-bold leading-6 text-slate-500 ring-1 ring-slate-200">
            診断結果は娯楽目的のコンテンツです。恋愛や性格、相性を断定するものではありません。
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <PixelButton onClick={handleXShare} variant="secondary" className="w-full">
              Xで結果を共有
            </PixelButton>
            <PixelButton onClick={handleThreadsShare} variant="secondary" className="w-full">
              Threads
            </PixelButton>
            <PixelButton onClick={handleCopy} variant="secondary" className="w-full">
              {copied ? "コピー済み" : "URLコピー"}
            </PixelButton>
            <PixelButton onClick={handleSaveResultCard} variant="secondary" className="w-full">
              {cardSaving ? "作成中..." : cardSaved ? "保存しました" : "結果カードを保存"}
            </PixelButton>
            <PixelButton onClick={handleImageShare} variant="secondary" className="w-full">
              {imageShared ? "準備できました" : "画像付きで保存・共有"}
            </PixelButton>
          </div>

          <div className="sticky bottom-3 z-20 grid gap-3 rounded-[1.75rem] bg-white/88 p-2 shadow-[0_12px_34px_rgba(45,45,53,0.12)] backdrop-blur sm:static sm:grid-cols-2 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0">
            <PixelButton href="/quiz" onClick={handleRetry} className="w-full">
              もう一度診断する
            </PixelButton>
            <PixelButton href={`/types/${result.code}`} variant="secondary" className="w-full">
              詳細ページを見る
            </PixelButton>
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed left-[-9999px] top-0" aria-hidden="true">
        <ResultImageCard ref={saveCardRef} result={result} shareUrl={shareUrl} />
      </div>
    </SectionCard>
  );
}

async function createShareFile(ogImagePath: string, code: string) {
  if (typeof File === "undefined") {
    return null;
  }

  const blob = await fetchOgImageBlob(ogImagePath);
  if (!blob) {
    return null;
  }

  return new File([blob], `${code.toLowerCase()}-ogp.png`, {
    type: blob.type || "image/png"
  });
}

async function downloadOgImage(ogImagePath: string, code: string) {
  const blob = await fetchOgImageBlob(ogImagePath);
  if (!blob) {
    window.open(ogImagePath, "_blank", "noopener,noreferrer");
    return;
  }

  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = `${code.toLowerCase()}-ogp.png`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

async function fetchOgImageBlob(ogImagePath: string) {
  const paths = [ogImagePath, DEFAULT_OG_IMAGE];

  for (const path of paths) {
    const response = await fetch(path);
    if (response.ok) {
      return response.blob();
    }
  }

  return null;
}

function downloadDataUrl(dataUrl: string, filename: string) {
  const anchor = document.createElement("a");
  anchor.href = dataUrl;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function InfoList({
  label,
  title,
  items,
  tone
}: {
  label: string;
  title: string;
  items: string[];
  tone: "sky" | "rose";
}) {
  const color = tone === "sky" ? "text-sky-600 bg-sky-50" : "text-rose-600 bg-rose-50";

  return (
    <SectionCard as="div" tone="plain" className="p-5" label={label}>
      <h2 className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${color}`}>{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-7 text-slate-700">
            <span className="text-amber-400">★</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

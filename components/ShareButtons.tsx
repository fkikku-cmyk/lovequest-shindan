"use client";

import { useState } from "react";
import PixelButton from "@/components/PixelButton";
import { getCanonicalCurrentUrl } from "@/lib/share";

type ShareButtonsProps = {
  title?: string;
  text?: string;
  className?: string;
};

export default function ShareButtons({
  title = "ラブクエ診断",
  text = "ラブクエ診断で恋愛ジョブを診断してみよう⚔️💘",
  className = ""
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopyUrl = async () => {
    if (typeof navigator === "undefined") return;

    const url = getCanonicalCurrentUrl();
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleShare = async () => {
    if (typeof navigator === "undefined") return;

    const url = getCanonicalCurrentUrl();

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        setShared(true);
        window.setTimeout(() => setShared(false), 1800);
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1800);
        }
      }
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={["grid gap-3 sm:grid-cols-2", className].join(" ")}>
      <PixelButton onClick={handleShare} variant="secondary" className="w-full">
        {shared ? "共有しました" : "共有する"}
      </PixelButton>
      <PixelButton onClick={handleCopyUrl} variant="secondary" className="w-full">
        {copied ? "コピー済み" : "URLコピー"}
      </PixelButton>
    </div>
  );
}

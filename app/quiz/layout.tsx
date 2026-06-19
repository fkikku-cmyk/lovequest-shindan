import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "無料で恋愛ジョブ診断をはじめる",
  description:
    "24問の質問に5段階で答えるだけで、あなたの恋愛タイプを現代RPG風の16タイプに分類します。",
  path: "/quiz"
});

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}

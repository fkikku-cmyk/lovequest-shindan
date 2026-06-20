"use client";

import type { AnswerValue, Question } from "@/lib/diagnose";
import PixelButton from "./PixelButton";
import ProgressBar from "./ProgressBar";

const choices: { value: AnswerValue; label: string }[] = [
  { value: 1, label: "まったく当てはまらない" },
  { value: 2, label: "あまり当てはまらない" },
  { value: 3, label: "どちらともいえない" },
  { value: 4, label: "やや当てはまる" },
  { value: 5, label: "とても当てはまる" }
];

type QuestionCardProps = {
  question: Question;
  currentIndex: number;
  total: number;
  selected?: AnswerValue;
  canGoBack: boolean;
  onAnswer: (value: AnswerValue) => void;
  onBack: () => void;
};

export default function QuestionCard({
  question,
  currentIndex,
  total,
  selected,
  canGoBack,
  onAnswer,
  onBack
}: QuestionCardProps) {
  return (
    <section className="quest-card mx-auto w-full max-w-md p-4 sm:p-6">
      <div className="space-y-5">
        <ProgressBar current={currentIndex + 1} total={total} />

        <div className="rounded-3xl bg-gradient-to-br from-white to-pink-50 p-4 ring-1 ring-pink-100 sm:p-6">
          <p className="text-sm font-black text-ruby">
            Question {currentIndex + 1} / {total}
          </p>
          <h1 className="mt-4 text-xl font-black leading-relaxed text-slate-900">
            {question.text}
          </h1>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between px-1 text-xs font-black text-slate-400">
            <span>あてはまるものを選んでください</span>
            <span>5段階</span>
          </div>
          {choices.map((choice) => {
            const active = selected === choice.value;
            return (
              <button
                key={choice.value}
                className={[
                  "command-button flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-base font-bold ring-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-mana/40",
                  active
                    ? "animate-answer-pop bg-gradient-to-r from-ruby to-royal text-white shadow-[0_16px_34px_rgba(255,79,123,0.22)] ring-transparent"
                    : "bg-white/90 text-slate-700 ring-pink-100 hover:bg-pink-50 hover:ring-ruby/25"
                ].join(" ")}
                onClick={() => onAnswer(choice.value)}
                type="button"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-current/10 text-sm font-black">
                  {choice.value}
                </span>
                <span>{choice.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-3">
          <PixelButton
            className="w-full"
            disabled={!canGoBack}
            onClick={onBack}
            variant="secondary"
          >
            戻る
          </PixelButton>
          <p className="text-center text-xs leading-relaxed text-slate-500">
            回答すると自動で次の質問へ進みます
          </p>
        </div>
      </div>
    </section>
  );
}

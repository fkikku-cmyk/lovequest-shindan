"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { diagnose, isAnswerValue, type AnswerValue, type Answers } from "@/lib/diagnose";

const storageKey = "lovequest-answers";

function loadAnswers(): Partial<Answers> {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const answers: Partial<Answers> = {};

    for (const question of questions) {
      const value = parsed[String(question.id)];
      if (isAnswerValue(value)) {
        answers[question.id] = value;
      }
    }

    return answers;
  } catch {
    return {};
  }
}

function findResumeIndex(answers: Partial<Answers>) {
  const unansweredIndex = questions.findIndex((question) => !answers[question.id]);
  return unansweredIndex === -1 ? questions.length - 1 : unansweredIndex;
}

export default function QuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedAnswers = loadAnswers();
    setAnswers(savedAnswers);
    setCurrentIndex(findResumeIndex(savedAnswers));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify(answers));
  }, [answers, hydrated]);

  const currentQuestion = questions[currentIndex];
  const isComplete = useMemo(
    () => questions.every((question) => answers[question.id]),
    [answers]
  );

  const handleAnswer = (value: AnswerValue) => {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value
    };

    setAnswers(nextAnswers);

    window.setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((index) => index + 1);
        return;
      }

      const type = diagnose(questions, nextAnswers);
      router.push(`/result/${type}`);
    }, 180);
  };

  const handleBack = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  useEffect(() => {
    if (!hydrated || !isComplete) return;
    if (currentIndex !== questions.length - 1) return;

    const type = diagnose(questions, answers);
    router.prefetch(`/result/${type}`);
  }, [answers, currentIndex, hydrated, isComplete, router]);

  if (!hydrated) {
    return (
      <div className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center">
        <div className="quest-card p-8 text-center text-sm font-bold text-slate-600">
          読み込み中...
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-md items-start py-4 sm:items-center sm:py-6">
      <QuestionCard
        question={currentQuestion}
        currentIndex={currentIndex}
        total={questions.length}
        selected={answers[currentQuestion.id]}
        canGoBack={currentIndex > 0}
        onAnswer={handleAnswer}
        onBack={handleBack}
      />
    </div>
  );
}

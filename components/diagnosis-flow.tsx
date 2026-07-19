"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { ProgressBar } from "@/components/progress-bar";
import { QuestionCard } from "@/components/question-card";
import { Button } from "@/components/ui/button";
import { questions } from "@/data/questions";
import { saveAnswers } from "@/lib/storage";

export const DiagnosisFlow = () => {
  const router = useRouter();
  const total = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(total).fill(-1));

  const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex]);

  const handleSelect = (choiceIndex: number) => {
    const updated = [...answers];
    updated[currentIndex] = choiceIndex;
    setAnswers(updated);

    if (currentIndex + 1 < total) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    saveAnswers(updated);
    router.push("/result");
  };

  const handleBack = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="space-y-4">
      <ProgressBar current={currentIndex + 1} total={total} />
      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        onSelect={handleSelect}
      />
      {currentIndex > 0 ? (
        <div className="flex justify-between">
          <Button
            variant="ghost"
            className="rounded-xl text-muted-foreground hover:text-primary"
            onClick={handleBack}
          >
            戻る
          </Button>
        </div>
      ) : null}
    </div>
  );
};

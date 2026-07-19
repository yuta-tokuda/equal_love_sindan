"use client";

import { useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";

import { ResultCard } from "@/components/result-card";
import { Button } from "@/components/ui/button";
import { calculateDiagnosisResult } from "@/lib/diagnosis";
import {
  clearAnswers,
  getAnswersSnapshot,
  getServerAnswersSnapshot,
  subscribeAnswers,
} from "@/lib/storage";

export const ResultView = () => {
  const router = useRouter();
  const answers = useSyncExternalStore(
    subscribeAnswers,
    getAnswersSnapshot,
    getServerAnswersSnapshot,
  );

  const handleRetry = () => {
    clearAnswers();
    router.push("/diagnosis");
  };

  if (answers.length === 0) {
    return (
      <div className="surface-panel space-y-4 p-5 text-sm text-muted-foreground">
        <p>診断データがありません。トップページから診断を開始してください。</p>
        <Button className="w-full" onClick={() => router.push("/")}>
          トップへ戻る
        </Button>
      </div>
    );
  }

  const result = calculateDiagnosisResult(answers);

  return (
    <div className="space-y-4">
      <ResultCard result={result} />
      <Button
        className="w-full rounded-2xl font-bold transition-transform hover:scale-[1.01] active:scale-[0.99]"
        onClick={handleRetry}
      >
        もう一度診断
      </Button>
    </div>
  );
};

import { members } from "@/data/members";
import { questions } from "@/data/questions";
import type { DiagnosisResult } from "@/types/diagnosis";

const clampMatchRate = (ratio: number) => {
  const normalized = 70 + Math.round(ratio * 29);
  return Math.min(99, Math.max(70, normalized));
};

const commentByRate = (name: string, rate: number) => {
  if (rate >= 93) {
    return `${name}との相性はかなり高め。価値観と行動テンポが近く、自然体で魅力を引き出し合える組み合わせです。`;
  }

  if (rate >= 85) {
    return `${name}との相性はとても良好。考え方に共通点が多く、一緒にいるほど安心感が増すタイプです。`;
  }

  return `${name}との相性はしっかり高め。違いも魅力に変えながら、お互いに成長できるバランスです。`;
};

export const calculateDiagnosisResult = (
  answerIndexes: number[],
): DiagnosisResult => {
  const scoreMap = Object.fromEntries(members.map((member) => [member.id, 0])) as Record<
    string,
    number
  >;

  let answeredCount = 0;

  questions.forEach((question, index) => {
    const answerIndex = answerIndexes[index];
    const selected = question.choices[answerIndex];
    if (!selected) return;
    answeredCount += 1;

    Object.entries(selected.scores).forEach(([memberId, score]) => {
      scoreMap[memberId] = (scoreMap[memberId] ?? 0) + score;
    });
  });

  const ranking = Object.entries(scoreMap)
    .sort((a, b) => b[1] - a[1])
    .map(([memberId, score], index, all) => {
      const topScore = all[0]?.[1] ?? 1;
      const ratio = topScore === 0 ? 0 : score / topScore;
      return { memberId, score, ratio };
    });

  const top = ranking[0];
  const topMember = members.find((member) => member.id === top.memberId) ?? members[0];
  const totalScore = ranking.reduce((sum, item) => sum + item.score, 0);
  const maxPossibleScore = Math.max(1, answeredCount * 3);
  const matchRate = clampMatchRate(top.score / maxPossibleScore);

  return {
    topMember,
    matchRate,
    comment: commentByRate(topMember.name, matchRate),
    ranking,
    totalScore,
  };
};

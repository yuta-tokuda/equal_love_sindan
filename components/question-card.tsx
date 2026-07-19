import { AnswerButton } from "@/components/answer-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Question } from "@/types/diagnosis";

type QuestionCardProps = {
  question: Question;
  onSelect: (choiceIndex: number) => void;
};

export const QuestionCard = ({ question, onSelect }: QuestionCardProps) => {
  return (
    <Card className="animate-pop surface-panel border-white/70 shadow-none">
      <CardHeader>
        <CardTitle className="text-base leading-relaxed text-foreground">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5">
        {question.choices.map((choice, index) => (
          <AnswerButton
            key={`${question.id}-${choice.text}`}
            text={choice.text}
            onClick={() => onSelect(index)}
          />
        ))}
      </CardContent>
    </Card>
  );
};

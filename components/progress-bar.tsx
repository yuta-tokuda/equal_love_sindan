import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  current: number;
  total: number;
};

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const value = Math.round((current / total) * 100);

  return (
    <div className="space-y-2.5 rounded-2xl border border-white/70 bg-white/60 px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-primary">
          Q{current}
          <span className="text-muted-foreground"> / {total}</span>
        </span>
        <span className="text-xs font-medium text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} className="h-2.5 rounded-xl bg-primary/10" />
    </div>
  );
};

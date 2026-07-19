import { members } from "@/data/members";
import type { RankingItem } from "@/types/diagnosis";

type RankingProps = {
  ranking: RankingItem[];
};

export const Ranking = ({ ranking }: RankingProps) => {
  const top3 = ranking.slice(0, 3);

  return (
    <div className="space-y-2.5">
      <p className="text-sm font-bold text-foreground">相性ランキング</p>
      {top3.map((item, index) => {
        const member = members.find((value) => value.id === item.memberId);
        if (!member) return null;
        const percent = Math.round(item.ratio * 100);

        return (
          <div
            key={item.memberId}
            className="flex items-center justify-between rounded-2xl border border-primary/10 bg-white/80 px-3.5 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <span
                className="flex size-7 items-center justify-center rounded-xl text-xs font-bold text-white"
                style={{ backgroundColor: member.color }}
              >
                {index + 1}
              </span>
              <p className="text-sm font-medium text-foreground">{member.name}</p>
            </div>
            <p className="text-sm font-bold text-primary">{percent}%</p>
          </div>
        );
      })}
    </div>
  );
};

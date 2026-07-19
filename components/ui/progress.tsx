"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@/lib/utils";

export const Progress = ({
  className,
  value,
  ...props
}: ProgressPrimitive.Root.Props) => (
  <ProgressPrimitive.Root
    value={value}
    className={cn("relative h-2.5 w-full overflow-hidden rounded-xl bg-muted", className)}
    {...props}
  >
    <ProgressPrimitive.Track className="h-full w-full">
      <ProgressPrimitive.Indicator className="h-full rounded-xl bg-primary transition-[width] duration-500 ease-out" />
    </ProgressPrimitive.Track>
  </ProgressPrimitive.Root>
);

import * as React from "react";

import { cn } from "@/lib/utils";

export const Card = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("rounded-3xl border border-border bg-card", className)}
    {...props}
  />
);

export const CardHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={cn("space-y-1.5 p-5 pb-2", className)} {...props} />
);

export const CardTitle = ({
  className,
  ...props
}: React.ComponentProps<"h2">) => (
  <h2 className={cn("text-lg font-semibold leading-tight", className)} {...props} />
);

export const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

export const CardContent = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={cn("p-5 pt-2", className)} {...props} />
);

export const CardFooter = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={cn("p-5 pt-2", className)} {...props} />
);

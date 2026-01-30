import * as React from "react";
import { cn } from "@/lib/utils/cn";

type BadgeVariant = "default" | "muted" | "outline";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  const v =
    variant === "default"
      ? "bg-black text-white"
      : variant === "muted"
      ? "bg-neutral-100 text-neutral-700"
      : "border border-[rgb(var(--border))] bg-white text-black";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        v,
        className
      )}
      {...props}
    />
  );
}

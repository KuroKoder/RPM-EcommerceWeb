import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-10 w-full rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white px-3 text-sm " +
          "placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black " +
          "disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

//fields
"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

export function Field({
  label,
  error,
  children,
  className
}: FieldProps) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs font-medium text-[rgb(var(--muted))]">
        {label}
      </span>

      <div className="mt-2">
        {children}
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </label>
  );
}

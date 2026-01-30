"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type Variant = {
  id: string;
  size: string;
  color: string;
  sku: string;
  stock: number;
};

export function VariantPicker({
  variants,
  value,
  onChange
}: {
  variants: Variant[];
  value?: string; // variantId
  onChange: (variantId: string) => void;
}) {
  const sizes = Array.from(new Set(variants.map((v) => v.size)));

  const selected = variants.find((v) => v.id === value) ?? null;

  return (
    <div className="grid gap-4">
      <div>
        <p className="text-sm font-medium">Size</p>
        <p className="mt-1 text-xs text-[rgb(var(--muted))]">
          {selected ? `Selected: ${selected.size}` : "Select a size"}
        </p>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {sizes.map((size) => {
            // pick first variant for that size (single color for now)
            const v = variants.find((x) => x.size === size);
            if (!v) return null;
            const disabled = v.stock <= 0;
            const active = v.id === value;

            return (
              <button
                key={size}
                type="button"
                disabled={disabled}
                onClick={() => onChange(v.id)}
                className={cn(
                  "h-10 rounded-lg border text-sm font-medium transition",
                  disabled
                    ? "cursor-not-allowed border-[rgb(var(--border))] bg-neutral-50 text-neutral-400"
                    : active
                    ? "border-black bg-black text-white"
                    : "border-[rgb(var(--border))] bg-white hover:border-neutral-400"
                )}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color (optional): kalau multi warna nanti */}
      <div className="text-xs text-[rgb(var(--muted))]">
        {selected ? (
          <span>
            Color: <span className="text-black">{selected.color}</span> •{" "}
            {selected.stock > 0 ? (
              <span>
                Stock: <span className="text-black">{selected.stock}</span>
              </span>
            ) : (
              <span className="text-red-600">Out of stock</span>
            )}
          </span>
        ) : (
          <span>Color will show after size selected.</span>
        )}
      </div>
    </div>
  );
}

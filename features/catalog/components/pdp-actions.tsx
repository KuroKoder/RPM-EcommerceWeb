"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { VariantPicker } from "@/features/catalog/components/variant-picker";
import { useCartStore } from "@/features/cart/store"; // pastikan export ini ada

export function PdpActions({
  productSlug,
  productName,
  imageUrl,
  price,
  variants,
  selectedVariantId
}: {
  productSlug: string;
  productName: string;
  imageUrl: string;
  price: number;
  variants: VariantPicker[];
  selectedVariantId?: string;
}) {
  const addItem = useCartStore((s) => s.addItem);
  const [qty, setQty] = React.useState(1);

  const selected = variants.find((v) => v.id === selectedVariantId) ?? null;
  const disabled = !selected || selected.stock <= 0;

  function dec() {
    setQty((q) => Math.max(1, q - 1));
  }
  function inc() {
    setQty((q) => Math.min(99, q + 1));
  }

  function onAdd() {
    if (!selected) return;

    // EDIT jika store kamu beda
    addItem({
      variantId: selected.id,
      qty,
      // snapshot UI (optional)
      product: { slug: productSlug, name: productName, imageUrl, price }
    });
  }

  return (
    <div className="mt-6 grid gap-3">
      <div className="flex items-center justify-between rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-3">
        <p className="text-sm font-medium">Quantity</p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={dec}
            className={cn(
              "h-9 w-9 rounded-lg border border-[rgb(var(--border))] bg-white text-sm font-medium",
              "hover:bg-neutral-50"
            )}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm">{qty}</span>
          <button
            type="button"
            onClick={inc}
            className={cn(
              "h-9 w-9 rounded-lg border border-[rgb(var(--border))] bg-white text-sm font-medium",
              "hover:bg-neutral-50"
            )}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <Button size="lg" disabled={disabled} onClick={onAdd}>
        {disabled ? "Select size" : "Add to cart"}
      </Button>

      <p className="text-xs text-[rgb(var(--muted))]">
        Secure checkout. Easy returns.
      </p>
    </div>
  );
}

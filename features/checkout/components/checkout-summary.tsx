"use client";

import { cn } from "@/lib/utils/cn";
import { formatIdr } from "@/lib/utils/format-idr";
import type { CheckoutViewModel } from "../types";

type Props = {
  checkout: Pick<
    CheckoutViewModel,
    "items" | "subtotal" | "shipping" | "total"
  >;
};
    

export function CheckoutSummary({ checkout }: Props) {
  const { items, subtotal, shipping, total } = checkout;

  return (
    <aside className="lg:col-span-5">
      <div className="sticky top-24 rounded-[var(--radius)] border bg-white p-5">
        <p className="text-sm font-semibold">Order summary</p>

        <div className="mt-4 space-y-3">
          {items.map((it) => (
            <div
              key={it.variantId}
              className="flex items-start justify-between gap-4"
            >
              <div>
                <p className="text-sm font-medium">
                  {it.product.name}
                </p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                  Variant: {it.size} • Qty: {it.qty}
                </p>
              </div>

              <p className="text-sm font-semibold">
                {formatIdr(it.qty * it.product.price)}
              </p>
            </div>
          ))}
        </div>

        <div className="my-5 border-t" />

        <Line label="Subtotal" value={formatIdr(subtotal)} />
        <Line
          label="Shipping"
          value={shipping === 0 ? "Free" : formatIdr(shipping)}
          muted
        />

        <div className="my-5 border-t" />

        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Total</p>
          <p className="text-sm font-semibold">
            {formatIdr(total)}
          </p>
        </div>
      </div>
    </aside>
  );
}

function Line({
  label,
  value,
  muted
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <p className={cn(muted ? "text-[rgb(var(--muted))]" : "")}>
        {label}
      </p>
      <p className={cn(muted ? "text-[rgb(var(--muted))]" : "font-medium")}>
        {value}
      </p>
    </div>
  );
}

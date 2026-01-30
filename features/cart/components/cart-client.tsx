"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/features/cart/store";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

function formatIdr(n: number) {
  return `Rp${n.toLocaleString("id-ID")}`;
}

export function CartClient() {
  const items = useCartStore((s) => s.items);
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);
  const subtotal = useCartStore((s) => s.getSubtotal());

  if (items.length === 0) {
    return (
      <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-8">
        <p className="text-sm font-medium">Cart is empty</p>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
          Add essentials to start your rotation.
        </p>
        <div className="mt-6">
          <Link href="/products">
            <Button>Shop now →</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* Items */}
      <div className="grid gap-4 lg:col-span-8">
        {items.map((it) => (
          <div
            key={it.variantId}
            className="grid gap-4 rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-4 sm:grid-cols-12 sm:items-center"
          >
            {/* Image */}
            <div className="sm:col-span-3">
              <div className="relative overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-neutral-50">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={it.product.imageUrl}
                    alt={it.product.name}
                    fill
                    sizes="(max-width: 640px) 40vw, 15vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="sm:col-span-6">
              <Link
                href={`/products/${it.product.slug}`}
                className="text-sm font-semibold tracking-tight hover:underline hover:underline-offset-4"
              >
                {it.product.name}
              </Link>

              <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                Variant: <span className="text-black">{it.variantId}</span>
              </p>

              <p className="mt-3 text-sm font-semibold">
                {formatIdr(it.product.price)}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <QtyControl
                  qty={it.qty}
                  onChange={(q) => setQty(it.variantId, q)}
                />
                <button
                  type="button"
                  className="text-sm font-medium underline underline-offset-4 text-[rgb(var(--muted))] hover:text-black"
                  onClick={() => removeItem(it.variantId)}
                >
                  Remove
                </button>
              </div>
            </div>

            {/* Line total */}
            <div className="sm:col-span-3 sm:text-right">
              <p className="text-xs text-[rgb(var(--muted))]">Line total</p>
              <p className="mt-1 text-sm font-semibold">
                {formatIdr(it.qty * it.product.price)}
              </p>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-sm font-medium underline underline-offset-4 text-[rgb(var(--muted))] hover:text-black"
            onClick={clear}
          >
            Clear cart
          </button>

          <Link href="/products">
            <Button variant="secondary">Continue shopping</Button>
          </Link>
        </div>
      </div>

      {/* Summary */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-5">
          <p className="text-sm font-semibold">Order summary</p>

          <div className="mt-4 space-y-3 text-sm">
            <Row label="Subtotal" value={formatIdr(subtotal)} />
            <Row label="Shipping" value="Calculated at checkout" muted />
            <Row label="Discount" value="—" muted />
          </div>

          <div className="my-5 border-t border-[rgb(var(--border))]" />

          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Total</p>
            <p className="text-sm font-semibold">{formatIdr(subtotal)}</p>
          </div>

          <Link href="/checkout">
            <Button className="mt-5 w-full" size="lg">Checkout</Button>
          </Link>

          <p className="mt-3 text-xs text-[rgb(var(--muted))]">
            Prices may update at checkout based on stock and promotions.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  muted
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <p className={cn("text-[rgb(var(--muted))]", muted ? "" : "")}>{label}</p>
      <p className={cn(muted ? "text-[rgb(var(--muted))]" : "text-black")}>
        {value}
      </p>
    </div>
  );
}

function QtyControl({
  qty,
  onChange
}: {
  qty: number;
  onChange: (qty: number) => void;
}) {
  function dec() {
    onChange(Math.max(1, qty - 1));
  }
  function inc() {
    onChange(Math.min(99, qty + 1));
  }

  return (
    <div className="inline-flex items-center rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white">
      <button
        type="button"
        onClick={dec}
        className="h-9 w-9 rounded-l-[var(--radius)] text-sm font-medium hover:bg-neutral-50"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-10 text-center text-sm">{qty}</span>
      <button
        type="button"
        onClick={inc}
        className="h-9 w-9 rounded-r-[var(--radius)] text-sm font-medium hover:bg-neutral-50"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

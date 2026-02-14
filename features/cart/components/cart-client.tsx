"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useCartStore } from "@/features/cart/store";
import { Button } from "@/components/ui/Button";
import { CartItem } from "./cart-item";
import { CartSummary } from "./cart-summary";

export function CartClient() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
  const subtotal = useMemo(() => {
  return items.reduce(
    (acc, it) => acc + it.qty * it.product.price,
    0
  );
}, [items]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid gap-10 lg:grid-cols-12 animate-pulse">
        <div className="lg:col-span-8 space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 w-full rounded-[var(--radius)] bg-neutral-100" />
          ))}
        </div>
        <div className="lg:col-span-4">
          <div className="h-64 w-full rounded-[var(--radius)] bg-neutral-100" />
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-[var(--radius)] border bg-white p-8">
        <p className="text-sm font-medium">Cart is empty</p>
        <p className="mt-2 text-sm text-muted">
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
      <div className="grid gap-4 lg:col-span-8">
        {items.map((item) => (
          <CartItem key={item.variantId} item={item} />
        ))}

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={clear}
            className="text-sm underline"
          >
            Clear cart
          </button>

          <Link href="/products">
            <Button variant="secondary">Continue shopping</Button>
          </Link>
        </div>
      </div>

      <CartSummary subtotal={subtotal} />
    </div>
  );
}

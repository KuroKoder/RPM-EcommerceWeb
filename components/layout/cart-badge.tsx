"use client";

import Link from "next/link";
import { useCartStore } from "@/features/cart/store";

export function CartBadge() {
  const count = useCartStore((s) => s.getItemCount());

  return (
    <Link href="/cart" className="relative text-sm font-medium">
      Cart
      {count > 0 ? (
        <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-xs text-white">
          {count}
        </span>
      ) : null}
    </Link>
  );
}

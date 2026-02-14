"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CheckoutSuccess() {
  return (
    <div className="rounded-[var(--radius)] border bg-white p-8 text-center">
      <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
        ORDER CREATED
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
        Checkout submitted
      </h2>

      <p className="mt-3 text-sm text-[rgb(var(--muted))]">
        Payment gateway integration comes next.
      </p>

      <div className="mt-6 flex justify-center gap-3">
        <Link href="/products">
          <Button>Back to shop</Button>
        </Link>

        <Link href="/">
          <Button variant="secondary">Home</Button>
        </Link>
      </div>
    </div>
  );
}

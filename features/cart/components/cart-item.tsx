import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/features/cart/store";
import { formatIdr } from "@/lib/utils/format-idr";
import { QtyControl } from "./qty-control";
import type { CartItem as CartItemType } from "@/features/cart/types";

type Props = {
  item: CartItemType;
};

export function CartItem({ item }: Props) {
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);


  return (
    <div className="grid gap-4 rounded-[var(--radius)] border bg-white p-4 sm:grid-cols-12 sm:items-center">
      <div className="sm:col-span-3">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={item.product.imageUrl}
            alt={item.product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="sm:col-span-6">
        <Link
          href={`/products/${item.product.slug}`}
          className="text-sm font-semibold hover:underline"
        >
          {item.product.name}
        </Link>

        <p className="mt-1 text-xs text-muted">
          Variant: {item.variantId}
        </p>

        <p className="mt-3 text-sm font-semibold">
          {formatIdr(item.product.price)}
        </p>

        <div className="mt-4 flex gap-2">
          <QtyControl
            qty={item.qty}
            onChange={(q) => setQty(item.variantId, q)}
          />

          <button
            onClick={() => removeItem(item.variantId)}
            className="text-sm underline"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="sm:col-span-3 sm:text-right">
        <p className="text-xs text-muted">Line total</p>
        <p className="mt-1 text-sm font-semibold">
          {formatIdr(item.qty * item.product.price)}
        </p>
      </div>
    </div>
  );
}

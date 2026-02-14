import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { formatIdr } from "@/lib/utils/format-idr";

type Props = {
  subtotal: number;
};

export function CartSummary({ subtotal }: Props) {
  return (
    <div className="lg:col-span-4">
      <div className="sticky top-24 rounded-[var(--radius)] border bg-white p-5">
        <p className="text-sm font-semibold">Order summary</p>

        <div className="mt-4 space-y-3 text-sm">
          <Row label="Subtotal" value={formatIdr(subtotal)} />
          <Row label="Shipping" value="Calculated at checkout" muted />
          <Row label="Discount" value="—" muted />
        </div>

        <div className="my-5 border-t" />

        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Total</p>
          <p className="text-sm font-semibold">
            {formatIdr(subtotal)}
          </p>
        </div>

        <Link href="/checkout">
          <Button className="mt-5 w-full" size="lg">
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <p className={muted ? "text-muted" : ""}>{label}</p>
      <p className={muted ? "text-muted" : "text-black"}>
        {value}
      </p>
    </div>
  );
}

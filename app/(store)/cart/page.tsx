import { Container } from "@/components/layout/container";
import { CartClient } from "@/features/cart/components/cart-client";

export default function CartPage() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-8">
        <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
          CART
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Your cart</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
          Review items before checkout.
        </p>
      </div>

      <CartClient />
    </Container>
  );
}
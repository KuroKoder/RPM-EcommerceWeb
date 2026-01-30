import { Container } from "@/components/layout/container";
import { CheckoutClient } from "@/features/checkout/components/checkout-client";

export default function CheckoutPage() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-8">
        <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
          CHECKOUT
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Shipping details
        </h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
          Enter shipping address and contact info.
        </p>
      </div>

      <CheckoutClient />
    </Container>
  );
}
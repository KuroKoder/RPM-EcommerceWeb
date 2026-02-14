//@/features/checkout/components/checkout-client.tsx
"use client";

import { useCheckout } from "../hooks/use-checkout";
import { CheckoutForm } from "./checkout-form";
import { CheckoutSummary } from "./checkout-summary";
import { CheckoutSuccess } from "./checkout-success";

export function CheckoutClient() {
  const checkout = useCheckout();

  if (checkout.status === "success") {
    return <CheckoutSuccess />;
  }

  if (checkout.items.length === 0) {
    return <p>Cart empty</p>;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <CheckoutForm checkout={checkout} />
      <CheckoutSummary checkout={checkout} />
    </div>
  );
}
// features/checkout/services/checkout.service.ts
import type { CheckoutPayload } from "../types";
export async function submitCheckout(payload: CheckoutPayload) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) throw new Error("API base URL not configured");

  const res = await fetch(`${base}/v1/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Checkout failed");
  }

  return res.json();
}

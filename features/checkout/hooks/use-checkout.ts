// features/checkout/hooks/use-checkout.ts

import { useState, useMemo } from "react";
import { useCartStore } from "@/features/cart/store";
import { validateCheckout } from "../utils/checkout-validation";
import { submitCheckout } from "../services/checkout.service";
import type { ShippingForm, CheckoutStatus } from "../types";

export function useCheckout() {
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);

  const [form, setForm] = useState<ShippingForm>({
    fullName: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    notes: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ShippingForm, string>>>({});
  const [status, setStatus] = useState<CheckoutStatus>("idle");

  const subtotal = useMemo(() => {
    return items.reduce(
      (acc, it) => acc + it.qty * it.product.price,
      0
    );
  }, [items]);

  const shipping = 0;
  const total = subtotal + shipping;

  function update<K extends keyof ShippingForm>(key: K, value: ShippingForm[K]) {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function submit() {
    const v = validateCheckout(form);
    setErrors(v);

    if (Object.keys(v).length > 0) return;
    if (items.length === 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const payload = {
        customer: {
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim()
        },
        shippingAddress: {
          address1: form.address1.trim(),
          address2: form.address2.trim(),
          city: form.city.trim(),
          province: form.province.trim(),
          postalCode: form.postalCode.trim(),
          notes: form.notes.trim()
        },
        items: items.map((it) => ({
          variantId: it.variantId,
          qty: it.qty
        }))
      };

      await submitCheckout(payload);

      await clear();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return {
    items,
    form,
    errors,
    status,
    subtotal,
    shipping,
    total,
    update,
    submit
  };
}

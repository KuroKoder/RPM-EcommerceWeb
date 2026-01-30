"use client";

import * as React from "react";
import Link from "next/link";
import { useCartStore } from "@/features/cart/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

type ShippingForm = {
  fullName: string;
  phone: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  postalCode: string;
  notes: string;
};

function formatIdr(n: number) {
  return `Rp${n.toLocaleString("id-ID")}`;
}

function validate(form: ShippingForm) {
  const errors: Partial<Record<keyof ShippingForm, string>> = {};

  if (form.fullName.trim().length < 2) errors.fullName = "Required";
  if (form.phone.trim().length < 8) errors.phone = "Invalid phone";
  if (!form.email.includes("@")) errors.email = "Invalid email";
  if (form.address1.trim().length < 5) errors.address1 = "Required";
  if (form.city.trim().length < 2) errors.city = "Required";
  if (form.province.trim().length < 2) errors.province = "Required";
  if (form.postalCode.trim().length < 4) errors.postalCode = "Invalid";

  return errors;
}

export function CheckoutClient() {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const clear = useCartStore((s) => s.clear);

  const [form, setForm] = React.useState<ShippingForm>({
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

  const [errors, setErrors] = React.useState<Partial<Record<keyof ShippingForm, string>>>({});
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  // minimal: shipping/tax nanti dari backend
  const shipping = 0;
  const total = subtotal + shipping;

  function update<K extends keyof ShippingForm>(key: K, value: ShippingForm[K]) {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const v = validate(form);
    setErrors(v);

    if (Object.keys(v).length > 0) return;
    if (items.length === 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // MOCK submit: simulate creating order
      await new Promise((r) => setTimeout(r, 800));

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
          qty: it.qty,
          price: it.product.price,
          product: {
            slug: it.product.slug,
            name: it.product.name
          }
        })),
        subtotal,
        shipping,
        total
      };

      console.log("checkout_submit_mock", payload);

      // REAL API (siap nanti)
      const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
      const res = await fetch(`${base}/v1/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Checkout failed");
      const result = await res.json();

      clear();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-8 text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
          ORDER CREATED
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Checkout submitted
        </h2>
        <p className="mt-3 text-sm text-[rgb(var(--muted))]">
          This is a mock flow. Next step: redirect to payment gateway.
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

  if (items.length === 0) {
    return (
      <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-8">
        <p className="text-sm font-medium">Cart is empty</p>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
          Add items before checkout.
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
      {/* Form */}
      <form onSubmit={onSubmit} className="grid gap-4 lg:col-span-7">
        <Card title="Contact">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Full name" error={errors.fullName}>
              <Input
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="Full name"
              />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <Input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="08xxxxxxxxxx"
              />
            </Field>
          </div>

          <div className="mt-3">
            <Field label="Email" error={errors.email}>
              <Input
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
              />
            </Field>
          </div>
        </Card>

        <Card title="Shipping address">
          <Field label="Address line 1" error={errors.address1}>
            <Input
              value={form.address1}
              onChange={(e) => update("address1", e.target.value)}
              placeholder="Street, building, etc."
            />
          </Field>

          <div className="mt-3">
            <Field label="Address line 2 (optional)">
              <Input
                value={form.address2}
                onChange={(e) => update("address2", e.target.value)}
                placeholder="Apartment, floor, unit"
              />
            </Field>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Field label="City" error={errors.city}>
              <Input
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="City"
              />
            </Field>
            <Field label="Province" error={errors.province}>
              <Input
                value={form.province}
                onChange={(e) => update("province", e.target.value)}
                placeholder="Province"
              />
            </Field>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Field label="Postal code" error={errors.postalCode}>
              <Input
                value={form.postalCode}
                onChange={(e) => update("postalCode", e.target.value)}
                placeholder="Postal code"
              />
            </Field>
            <Field label="Notes (optional)">
              <Input
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Delivery notes"
              />
            </Field>
          </div>
        </Card>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/cart"
            className="text-sm font-medium underline underline-offset-4 text-[rgb(var(--muted))] hover:text-black"
          >
            ← Back to cart
          </Link>

          <Button type="submit" size="lg" isLoading={status === "loading"}>
            Place order
          </Button>
        </div>

        {status === "error" ? (
          <p className="text-sm text-red-600">
            Failed to submit. Check your cart and form.
          </p>
        ) : null}
      </form>

      {/* Summary */}
      <aside className="lg:col-span-5">
        <div className="sticky top-24 rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-5">
          <p className="text-sm font-semibold">Order summary</p>

          <div className="mt-4 space-y-3">
            {items.map((it) => (
              <div key={it.variantId} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">{it.product.name}</p>
                  <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                    Variant: {it.variantId} • Qty: {it.qty}
                  </p>
                </div>
                <p className="text-sm font-semibold">
                  {formatIdr(it.qty * it.product.price)}
                </p>
              </div>
            ))}
          </div>

          <div className="my-5 border-t border-[rgb(var(--border))]" />

          <div className="space-y-2 text-sm">
            <Line label="Subtotal" value={formatIdr(subtotal)} />
            <Line label="Shipping" value={shipping === 0 ? "Free (mock)" : formatIdr(shipping)} muted />
          </div>

          <div className="my-5 border-t border-[rgb(var(--border))]" />

          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Total</p>
            <p className="text-sm font-semibold">{formatIdr(total)}</p>
          </div>

          <p className="mt-3 text-xs text-[rgb(var(--muted))]">
            Payment gateway integration comes next (Midtrans/Xendit/etc).
          </p>
        </div>
      </aside>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-5">
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-[rgb(var(--muted))]">{label}</span>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
    </label>
  );
}

function Line({
  label,
  value,
  muted
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <p className={cn("text-[rgb(var(--muted))]", muted ? "" : "")}>{label}</p>
      <p className={cn(muted ? "text-[rgb(var(--muted))]" : "text-black")}>{value}</p>
    </div>
  );
}

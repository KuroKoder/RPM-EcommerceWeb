"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import type { CheckoutViewModel } from "../types";
import { Field } from "./fields";

type Props = {
  checkout: CheckoutViewModel;
};

export function CheckoutForm({ checkout }: Props) {
  const {
    form,
    errors,
    update,
    submit,
    status
  } = checkout;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="grid gap-4 lg:col-span-7"
    >
      <Card title="Contact">
  <Field label="Full name" error={errors.fullName}>
    <Input
      value={form.fullName}
      onChange={(e) => update("fullName", e.target.value)}
    />
  </Field>

  <Field label="Email" error={errors.email} className="mt-4">
    <Input
      type="email"
      value={form.email}
      onChange={(e) => update("email", e.target.value)}
    />
  </Field>

  <Field label="Phone" error={errors.phone} className="mt-4">
    <Input
      value={form.phone}
      onChange={(e) => update("phone", e.target.value)}
    />
  </Field>
</Card>

<Card title="Shipping address">
  <Field label="Address line 1" error={errors.address1}>
    <Input
      value={form.address1}
      onChange={(e) => update("address1", e.target.value)}
    />
  </Field>

  <Field label="Address line 2" error={errors.address2} className="mt-4">
    <Input
      value={form.address2}
      onChange={(e) => update("address2", e.target.value)}
    />
  </Field>

  <Field label="City" error={errors.city} className="mt-4">
    <Input
      value={form.city}
      onChange={(e) => update("city", e.target.value)}
    />
  </Field>

  <Field label="Province" error={errors.province} className="mt-4">
    <Input
      value={form.province}
      onChange={(e) => update("province", e.target.value)}
    />
  </Field>

  <Field label="Postal code" error={errors.postalCode} className="mt-4">
    <Input
      value={form.postalCode}
      onChange={(e) => update("postalCode", e.target.value)}
    />
  </Field>

  <Field label="Notes" error={errors.notes} className="mt-4">
    <Input
      value={form.notes}
      onChange={(e) => update("notes", e.target.value)}
    />
  </Field>
</Card>


      <div className="flex items-center justify-between">
        <Link href="/cart" className="text-sm underline">
          ← Back to cart
        </Link>

        <Button
          type="submit"
          size="lg"
          isLoading={status === "loading"}
        >
          Place order
        </Button>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Failed to submit. Check your cart and form.
        </p>
      )}
    </form>
  );
}

function Card({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[var(--radius)] border bg-white p-5">
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

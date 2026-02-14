// features/checkout/utils/checkout-validation.ts

import type { ShippingForm } from "../types";

export function validateCheckout(form: ShippingForm) {
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

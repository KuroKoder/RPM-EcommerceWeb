// features/checkout/types.ts

export type ShippingForm = {
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

export type CheckoutStatus = "idle" | "loading" | "success" | "error";


export type CheckoutViewModel = {
  form: ShippingForm;
  errors: Partial<Record<keyof ShippingForm, string>>;
  status: CheckoutStatus;
  subtotal: number;
  shipping: number;
  total: number;
  update: <K extends keyof ShippingForm>(
    key: K,
    value: ShippingForm[K]
  ) => void;
  submit: () => Promise<void>;
  items: {
    variantId: string;
    size?: string | null;
    color?: string | null;
    qty: number;
    product: {
      name: string;
      price: number;
    };
  }[];
};


export type CheckoutPayload = {
  customer: {
    fullName: string;
    phone: string;
    email: string;
  };
  shippingAddress: {
    address1: string;
    address2: string;
    city: string;
    province: string;
    postalCode: string;
    notes: string;
  };
  items: {
    variantId: string;
    size?: string | null;
    color?: string | null;
    qty: number;
  }[];
};


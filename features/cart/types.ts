export type CartProductSnapshot = {
  slug: string;
  name: string;
  imageUrl: string;
  price: number; // price at time added (display only)
};

export type CartItem = {
  variantId: string;
  qty: number;
  product: CartProductSnapshot;

  // optional for future:
  // size?: string;
  // color?: string;
};

export type CartState = {
  items: CartItem[];
};

export type CartActions = {
  addItem: (payload: { variantId: string; qty: number; product: CartProductSnapshot }) => void;
  removeItem: (variantId: string) => void;
  setQty: (variantId: string, qty: number) => void;
  clear: () => void;

  // derived helpers
  getItemCount: () => number;
  getSubtotal: () => number;
};

export type CartStore = CartState & CartActions;

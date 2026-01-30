"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartStore } from "@/features/cart/types";

function clampQty(qty: number) {
  if (!Number.isFinite(qty)) return 1;
  return Math.max(1, Math.min(99, Math.floor(qty)));
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: ({ variantId, qty, product }) => {
        const safeQty = clampQty(qty);

        set((state) => {
          const idx = state.items.findIndex((x) => x.variantId === variantId);

          if (idx >= 0) {
            const next = [...state.items];
            next[idx] = {
              ...next[idx],
              qty: clampQty(next[idx].qty + safeQty)
            };
            return { items: next };
          }

          return {
            items: [
              ...state.items,
              {
                variantId,
                qty: safeQty,
                product
              }
            ]
          };
        });
      },

      removeItem: (variantId) => {
        set((state) => ({
          items: state.items.filter((x) => x.variantId !== variantId)
        }));
      },

      setQty: (variantId, qty) => {
        const safeQty = clampQty(qty);
        set((state) => ({
          items: state.items.map((x) =>
            x.variantId === variantId ? { ...x, qty: safeQty } : x
          )
        }));
      },

      clear: () => set({ items: [] }),

      getItemCount: () => get().items.reduce((acc, it) => acc + it.qty, 0),

      getSubtotal: () =>
        get().items.reduce((acc, it) => acc + it.qty * (it.product.price ?? 0), 0)
    }),
    {
      name: "rpm_cart_v1"
    }
  )
);

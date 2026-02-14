"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartStore } from "@/features/cart/types";
import { cartRepository } from "./cart.repository";

function clampQty(qty: number) {
  if (!Number.isFinite(qty)) return 1;
  return Math.max(1, Math.min(99, Math.floor(qty)));
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isSynced: false,

      syncCart: async () => {
        if (get().isSynced) return;

        try {
          const user = await cartRepository.getSessionUser();
          if (!user) return;

          const serverItems = await cartRepository.fetchCart(user.id);

          const formatted = serverItems.map((item: any) => ({
            variantId: item.variant_id,
            qty: item.quantity,
            product: {
              slug: item.product_variants.products.slug,
              name: item.product_variants.products.name,
              imageUrl:
                item.product_variants.products.product_images[0]?.url || "",
              price: Number(item.product_variants.products.price_amount),
            },
          }));

          set({ items: formatted, isSynced: true });
        } catch (err) {
          console.error("Sync cart error:", err);
        }
      },

      addItem: async ({ variantId, qty, product }) => {
        const safeQty = clampQty(qty);

        // optimistic update
        set((state) => {
          const idx = state.items.findIndex(
            (x) => x.variantId === variantId
          );

          if (idx >= 0) {
            const next = [...state.items];
            next[idx] = {
              ...next[idx],
              qty: clampQty(next[idx].qty + safeQty),
            };
            return { items: next };
          }

          return {
            items: [...state.items, { variantId, qty: safeQty, product }],
          };
        });

        try {
          const user = await cartRepository.getSessionUser();
          if (!user) return;

          const current = get().items.find(
            (it) => it.variantId === variantId
          );

          await cartRepository.upsertItem(
            user.id,
            variantId,
            current?.qty ?? safeQty
          );
        } catch (err) {
          console.error("Add item error:", err);
        }
      },

      removeItem: async (variantId) => {
        set((state) => ({
          items: state.items.filter((x) => x.variantId !== variantId),
        }));

        try {
          const user = await cartRepository.getSessionUser();
          if (!user) return;

          await cartRepository.deleteItem(user.id, variantId);
        } catch (err) {
          console.error("Remove item error:", err);
        }
      },

      setQty: async (variantId, qty) => {
        const safeQty = clampQty(qty);

        set((state) => ({
          items: state.items.map((x) =>
            x.variantId === variantId ? { ...x, qty: safeQty } : x
          ),
        }));

        try {
          const user = await cartRepository.getSessionUser();
          if (!user) return;

          await cartRepository.updateQty(user.id, variantId, safeQty);
        } catch (err) {
          console.error("Set qty error:", err);
        }
      },

      clear: async () => {
        set({ items: [], isSynced: false });

        try {
          const user = await cartRepository.getSessionUser();
          if (!user) return;

          await cartRepository.clearCart(user.id);
        } catch (err) {
          console.error("Clear cart error:", err);
        }
      },

      getItemCount: () =>
        get().items.reduce((acc, it) => acc + it.qty, 0),

      // getSubtotal: () =>
      //   get().items.reduce(
      //     (acc, it) => acc + it.qty * (it.product.price ?? 0),
      //     0
      //   ),
    }),
    { name: "rpm_cart_v1" }
  )
);

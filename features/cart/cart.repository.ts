// features/cart/cart.repository.ts

import { createClient } from "@/lib/supabase/client";

export const cartRepository = {
  async getSessionUser() {
    const supabase = createClient();
    const { data } = await supabase.auth.getSession();
    return data.session?.user ?? null;
  },

  async fetchCart(userId: string) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("cart_items")
      .select(`
        quantity,
        variant_id,
        product_variants (
          id,
          products (
            slug,
            name,
            price_amount,
            product_images (url)
          )
        )
      `)
      .eq("user_id", userId);

    if (error) {
      console.error("Fetch cart failed:", error.message);
      throw error;
    }

    return data ?? [];
  },

  async upsertItem(userId: string, variantId: string, quantity: number) {
    const supabase = createClient();

    const { error } = await supabase
      .from("cart_items")
      .upsert(
        {
          user_id: userId,
          variant_id: variantId,
          quantity,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,variant_id" }
      );

    if (error) {
      console.error("Upsert cart failed:", error.message);
      throw error;
    }
  },

  async updateQty(userId: string, variantId: string, quantity: number) {
    const supabase = createClient();

    const { error } = await supabase
      .from("cart_items")
      .update({
        quantity,
        updated_at: new Date().toISOString(),
      })
      .match({ user_id: userId, variant_id: variantId });

    if (error) {
      console.error("Update qty failed:", error.message);
      throw error;
    }
  },

  async deleteItem(userId: string, variantId: string) {
    const supabase = createClient();

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .match({ user_id: userId, variant_id: variantId });

    if (error) {
      console.error("Delete item failed:", error.message);
      throw error;
    }
  },

  async clearCart(userId: string) {
    const supabase = createClient();

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("user_id", userId);

    if (error) {
      console.error("Clear cart failed:", error.message);
      throw error;
    }
  },
};

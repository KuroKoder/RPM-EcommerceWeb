// features/auth/hooks/use-auth.ts
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useCartStore } from "@/features/cart/store";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const syncCart = useCartStore((s) => s.syncCart);
  const clearCart = useCartStore((s) => s.clear);

  useEffect(() => {
    const supabase = createClient();
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session) syncCart();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === "SIGNED_IN") syncCart();
      if (event === "SIGNED_OUT") {
        clearCart();
        router.refresh();
      }
    });

    return () => subscription.unsubscribe();
  }, [syncCart, clearCart, router]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };

  return { user, handleLogout, isAuthenticated: !!user };
}
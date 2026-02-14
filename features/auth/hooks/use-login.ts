// features/auth/hooks/use-login.ts
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/auth";
import { useCartStore } from "@/features/cart/store";

export function useLogin() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);

    const result = await login(formData);

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      // Logic sinkronisasi cart yang spesifik
      const store = useCartStore.getState();
      await store.syncCart(true); 
      
      router.push("/cart");
      router.refresh();
    }
  };

  return {
    handleLogin,
    error,
    isLoading,
  };
}
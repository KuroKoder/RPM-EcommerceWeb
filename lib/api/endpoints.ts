// lib/api/endpoints.ts

export type ApiProvider = "escuela" | "dotnet";

/**
 * Provider default:
 * - sekarang: escuela
 * - nanti: dotnet (tinggal ganti env)
 */
export const API_PROVIDER = (process.env.NEXT_PUBLIC_API_PROVIDER ??
  "escuela") as ApiProvider;

export const endpoints = {
  catalog: {
    /**
     * Contract FE: list selalu support paging, search, sort.
     * - dotnet: /products?...
     * - escuela: /products (no paging) -> nanti ditangani adapter di client
     */
    listProducts: "/products"
  }
} as const;

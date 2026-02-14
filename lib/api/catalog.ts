import { createClient } from "@/lib/supabase/server";
import { Product } from "@/features/catalog/types";
import { mapSupabaseToUI, SupabaseProductDTO } from "./dtos/catalog";

// Helper untuk query standar agar tidak ngetik berulang kali
const PRODUCT_QUERY = `
  *,
  product_images (url, display_order),
  product_variants (*)
`;


export async function getAllProducts(): Promise<Product[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      product_images (url, display_order),
      product_variants (*)
    `);

  if (error || !data) return [];

  return data.map((item) => mapSupabaseToUI(item as any));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_QUERY)
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("Error fetching product:", error);
    return null;
  }

  return mapSupabaseToUI(data as unknown as SupabaseProductDTO);
}

export async function getFeaturedProducts(limit = 8): Promise<Product[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_QUERY)
    .eq("is_featured", true)
    .limit(limit)
    .order('created_at', { ascending: false });

  if (error || !data) {
    console.error("Error fetching featured products:", error);
    return [];
  }

  return data.map((item) => mapSupabaseToUI(item as unknown as SupabaseProductDTO));
}

export async function getBestSellerProducts(limit = 8): Promise<Product[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_QUERY)
    .eq("is_best_seller", true)
    .limit(limit);

  if (error || !data) return [];

  return data.map((item) => mapSupabaseToUI(item as unknown as SupabaseProductDTO));
}
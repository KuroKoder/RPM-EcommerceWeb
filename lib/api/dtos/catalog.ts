//lib/api/dtos/catalog.ts
import { Product as UIProduct, Variant as UIVariant } from "@/features/catalog/types";

// Interface sesuai hasil query JOIN di Supabase
export interface SupabaseProductDTO {
  id: string;
  slug: string;
  name: string;
  brand_name: string | null;
  category: string;
  description: string;
  price_amount: number;
  compare_at_price: number | null;
  is_featured: boolean;
  is_best_seller: boolean;
  badge_text: string | null;
  details: string[] | null;
  care: string[] | null;
  product_images: { url: string; display_order: number }[];
  product_variants: {
    id: string;
    sku: string;
    stock: number;
    size: string | null;
    color: string | null;
  }[];
}

export function mapSupabaseToUI(dto: SupabaseProductDTO): UIProduct {
  return {
    id: dto.id,
    slug: dto.slug,
    name: dto.name,
    brand: dto.brand_name,
    category: dto.category,
    description: dto.description,
    price: Number(dto.price_amount || 0), // Fallback ke 0 jika null
    compareAtPrice: dto.compare_at_price ? Number(dto.compare_at_price) : null,
    badgeText: dto.badge_text,
    
    // Gunakan optional chaining (?.) dan fallback empty array ([])
    imageUrl: (dto.product_images ?? [])
      .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))
      .map((img) => img.url),

    variants: (dto.product_variants ?? []).map((v) => ({
      id: v.id,
      sku: v.sku,
      stock: v.stock,
      size: v.size,
      color: v.color,
    })),

    details: dto.details ?? [],
    care: dto.care ?? [],
    isFeatured: !!dto.is_featured,
    isBestSeller: !!dto.is_best_seller,
  };
}
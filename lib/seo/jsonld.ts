// lib/seo/jsonld.ts
import { Product } from "@/features/catalog/types";

export function generateProductJsonLd(p: Product) {
  const variants = p.variants ?? [];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: p.imageUrl,
    sku: variants[0]?.sku,
    brand: { "@type": "Brand", name: p.brand ?? "RPM" },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: p.price,
      availability: variants.some((v) => v.stock > 0)
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock"
    }
  };
}
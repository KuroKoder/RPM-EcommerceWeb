import { NextResponse } from "next/server";
import { mockProducts } from "@/lib/mock/products";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageSize = Math.max(1, Math.min(24, Number(searchParams.get("pageSize") ?? "8")));

  // Dummy logic: ambil produk yang badgeText "Best Seller" dulu, sisanya mengisi
  const best = mockProducts.filter((p) => (p.badgeText ?? "").toLowerCase().includes("best"));
  const rest = mockProducts.filter((p) => !best.includes(p));
  const items = [...best, ...rest].slice(0, pageSize).map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    brand: p.brand ?? null,
    price: p.price,
    compareAtPrice: p.compareAtPrice ?? null,
    badgeText: p.badgeText ?? null,
    imageUrl: p.imageUrl
  }));

  return NextResponse.json(items);
}

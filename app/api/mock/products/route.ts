import { NextResponse } from "next/server";
import { mockProducts } from "@/lib/mock/products";

function contains(hay: string, needle: string) {
  return hay.toLowerCase().includes(needle.toLowerCase());
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const q = (searchParams.get("q") ?? "").trim();
  const sort = (searchParams.get("sort") ?? "").trim(); // newest | price_asc | price_desc
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const pageSize = Math.max(1, Math.min(48, Number(searchParams.get("pageSize") ?? "12")));

  let items = [...mockProducts];

  if (q) {
    items = items.filter((p) => contains(p.name, q) || contains(p.slug, q) || contains(p.brand ?? "", q));
  }

  if (sort === "price_asc") items.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") items.sort((a, b) => b.price - a.price);
  if (sort === "newest") items = items; // dummy: keep as is

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const paged = items.slice(start, start + pageSize);

  return NextResponse.json({
    items: paged.map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      brand: p.brand ?? null,
      price: p.price,
      compareAtPrice: p.compareAtPrice ?? null,
      badgeText: p.badgeText ?? null,
      imageUrl: p.imageUrl
    })),
    page: safePage,
    pageSize,
    totalItems,
    totalPages
  });
}

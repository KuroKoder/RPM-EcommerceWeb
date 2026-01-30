import { NextResponse, type NextRequest } from "next/server";
import { mockProducts } from "@/lib/mock/products";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const p = mockProducts.find((x) => x.slug === slug);

  if (!p) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    id: p.id,
    slug: p.slug,
    name: p.name,
    brand: p.brand ?? null,
    description:
      "Clean cut. Neutral palette. Designed to layer well and wear often.",
    price: p.price,
    compareAtPrice: p.compareAtPrice ?? null,
    badgeText: p.badgeText ?? null,
    images: p.images && p.images.length ? p.images : [p.imageUrl],
    variants: p.variants ?? [],
    details: ["Minimal branding", "Relaxed fit", "Texture-forward fabric"],
    care: ["Cold wash", "Do not bleach", "Low heat iron"]
  });
}
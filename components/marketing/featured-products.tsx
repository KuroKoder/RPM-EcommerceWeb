import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

type FeaturedProduct = {
  slug: string;
  name: string;
  brand?: string | null;
  price: number;
  compareAtPrice?: number | null;
  imageUrl: string;
  badgeText?: string | null;
};

export function FeaturedProducts({ title, products }: { title: string; products: FeaturedProduct[] }) {
  return (
    <section>
      <Container className="py-12 sm:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">Curated picks for an editorial wardrobe.</p>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        <ProductGrid>
          {products.map((p) => (
            <ProductCard
              key={p.slug}
              slug={p.slug}
              name={p.name}
              brand={p.brand ?? undefined}
              price={p.price}
              compareAtPrice={p.compareAtPrice ?? undefined}
              imageUrl={p.imageUrl}
              badgeText={p.badgeText ?? undefined}
            />
          ))}
        </ProductGrid>
      </Container>
    </section>
  );
}

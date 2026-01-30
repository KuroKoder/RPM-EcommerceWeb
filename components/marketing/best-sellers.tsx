import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductCard } from "@/components/product/product-card";

type ProductItem = {
  id: string;
  slug: string;
  name: string;
  brand?: string | null;
  price: number;
  compareAtPrice?: number | null;
  badgeText?: string | null;
  imageUrl: string;
};

export function BestSellers({ products }: { products: ProductItem[] }) {
  return (
    <section className="border-t border-[rgb(var(--border))]">
      <Container className="py-12 sm:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-[rgb(var(--muted))]">
              BEST SELLERS
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              Most-worn essentials.
            </h2>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
              Staples that customers keep coming back to.
            </p>
          </div>

          <Link
            href="/products?q=best"
            className="text-sm font-medium underline underline-offset-4"
          >
            View all →
          </Link>
        </div>

        <ProductGrid>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              slug={p.slug}
              name={p.name}
              brand={p.brand ?? undefined}
              price={p.price}
              compareAtPrice={p.compareAtPrice ?? undefined}
              badgeText={p.badgeText ?? undefined}
              imageUrl={p.imageUrl}
            />
          ))}
        </ProductGrid>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/features/catalog/components/product-grid";
import { Product } from "@/features/catalog/types";

export function BestSellers({ products }: { products: Product[] }) {
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

        <ProductGrid products={products} />
      </Container>
    </section>
  );
}
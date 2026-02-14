import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/features/catalog/components/product-grid";
import Link from "next/link";
import { Product } from "@/features/catalog/types";

export function FeaturedProducts({ title, products }: { title: string; products: Product[] }) {
  return (
    <section>
      <Container className="py-12 sm:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">Curated picks for an editorial wardrobe.</p>
          </div>
          <Link href="/products" className="text-sm font-medium underline underline-offset-4">
            View all
          </Link>
        </div>
        <ProductGrid products={products} />
      </Container>
    </section>
  );
}
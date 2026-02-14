import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/features/catalog/components/product-grid";
import { getAllProducts } from "@/lib/api/catalog";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <Container className="py-10 sm:py-14">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
        Shop
      </h1>

      <ProductGrid products={products} />
    </Container>
  );
}

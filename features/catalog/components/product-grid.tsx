import { Product } from "@/features/catalog/types";
import { ProductCard } from "./product-card";

type Props = {
  products: Product[];
};

export function ProductGrid({ products = [] }: Props) { // Added default = []
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
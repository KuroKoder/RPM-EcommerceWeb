import Link from "next/link";
import Image from "next/image";
import { Product } from "@/features/catalog/types";
import { Badge } from "@/components/ui/badge";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const isSale =
    product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-[var(--radius)] border bg-white transition hover:shadow"
    >
      <div className="relative aspect-[3/4] bg-neutral-50">
        {product.badgeText ? (
          <div className="absolute left-3 top-3 z-10">
            <Badge>{product.badgeText}</Badge>
          </div>
        ) : null}

        <Image
          src={Array.isArray(product.imageUrl) ? product.imageUrl[0] : (product.imageUrl ?? "")} 
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-3">
        {product.brand ? (
          <p className="text-xs text-neutral-500">{product.brand}</p>
        ) : null}

        <p className="mt-1 line-clamp-2 text-sm font-medium">
          {product.name}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <p className="text-sm font-semibold">
            Rp{product.price.toLocaleString("id-ID")}
          </p>

          {isSale ? (
            <p className="text-xs text-neutral-500 line-through">
              Rp{product.compareAtPrice!.toLocaleString("id-ID")}
            </p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

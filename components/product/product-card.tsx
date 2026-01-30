import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/badge";

type ProductCardProps = {
  slug: string;
  name: string;
  brand?: string;
  price: number;
  compareAtPrice?: number | null;
  imageUrl: string;
  imageAlt?: string;
  badgeText?: string; // "New", "Sale"
};

export function ProductCard({
  slug,
  name,
  brand,
  price,
  compareAtPrice,
  imageUrl,
  imageAlt,
  badgeText,
}: ProductCardProps) {
  const isSale = !!compareAtPrice && compareAtPrice > price;

  return (
    <Link
      href={`/products/${slug}`}
      className={cn(
        "group block overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white",
        "hover:shadow-[var(--shadow-md)] transition"
      )}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50">
        {badgeText ? (
          <div className="absolute left-3 top-3 z-10">
            <Badge>{badgeText}</Badge>
          </div>
        ) : null}

        <Image
          src={imageUrl}
          alt={imageAlt ?? name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-3">
        {brand ? <p className="text-xs text-neutral-500">{brand}</p> : null}
        <p className="mt-1 line-clamp-2 text-sm font-medium">{name}</p>

        <div className="mt-2 flex items-center gap-2">
          <p className="text-sm font-semibold">Rp{price.toLocaleString("id-ID")}</p>
          {isSale ? (
            <p className="text-xs text-neutral-500 line-through">
              Rp{compareAtPrice!.toLocaleString("id-ID")}
            </p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

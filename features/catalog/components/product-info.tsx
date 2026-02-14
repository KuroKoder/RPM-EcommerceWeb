// components/product/product-info.tsx
import { Product } from "@/features/catalog/types";
import { ProductPrice } from "@/features/catalog/components/price"; // Gunakan komponen price yang ada
import { ProductClient } from "@/features/catalog/components/product-client";
import { InfoBlock } from "@/features/catalog/components/info-block";

export function ProductInfo({ product: p }: { product: Product }) {
  const variants = p.variants ?? [];
  const defaultVariantId = variants.find((v) => v.stock > 0)?.id ?? variants[0]?.id;

  return (
    <div className="flex flex-col">
      <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))] uppercase">
        {p.brand ?? "RPM Heritage"}
      </p>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{p.name}</h1>

      <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted))]">{p.description}</p>

      <div className="mt-5">
        <ProductPrice price={p.price} compareAtPrice={p.compareAtPrice} size="lg" />
      </div>

      <ProductClient
        productSlug={p.slug}
        productName={p.name}
        imageUrl={p.imageUrl[0] ?? ""}
        price={p.price}
        variants={variants}
        defaultVariantId={defaultVariantId}
      />

      <div className="mt-10 grid gap-4 border-t border-[rgb(var(--border))] pt-10">
        {p.details && p.details.length > 0 && <InfoBlock title="Details" items={p.details} />}
        {p.care && p.care.length > 0 && <InfoBlock title="Care" items={p.care} />}
      </div>
    </div>
  );
}
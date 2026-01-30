import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ImageGallery } from "@/components/product/image-gallery";
import { VariantPicker, type Variant } from "@/components/product/variant-picker";
import { PdpActions } from "@/components/product/pdp-actions";
import { InfoBlock } from "@/components/product/info-block";
import { ProductClient } from "@/components/product/product-client";


type ProductDetail = {
  id: string;
  slug: string;
  name: string;
  brand?: string | null;
  description: string;
  price: number;
  compareAtPrice?: number | null;
  badgeText?: string | null;
  images: string[];
  variants: Variant[];
  details: string[];
  care: string[];
};

async function getProduct(slug: string): Promise<ProductDetail | null> {
  const site = process.env.NEXT_PUBLIC_SITE_URL!;
  const res = await fetch(`${site}/api/mock/products/${slug}`, {
    next: { revalidate: 60 }
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);
  return res.json();

  // REAL API (nanti)
  // const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  // const res = await fetch(`${base}/v1/products/${slug}`, { next: { revalidate: 600, tags: ["product", slug] } });
  // if (res.status === 404) return null;
  // if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);
  // return res.json();
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = await getProduct(params.slug);
  if (!p) return { title: "Product not found" };

  const title = `${p.name} — RPM`;
  const description = p.description?.slice(0, 155) ?? "RPM product";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: p.images?.[0] ? [{ url: p.images[0] }] : undefined
    }
  };
}

export default async function ProductPage({
  params
}: {
  params: { slug: string };
}) {
  const p = await getProduct(params.slug);
  if (!p) notFound();

  const heroImg = p.images?.[0] ?? "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: p.images,
    sku: p.variants?.[0]?.sku,
    brand: { "@type": "Brand", name: p.brand ?? "RPM" },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: p.price,
      availability:
        p.variants?.some((v) => v.stock > 0)
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock"
    }
  };

  // pilih default variant pertama yang in stock (untuk UX)
  const defaultVariantId =
    p.variants.find((v) => v.stock > 0)?.id ?? p.variants[0]?.id;

  return (
    <Container className="py-10 sm:py-14">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <ImageGallery images={p.images} alt={p.name} />
        </div>

        {/* Info */}
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
            {p.brand ?? "RPM"}
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            {p.name}
          </h1>

          <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted))]">
            {p.description}
          </p>

          {/* Price */}
          <div className="mt-5 flex items-center gap-3">
            <p className="text-lg font-semibold">
              Rp{p.price.toLocaleString("id-ID")}
            </p>
            {p.compareAtPrice && p.compareAtPrice > p.price ? (
              <p className="text-sm text-[rgb(var(--muted))] line-through">
                Rp{p.compareAtPrice.toLocaleString("id-ID")}
              </p>
            ) : null}
          </div>

          {/* Variant + actions */}
          <ProductClient
            productSlug={p.slug}
            productName={p.name}
            imageUrl={heroImg}
            price={p.price}
            variants={p.variants}
            defaultVariantId={defaultVariantId}
          />

          {/* Info blocks */}
          <div className="mt-10 grid gap-4">
            <InfoBlock
              title="Shipping"
              items={[
                "Ships in 1–2 days (business days)",
                "Instant confirmation after payment",
                "Tracking number provided"
              ]}
            />
            <InfoBlock
              title="Returns"
              items={[
                "7 days return window",
                "Item must be unused and in original condition",
                "Refund after inspection"
              ]}
            />
            <InfoBlock
              title="Size Guide"
              items={[
                "Relaxed fit—true to size",
                "Between sizes? choose one size up",
                "Need help? chat support"
              ]}
            />
          </div>

          {/* Details / care */}
          <div className="mt-10 grid gap-4">
            <InfoBlock title="Details" items={p.details} />
            <InfoBlock title="Care" items={p.care} />
          </div>
        </div>
      </div>
    </Container>
  );
}

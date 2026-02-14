// app/(store)/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ImageGallery } from "@/features/catalog/components/image-gallery";
import { ProductInfo } from "@/features/catalog/components/product-info";
import { getProductBySlug } from "@/lib/api/catalog";
import { generateProductJsonLd } from "@/lib/seo/jsonld";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) notFound();

  return (
    <Container className="py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductJsonLd(product)) }}
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ImageGallery images={product.imageUrl} alt={product.name} />
        </div>

        <div className="lg:col-span-5">
          <ProductInfo product={product} />
        </div>
      </div>
    </Container>
  );
}
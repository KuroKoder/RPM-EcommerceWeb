import { Hero } from "@/components/marketing/hero";
import { TrustBar } from "@/components/marketing/trust-bar";
import { FeaturedProducts } from "@/components/marketing/featured-products";
import { CollectionCards } from "@/components/marketing/collection-cards";
import { BestSellers } from "@/components/marketing/best-sellers";
import { NewsletterCta } from "@/components/marketing/newsletter-cta";
import { Manifesto } from "@/components/marketing/manifesto";
import { LookbookMiniGrid } from "@/components/marketing/lookbook-mini-grid";

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

async function getFeatured(): Promise<ProductItem[]> {
  const site = process.env.NEXT_PUBLIC_SITE_URL!;
  const res = await fetch(`${site}/api/mock/products/featured?pageSize=8`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) return [];
  return res.json();

  // REAL API (nanti)
  // const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  // const res = await fetch(`${base}/v1/products/featured?pageSize=8`, { next: { revalidate: 300, tags: ["home","catalog"] } });
  // if (!res.ok) return [];
  // return res.json();
}

async function getBestSellers(): Promise<ProductItem[]> {
  const site = process.env.NEXT_PUBLIC_SITE_URL!;
  const res = await fetch(`${site}/api/mock/products/best-sellers?pageSize=8`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) return [];
  return res.json();

  // REAL API (nanti)
  // const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  // const res = await fetch(`${base}/v1/products/best-sellers?pageSize=8`, { next: { revalidate: 300, tags: ["home","catalog"] } });
  // if (!res.ok) return [];
  // return res.json();
}

export default async function HomePage() {
  const [featured, bestSellers] = await Promise.all([getFeatured(), getBestSellers()]);

  return (
    <>
      <Hero />
      <TrustBar />
      <Manifesto />
      <LookbookMiniGrid />
      <FeaturedProducts title="Featured" products={featured} />
      <CollectionCards />
      <BestSellers products={bestSellers} />
      <NewsletterCta />
    </>
  );
}

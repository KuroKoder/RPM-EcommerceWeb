import {
  Hero,
  TrustBar,
  FeaturedProducts,
  CollectionCards,
  BestSellers,
  NewsletterCta,
  Manifesto,
  LookbookMiniGrid,
} from "@/components/marketing";

import {
  getFeaturedProducts,
  getBestSellerProducts,
} from "@/lib/api/catalog";

export default async function HomePage() {
  const [featured, bestSellers] = await Promise.all([
    getFeaturedProducts(8),
    getBestSellerProducts(8),
  ]);

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

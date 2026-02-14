import { Container } from "@/components/layout/container";
import { ProductGridSkeleton } from "@/features/catalog/components/product-grid-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-6 sm:mb-8">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="mt-3 h-4 w-72" />
      </div>

      <ProductGridSkeleton count={12} />
    </Container>
  );
}

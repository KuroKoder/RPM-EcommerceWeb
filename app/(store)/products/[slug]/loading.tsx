import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white">
            <Skeleton className="aspect-[4/5] w-full" />
          </div>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="aspect-[4/5] w-full rounded-lg" />
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="mt-3 h-10 w-80" />
          <Skeleton className="mt-4 h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-5/6" />
          <Skeleton className="mt-6 h-6 w-32" />
          <Skeleton className="mt-8 h-40 w-full" />
          <Skeleton className="mt-4 h-12 w-full" />
        </div>
      </div>
    </Container>
  );
}

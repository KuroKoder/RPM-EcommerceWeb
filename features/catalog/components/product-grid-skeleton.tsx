import { Skeleton } from "@/components/ui/skeleton";

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white"
        >
          <Skeleton className="aspect-[3/4] w-full" />
          <div className="p-3">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-2 h-4 w-44" />
            <Skeleton className="mt-3 h-4 w-28" />
          </div>
        </div>
      ))}
    </div>
  );
}

// components/product/price.tsx
import { cn } from "@/lib/utils/cn";

interface PriceProps {
  price: number;
  compareAtPrice?: number | null;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ProductPrice({
  price,
  compareAtPrice,
  className,
  size = "md",
}: PriceProps) {
  const isSale = compareAtPrice && compareAtPrice > price;

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg sm:text-xl",
  };

  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <p className={cn("font-semibold", sizeClasses[size])}>
        {formatIDR(price)}
      </p>
      
      {isSale && (
        <p className={cn(
          "text-[rgb(var(--muted))] line-through", 
          size === "lg" ? "text-base" : "text-xs"
        )}>
          {formatIDR(compareAtPrice)}
        </p>
      )}
    </div>
  );
}
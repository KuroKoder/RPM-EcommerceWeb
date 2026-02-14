"use client";

import * as React from "react";
import { Variant } from "@/features/catalog/types";
import { VariantPicker } from "@/features/catalog/components/variant-picker";
import { PdpActions } from "@/features/catalog/components/pdp-actions";

export function ProductClient({
  productSlug,
  productName,
  imageUrl,
  price,
  variants,
  defaultVariantId
}: {
  productSlug: string;
  productName: string;
  imageUrl: string;
  price: number;
  variants: Variant[];
  defaultVariantId?: string;
}) {
  // If there's only one variant (e.g., a Tote Bag), select it automatically
  const initialVariant = variants.length === 1 ? variants[0].id : defaultVariantId;

  const [selectedVariantId, setSelectedVariantId] = React.useState<string | undefined>(
    initialVariant
  );

  // Fallback UI if there are no variants defined in the mock/database
  if (variants.length === 0) {
    return (
      <div className="mt-8 rounded-lg border border-dashed p-4 text-center">
        <p className="text-sm text-[rgb(var(--muted))]">
          Product currently unavailable. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Only show the picker if there is more than one variant 
        or if the single variant actually has options (size/color) 
      */}
      {(variants.length > 1 || (variants[0]?.size || variants[0]?.color)) && (
        <VariantPicker
          variants={variants}
          value={selectedVariantId}
          onChange={setSelectedVariantId}
        />
      )}

      <PdpActions
        productSlug={productSlug}
        productName={productName}
        imageUrl={imageUrl}
        price={price}
        variants={variants}
        selectedVariantId={selectedVariantId}
      />
    </>
  );
}
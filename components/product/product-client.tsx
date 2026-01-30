"use client";

import * as React from "react";
import { VariantPicker, type Variant } from "@/components/product/variant-picker";
import { PdpActions } from "@/components/product/pdp-actions";

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
  const [selectedVariantId, setSelectedVariantId] = React.useState<string | undefined>(
    defaultVariantId
  );

  return (
    <>
      <VariantPicker
        variants={variants}
        value={selectedVariantId}
        onChange={setSelectedVariantId}
      />

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

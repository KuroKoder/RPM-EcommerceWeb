//features/catalog/types.ts
export type Variant = {
  id: string;
  sku: string;
  stock: number;
  size?: string | null;
  color?: string | null;
};

export type Product = {
  id: string;
  slug: string;
  name: string;

  brand?: string | null;
  category: string;

  description: string;

  price: number;
  compareAtPrice?: number | null;
  badgeText?: string | null;

  imageUrl: string[];

  variants?: Variant[];

  details?: string[];
  care?: string[];

  isFeatured?: boolean;
  isBestSeller?: boolean;
};

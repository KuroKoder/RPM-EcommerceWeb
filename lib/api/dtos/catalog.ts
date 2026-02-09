export type ApiCategory = {
  id: number;
  name: string;
  slug: string;
  image?: string;
  creationAt?: string;
  updatedAt?: string;
};

export type ApiProduct = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ApiCategory;
  images: string[];
  creationAt?: string;
  updatedAt?: string;
};

export type ProductListItem = {
  slug: string;
  name: string;
  brand?: string | null;
  price: number;
  compareAtPrice?: number | null;
  imageUrl: string;
  badgeText?: string | null;
};

export type PagedResponse<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

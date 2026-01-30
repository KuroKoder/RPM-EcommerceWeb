export type MockVariant = {
  id: string;
  size: string;
  color: string;
  sku: string;
  stock: number;
};

export type MockProductListItem = {
  id: string;
  slug: string;
  name: string;
  brand?: string | null;
  price: number;
  compareAtPrice?: number | null;
  badgeText?: string | null;
  imageUrl: string;
  images?: string[];
  variants?: MockVariant[];
};

export const mockProducts: MockProductListItem[] = [
  {
    id: "prd_001",
    slug: "linen-overshirt-natural",
    name: "Linen Overshirt",
    brand: "RPM",
    price: 649000,
    compareAtPrice: 799000,
    badgeText: "New",
    imageUrl: "https://picsum.photos/seed/linen1/600/800",
    images: [
      "https://picsum.photos/seed/linen1/800/1000",
      "https://picsum.photos/seed/linen2/800/1000",
      "https://picsum.photos/seed/linen3/800/1000"
    ],
    variants: [
      { id: "var_001_s", size: "S", color: "Natural", sku: "RPM-LN-OS-NAT-S", stock: 12 },
      { id: "var_001_m", size: "M", color: "Natural", sku: "RPM-LN-OS-NAT-M", stock: 8 },
      { id: "var_001_l", size: "L", color: "Natural", sku: "RPM-LN-OS-NAT-L", stock: 5 }
    ]
  },
  {
    id: "prd_002",
    slug: "cotton-relaxed-shirt-white",
    name: "Cotton Relaxed Shirt",
    brand: "RPM",
    price: 499000,
    compareAtPrice: null,
    badgeText: null,
    imageUrl: "https://picsum.photos/seed/cotton1/600/800",
    images: [
      "https://picsum.photos/seed/cotton1/800/1000",
      "https://picsum.photos/seed/cotton2/800/1000"
    ],
    variants: [
      { id: "var_002_s", size: "S", color: "White", sku: "RPM-CT-RS-WHT-S", stock: 20 },
      { id: "var_002_m", size: "M", color: "White", sku: "RPM-CT-RS-WHT-M", stock: 14 }
    ]
  },
  {
    id: "prd_003",
    slug: "twill-wide-trousers-black",
    name: "Twill Wide Trousers",
    brand: "RPM",
    price: 699000,
    compareAtPrice: 899000,
    badgeText: "Sale",
    imageUrl: "https://picsum.photos/seed/trousers1/600/800",
    images: [
      "https://picsum.photos/seed/trousers1/800/1000",
      "https://picsum.photos/seed/trousers2/800/1000"
    ],
    variants: [
      { id: "var_003_m", size: "M", color: "Black", sku: "RPM-TW-WT-BLK-M", stock: 6 },
      { id: "var_003_l", size: "L", color: "Black", sku: "RPM-TW-WT-BLK-L", stock: 9 }
    ]
  },
  {
    id: "prd_004",
    slug: "heavyweight-tshirt-charcoal",
    name: "Heavyweight T-Shirt",
    brand: "RPM",
    price: 299000,
    compareAtPrice: null,
    badgeText: "Best Seller",
    imageUrl: "https://picsum.photos/seed/tee1/600/800",
    images: [
      "https://picsum.photos/seed/tee1/800/1000",
      "https://picsum.photos/seed/tee2/800/1000"
    ],
    variants: [
      { id: "var_004_s", size: "S", color: "Charcoal", sku: "RPM-HW-TS-CHR-S", stock: 30 },
      { id: "var_004_m", size: "M", color: "Charcoal", sku: "RPM-HW-TS-CHR-M", stock: 25 },
      { id: "var_004_l", size: "L", color: "Charcoal", sku: "RPM-HW-TS-CHR-L", stock: 18 }
    ]
  }
];

import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductCard } from "@/components/product/product-card";
import { Pagination } from "@/components/ui/pagination";

// Sesuaikan dengan response API kamu
type ProductListItem = {
  slug: string;
  name: string;
  brand?: string | null;
  price: number;
  compareAtPrice?: number | null;
  imageUrl: string;
  badgeText?: string | null;
};

type PagedResponse<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

function clampPage(n: number) {
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.floor(n);
}

function formatIdr(n: number) {
  return `Rp${n.toLocaleString("id-ID")}`;
}

async function getProducts(params: {
  q?: string;
  page: number;
  sort?: string;
}): Promise<PagedResponse<ProductListItem>> {
  const sp = new URLSearchParams();
  if (params.q) sp.set("q", params.q);
  if (params.sort) sp.set("sort", params.sort);
  sp.set("page", String(params.page));
  sp.set("pageSize", "12");

  // PAKAI fetch wrapper kamu kalau sudah ada:
  // return apiGet(`/v1/products?${sp.toString()}`, { revalidate: 300, tags: ["catalog"] });

  const site = process.env.NEXT_PUBLIC_SITE_URL!;
  const res = await fetch(`${site}/api/mock/products?${sp.toString()}`, {
  next: { revalidate: 60 }
});

  if (!res.ok) {
    // biar App Router error boundary nangkep
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return res.json();
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string; sort?: string };
}) {
  const q = (searchParams.q ?? "").trim();
  const sort = (searchParams.sort ?? "").trim() || undefined;
  const page = clampPage(Number(searchParams.page ?? "1"));

  const data = await getProducts({ q: q || undefined, page, sort });

  const title = q ? `Search: “${q}”` : "Shop";
  const subtitle = q
    ? `${data.totalItems} results`
    : `${data.totalItems} items`;

  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">{subtitle}</p>
        </div>

        {/* Placeholder sort UI (kita bikin next kalau kamu mau) */}
        <div className="text-sm text-[rgb(var(--muted))]">
          {sort ? (
            <span>
              Sort: <span className="text-black">{sort}</span>
            </span>
          ) : (
            <span>Sort: default</span>
          )}
        </div>
      </div>

      {data.items.length === 0 ? (
        <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-8">
          <p className="text-sm font-medium">No products found</p>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">
            Try a different keyword or browse all products.
          </p>
          <div className="mt-5">
            <a
              href="/products"
              className="text-sm font-medium underline underline-offset-4"
            >
              View all products
            </a>
          </div>
        </div>
      ) : (
        <>
          <ProductGrid>
            {data.items.map((p) => (
              <ProductCard
                key={p.slug}
                slug={p.slug}
                name={p.name}
                brand={p.brand ?? undefined}
                price={p.price}
                compareAtPrice={p.compareAtPrice ?? undefined}
                imageUrl={p.imageUrl}
                badgeText={p.badgeText ?? undefined}
              />
            ))}
          </ProductGrid>

          <Pagination
            path="/products"
            page={data.page}
            totalPages={data.totalPages}
            q={q || undefined}
            sort={sort}
          />
        </>
      )}
    </Container>
  );
}

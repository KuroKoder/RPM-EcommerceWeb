import Link from "next/link";
import { Button } from "@/components/ui/Button";

function buildUrl(path: string, params: Record<string, string | undefined>) {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v && v.trim() !== "") sp.set(k, v);
  }
  const qs = sp.toString();
  return qs ? `${path}?${qs}` : path;
}

export function Pagination({
  path,
  page,
  totalPages,
  q,
  sort,
}: {
  path: string;
  page: number;
  totalPages: number;
  q?: string;
  sort?: string;
}) {
  if (totalPages <= 1) return null;

  const prev = page > 1 ? page - 1 : null;
  const next = page < totalPages ? page + 1 : null;

  return (
    <div className="mt-10 flex items-center justify-between gap-4">
      <div>
        {prev ? (
          <Link href={buildUrl(path, { q, sort, page: String(prev) })}>
            <Button variant="secondary" size="sm">
              ← Prev
            </Button>
          </Link>
        ) : (
          <Button variant="secondary" size="sm" disabled>
            ← Prev
          </Button>
        )}
      </div>

      <p className="text-sm text-[rgb(var(--muted))]">
        Page <span className="text-black">{page}</span> of{" "}
        <span className="text-black">{totalPages}</span>
      </p>

      <div>
        {next ? (
          <Link href={buildUrl(path, { q, sort, page: String(next) })}>
            <Button variant="secondary" size="sm">
              Next →
            </Button>
          </Link>
        ) : (
          <Button variant="secondary" size="sm" disabled>
            Next →
          </Button>
        )}
      </div>
    </div>
  );
}

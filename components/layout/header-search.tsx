"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

export function HeaderSearch() {
  const router = useRouter();
  const sp = useSearchParams();
  const initial = sp.get("q") ?? "";
  const [q, setQ] = React.useState(initial);

  React.useEffect(() => {
    setQ(sp.get("q") ?? "");
  }, [sp]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/products?q=${encodeURIComponent(query)}` : "/products");
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search products…"
        aria-label="Search products"
      />
    </form>
  );
}

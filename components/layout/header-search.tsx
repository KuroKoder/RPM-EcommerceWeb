"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react"; // Ikon Search

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
    <form onSubmit={onSubmit} className="relative w-full group">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-black" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search for items, brands..."
        className="w-full rounded-full border border-neutral-100 bg-neutral-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-neutral-300 focus:bg-white focus:ring-4 focus:ring-neutral-100"
      />
    </form>
  );
}
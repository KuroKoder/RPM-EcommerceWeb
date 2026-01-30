import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";
import { Suspense } from "react";
import { HeaderSearch } from "@/components/layout/header-search";
import { CartBadge } from "./cart-badge";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgb(var(--border))] bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            RPM
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            <Link href="/products" className="text-sm text-neutral-700 hover:text-black">
              Shop
            </Link>
            <Link href="/campaign/new" className="text-sm text-neutral-700 hover:text-black">
              New
            </Link>
            <Link href="/campaign/sale" className="text-sm text-neutral-700 hover:text-black">
              Sale
            </Link>
          </nav>
        </div>

        <Suspense fallback={<div className="hidden w-full max-w-md md:block"/>}>
          <HeaderSearch />
        </Suspense>

        <div className="flex items-center gap-2">
          <CartBadge />
          <Button variant="ghost" size="sm">
            <Link href="/account" className="w-full h-full flex items-center justify-center">Account</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}


"use client";

import Link from "next/link";
import { Suspense } from "react";
import { ShoppingBag, User, LogOut, UserPlus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";
import { HeaderSearch } from "@/components/layout/header-search";
import { CartBadge } from "./cart-badge";
import { useAuth } from "@/features/auth/hooks/use-auth";

export function Header() {
  // Ambil data & fungsi dari custom hook
  const { user, handleLogout, isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-8">
        {/* Logo Section */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-black tracking-tighter">
            RPM<span className="text-[rgb(var(--brand))]">.</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/products" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black">
              Shop
            </Link>
          </nav>
        </div>

        {/* Search Section */}
        <div className="hidden max-w-md flex-1 md:block">
          <Suspense fallback={<div className="h-10 w-full animate-pulse rounded-full bg-neutral-100" />}>
            <HeaderSearch />
          </Suspense>
        </div>

        <div className="flex items-center gap-4">
          {/* Cart Section */}
          <Link 
            href="/cart" 
            className="group relative p-2 transition-colors hover:bg-neutral-50 rounded-full"
          >
            <ShoppingBag className="h-5 w-5 text-neutral-700" />
            <CartBadge />
          </Link>
          
          <div className="h-4 w-[1px] bg-neutral-200 mx-1" />

          {/* Auth Section - Menggunakan isAuthenticated untuk kejelasan */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link href="/account">
                <Button variant="ghost" size="sm" className="gap-2 font-bold uppercase tracking-tighter">
                  <User className="h-4 w-4" />
                  Account
                </Button>
              </Link>
              <button 
                onClick={handleLogout}
                className="group p-2 text-neutral-400 hover:text-red-600 transition-colors"
                title="Sign Out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="font-bold uppercase tracking-tighter">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm" className="gap-2 font-bold uppercase tracking-tighter">
                  <UserPlus className="h-4 w-4" />
                  Join
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
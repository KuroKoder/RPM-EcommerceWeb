import Link from "next/link";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold">RPM</p>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
              Editorial fashion essentials. Built for daily wear.
            </p>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Shop</p>
            <ul className="mt-3 space-y-2 text-[rgb(var(--muted))]">
              <li><Link className="hover:text-black" href="/products">All Products</Link></li>
              <li><Link className="hover:text-black" href="/campaign/new">New Arrivals</Link></li>
              <li><Link className="hover:text-black" href="/campaign/sale">Sale</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Help</p>
            <ul className="mt-3 space-y-2 text-[rgb(var(--muted))]">
              <li><Link className="hover:text-black" href="/pages/shipping">Shipping</Link></li>
              <li><Link className="hover:text-black" href="/pages/returns">Returns</Link></li>
              <li><Link className="hover:text-black" href="/pages/size-guide">Size Guide</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Contact</p>
            <p className="mt-3 text-[rgb(var(--muted))]">support@rpm.com</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[rgb(var(--border))] pt-6 text-xs text-[rgb(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RPM</p>
          <p>Built with Next.js</p>
        </div>
      </Container>
    </footer>
  );
}

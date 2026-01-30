import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-xl rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-8 text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
          404
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-[rgb(var(--muted))]">
          The page you’re looking for doesn’t exist.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/products">
            <Button>Shop</Button>
          </Link>
          <Link href="/">
            <Button variant="secondary">Home</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

const items = [
  { seed: "rpm-look-1", title: "Neutral layers", href: "/products?q=linen" },
  { seed: "rpm-look-2", title: "Relaxed shirt", href: "/products?q=shirt" },
  { seed: "rpm-look-3", title: "Wide trousers", href: "/products?q=trousers" },
  { seed: "rpm-look-4", title: "Everyday tee", href: "/products?q=t-shirt" }
];

export function LookbookMiniGrid() {
  return (
    <section className="border-y border-[rgb(var(--border))]">
      <Container className="py-12 sm:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
              LOOKBOOK
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              Simple fits, strong texture.
            </h2>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
              Minimal palette. Styling that repeats.
            </p>
          </div>

          <Link
            href="/campaign/lookbook"
            className="text-sm font-medium underline underline-offset-4"
          >
            View lookbook →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Link
              key={it.seed}
              href={it.href}
              className="group overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white transition hover:shadow-md"
            >
              <div className="relative aspect-[4/5] bg-neutral-50">
                <Image
                  src={`https://picsum.photos/seed/${it.seed}/800/1000`}
                  alt={it.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-4">
                <p className="text-sm font-medium">{it.title}</p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                  Shop this mood →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/layout/container";

const collections = [
  {
    title: "New Arrivals",
    desc: "Latest drop, limited pieces.",
    href: "/campaign/new",
  },
  {
    title: "Essentials",
    desc: "Core staples for daily rotation.",
    href: "/campaign/essentials",
  },
];

export function CollectionCards() {
  return (
    <section className="border-y border-[rgb(var(--border))]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {collections.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-xs font-medium tracking-[0.2em] text-[rgb(var(--muted))]">
                COLLECTION
              </p>
              <p className="mt-3 text-lg font-semibold tracking-tight">
                {c.title}
              </p>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">{c.desc}</p>
              <p className="mt-6 text-sm font-medium underline underline-offset-4">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

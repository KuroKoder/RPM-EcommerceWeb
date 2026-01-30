import Link from "next/link";
import { Container } from "@/components/layout/container";


export function Manifesto() {
  return (
    <section className="border-b border-[rgb(var(--border))]">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
            MANIFESTO
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            Fewer pieces. Better choices.
          </h2>

          <p className="mt-4 text-sm leading-6 text-[rgb(var(--muted))]">
            We design clothing meant to be worn often—not collected.
            Neutral tones, thoughtful cuts, and durable fabrics that stay relevant
            beyond seasons and trends.
          </p>

          <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted))]">
            Buy less. Style more. Build a wardrobe that works every day.
          </p>
        </div>
        <Link
  href="/manifesto"
  className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
>
  Read the full manifesto →
</Link>
      </Container>
    </section>
  );
}

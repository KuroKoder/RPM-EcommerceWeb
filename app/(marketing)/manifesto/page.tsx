import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";

export default function ManifestoPage() {
  return (
    <Container className="py-12 sm:py-16">
      {/* Top bar */}
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
            RPM
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Manifesto
          </h1>
        </div>

        <Link href="/products">
          <Button variant="secondary" size="sm">
            Shop →
          </Button>
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left rail */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-5">
            <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
              PRINCIPLES
            </p>

            <ol className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-[rgb(var(--muted))]">01</span>
                <span className="font-medium">Less, but better</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[rgb(var(--muted))]">02</span>
                <span className="font-medium">Fit over noise</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[rgb(var(--muted))]">03</span>
                <span className="font-medium">Texture speaks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[rgb(var(--muted))]">04</span>
                <span className="font-medium">Built to repeat</span>
              </li>
            </ol>

            <div className="mt-6 border-t border-[rgb(var(--border))] pt-4">
              <p className="text-xs text-[rgb(var(--muted))]">
                This is how we design, cut, and choose materials—so your wardrobe
                stays relevant beyond seasons.
              </p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <article className="lg:col-span-8">
          <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-6 sm:p-10">
            <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
              A WARDROBE THAT WORKS
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Fewer pieces. Better choices.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[rgb(var(--muted))]">
              Clothing shouldn’t compete for attention. We design pieces meant to
              be worn often—built around clean silhouettes, neutral tones, and
              durable fabrics. The goal is simple: a wardrobe you can rely on
              every day.
            </p>

            <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
              Trends move fast. Your life doesn’t. So we focus on fit and form,
              then let texture do the work. Minimal branding, thoughtful cuts,
              and materials that age well—because repetition is the point.
            </p>

            {/* Divider quote */}
            <div className="my-8 border-l-2 border-black pl-5">
              <p className="text-base font-medium leading-7">
                Buy less. Style more. Wear what you own.
              </p>
              <p className="mt-2 text-xs text-[rgb(var(--muted))]">
                — RPM approach to daily rotation
              </p>
            </div>

            {/* Sections */}
            <section className="mt-10">
              <h3 className="text-lg font-semibold tracking-tight">
                01 — Less, but better
              </h3>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                We don’t chase endless drops. We refine essentials—so each piece
                earns its place in rotation. If it doesn’t pair easily, layer
                well, and wear comfortably, it doesn’t ship.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold tracking-tight">
                02 — Fit over noise
              </h3>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                Fit is the loudest statement. We prioritize proportion and
                silhouette—relaxed where it should be, structured where it
                matters. No oversized logos, no forced hype.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold tracking-tight">
                03 — Texture speaks
              </h3>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                Neutral doesn’t mean boring. Linen, twill, heavyweight cotton—
                texture gives depth. Good fabric makes simple outfits look
                intentional.
              </p>
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-semibold tracking-tight">
                04 — Built to repeat
              </h3>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                The best piece is the one you wear again. We choose materials and
                construction that hold up to real life—so your wardrobe stays
                usable, not just “new”.
              </p>
            </section>

            {/* Bottom CTA */}
            <div className="mt-12 rounded-[var(--radius)] border border-[rgb(var(--border))] bg-neutral-50 p-6">
              <p className="text-sm font-medium">
                Ready to build your daily rotation?
              </p>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                Start with essentials: an overshirt, a tee, and wide trousers.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/products?q=essentials">
                  <Button>
                    Shop essentials
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="secondary">
                    Browse all
                  </Button>
                </Link>
              </div>
            </div>

            {/* Footer note */}
            <p className="mt-8 text-xs text-[rgb(var(--muted))]">
              Last updated: {new Date().toLocaleDateString("id-ID")}
            </p>
          </div>
        </article>
      </div>
    </Container>
  );
}

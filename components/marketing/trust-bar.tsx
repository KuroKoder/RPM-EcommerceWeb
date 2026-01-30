import { Container } from "@/components/layout/container";

const items = [
  { title: "Free Shipping", desc: "For selected orders" },
  { title: "Easy Returns", desc: "7 days return policy" },
  { title: "Secure Payment", desc: "Trusted payment gateway" },
  { title: "Support", desc: "Fast response" },
];

export function TrustBar() {
  return (
    <section className="border-b border-[rgb(var(--border))]">
      <Container className="py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-4">
              <p className="text-sm font-medium">{it.title}</p>
              <p className="mt-1 text-xs text-[rgb(var(--muted))]">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

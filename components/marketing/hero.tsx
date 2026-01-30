// import Link from "next/link";
// import Image from "next/image";
// import { Container } from "@/components/layout/container";
// import { Button } from "@/components/ui/Button";

// export function Hero() {
//   return (
//     <section className="border-b border-[rgb(var(--border))]">
//       <Container className="py-14 sm:py-20">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           <div className="lg:col-span-6">
//             <p className="text-xs font-medium tracking-[0.2em] text-[rgb(var(--muted))]">
//               rpm collections
//             </p>
//             <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
//               Clean silhouettes for everyday wear.
//             </h1>
//             <p className="mt-4 max-w-xl text-sm leading-6 text-[rgb(var(--muted))]">
//               Focused materials. Minimal branding. Built for repeat outfits—easy to
//               style, easy to keep.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-3">
//               <Link href="/products">
//                 <Button size="lg">
//                   Shop New Arrivals
//                 </Button>
//               </Link>
//               <Link href="/campaign/best-sellers">
//                 <Button variant="secondary" size="lg">
//                   Best Sellers
//                 </Button>
//               </Link>
//             </div>

//             <div className="mt-8 flex flex-wrap gap-6 text-xs text-[rgb(var(--muted))]">
//               <div className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-black" />
//                 <span>Quality checked</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-black" />
//                 <span>Easy returns</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-black" />
//                 <span>Fast shipping</span>
//               </div>
//             </div>
//           </div>

//           {/* Visual block (tanpa gambar dulu, editorial placeholder) */}
//           <div className="lg:col-span-6">
//             <div className="relative overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-neutral-50">
//               <div className="relative aspect-[4/5] w-full">
//                 <Image
//                   src="https://images.unsplash.com/photo-1767469697275-cfbe1c412d83"
//                   alt="Hero Image"
//                   fill
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
//               </div>
//               <div className="absolute bottom-4 left-4 right-4">
//                 <p className="text-xs font-medium text-black">
//                   Capsule Drop — Neutral tones
//                 </p>
//                 <p className="mt-1 text-xs text-[rgb(var(--muted))]">
//                   Replace this block with a hero image later.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="border-b border-[rgb(var(--border))]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Copy */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-[0.22em] text-[rgb(var(--muted))]">
              CAPSULE DROP 01
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Editorial essentials, built for daily rotation.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[rgb(var(--muted))]">
              Clean silhouettes. Neutral tones. Minimal branding. Designed to
              layer well and wear often.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/products">
                <Button size="lg">
                  Shop the drop
                </Button>
              </Link>
              <Link href="/campaign/essentials">
                <Button variant="secondary" size="lg">
                  Explore essentials
                </Button>
              </Link>
            </div>

            {/* Micro proof */}
            <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-3">
                <p className="font-medium">Fabric</p>
                <p className="mt-1 text-[rgb(var(--muted))]">Linen / Cotton</p>
              </div>
              <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-3">
                <p className="font-medium">Fit</p>
                <p className="mt-1 text-[rgb(var(--muted))]">Relaxed</p>
              </div>
              <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-3">
                <p className="font-medium">Care</p>
                <p className="mt-1 text-[rgb(var(--muted))]">Easy wash</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 lg:grid-cols-12">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-neutral-50 lg:col-span-8">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="https://picsum.photos/seed/rpm-hero-main/1000/1250"
                    alt="RPM editorial hero"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  {/* Editorial overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-transparent" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius)] border border-white/20 bg-black/35 p-4 text-white backdrop-blur">
                  <p className="text-xs font-medium tracking-[0.18em]">
                    LIMITED RELEASE
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    Neutral palette • Layer-friendly fits
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    Designed for repeat outfits—no loud prints.
                  </p>
                </div>
              </div>

              {/* Side stack */}
              <div className="grid gap-4 lg:col-span-4">
                <div className="relative overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-neutral-50">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="https://picsum.photos/seed/rpm-hero-side-1/800/1000"
                      alt="Editorial detail"
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-4">
                  <p className="text-xs font-medium tracking-[0.2em] text-[rgb(var(--muted))]">
                    STYLE NOTE
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    Build a capsule: overshirt + tee + wide trousers.
                  </p>
                  <p className="mt-2 text-xs text-[rgb(var(--muted))]">
                    Keep it monochrome. Let texture do the work.
                  </p>
                  <Link
                    href="/products?q=capsule"
                    className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
                  >
                    Shop capsule →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

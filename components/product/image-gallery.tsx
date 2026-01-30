"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function ImageGallery({
  images,
  alt
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = React.useState(0);

  return (
    <div className="grid gap-3">
      <div className="relative overflow-hidden rounded-[var(--radius)] border border-[rgb(var(--border))] bg-neutral-50">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={images[active]}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>

      {images.length > 1 ? (
        <div className="grid grid-cols-5 gap-2">
          {images.slice(0, 5).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative overflow-hidden rounded-lg border bg-neutral-50",
                i === active
                  ? "border-black"
                  : "border-[rgb(var(--border))] hover:border-neutral-400"
              )}
              aria-label={`View image ${i + 1}`}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={src}
                  alt={`${alt} thumbnail ${i + 1}`}
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

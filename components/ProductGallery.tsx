"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { hoverZoomTransition } from "@/lib/motion";
import type { ProductImage } from "@/lib/products/types";

type ProductGalleryProps = {
  images: ProductImage[];
  title: string;
};

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = images[activeIndex] ?? images[0];

  if (!active) {
    return (
      <div className="aspect-square w-full bg-mush-secondary" aria-hidden />
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden bg-mush-secondary">
        <motion.div
          className="absolute inset-0"
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          transition={hoverZoomTransition(reduceMotion)}
        >
          <Image
            src={active.url}
            alt={active.altText || title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </div>

      {images.length > 1 ? (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square h-20 w-20 overflow-hidden bg-mush-secondary ${
                index === activeIndex
                  ? "ring-2 ring-mush-brand ring-offset-2 ring-offset-mush-background"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <Image
                src={image.url}
                alt={image.altText || `${title} ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

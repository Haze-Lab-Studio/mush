"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import { formatMoney } from "@/lib/format";
import { hoverZoomTransition } from "@/lib/motion";
import type { Product } from "@/lib/products/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];
  const reduceMotion = useReducedMotion();

  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="relative mb-4 aspect-square overflow-hidden bg-mush-secondary">
        {image ? (
          <motion.div
            className="absolute inset-0"
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            transition={hoverZoomTransition(reduceMotion)}
          >
            <Image
              src={image.url}
              alt={image.altText}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </motion.div>
        ) : null}
      </div>
      <Heading level={3} as="h3" className="mb-1">
        {product.title}
      </Heading>
      <p className="text-ui text-mush-brand">
        {formatMoney(product.priceRange.minVariantPrice)}
      </p>
    </Link>
  );
}

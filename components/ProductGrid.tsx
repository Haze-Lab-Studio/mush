"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import {
  revealItemVariants,
  staggerContainerVariants,
  viewportOnce,
} from "@/lib/motion";
import type { Product } from "@/lib/products/types";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainerVariants(reduceMotion, 0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={revealItemVariants(reduceMotion)}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}

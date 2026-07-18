"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  revealItemVariants,
  revealTransition,
  viewportOnce,
} from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Fade + slight rise as the element enters the viewport (once). */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants = revealItemVariants(reduceMotion);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{
        ...revealTransition(reduceMotion),
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

import type { Transition, Variants } from "framer-motion";

/** Quiet editorial easing — no bounce/overshoot */
export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

export const duration = {
  reveal: 0.5,
  hover: 0.5,
  page: 0.2,
  cartPulse: 0.3,
  hero: 0.7,
  heroTextDelay: 0.15,
  count: 0.2,
} as const;

export const viewportOnce = {
  once: true,
  margin: "-50px" as const,
};

export function revealTransition(reduceMotion: boolean | null): Transition {
  return {
    duration: reduceMotion ? 0.01 : duration.reveal,
    ease: easeOut,
  };
}

export function pageTransition(reduceMotion: boolean | null): Transition {
  return {
    duration: reduceMotion ? 0.01 : duration.page,
    ease: "easeOut",
  };
}

export function hoverZoomTransition(reduceMotion: boolean | null): Transition {
  return {
    duration: reduceMotion ? 0.01 : duration.hover,
    ease: "easeOut",
  };
}

/** Scroll-reveal item: opacity + slight y, or opacity-only when reduced */
export function revealItemVariants(reduceMotion: boolean | null): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: revealTransition(reduceMotion),
    },
  };
}

export function staggerContainerVariants(
  reduceMotion: boolean | null,
  stagger = 0.07,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : stagger,
      },
    },
  };
}

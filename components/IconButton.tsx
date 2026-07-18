"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  "aria-label": string;
};

function useIconButtonMotion(disabled?: boolean) {
  const reduceMotion = useReducedMotion();

  if (disabled) {
    return {
      whileHover: undefined,
      whileTap: undefined,
    };
  }

  const hoverScale = reduceMotion ? 1.005 : 1.1;
  const tapScale = reduceMotion ? 0.98 : 0.9;

  return {
    whileHover: {
      scale: hoverScale,
      transition: { duration: 0.15, ease: "easeOut" as const },
    },
    whileTap: {
      scale: tapScale,
      transition: { duration: 0.1, ease: "easeOut" as const },
    },
  };
}

/** Minimal icon control — snappier scale than text Button. */
export function IconButton({
  children,
  className = "",
  disabled,
  type = "button",
  onClick,
  "aria-label": ariaLabel,
}: IconButtonProps) {
  const motionProps = useIconButtonMotion(disabled);

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center cursor-pointer transition-colors duration-150 ease-out disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mush-accent-warm focus-visible:ring-offset-2 focus-visible:ring-offset-mush-background ${className}`.trim()}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}

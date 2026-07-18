"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const MotionLink = motion.create(Link);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-mush-accent-warm text-mush-background hover:bg-mush-accent-deep disabled:bg-mush-divider disabled:text-mush-background/70 disabled:hover:bg-mush-divider",
  secondary:
    "bg-transparent text-mush-brand border border-mush-brand hover:border-mush-accent-deep hover:bg-mush-secondary hover:text-mush-accent-deep disabled:border-mush-divider disabled:text-mush-divider disabled:hover:bg-transparent disabled:hover:border-mush-divider disabled:hover:text-mush-divider",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-[5px] px-6 py-3 font-work text-base leading-6 font-semibold uppercase tracking-[0.02em] transition-colors duration-200 ease-out cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mush-accent-warm focus-visible:ring-offset-2 focus-visible:ring-offset-mush-background";

function useTextButtonMotion(disabled?: boolean) {
  const reduceMotion = useReducedMotion();

  if (disabled) {
    return {
      whileHover: undefined,
      whileTap: undefined,
    };
  }

  const hoverScale = reduceMotion ? 1.005 : 1.02;
  const tapScale = reduceMotion ? 0.995 : 0.97;

  return {
    whileHover: {
      scale: hoverScale,
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
    whileTap: {
      scale: tapScale,
      transition: { duration: 0.1, ease: "easeOut" as const },
    },
  };
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();
  const isLink = "href" in props && Boolean(props.href);
  const disabled = isLink ? false : Boolean((props as ButtonAsButton).disabled);
  const motionProps = useTextButtonMotion(disabled);

  if (isLink) {
    return (
      <MotionLink
        href={(props as ButtonAsLink).href}
        className={classes}
        {...motionProps}
      >
        {children}
      </MotionLink>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <motion.button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-label={buttonProps["aria-label"]}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}

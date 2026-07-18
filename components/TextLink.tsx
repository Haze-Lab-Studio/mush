import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkVariant = "nav" | "inline" | "plain";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  variant?: TextLinkVariant;
  className?: string;
  /** Optional trailing arrow with a subtle hover nudge */
  arrow?: boolean;
  "aria-label"?: string;
};

const variantClass: Record<TextLinkVariant, string> = {
  nav: "text-link text-link--draw",
  plain: "text-link text-link--draw",
  inline: "text-link text-link--inline",
};

/**
 * Shared text link with understated underline / color hover.
 * Nav & plain: left-to-right underline draw-in.
 * Inline: permanent underline, color shift only.
 */
export function TextLink({
  href,
  children,
  variant = "nav",
  className = "",
  arrow = false,
  "aria-label": ariaLabel,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${variantClass[variant]} ${arrow ? "text-link--with-arrow" : ""} ${className}`.trim()}
    >
      {arrow ? <span className="text-link__label">{children}</span> : children}
      {arrow ? (
        <span className="text-link__arrow" aria-hidden>
          →
        </span>
      ) : null}
    </Link>
  );
}

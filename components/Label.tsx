import { type ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "label";
  htmlFor?: string;
};

export function Label({
  children,
  className = "",
  as: Tag = "span",
  htmlFor,
}: LabelProps) {
  const classes =
    `font-work text-base leading-6 font-semibold uppercase tracking-[0.04em] text-mush-muted-accent ${className}`.trim();

  if (Tag === "label") {
    return (
      <label htmlFor={htmlFor} className={classes}>
        {children}
      </label>
    );
  }

  return <Tag className={classes}>{children}</Tag>;
}

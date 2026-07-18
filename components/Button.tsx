import { type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";

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

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-mush-accent-warm text-mush-background hover:bg-mush-accent-deep disabled:bg-mush-divider disabled:text-mush-background/70",
  secondary:
    "bg-transparent text-mush-brand border border-mush-brand hover:border-mush-accent-deep hover:text-mush-accent-deep disabled:border-mush-divider disabled:text-mush-divider",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-[5px] px-6 py-3 font-work text-base leading-6 font-semibold uppercase tracking-[0.02em] transition-colors cursor-pointer disabled:cursor-not-allowed";

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-label={buttonProps["aria-label"]}
    >
      {children}
    </button>
  );
}

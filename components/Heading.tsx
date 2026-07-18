import { type ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
};

const levelStyles: Record<HeadingLevel, string> = {
  1: "font-lora text-[40px] leading-[48px] font-bold md:text-[64px] md:leading-[76px]",
  2: "font-lora text-[32px] leading-[40px] font-bold md:text-[44px] md:leading-[56px]",
  3: "font-lora text-[24px] leading-[32px] font-bold md:text-[30px] md:leading-[40px]",
};

const defaultTag: Record<HeadingLevel, "h1" | "h2" | "h3"> = {
  1: "h1",
  2: "h2",
  3: "h3",
};

export function Heading({ level, children, className = "", as }: HeadingProps) {
  const Tag = as ?? defaultTag[level];

  return (
    <Tag className={`${levelStyles[level]} text-mush-text ${className}`.trim()}>
      {children}
    </Tag>
  );
}

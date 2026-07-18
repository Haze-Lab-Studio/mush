"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart/cart-context";

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="border-b border-mush-divider/40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Mush home">
          <span className="font-lora text-[28px] leading-none font-bold tracking-tight text-mush-text md:text-[32px]">
            Mush
          </span>
          <Image
            src="/brand/mushroom.svg"
            alt=""
            width={36}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/products"
            className="font-work text-[15px] leading-[22px] font-medium text-mush-brand transition-colors hover:text-mush-accent-deep"
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className="font-work text-[15px] leading-[22px] font-medium text-mush-brand transition-colors hover:text-mush-accent-deep"
          >
            Cart{itemCount > 0 ? ` (${itemCount})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}

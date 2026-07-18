"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart/cart-context";

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="border-b border-mush-divider/40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" className="inline-flex items-center" aria-label="Mush home">
          <Image
            src="/brand/logo.png"
            alt="Mush"
            width={168}
            height={60}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/products"
            className="font-work text-[15px] leading-[22px] font-medium text-mush-brand transition-colors hover:text-mush-accent-deep"
          >
            Loja
          </Link>
          <Link
            href="/cart"
            className="font-work text-[15px] leading-[22px] font-medium text-mush-brand transition-colors hover:text-mush-accent-deep"
          >
            Carrinho{itemCount > 0 ? ` (${itemCount})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}

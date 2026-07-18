"use client";

import {
  AnimatePresence,
  motion,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart/cart-context";
import { duration } from "@/lib/motion";

export function Header() {
  const { itemCount, addPulse } = useCart();
  const reduceMotion = useReducedMotion();
  const cartControls = useAnimation();

  useEffect(() => {
    if (!addPulse) return;

    if (reduceMotion) {
      void cartControls.start({ scale: 1 });
      return;
    }

    void cartControls.start({
      scale: [1, 1.15, 1],
      transition: { duration: duration.cartPulse, ease: "easeOut" },
    });
  }, [addPulse, cartControls, reduceMotion]);

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
          <motion.div animate={cartControls} className="inline-flex">
            <Link
              href="/cart"
              className="font-work inline-flex items-center gap-1 text-[15px] leading-[22px] font-medium text-mush-brand transition-colors hover:text-mush-accent-deep"
            >
              Carrinho
              <AnimatePresence mode="wait" initial={false}>
                {itemCount > 0 ? (
                  <motion.span
                    key={itemCount}
                    initial={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 0.85 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 0.85 }
                    }
                    transition={{
                      duration: reduceMotion ? 0.01 : duration.count,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    ({itemCount})
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart/cart-context";
import { formatMoney } from "@/lib/format";
import type { CartItem } from "@/lib/products/types";

type CartLineItemProps = {
  item: CartItem;
};

export function CartLineItem({ item }: CartLineItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const lineTotal = Number(item.price.amount) * item.quantity;
  const showVariant =
    item.variantTitle !== "Default Title" && item.variantTitle.length > 0;

  return (
    <article className="flex gap-4 border-b border-mush-divider/50 py-6 md:gap-6">
      <Link
        href={`/products/${item.handle}`}
        className="relative aspect-square h-28 w-28 shrink-0 overflow-hidden bg-mush-secondary md:h-32 md:w-32"
      >
        <Image
          src={item.image.url}
          alt={item.image.altText}
          fill
          className="object-cover"
          sizes="128px"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
        <div>
          <Link
            href={`/products/${item.handle}`}
            className="font-lora text-[22px] leading-7 font-bold text-mush-text hover:text-mush-brand md:text-[24px] md:leading-8"
          >
            {item.title}
          </Link>
          {showVariant ? (
            <p className="text-ui mt-1 text-mush-brand">{item.variantTitle}</p>
          ) : null}
          <p className="text-ui mt-1 text-mush-text">
            {formatMoney(item.price)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border border-mush-divider">
            <button
              type="button"
              className="font-work px-3 py-1.5 text-[15px] font-medium text-mush-brand hover:bg-mush-secondary"
              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
              aria-label="Diminuir quantidade"
            >
              −
            </button>
            <span className="font-work min-w-8 px-2 text-center text-[15px] font-medium">
              {item.quantity}
            </span>
            <button
              type="button"
              className="font-work px-3 py-1.5 text-[15px] font-medium text-mush-brand hover:bg-mush-secondary"
              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeItem(item.variantId)}
            className="font-work text-[15px] font-medium text-mush-divider underline-offset-4 hover:text-mush-accent-deep hover:underline"
          >
            Remover
          </button>

          <p className="text-ui ml-auto text-mush-text">
            {formatMoney({
              amount: lineTotal.toFixed(2),
              currencyCode: item.price.currencyCode,
            })}
          </p>
        </div>
      </div>
    </article>
  );
}

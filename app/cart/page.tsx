"use client";

import { Button } from "@/components/Button";
import { CartLineItem } from "@/components/CartLineItem";
import { Heading } from "@/components/Heading";
import { useCart } from "@/lib/cart/cart-context";
import { formatMoney } from "@/lib/format";

export default function CartPage() {
  const { items, getSubtotal, itemCount } = useCart();
  const subtotal = getSubtotal();

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <Heading level={1} className="mb-10">
        Cart
      </Heading>

      {items.length === 0 ? (
        <div className="space-y-6 border-t border-mush-divider/50 py-12">
          <p className="text-body text-mush-brand">Your cart is empty.</p>
          <Button href="/products" variant="secondary">
            Continue shopping
          </Button>
        </div>
      ) : (
        <>
          <div>
            {items.map((item) => (
              <CartLineItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10 space-y-6 border-t border-mush-divider/50 pt-8">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-ui text-mush-brand">
                Subtotal · {itemCount} {itemCount === 1 ? "item" : "items"}
              </p>
              <p className="font-lora text-[28px] font-bold text-mush-text">
                {formatMoney(subtotal)}
              </p>
            </div>

            {/*
              Placeholder checkout — in the next phase this button will redirect
              to the real Shopify checkout URL from the Storefront Cart API.
            */}
            <Button
              type="button"
              className="w-full"
              onClick={() => {
                // TODO: Connect to Shopify checkout URL in the next phase
              }}
            >
              Checkout
            </Button>
            <p className="text-caption text-mush-divider">
              Checkout is a styled placeholder until Shopify is connected.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

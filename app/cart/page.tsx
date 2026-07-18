"use client";

import { Button } from "@/components/Button";
import { CartLineItem } from "@/components/CartLineItem";
import { Heading } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { useCart } from "@/lib/cart/cart-context";
import { formatMoney } from "@/lib/format";

export default function CartPage() {
  const { items, getSubtotal, itemCount } = useCart();
  const subtotal = getSubtotal();

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <Reveal>
        <Heading level={1} className="mb-10">
          Carrinho
        </Heading>
      </Reveal>

      {items.length === 0 ? (
        <div className="space-y-6 border-t border-mush-divider/50 py-12">
          <p className="text-body text-mush-brand">Seu carrinho está vazio.</p>
          <Button href="/products" variant="secondary">
            Continuar comprando
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
                Subtotal · {itemCount} {itemCount === 1 ? "item" : "itens"}
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
              Finalizar compra
            </Button>
            <p className="text-caption text-mush-divider">
              O botão de finalizar compra é apenas um espaço reservado até a
              integração com a Shopify.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { useCart } from "@/lib/cart/cart-context";
import { formatMoney } from "@/lib/format";
import type { Product } from "@/lib/products/types";

type AddToCartButtonProps = {
  product: Product;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const hasMultipleVariants = product.variants.length > 1;
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const [added, setAdded] = useState(false);

  const selectedVariant = useMemo(
    () => product.variants.find((variant) => variant.id === variantId),
    [product.variants, variantId],
  );

  const unavailable = !selectedVariant?.availableForSale;

  function handleAdd() {
    if (!selectedVariant || unavailable) return;
    addItem(product, selectedVariant, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="space-y-6">
      {hasMultipleVariants ? (
        <div className="space-y-3">
          <Label as="label" htmlFor="variant">
            Size
          </Label>
          <select
            id="variant"
            value={variantId}
            onChange={(event) => setVariantId(event.target.value)}
            className="w-full max-w-xs rounded-[5px] border border-mush-divider bg-mush-background px-4 py-3 font-work text-[15px] font-medium text-mush-text outline-none focus:border-mush-brand"
          >
            {product.variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.title}
                {!variant.availableForSale ? " — Sold out" : ""}
                {` · ${formatMoney(variant.price)}`}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="button"
          onClick={handleAdd}
          disabled={unavailable || !selectedVariant}
          className="min-w-[200px]"
        >
          {unavailable ? "Sold out" : added ? "Added" : "Add to cart"}
        </Button>
        {selectedVariant && !hasMultipleVariants ? (
          <p className="text-ui text-mush-brand">
            {formatMoney(selectedVariant.price)}
          </p>
        ) : null}
      </div>
    </div>
  );
}

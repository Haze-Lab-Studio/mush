"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Money, Product, ProductVariant } from "@/lib/products/types";

const STORAGE_KEY = "mush-cart";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  /** Increments on each successful add — Header listens for cart pulse animation */
  addPulse: number;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  getSubtotal: () => Money;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [addPulse, setAddPulse] = useState(0);

  useEffect(() => {
    setItems(loadCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback(
    (product: Product, variant: ProductVariant, quantity = 1) => {
      setItems((current) => {
        const existing = current.find((item) => item.variantId === variant.id);
        if (existing) {
          return current.map((item) =>
            item.variantId === variant.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }

        const next: CartItem = {
          id: `cart-line-${variant.id}`,
          productId: product.id,
          variantId: variant.id,
          handle: product.handle,
          title: product.title,
          variantTitle: variant.title,
          quantity,
          price: variant.price,
          image: product.images[0] ?? {
            url: "/images/placeholder.svg",
            altText: product.title,
          },
        };

        return [...current, next];
      });
      setAddPulse((pulse) => pulse + 1);
    },
    [],
  );

  const updateQuantity = useCallback((variantId: string, quantity: number) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.variantId !== variantId);
      }
      return current.map((item) =>
        item.variantId === variantId ? { ...item, quantity } : item,
      );
    });
  }, []);

  const removeItem = useCallback((variantId: string) => {
    setItems((current) => current.filter((item) => item.variantId !== variantId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const getSubtotal = useCallback((): Money => {
    const amount = items.reduce(
      (sum, item) => sum + Number(item.price.amount) * item.quantity,
      0,
    );
    return {
      amount: amount.toFixed(2),
      currencyCode: items[0]?.price.currencyCode ?? "BRL",
    };
  }, [items]);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      addPulse,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      getSubtotal,
    }),
    [
      items,
      itemCount,
      addPulse,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      getSubtotal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

import type { Money } from "@/lib/products/types";

export function formatMoney(money: Money): string {
  const amount = Number(money.amount);
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: money.currencyCode,
  }).format(amount);
}

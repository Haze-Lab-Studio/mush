import { products } from "./mock-data";
import type { Product } from "./types";

/**
 * Data-fetching layer for products.
 * Currently reads from local mock data shaped like Shopify Storefront API responses.
 * This file is the ONLY place that should change when Shopify is wired in later.
 */

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductByHandle(
  handle: string,
): Promise<Product | undefined> {
  return products.find((product) => product.handle === handle);
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  return products.slice(0, limit);
}

export async function getProductHandles(): Promise<string[]> {
  return products.map((product) => product.handle);
}

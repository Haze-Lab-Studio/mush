/** Money shape aligned with Shopify Storefront API MoneyV2 */
export type Money = {
  amount: string;
  currencyCode: string;
};

export type ProductImage = {
  url: string;
  altText: string;
};

/** Variant shape aligned with Shopify ProductVariant */
export type ProductVariant = {
  id: string;
  title: string;
  price: Money;
  availableForSale: boolean;
};

/**
 * Product shape aligned with Shopify Storefront API Product fields
 * we will query later (flattened connections for the mock layer).
 */
export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: Money;
  };
  images: ProductImage[];
  variants: ProductVariant[];
};

export type CartItem = {
  id: string;
  productId: string;
  variantId: string;
  handle: string;
  title: string;
  variantTitle: string;
  quantity: number;
  price: Money;
  image: ProductImage;
};

# Mush

Headless storefront for Mush — small-batch, hand-poured candles.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Product data is local mock data shaped like Shopify’s Storefront API so the future Shopify swap stays mechanical.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What’s included

- Homepage with hero + featured products
- Catalog (`/products`)
- Product detail (`/products/[handle]`)
- Cart with add / update / remove (React Context + `localStorage`)
- Styled checkout placeholder (no real payments yet)

## Data layer

- [`lib/products/mock-data.ts`](lib/products/mock-data.ts) — mock catalog
- [`lib/products/get-products.ts`](lib/products/get-products.ts) — **only** file that should change when Shopify is wired in
- [`lib/cart/cart-context.tsx`](lib/cart/cart-context.tsx) — mock cart; replace with Shopify Cart API later

## Brand

Colors and typography follow the Mush design system (Lora + Work Sans). Reference assets live in `docs/` and `public/brand/`.

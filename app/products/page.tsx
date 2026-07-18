import type { Metadata } from "next";
import { Heading } from "@/components/Heading";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { getProducts } from "@/lib/products/get-products";

export const metadata: Metadata = {
  title: "Loja",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <Reveal className="mb-12 max-w-2xl space-y-4 md:mb-16">
        <Heading level={1}>Loja</Heading>
        <p className="text-body text-mush-brand">
          Todos os lotes atuais — aromas terrosos e naturais em cera de soja
          com pavios de algodão.
        </p>
      </Reveal>
      <ProductGrid products={products} />
    </div>
  );
}

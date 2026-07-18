import { HomeHero } from "@/components/HomeHero";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { getFeaturedProducts } from "@/lib/products/get-products";

export default async function HomePage() {
  const featured = await getFeaturedProducts(4);

  return (
    <div>
      <HomeHero />

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <Reveal className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <Heading level={2}>Destaques</Heading>
          <Button href="/products" variant="secondary">
            Ver tudo
          </Button>
        </Reveal>
        <ProductGrid products={featured} />
      </section>
    </div>
  );
}

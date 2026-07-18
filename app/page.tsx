import Image from "next/image";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { ProductGrid } from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/lib/products/get-products";

export default async function HomePage() {
  const featured = await getFeaturedProducts(4);

  return (
    <div>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:gap-14 md:px-8 md:py-24">
        <div className="space-y-6">
          <Label>Pequenos lotes · Feito à mão</Label>
          <Heading level={1}>Velas nascidas de lugares silenciosos</Heading>
          <p className="text-body max-w-md text-mush-brand">
            Cera de soja, pavios de algodão e aromas terrosos, feitos em
            pequenos lotes — para trazer a floresta para dentro de casa.
          </p>
          <Button href="/products">Ver velas</Button>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden bg-mush-secondary md:aspect-[5/6]">
          <Image
            src="/images/product-8.png"
            alt="Vela Mush Fungos Silvestres entre cogumelos no chão da floresta"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <Heading level={2}>Destaques</Heading>
          <Button href="/products" variant="secondary">
            Ver tudo
          </Button>
        </div>
        <ProductGrid products={featured} />
      </section>
    </div>
  );
}

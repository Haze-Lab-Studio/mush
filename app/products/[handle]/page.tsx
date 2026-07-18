import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { ProductGallery } from "@/components/ProductGallery";
import { Reveal } from "@/components/Reveal";
import { formatMoney } from "@/lib/format";
import {
  getProductByHandle,
  getProductHandles,
} from "@/lib/products/get-products";

type ProductPageProps = {
  params: Promise<{ handle: string }>;
};

export async function generateStaticParams() {
  const handles = await getProductHandles();
  return handles.map((handle) => ({ handle }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) return { title: "Produto" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) notFound();

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:gap-14 md:px-8 md:py-20">
      <Reveal>
        <ProductGallery images={product.images} title={product.title} />
      </Reveal>

      <Reveal className="space-y-6 md:pt-4" delay={0.08}>
        <Label>Feito à mão</Label>
        <Heading level={3} as="h1">
          {product.title}
        </Heading>
        <p className="font-lora text-[22px] leading-8 text-mush-brand">
          {product.variants.length > 1 ? "A partir de " : ""}
          {formatMoney(product.priceRange.minVariantPrice)}
        </p>
        <p className="text-body max-w-lg">{product.description}</p>
        <div className="border-t border-mush-divider/50 pt-8">
          <AddToCartButton product={product} />
        </div>
      </Reveal>
    </div>
  );
}

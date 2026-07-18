import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import { formatMoney } from "@/lib/format";
import type { Product } from "@/lib/products/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];

  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="relative mb-4 aspect-square overflow-hidden bg-mush-secondary">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : null}
      </div>
      <Heading level={3} as="h3" className="mb-1">
        {product.title}
      </Heading>
      <p className="text-ui text-mush-brand">
        {formatMoney(product.priceRange.minVariantPrice)}
      </p>
    </Link>
  );
}

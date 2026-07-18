"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { IconButton } from "@/components/IconButton";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import type { Product } from "@/lib/products/types";

type FeaturedProductsSliderProps = {
  products: Product[];
};

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M15 5L8 12L15 19"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeaturedProductsSlider({ products }: FeaturedProductsSliderProps) {
  const reduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    skipSnaps: false,
    duration: reduceMotion ? 0 : 22,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
      skipSnaps: false,
      duration: reduceMotion ? 0 : 22,
    });
  }, [emblaApi, reduceMotion]);

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
        <Heading level={2}>Destaques</Heading>
        <Button href="/products" variant="secondary">
          Ver tudo
        </Button>
      </Reveal>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] md:basis-[calc((100%-4rem)/3)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {scrollSnaps.length > 1 ? (
        <div
          className="mt-6 flex justify-center gap-2 md:hidden"
          role="tablist"
          aria-label="Indicadores do carrossel"
        >
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Ir para slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === selectedIndex
                  ? "bg-mush-brand"
                  : "bg-mush-divider/70"
              }`}
            />
          ))}
        </div>
      ) : null}

      <div className="mt-8 hidden items-center justify-end gap-3 md:mt-12 md:flex">
        <IconButton
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Produtos anteriores"
          className="text-mush-brand hover:text-mush-accent-deep disabled:pointer-events-none disabled:opacity-25"
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Próximos produtos"
          className="text-mush-brand hover:text-mush-accent-deep disabled:pointer-events-none disabled:opacity-25"
        >
          <ChevronRight />
        </IconButton>
      </div>
    </section>
  );
}

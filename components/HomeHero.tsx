"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { duration, easeOut } from "@/lib/motion";

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  const imageTransition = {
    duration: reduceMotion ? 0.01 : duration.hero,
    ease: easeOut,
  };

  const textTransition = {
    duration: reduceMotion ? 0.01 : duration.reveal,
    ease: easeOut,
    delay: reduceMotion ? 0 : duration.heroTextDelay,
  };

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:gap-14 md:px-8 md:py-24">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={textTransition}
      >
        <Label>Pequenos lotes · Feito à mão</Label>
        <Heading level={1}>Velas nascidas de lugares silenciosos</Heading>
        <p className="text-body max-w-md text-mush-brand">
          Cera de soja, pavios de algodão e aromas terrosos, feitos em pequenos
          lotes — para trazer a floresta para dentro de casa.
        </p>
        <Button href="/products">Ver velas</Button>
      </motion.div>

      <motion.div
        className="relative aspect-square w-full overflow-hidden bg-mush-secondary"
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 1.02,
        }}
        animate={{ opacity: 1, scale: 1 }}
        transition={imageTransition}
      >
        <Image
          src="/images/product-8.png"
          alt="Vela Mush Fungos Silvestres entre cogumelos no chão da floresta"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </section>
  );
}

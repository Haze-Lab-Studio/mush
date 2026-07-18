import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/TextLink";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-mush-divider/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:gap-8 md:px-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex w-fit items-center" aria-label="Mush">
            <Image
              src="/brand/logo.png"
              alt="Mush"
              width={140}
              height={50}
              className="h-9 w-auto md:h-10"
            />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Rodapé">
            <TextLink
              href="/products"
              className="font-work text-[15px] leading-[22px] font-medium"
            >
              Loja
            </TextLink>
            <TextLink
              href="/cart"
              className="font-work text-[15px] leading-[22px] font-medium"
            >
              Carrinho
            </TextLink>
          </nav>
        </div>
        <p className="text-caption max-w-sm text-mush-brand/80">
          Velas de soja feitas à mão, em pequenos lotes. Aromas de origem
          natural, pavios de algodão.
        </p>
        <p className="text-caption text-mush-divider">
          © {new Date().getFullYear()} Mush
        </p>
      </div>
    </footer>
  );
}

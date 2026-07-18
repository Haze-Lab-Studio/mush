import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-mush-divider/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <Link href="/" className="inline-flex w-fit items-center" aria-label="Mush">
          <Image
            src="/brand/logo.png"
            alt="Mush"
            width={140}
            height={50}
            className="h-9 w-auto md:h-10"
          />
        </Link>
        <p className="text-caption text-mush-brand/80">
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

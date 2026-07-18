export function Footer() {
  return (
    <footer className="mt-auto border-t border-mush-divider/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <p className="font-lora text-[28px] font-bold text-mush-brand">Mush</p>
        <p className="text-caption text-mush-brand/80">
          Small-batch, hand-poured soy candles. Foraged scents, cotton wicks.
        </p>
        <p className="text-caption text-mush-divider">
          © {new Date().getFullYear()} Mush
        </p>
      </div>
    </footer>
  );
}

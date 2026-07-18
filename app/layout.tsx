import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart/cart-context";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mush — Hand-Poured Candles",
    template: "%s — Mush",
  },
  description:
    "Small-batch, hand-poured soy candles with foraged, earthy scents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${lora.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-mush-background text-mush-text">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

import { FeaturedProductsSlider } from "@/components/FeaturedProductsSlider";
import { HomeHero } from "@/components/HomeHero";
import { getFeaturedProducts } from "@/lib/products/get-products";

export default async function HomePage() {
  const featured = await getFeaturedProducts(6);

  return (
    <div>
      <HomeHero />
      <FeaturedProductsSlider products={featured} />
    </div>
  );
}

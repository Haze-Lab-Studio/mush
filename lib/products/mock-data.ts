import type { Product } from "./types";

function money(amount: string) {
  return { amount, currencyCode: "BRL" };
}

function variant(
  id: string,
  title: string,
  amount: string,
  availableForSale = true,
) {
  return {
    id,
    title,
    price: money(amount),
    availableForSale,
  };
}

export const products: Product[] = [
  {
    id: "gid://shopify/Product/1001",
    handle: "forest-moss",
    title: "Forest Moss",
    description:
      "Hand-poured in small batches, Forest Moss gathers damp earth, crushed pine, and a quiet trail after rain. Soy wax and a cotton wick burn clean and slow — made for evenings when the woods feel close.",
    priceRange: { minVariantPrice: money("89.00") },
    images: [
      { url: "/images/forest-moss.svg", altText: "Forest Moss candle" },
      { url: "/images/pine-needle.svg", altText: "Forest Moss candle detail" },
    ],
    variants: [
      variant("gid://shopify/ProductVariant/10011", "Small", "89.00"),
      variant("gid://shopify/ProductVariant/10012", "Large", "129.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1002",
    handle: "amber-resin",
    title: "Amber Resin",
    description:
      "Warm resin, dried citrus peel, and soft smoke. Amber Resin is a small-batch soy candle poured for rooms that hold conversation late into the night.",
    priceRange: { minVariantPrice: money("95.00") },
    images: [{ url: "/images/amber-resin.svg", altText: "Amber Resin candle" }],
    variants: [variant("gid://shopify/ProductVariant/10021", "Default Title", "95.00")],
  },
  {
    id: "gid://shopify/Product/1003",
    handle: "clay-hearth",
    title: "Clay Hearth",
    description:
      "Earthen clay, toasted grain, and a hint of woodsmoke. Clay Hearth is hand-poured soy wax with a cotton wick — familiar, grounded, and deeply comforting.",
    priceRange: { minVariantPrice: money("92.00") },
    images: [{ url: "/images/clay-hearth.svg", altText: "Clay Hearth candle" }],
    variants: [
      variant("gid://shopify/ProductVariant/10031", "Small", "92.00"),
      variant("gid://shopify/ProductVariant/10032", "Large", "135.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1004",
    handle: "dusk-berry",
    title: "Dusk Berry",
    description:
      "Wild berry skins, cool dusk air, and a touch of crushed leaf. A foraging-inspired scent poured in small batches for softer hours.",
    priceRange: { minVariantPrice: money("88.00") },
    images: [{ url: "/images/dusk-berry.svg", altText: "Dusk Berry candle" }],
    variants: [variant("gid://shopify/ProductVariant/10041", "Default Title", "88.00")],
  },
  {
    id: "gid://shopify/Product/1005",
    handle: "river-stone",
    title: "River Stone",
    description:
      "Mineral coolness, wet pebble, and pale wood. River Stone is a clean soy burn with a cotton wick — quiet as water over rock.",
    priceRange: { minVariantPrice: money("90.00") },
    images: [{ url: "/images/river-stone.svg", altText: "River Stone candle" }],
    variants: [variant("gid://shopify/ProductVariant/10051", "Default Title", "90.00")],
  },
  {
    id: "gid://shopify/Product/1006",
    handle: "pine-needle",
    title: "Pine Needle",
    description:
      "Crushed green needles, sap, and cold morning light. Hand-poured soy wax for those who miss the trail from their kitchen table.",
    priceRange: { minVariantPrice: money("85.00") },
    images: [{ url: "/images/pine-needle.svg", altText: "Pine Needle candle" }],
    variants: [
      variant("gid://shopify/ProductVariant/10061", "Small", "85.00"),
      variant("gid://shopify/ProductVariant/10062", "Large", "125.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1007",
    handle: "honeycomb",
    title: "Honeycomb",
    description:
      "Warm beeswax sweetness without the heaviness — soft honey, dry hay, and linen. A small-batch pour meant for slow mornings.",
    priceRange: { minVariantPrice: money("94.00") },
    images: [{ url: "/images/honeycomb.svg", altText: "Honeycomb candle" }],
    variants: [variant("gid://shopify/ProductVariant/10071", "Default Title", "94.00")],
  },
  {
    id: "gid://shopify/Product/1008",
    handle: "smoke-oak",
    title: "Smoke & Oak",
    description:
      "Charred oak, soft ash, and a ribbon of vanilla bark. Hand-poured with soy wax and a cotton wick for rooms that like a little shadow.",
    priceRange: { minVariantPrice: money("98.00") },
    images: [{ url: "/images/smoke-oak.svg", altText: "Smoke and Oak candle" }],
    variants: [
      variant("gid://shopify/ProductVariant/10081", "Small", "98.00"),
      variant("gid://shopify/ProductVariant/10082", "Large", "142.00", false),
    ],
  },
  {
    id: "gid://shopify/Product/1009",
    handle: "wild-thyme",
    title: "Wild Thyme",
    description:
      "Sun-warmed herbs, dry grass, and a green stem snap. Wild Thyme is foraged in spirit — small batch, soy wax, cotton wick.",
    priceRange: { minVariantPrice: money("87.00") },
    images: [{ url: "/images/wild-thyme.svg", altText: "Wild Thyme candle" }],
    variants: [variant("gid://shopify/ProductVariant/10091", "Default Title", "87.00")],
  },
  {
    id: "gid://shopify/Product/1010",
    handle: "cedar-bark",
    title: "Cedar Bark",
    description:
      "Rough cedar, dry bark, and a faint resin warmth. A grounding hand-poured candle for desks, shelves, and quiet work.",
    priceRange: { minVariantPrice: money("91.00") },
    images: [{ url: "/images/cedar-bark.svg", altText: "Cedar Bark candle" }],
    variants: [variant("gid://shopify/ProductVariant/10101", "Default Title", "91.00")],
  },
  {
    id: "gid://shopify/Product/1011",
    handle: "rain-soil",
    title: "Rain Soil",
    description:
      "Petrichor, turned earth, and soft moss. Rain Soil captures the first minutes after a storm — poured in small batches with soy wax.",
    priceRange: { minVariantPrice: money("93.00") },
    images: [{ url: "/images/rain-soil.svg", altText: "Rain Soil candle" }],
    variants: [
      variant("gid://shopify/ProductVariant/10111", "Small", "93.00"),
      variant("gid://shopify/ProductVariant/10112", "Large", "138.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1012",
    handle: "mushroom-cap",
    title: "Mushroom Cap",
    description:
      "Our namesake scent: damp wood, soft fungi, and forest floor. Hand-poured soy wax with a cotton wick — earthy, curious, unmistakably Mush.",
    priceRange: { minVariantPrice: money("99.00") },
    images: [
      { url: "/images/mushroom-cap.svg", altText: "Mushroom Cap candle" },
      { url: "/images/forest-moss.svg", altText: "Mushroom Cap candle atmosphere" },
    ],
    variants: [variant("gid://shopify/ProductVariant/10121", "Default Title", "99.00")],
  },
  {
    id: "gid://shopify/Product/1013",
    handle: "linen-wick",
    title: "Linen Wick",
    description:
      "Sun-dried linen, clean cotton, and a whisper of soap bark. Soft and airy — a small-batch pour for bedrooms and open windows.",
    priceRange: { minVariantPrice: money("86.00") },
    images: [{ url: "/images/linen-wick.svg", altText: "Linen Wick candle" }],
    variants: [variant("gid://shopify/ProductVariant/10131", "Default Title", "86.00")],
  },
  {
    id: "gid://shopify/Product/1014",
    handle: "ember-glow",
    title: "Ember Glow",
    description:
      "Last coals, warm spice, and sweet wood. Ember Glow is hand-poured for the hour when the fire is almost out and the room still holds heat.",
    priceRange: { minVariantPrice: money("96.00") },
    images: [{ url: "/images/ember-glow.svg", altText: "Ember Glow candle" }],
    variants: [variant("gid://shopify/ProductVariant/10141", "Default Title", "96.00")],
  },
];

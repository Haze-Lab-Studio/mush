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
    title: "Musgo da Floresta",
    description:
      "Feita à mão em pequenos lotes, Musgo da Floresta reúne terra úmida, pinho triturado e uma trilha silenciosa depois da chuva. Cera de soja e pavio de algodão queimam limpo e lento — pensada para noites em que a mata parece próxima.",
    priceRange: { minVariantPrice: money("89.00") },
    images: [
      { url: "/images/forest-moss.svg", altText: "Vela Musgo da Floresta" },
      { url: "/images/pine-needle.svg", altText: "Detalhe da vela Musgo da Floresta" },
    ],
    variants: [
      variant("gid://shopify/ProductVariant/10011", "Pequena", "89.00"),
      variant("gid://shopify/ProductVariant/10012", "Grande", "129.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1002",
    handle: "amber-resin",
    title: "Resina Âmbar",
    description:
      "Resina quente, casca de cítrico seca e fumaça suave. Resina Âmbar é uma vela de soja feita em pequenos lotes para ambientes que guardam conversas até tarde da noite.",
    priceRange: { minVariantPrice: money("95.00") },
    images: [{ url: "/images/amber-resin.svg", altText: "Vela Resina Âmbar" }],
    variants: [variant("gid://shopify/ProductVariant/10021", "Default Title", "95.00")],
  },
  {
    id: "gid://shopify/Product/1003",
    handle: "clay-hearth",
    title: "Lareira de Barro",
    description:
      "Barro da terra, grão tostado e um toque de fumaça de lenha. Lareira de Barro é cera de soja feita à mão com pavio de algodão — familiar, acolhedora e profundamente reconfortante.",
    priceRange: { minVariantPrice: money("92.00") },
    images: [{ url: "/images/clay-hearth.svg", altText: "Vela Lareira de Barro" }],
    variants: [
      variant("gid://shopify/ProductVariant/10031", "Pequena", "92.00"),
      variant("gid://shopify/ProductVariant/10032", "Grande", "135.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1004",
    handle: "dusk-berry",
    title: "Fruta do Entardecer",
    description:
      "Cascas de frutas silvestres, ar fresco do fim de tarde e um toque de folha triturada. Um aroma inspirado na coleta natural, feito em pequenos lotes para horas mais suaves.",
    priceRange: { minVariantPrice: money("88.00") },
    images: [{ url: "/images/dusk-berry.svg", altText: "Vela Fruta do Entardecer" }],
    variants: [variant("gid://shopify/ProductVariant/10041", "Default Title", "88.00")],
  },
  {
    id: "gid://shopify/Product/1005",
    handle: "river-stone",
    title: "Pedra de Rio",
    description:
      "Frescor mineral, pedra molhada e madeira clara. Pedra de Rio é uma queima limpa de cera de soja com pavio de algodão — quieta como água sobre a rocha.",
    priceRange: { minVariantPrice: money("90.00") },
    images: [{ url: "/images/river-stone.svg", altText: "Vela Pedra de Rio" }],
    variants: [variant("gid://shopify/ProductVariant/10051", "Default Title", "90.00")],
  },
  {
    id: "gid://shopify/Product/1006",
    handle: "pine-needle",
    title: "Agulha de Pinheiro",
    description:
      "Agulhas verdes trituradas, resina e luz fria de manhã. Cera de soja feita à mão para quem sente falta da trilha, direto da mesa da cozinha.",
    priceRange: { minVariantPrice: money("85.00") },
    images: [{ url: "/images/pine-needle.svg", altText: "Vela Agulha de Pinheiro" }],
    variants: [
      variant("gid://shopify/ProductVariant/10061", "Pequena", "85.00"),
      variant("gid://shopify/ProductVariant/10062", "Grande", "125.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1007",
    handle: "honeycomb",
    title: "Favo de Mel",
    description:
      "Doçura quente de cera de abelha sem pesar — mel suave, feno seco e linho. Feita em pequenos lotes para manhãs lentas.",
    priceRange: { minVariantPrice: money("94.00") },
    images: [{ url: "/images/honeycomb.svg", altText: "Vela Favo de Mel" }],
    variants: [variant("gid://shopify/ProductVariant/10071", "Default Title", "94.00")],
  },
  {
    id: "gid://shopify/Product/1008",
    handle: "smoke-oak",
    title: "Fumaça e Carvalho",
    description:
      "Carvalho queimado, cinza suave e um fio de baunilha em casca. Feita à mão com cera de soja e pavio de algodão para ambientes que gostam de um pouco de sombra.",
    priceRange: { minVariantPrice: money("98.00") },
    images: [{ url: "/images/smoke-oak.svg", altText: "Vela Fumaça e Carvalho" }],
    variants: [
      variant("gid://shopify/ProductVariant/10081", "Pequena", "98.00"),
      variant("gid://shopify/ProductVariant/10082", "Grande", "142.00", false),
    ],
  },
  {
    id: "gid://shopify/Product/1009",
    handle: "wild-thyme",
    title: "Tomilho Selvagem",
    description:
      "Ervas aquecidas pelo sol, capim seco e o estalo verde de um talo. Tomilho Selvagem carrega o espírito da coleta natural — pequeno lote, cera de soja, pavio de algodão.",
    priceRange: { minVariantPrice: money("87.00") },
    images: [{ url: "/images/wild-thyme.svg", altText: "Vela Tomilho Selvagem" }],
    variants: [variant("gid://shopify/ProductVariant/10091", "Default Title", "87.00")],
  },
  {
    id: "gid://shopify/Product/1010",
    handle: "cedar-bark",
    title: "Casca de Cedro",
    description:
      "Cedro áspero, casca seca e um leve calor resinoso. Uma vela feita à mão que traz firmeza para mesas, estantes e momentos de trabalho silencioso.",
    priceRange: { minVariantPrice: money("91.00") },
    images: [{ url: "/images/cedar-bark.svg", altText: "Vela Casca de Cedro" }],
    variants: [variant("gid://shopify/ProductVariant/10101", "Default Title", "91.00")],
  },
  {
    id: "gid://shopify/Product/1011",
    handle: "rain-soil",
    title: "Terra de Chuva",
    description:
      "Petricor, terra revirada e musgo suave. Terra de Chuva captura os primeiros minutos depois de uma tempestade — feita em pequenos lotes com cera de soja.",
    priceRange: { minVariantPrice: money("93.00") },
    images: [{ url: "/images/rain-soil.svg", altText: "Vela Terra de Chuva" }],
    variants: [
      variant("gid://shopify/ProductVariant/10111", "Pequena", "93.00"),
      variant("gid://shopify/ProductVariant/10112", "Grande", "138.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1012",
    handle: "mushroom-cap",
    title: "Chapéu de Cogumelo",
    description:
      "Nosso aroma de assinatura: madeira úmida, fungos suaves e chão de floresta. Cera de soja feita à mão com pavio de algodão — terrosa, curiosa, inconfundivelmente Mush.",
    priceRange: { minVariantPrice: money("99.00") },
    images: [
      { url: "/images/mushroom-cap.svg", altText: "Vela Chapéu de Cogumelo" },
      { url: "/images/forest-moss.svg", altText: "Ambiente da vela Chapéu de Cogumelo" },
    ],
    variants: [variant("gid://shopify/ProductVariant/10121", "Default Title", "99.00")],
  },
  {
    id: "gid://shopify/Product/1013",
    handle: "linen-wick",
    title: "Pavio de Linho",
    description:
      "Linho seco ao sol, algodão limpo e um sussurro de casca de sabão. Suave e leve — feita em pequenos lotes para quartos e janelas abertas.",
    priceRange: { minVariantPrice: money("86.00") },
    images: [{ url: "/images/linen-wick.svg", altText: "Vela Pavio de Linho" }],
    variants: [variant("gid://shopify/ProductVariant/10131", "Default Title", "86.00")],
  },
  {
    id: "gid://shopify/Product/1014",
    handle: "ember-glow",
    title: "Brasa Viva",
    description:
      "Últimas brasas, especiarias quentes e madeira adocicada. Brasa Viva é feita à mão para a hora em que o fogo quase se apaga e o ambiente ainda guarda calor.",
    priceRange: { minVariantPrice: money("96.00") },
    images: [{ url: "/images/ember-glow.svg", altText: "Vela Brasa Viva" }],
    variants: [variant("gid://shopify/ProductVariant/10141", "Default Title", "96.00")],
  },
];

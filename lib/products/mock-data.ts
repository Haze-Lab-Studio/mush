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
    handle: "golden-chanterelle",
    title: "Chanterelle Dourado",
    description:
      "Cogumelos chanterelle dourados, terra húmida e samambaias ao amanhecer. Feita à mão em pequenos lotes com cera de soja e pavio de algodão — o aroma que inspirou o nome Mush.",
    priceRange: { minVariantPrice: money("97.00") },
    images: [
      {
        url: "/images/product-1.png",
        altText: "Vela Mush Chanterelle Dourado sobre musgo com cogumelos chanterelle",
      },
    ],
    variants: [
      variant("gid://shopify/ProductVariant/10011", "Pequena", "97.00"),
      variant("gid://shopify/ProductVariant/10012", "Grande", "139.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1002",
    handle: "forest-moss",
    title: "Musgo da Floresta",
    description:
      "Terra úmida, musgo fresco e uma trilha silenciosa depois da chuva. Cera de soja e pavio de algodão queimam limpo e lento — para noites em que a mata parece próxima.",
    priceRange: { minVariantPrice: money("89.00") },
    images: [
      {
        url: "/images/product-2.png",
        altText: "Vela Mush Musgo da Floresta sobre musgo e folhas secas",
      },
    ],
    variants: [
      variant("gid://shopify/ProductVariant/10021", "Pequena", "89.00"),
      variant("gid://shopify/ProductVariant/10022", "Grande", "129.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1003",
    handle: "dried-lavender",
    title: "Lavanda Seca",
    description:
      "Ramos de lavanda seca, madeira envelhecida e um silêncio quase sagrado. Uma vela calma, feita em pequenos lotes, para desacelerar o fim do dia.",
    priceRange: { minVariantPrice: money("88.00") },
    images: [
      {
        url: "/images/product-3.png",
        altText: "Vela Mush Lavanda Seca em um tronco de árvore com ramos de lavanda",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10031", "Default Title", "88.00")],
  },
  {
    id: "gid://shopify/Product/1004",
    handle: "pine-cedar",
    title: "Pinho & Cedro",
    description:
      "Agulhas de pinho, cedro resinoso e pedra fria da montanha. Cera de soja feita à mão para quem sente falta da trilha nos dias mais frios.",
    priceRange: { minVariantPrice: money("91.00") },
    images: [
      {
        url: "/images/product-4.png",
        altText: "Vela Mush Pinho & Cedro entre ramos de pinheiro e musgo sobre pedra",
      },
    ],
    variants: [
      variant("gid://shopify/ProductVariant/10041", "Pequena", "91.00"),
      variant("gid://shopify/ProductVariant/10042", "Grande", "132.00", false),
    ],
  },
  {
    id: "gid://shopify/Product/1005",
    handle: "rainforest-floor",
    title: "Chão de Floresta Tropical",
    description:
      "Folhas largas, terra escura e um cogumelo selvagem brotando à sombra. Um aroma denso e verde, inspirado no chão úmido da mata.",
    priceRange: { minVariantPrice: money("93.00") },
    images: [
      {
        url: "/images/product-5.png",
        altText: "Vela Mush Chão de Floresta Tropical sobre musgo com folhas e cogumelo",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10051", "Default Title", "93.00")],
  },
  {
    id: "gid://shopify/Product/1006",
    handle: "meadow-bloom",
    title: "Flor do Campo",
    description:
      "Flores secas de campo, feno dourado e o calor do fim de tarde. Uma vela leve e floral, feita em pequenos lotes para dias de sol baixo.",
    priceRange: { minVariantPrice: money("86.00") },
    images: [
      {
        url: "/images/product-6.png",
        altText: "Vela Mush Flor do Campo entre flores secas silvestres",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10061", "Default Title", "86.00")],
  },
  {
    id: "gid://shopify/Product/1007",
    handle: "woodsmoke",
    title: "Fumaça de Lenha",
    description:
      "Lenha de bétula, fumaça fina subindo no ar frio e um canto de musgo úmido. Feita à mão para noites ao redor do fogo.",
    priceRange: { minVariantPrice: money("95.00") },
    images: [
      {
        url: "/images/product-7.png",
        altText: "Vela Mush Fumaça de Lenha com fumaça subindo entre troncos de bétula",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10071", "Default Title", "95.00")],
  },
  {
    id: "gid://shopify/Product/1008",
    handle: "wild-fungi",
    title: "Fungos Silvestres",
    description:
      "Uma coleção de cogumelos selvagens, folhas caídas e terra escura. O aroma mais terroso da nossa coleção — pequenos lotes, cera de soja, pavio de algodão.",
    priceRange: { minVariantPrice: money("99.00") },
    images: [
      {
        url: "/images/product-8.png",
        altText: "Vela Mush Fungos Silvestres rodeada de cogumelos selvagens no chão da floresta",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10081", "Default Title", "99.00")],
  },
  {
    id: "gid://shopify/Product/1009",
    handle: "spiced-amber",
    title: "Âmbar Especiado",
    description:
      "Âmbar quente, canela em rama e casca de cítrico seca sobre linho grosso. Uma vela envolvente para as noites mais frias do ano.",
    priceRange: { minVariantPrice: money("96.00") },
    images: [
      {
        url: "/images/product-9.png",
        altText: "Vela Mush Âmbar Especiado com canela em rama e cítricos secos",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10091", "Default Title", "96.00")],
  },
  {
    id: "gid://shopify/Product/1010",
    handle: "morning-mushroom",
    title: "Cogumelo da Manhã",
    description:
      "Pequenos cogumelos selvagens brotando entre o musgo molhado de orvalho. Um aroma fresco e sutil, feito para o início do dia.",
    priceRange: { minVariantPrice: money("84.00") },
    images: [
      {
        url: "/images/product-10.png",
        altText: "Vela Mush Cogumelo da Manhã entre pequenos cogumelos e musgo orvalhado",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10101", "Default Title", "84.00")],
  },
  {
    id: "gid://shopify/Product/1011",
    handle: "sacred-sage",
    title: "Sálvia Sagrada",
    description:
      "Sálvia seca, ervas silvestres e um leve toque de resina. Uma vela contemplativa, feita à mão para rituais simples do dia a dia.",
    priceRange: { minVariantPrice: money("90.00") },
    images: [
      {
        url: "/images/product-11.png",
        altText: "Vela Mush Sálvia Sagrada entre ramos secos de sálvia e ervas",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10111", "Default Title", "90.00")],
  },
  {
    id: "gid://shopify/Product/1012",
    handle: "fern-rain",
    title: "Samambaia & Chuva",
    description:
      "Samambaias molhadas, solo escuro e o cheiro fresco que vem depois da chuva. Uma vela verde e viva, para dias de céu carregado.",
    priceRange: { minVariantPrice: money("87.00") },
    images: [
      {
        url: "/images/product-12.png",
        altText: "Vela Mush Samambaia & Chuva sob uma folha de samambaia sobre terra escura",
      },
    ],
    variants: [
      variant("gid://shopify/ProductVariant/10121", "Pequena", "87.00"),
      variant("gid://shopify/ProductVariant/10122", "Grande", "126.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1013",
    handle: "wild-herb-garden",
    title: "Jardim de Ervas Silvestres",
    description:
      "Alecrim, tomilho e um maço de ervas silvestres colhidas ao sol. Uma vela verde e aromática, inspirada em jardins sem cerca.",
    priceRange: { minVariantPrice: money("89.00") },
    images: [
      {
        url: "/images/product-13.png",
        altText: "Vela Mush Jardim de Ervas Silvestres entre maços de alecrim e tomilho",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10131", "Default Title", "89.00")],
  },
  {
    id: "gid://shopify/Product/1014",
    handle: "autumn-bramble",
    title: "Amora do Outono",
    description:
      "Amoras silvestres, folhas de outono e um prato de barro sobre linho escuro. Uma vela frutada e profunda para as tardes mais curtas do ano.",
    priceRange: { minVariantPrice: money("94.00") },
    images: [
      {
        url: "/images/product-14.png",
        altText: "Vela Mush Amora do Outono sobre um prato com amoras silvestres e folhas",
      },
    ],
    variants: [
      variant("gid://shopify/ProductVariant/10141", "Pequena", "94.00"),
      variant("gid://shopify/ProductVariant/10142", "Grande", "136.00"),
    ],
  },
  {
    id: "gid://shopify/Product/1015",
    handle: "toasted-hazelnut-oak",
    title: "Avelã Tostada & Carvalho",
    description:
      "Avelãs tostadas, folhas secas de carvalho e um fundo amadeirado quente. Uma vela reconfortante, feita à mão para o friozinho do fim de tarde.",
    priceRange: { minVariantPrice: money("92.00") },
    images: [
      {
        url: "/images/product-15.png",
        altText: "Vela Mush Avelã Tostada & Carvalho entre avelãs e folhas secas de carvalho",
      },
    ],
    variants: [variant("gid://shopify/ProductVariant/10151", "Default Title", "92.00")],
  },
];

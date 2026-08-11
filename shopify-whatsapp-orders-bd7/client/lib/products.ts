export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  badge?: string;
}

export const categories = ["All", "Ceramics", "Textiles", "Candles", "Kitchen"];

export const products: Product[] = [
  {
    id: "amara-vase",
    name: "Amara Stoneware Vase",
    price: 68,
    category: "Ceramics",
    image:
      "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b6?auto=format&fit=crop&w=800&q=80",
    description: "Hand-thrown stoneware vase glazed in warm terracotta.",
    badge: "Bestseller",
  },
  {
    id: "linen-throw",
    name: "Sundried Linen Throw",
    price: 89,
    category: "Textiles",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80",
    description: "Heavyweight stonewashed linen throw in clay red.",
  },
  {
    id: "sage-candle",
    name: "Wild Sage Candle",
    price: 32,
    category: "Candles",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    description: "Soy wax candle hand-poured with wild sage and cedar.",
    badge: "New",
  },
  {
    id: "olive-bowl",
    name: "Olivewood Serving Bowl",
    price: 54,
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80",
    description: "Solid olivewood bowl, food-safe finish, one of a kind grain.",
  },
  {
    id: "woven-basket",
    name: "Meridian Woven Basket",
    price: 76,
    category: "Textiles",
    image:
      "https://images.unsplash.com/photo-1622560481156-01ac0b0da4d0?auto=format&fit=crop&w=800&q=80",
    description: "Hand-woven seagrass basket, ideal for plants or storage.",
  },
  {
    id: "clay-mug-set",
    name: "Dune Clay Mug Set",
    price: 44,
    category: "Ceramics",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
    description: "Set of two speckled stoneware mugs in sand and clay.",
  },
  {
    id: "amber-oil-set",
    name: "Amber Ritual Oil Trio",
    price: 58,
    category: "Candles",
    image:
      "https://images.unsplash.com/photo-1595425964272-5049ba24ce7e?auto=format&fit=crop&w=800&q=80",
    description: "Three botanical fragrance oils for diffusers and rituals.",
  },
  {
    id: "walnut-board",
    name: "Walnut Serving Board",
    price: 62,
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0b22ba7ceb7?auto=format&fit=crop&w=800&q=80",
    description: "Live-edge walnut board for cheese, bread, and gathering.",
    badge: "Bestseller",
  },
];

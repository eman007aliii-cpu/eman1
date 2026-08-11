import { siteConfig } from "@/lib/site-config";
import type { CartItem } from "@/context/CartContext";

export function buildWhatsAppOrderUrl(items: CartItem[], total: number) {
  const lines = [
    `Hi ${siteConfig.name}! I'd like to place an order:`,
    "",
    ...items.map(
      (item) =>
        `• ${item.product.name} x${item.quantity} — $${(
          item.product.price * item.quantity
        ).toFixed(2)}`,
    ),
    "",
    `Total: $${total.toFixed(2)}`,
    "",
    "Please confirm availability and delivery details. Thank you!",
  ];

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function buildWhatsAppContactUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

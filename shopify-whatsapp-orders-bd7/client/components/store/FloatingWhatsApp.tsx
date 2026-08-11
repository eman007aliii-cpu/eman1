import { buildWhatsAppContactUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/store/WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppContactUrl("Hi! I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

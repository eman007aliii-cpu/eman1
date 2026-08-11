import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/store/WhatsAppIcon";

export function CartSheet() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, total } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl">Your Bag</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center text-muted-foreground">
            <ShoppingBag className="h-10 w-10 opacity-40" />
            <p>Your bag is empty.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-2">
              <ul className="flex flex-col gap-5">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-20 w-20 shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-heading text-sm font-medium leading-tight">
                            {product.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                          aria-label={`Remove ${product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-5 text-center text-sm">
                          {quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-4">
              <div className="mb-4 flex items-center justify-between font-heading text-base font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
              >
                <a
                  href={buildWhatsAppOrderUrl(items, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                You'll confirm final details with us on WhatsApp before
                payment.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

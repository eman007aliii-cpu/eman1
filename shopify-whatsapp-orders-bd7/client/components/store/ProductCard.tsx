import { Plus } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-shadow hover:shadow-xl hover:shadow-black/5">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => addItem(product)}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105"
          aria-label={`Add ${product.name} to bag`}
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {product.category}
        </p>
        <h3 className="font-heading text-base font-medium leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="mt-2 font-heading text-lg font-semibold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

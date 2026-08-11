import { useMemo, useState } from "react";
import { MessageCircle, Sparkles, Truck, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/store/ProductCard";
import { WhatsAppIcon } from "@/components/store/WhatsAppIcon";
import { categories, products } from "@/lib/products";
import { buildWhatsAppContactUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Browse the shop",
    description: "Explore our collection and add your favorites to the bag.",
  },
  {
    title: "Send it on WhatsApp",
    description:
      "Tap checkout and your order details are ready to send us instantly.",
  },
  {
    title: "We confirm & deliver",
    description:
      "We chat with you directly to confirm details and get it to your door.",
  },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/70 to-background">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-whatsapp/10 px-4 py-1.5 text-sm font-medium text-whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              Order directly on WhatsApp
            </span>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Slow-made goods for a well-tended home.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
              Ceramics, textiles, and candles crafted in small batches. Add
              what you love to your bag and check out in seconds &mdash; right
              from WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <a href="#shop">Shop the collection</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-whatsapp px-7 text-whatsapp hover:bg-whatsapp/10 hover:text-whatsapp"
              >
                <a
                  href={buildWhatsAppContactUrl(
                    "Hi! I'd like to know more about your products.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Ask us anything
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-black/10">
              <img
                src="https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1000&q=80"
                alt="Curated home goods styled on a warm-toned shelf"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl bg-card p-4 shadow-xl sm:block">
              <p className="font-heading text-sm font-semibold">
                "Ordering on WhatsApp made it so easy to ask questions first."
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                — Priya, repeat customer
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-background">
        <div className="container grid grid-cols-1 divide-y divide-border/70 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center gap-3 px-4 py-4 sm:py-0">
            <WhatsAppIcon className="h-6 w-6 shrink-0 text-whatsapp" />
            <div>
              <p className="font-heading text-sm font-semibold">
                WhatsApp checkout
              </p>
              <p className="text-sm text-muted-foreground">
                Order and chat, all in one place.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-4 sm:py-0">
            <Truck className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="font-heading text-sm font-semibold">
                Careful delivery
              </p>
              <p className="text-sm text-muted-foreground">
                Packed by hand, shipped with care.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-4 sm:py-0">
            <Undo2 className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="font-heading text-sm font-semibold">
                Easy returns
              </p>
              <p className="text-sm text-muted-foreground">
                Not the right fit? We'll sort it out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="container scroll-mt-20 py-16 sm:py-24">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              The Collection
            </span>
            <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
              Shop our favorites
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground/70 hover:border-primary/50 hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              How WhatsApp ordering works
            </h2>
            <p className="mt-3 text-muted-foreground">
              No accounts, no forms. Just add to your bag and send it over.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="font-heading text-lg font-medium">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-24">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-accent px-6 py-14 text-center text-accent-foreground sm:px-16">
          <WhatsAppIcon className="h-10 w-10 text-whatsapp" />
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Ready to order? Let's chat on WhatsApp.
          </h2>
          <p className="max-w-md text-accent-foreground/70">
            Add your favorites to the bag, or message us directly with any
            questions about our products.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-whatsapp px-8 text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            <a
              href={buildWhatsAppContactUrl("Hi! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start an order
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

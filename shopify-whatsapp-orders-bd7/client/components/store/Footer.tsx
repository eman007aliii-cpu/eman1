import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppContactUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/store/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-accent text-accent-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-accent-foreground/70">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/60">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <Link to="/#shop" className="hover:underline">
                Shop All
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/60">
            Order via WhatsApp
          </p>
          <a
            href={buildWhatsAppContactUrl(
              "Hi! I have a question about your products.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat with us
          </a>
          <div className="mt-5 flex items-center gap-3 text-accent-foreground/70">
            <Instagram className="h-4 w-4" />
            <span className="text-sm">@larkspurandco</span>
          </div>
        </div>
      </div>

      <div className="border-t border-accent-foreground/10 py-5">
        <p className="container text-center text-xs text-accent-foreground/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

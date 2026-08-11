import { ReactNode } from "react";
import { Header } from "@/components/store/Header";
import { Footer } from "@/components/store/Footer";
import { CartSheet } from "@/components/store/CartSheet";
import { FloatingWhatsApp } from "@/components/store/FloatingWhatsApp";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartSheet />
      <FloatingWhatsApp />
    </div>
  );
}

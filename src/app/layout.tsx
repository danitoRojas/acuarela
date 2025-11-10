import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FooterPage from "@/components/sections/footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mi Sitio",
  description: "Starter Next 15 + React 19 + Tailwind 4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      {/* Usa dvh para móviles, flex para empujar el footer abajo */}
      <body className="min-h-[100dvh] flex flex-col bg-white text-slate-900 antialiased dark:bg-slate-950 overflow-x-hidden">
        <Navbar />

        {/* No centres todo: deja que cada sección (p.ej. HomeHero) se encargue */}
        <main className="flex-1 w-full">
          {children}
        </main>
        <FooterPage />

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

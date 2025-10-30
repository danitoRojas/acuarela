import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mi Sitio",
  description: "Starter Next 15 + React 19 + Tailwind 4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* layout grid: header | main | footer */}
      <body className="min-h-screen min-w-full grid grid-rows-[auto_1fr_auto] bg-white text-slate-900 antialiased dark:bg-slate-950">
        <Navbar />
        {/* main ocupa todo el espacio visible */}
        <main className="w-full h-full flex items-center justify-center p-0 m-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

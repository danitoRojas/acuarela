"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#features", label: "Características" },
  { href: "/#precios", label: "Precios" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [open]);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-slate-900/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="size-8 rounded-lg bg-blue-600 text-white grid place-items-center font-bold group-hover:opacity-90 transition-opacity">
              M
            </span>
            <span className="font-semibold tracking-tight dark:text-white">Mi Sitio</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(l.href.replace("/#", "/")) || false;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "px-1.5 py-1 rounded-md outline-none transition-colors",
                  "hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500/60",
                  active ? "text-blue-600" : "text-slate-700 dark:text-slate-200",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/#cta"
            className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500/70"
          >
            Empezar
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 outline-none
                     hover:bg-slate-100 dark:hover:bg-slate-800
                     focus-visible:ring-2 focus-visible:ring-blue-500/70"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          {/* Icono hamburguesa / close */}
          <svg
            className={`size-6 transition-[transform,opacity] ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg
            className={`-ml-6 size-6 transition-[transform,opacity] ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden",
          // fondo + blur
          "backdrop-blur bg-white/80 dark:bg-slate-900/80 border-t",
          // animación slide-down
          "transition-[max-height,opacity] duration-300 ease-out overflow-hidden",
          open ? "max-h-[80dvh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="px-4 sm:px-6 lg:px-8 py-4">
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(l.href.replace("/#", "/")) || false;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={[
                      "block w-full rounded-md px-3 py-2 text-base outline-none",
                      "hover:bg-slate-100 dark:hover:bg-slate-800",
                      "focus-visible:ring-2 focus-visible:ring-blue-500/70",
                      active ? "text-blue-600" : "text-slate-700 dark:text-slate-200",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/#cta"
                className="block w-full rounded-lg bg-blue-600 px-3 py-2 text-center text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500/70"
              >
                Empezar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

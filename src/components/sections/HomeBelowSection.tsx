"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type DecoCfg = {
  src: string;
  // Posiciones y tamaño con clases Tailwind
  className: string;
  // Rango de movimiento (valores relativos que aplicaremos con GSAP)
  motion?: {
    x?: [number, number];
    y?: [number, number];
    rotate?: [number, number];
    scale?: [number, number];
    opacity?: [number, number];
    scrub?: number; // suavidad del scrub
  };
};

export default function SeccionInstitucional() {
  const logos = ["/logos/alpes.svg", "/logos/alpes.svg", "/logos/kilimanjaro.svg", "/logos/oxford.svg"];

  // === Configura aquí todas las cards decorativas ===
  const decorations: DecoCfg[] = [
    {
      src: "/img/acuarela/4.jpg",
      className:
        "top-6 right-20 w-40 h-40 lg:w-56 lg:h-56", // esquina sup. der.
      motion: { y: [-10, -80], rotate: [-2, 2], opacity: [0.85, 1], scrub: 0.5 },
    },
    {
      src: "/img/acuarela/5.jpg",
      className:
        "bottom-8 left-24 w-40 h-40 lg:w-56 lg:h-56", // esquina inf. izq.
      motion: { x: [-5, -30], y: [10, 70], rotate: [1, -1], scrub: 0.6 },
    },
    {
      src: "/img/acuarela/6.jpg",
      className:
        "top-1/3 left-8 w-28 h-28 lg:w-36 lg:h-36", // lateral izq.
      motion: { y: [-20, -100], scale: [0.95, 1.05], scrub: 0.5 },
    },
    {
      src: "/img/acuarela/7.jpg",
      className:
        "bottom-1/4 right-10 w-28 h-28 lg:w-36 lg:h-36", // lateral der.
      motion: { y: [10, 90], scale: [1, 1.06], rotate: [-1, 1], scrub: 0.45 },
    },
    {
      src: "/img/acuarela/8.jpg",
      className:
        "top-20 left-1/2 -translate-x-1/2 w-24 h-24 lg:w-32 lg:h-32", // centro sup.
      motion: { y: [-15, -65], opacity: [0.7, 1], scrub: 0.5 },
    },
    {
      src: "/img/acuarela/9.jpg",
      className:
        "bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 lg:w-32 lg:h-32", // centro inf.
      motion: { y: [15, 75], opacity: [0.75, 1], scrub: 0.5 },
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Entrada del bloque central
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Parallax/appear por cada card decorativa
      const nodes = gsap.utils.toArray<HTMLElement>("[data-deco]");
      nodes.forEach((el) => {
        const motion = JSON.parse(el.dataset.motion || "{}") as DecoCfg["motion"];

        // valores por defecto
        const x = motion?.x ?? [0, 0];
        const y = motion?.y ?? [0, 0];
        const rotate = motion?.rotate ?? [0, 0];
        const scale = motion?.scale ?? [1, 1];
        const opacity = motion?.opacity ?? [0.9, 1];
        const scrub = motion?.scrub ?? 0.5;

        // animación de entrada (fade+scale) para que “aparezcan”
        gsap.from(el, {
          opacity: Math.min(opacity[0], 0.0),
          scale: Math.min(scale[0], 0.92),
          y: y[0] + 20,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        });

        // movimiento con scroll
        gsap.fromTo(
          el,
          { x: x[0], y: y[0], rotate: rotate[0], scale: scale[0], opacity: opacity[0] },
          {
            x: x[1],
            y: y[1],
            rotate: rotate[1],
            scale: scale[1],
            opacity: opacity[1],
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80svh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-slate-50"
    >
      {/* === CARDS DECORATIVAS (se ocultan en móvil) === */}
      {decorations.map((d, i) => (
        <div
          key={i}
          data-deco
          data-motion={JSON.stringify(d.motion || {})}
          aria-hidden="true"
          className={[
            "absolute rounded-3xl z-0 hidden lg:block overflow-hidden shadow-lg will-change-transform pointer-events-none select-none opacity-90",
            d.className,
          ].join(" ")}
        >
          <Image src={d.src} alt="" fill className="object-cover" priority />
        </div>
      ))}

      {/* === CONTENIDO CENTRAL === */}
      <div ref={cardRef} className="relative z-10 max-w-4xl w-full px-6">
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-xl px-8 py-12 lg:px-16 lg:py-16 text-center">
          <p className="text-slate-900 text-2xl lg:text-[28px] font-semibold leading-relaxed lg:leading-[1.6] mx-auto max-w-3xl">
            Somos una red internacional con más de{" "}
            <span className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 underline underline-offset-4 decoration-primary/30">
              70 años de experiencia
            </span>
            , comprometida a brindar una preparación académica altamente competitiva, guiada por principios y valores católicos.
          </p>

          <a
            href="#"
            className="inline-block mt-8 text-primary font-semibold hover:underline underline-offset-4"
          >
            Conoce más
          </a>

          <div className="mx-auto my-8 h-px w-24 bg-slate-200" />

          <div className="flex flex-wrap gap-6 justify-center">
            {logos.map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`Logo ${i + 1}`}
                width={64}
                height={64}
                className="opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

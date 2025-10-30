"use client";

import Image from "next/image";
import { JSX, useEffect, useMemo, useRef, useState } from "react";
import IconSlide2 from "../../../public/img/1";
import IconSlide5 from "../../../public/img/2";
import SliderIcon6 from "../../../public/img/3";

/* ----------------------- helpers ----------------------- */
function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

/* ----------------------- tipos ------------------------- */
type SlideTheme = {
  /** color del texto, p.ej. "text-blue-900" */
  colorClass?: string;
  /** tamaño/estilo del título, p.ej. "text-5xl md:text-6xl font-extrabold" */
  titleClass?: string;
  /** tamaño/estilo del subtítulo, p.ej. "mt-3 text-lg" */
  subtitleClass?: string;
  /**
   * posicionamiento del bloque de texto (absolute dentro del slide).
   * Ejemplos:
   * - "left-6 sm:left-12 top-1/2 -translate-y-1/2"
   * - "right-8 bottom-12"
   * - "inset-0 flex items-center justify-center"
   */
  positionClass?: string;
};

type Slide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | (() => JSX.Element);
  theme?: SlideTheme;
};

const SLIDES: Slide[] = [
  {
    src: "/img/acurela/1.jpg",
    alt: "Niño jugando en aula",
    title: "Grow thinking",
    subtitle: "that everything is possible.",
    Icon: IconSlide2,
    theme: {
      colorClass: "text-blue-900",
      titleClass: "text-5xl md:text-6xl font-extrabold",
      subtitleClass: "mt-3 text-lg md:text-xl",
      positionClass: "inset-0 flex items-center justify-center sm:left-16 sm:top-1/2 sm:-translate-y-1/2 sm:flex-none sm:justify-start",
    },
  },
  {
    src: "/img/acurela/2.jpg",
        alt: "Aula creativa",
    title: "Create curiosity",
    subtitle: "through play and discovery.",
    Icon: IconSlide5,
    theme: {
      colorClass: "text-pink-900",
      titleClass: "text-5xl md:text-6xl font-extrabold",
      subtitleClass: "mt-3 text-lg md:text-xl",
      positionClass: "inset-0 flex items-center justify-center sm:left-16 sm:top-1/2 sm:-translate-y-1/2 sm:flex-none sm:justify-start",
    },
  },
  {
    src: "/img/acurela/3.jpg",
    alt: "Aprendizaje en equipo",
    title: "Learn together",
    subtitle: "with empathy and collaboration.",
    Icon: SliderIcon6,
    theme: {
      colorClass: "text-white",
      titleClass: "text-5xl md:text-5xl font-extrabold drop-shadow text-start break-words",
      subtitleClass: "mt-3 text-lg md:text-xl drop-shadow text-center break-words",
      positionClass: "inset-0 flex items-center justify-center sm:left-16 sm:top-1/2 sm:-translate-y-1/2 sm:flex-none sm:justify-start",
    },
  },
];

const AUTOPLAY_MS = 5500;

/* ------------------- componente principal ------------------- */
export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);

  const to = (i: number) => setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);

  // autoplay con pausa al hover
  useEffect(() => {
    if (paused) return;
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [index, paused]);

  // título dinámico accesible
  const liveLabel = useMemo(
    () => `${SLIDES[index].title} — ${SLIDES[index].subtitle}`,
    [index]
  );

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Hero"
      className="relative w-full h-svh min-w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track de slides */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateX(-${index * 100}%)`,
          display: "grid",
          gridTemplateColumns: `repeat(${SLIDES.length}, 100%)`,
          transition: "transform 600ms cubic-bezier(.2,.65,.2,1)",
          height: "100%",
        }}
      >
        {SLIDES.map((s, i) => (
          <SlideItem key={i} slide={s} priority={i === 0} />
        ))}
      </div>

      {/* Aria live para lectores de pantalla */}
      <span className="sr-only" aria-live="polite">
        {liveLabel}
      </span>

      {/* Controles */}
      <ArrowButton side="left" onClick={() => go(-1)} label="Anterior" />
      <ArrowButton side="right" onClick={() => go(1)} label="Siguiente" />

      {/* Dots */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => to(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={cn(
              "pointer-events-auto h-1.5 w-12 rounded-full bg-white/50 backdrop-blur outline-none",
              i === index
                ? "bg-white"
                : "hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-white/70"
            )}
          />
        ))}
      </div>
    </section>
  );
}

/* --------------------- sub-componentes ---------------------- */
function SlideItem({ slide, priority }: { slide: Slide; priority?: boolean }) {
  const { src, alt, Icon, title, subtitle, theme } = slide;
  return (
    <div className="relative h-full w-full">
      <Image
        priority={priority}
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Bloque de texto sobre icono decorativo */}
      <Bubble
        Icon={Icon}
        title={title}
        subtitle={subtitle}
        colorClass={theme?.colorClass}
        titleClass={theme?.titleClass}
        subtitleClass={theme?.subtitleClass}
        positionClass={theme?.positionClass}
      />
    </div>
  );
}

function ArrowButton({
  side,
  onClick,
  label,
}: {
  side: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  const common =
    "absolute top-1/2 -translate-y-1/2 grid place-items-center size-10 rounded-full bg-white/70 backdrop-blur text-slate-800 hover:bg-white shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70";
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={cn(common, side === "left" ? "left-3" : "right-3")}
    >
      {side === "left" ? (
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

/* ------------------------- Bubble --------------------------- */
/**
 * Bubble coloca un SVG decorativo (Icon) y centra/sitúa encima el bloque de texto.
 * Todo lo "tuneable" se pasa en props como clases Tailwind para que puedas
 * cambiar color, tamaño y posición por slide.
 */
function Bubble({
  Icon,
  title,
  subtitle,
  colorClass = "text-slate-900",
  titleClass = "text-5xl md:text-6xl font-extrabold",
  subtitleClass = "mt-3 text-lg md:text-xl",
  positionClass = "left-6 sm:left-12 top-1/2 -translate-y-1/2",
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | (() => JSX.Element);
  title: string;
  subtitle: string;
  colorClass?: string;
  titleClass?: string;
  subtitleClass?: string;
  positionClass?: string;
}) {
  const IconCmp: React.FC<React.SVGProps<SVGSVGElement>> | (() => JSX.Element) = Icon;
  return (
    <div className={cn("absolute", positionClass)}>
      <div className="relative">
        <IconCmp />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-6 max-w-xl w-full">
          <h2 className={cn(colorClass, titleClass)}>{title}</h2>
          <p className={cn(colorClass, subtitleClass)}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

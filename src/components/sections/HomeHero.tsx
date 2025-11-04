"use client";

import Image from "next/image";
import { JSX, useCallback, useEffect, useMemo, useRef, useState } from "react";
import IconSlide2 from "../../../public/img/1";
import IconSlide5 from "../../../public/img/2";
import SliderIcon6 from "../../../public/img/3";

/* ----------------------- helpers ----------------------- */
function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}
function clamp(min: number, v: number, max: number) {
  return Math.max(min, Math.min(v, max));
}

/* ----------------------- tipos ------------------------- */
type SlideTheme = {
  colorClass?: string;
  titleClass?: string;
  subtitleClass?: string;
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

/* ---------------------- data demo ---------------------- */
const SLIDES: Slide[] = [
  {
    src: "/img/acurela/1.jpg",
    alt: "Niño jugando en aula",
    title: "Grow thinking",
    subtitle: "that everything is possible.",
    Icon: IconSlide2,
    theme: {
      colorClass: "text-orange-900",
      titleClass: "text-5xl md:text-6xl font-extrabold",
      subtitleClass: "mt-3 text-lg md:text-xl",
      positionClass:
        "inset-0 flex items-center justify-center sm:left-16 sm:top-1/2 sm:-translate-y-1/2 sm:flex-none sm:justify-start",
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
      positionClass:
        "inset-0 flex items-center justify-center sm:left-16 sm:top-1/2 sm:-translate-y-1/2 sm:flex-none sm:justify-start",
    },
  },
  {
    src: "/img/acurela/3.jpg",
    alt: "Aprendizaje en equipo",
    title: "Learn together",
    subtitle: "with empathy and collaboration.",
    Icon: SliderIcon6,
    theme: {
      colorClass: "text-blue-900",
      titleClass:
        "text-5xl md:text-5xl font-extrabold drop-shadow text-start break-words",
      subtitleClass:
        "mt-3 text-lg md:text-xl drop-shadow text-center break-words",
      positionClass:
        "inset-0 flex items-center justify-center sm:left-16 sm:top-1/2 sm:-translate-y-1/2 sm:flex-none sm:justify-start",
    },
  },
];

const AUTOPLAY_MS = 5500;
const TRANSITION_MS = 600;

/* ------------------- componente principal ------------------- */
export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Reduced motion: si el usuario prefiere menos animación, desactiva autoplay
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const slidesCount = SLIDES.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setIndex((i) => (i + dir + slidesCount) % slidesCount);
      // Evita spam de clicks durante la transición
      setTimeout(() => setIsAnimating(false), TRANSITION_MS);
    },
    [slidesCount, isAnimating]
  );

  const to = useCallback(
    (i: number) => {
      if (isAnimating) return;
      const next = ((i % slidesCount) + slidesCount) % slidesCount;
      if (next === index) return;
      setIsAnimating(true);
      setIndex(next);
      setTimeout(() => setIsAnimating(false), TRANSITION_MS);
    },
    [index, slidesCount, isAnimating]
  );

  // autoplay con pausa al hover y respeto de reduced motion
  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, paused, go, prefersReducedMotion]);

  // título dinámico accesible
  const liveLabel = useMemo(
    () => `${SLIDES[index].title} — ${SLIDES[index].subtitle}`,
    [index]
  );

  // Control por teclado (izq/der)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    },
    [go]
  );

  /* ------------------- Swipe táctil ------------------- */
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setPaused(true); // pausar mientras swippea
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    // animación de arrastre suave (opcional)
    if (trackRef.current) {
      const base = -index * 100;
      const deltaPercent = (touchDeltaX.current / (trackRef.current.clientWidth || 1)) * 100;
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(calc(${base}% + ${deltaPercent}%))`;
    }
  };
  const onTouchEnd = () => {
    setPaused(false);
    if (trackRef.current) {
      trackRef.current.style.transition = "";
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
    const threshold = 48; // px
    if (touchDeltaX.current > threshold) go(-1);
    else if (touchDeltaX.current < -threshold) go(1);

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Hero"
      className="relative w-full min-h-[100dvh] overflow-hidden" // dvh corrige el "corte" en móviles
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Track de slides */}
      <div
        ref={trackRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateX(-${index * 100}%)`,
          display: "grid",
          gridTemplateColumns: `repeat(${slidesCount}, 100%)`,
          transition: `transform ${TRANSITION_MS}ms cubic-bezier(.2,.65,.2,1)`,
          height: "100%",
        }}
        role="group"
        aria-atomic="true"
      >
        {SLIDES.map((s, i) => (
          <SlideItem
            key={i}
            slide={s}
            priority={i === 0}
            ariaHidden={i !== index}
          />
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
        {SLIDES.map((_, i) => {
          const current = i === index;
          return (
            <button
              key={i}
              onClick={() => to(i)}
              aria-label={`Ir al slide ${i + 1}`}
              aria-current={current ? "true" : undefined}
              className={cn(
                "pointer-events-auto h-1.5 w-12 rounded-full bg-white/40 backdrop-blur outline-none ring-offset-2 ring-offset-black/20",
                current
                  ? "bg-white"
                  : "hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-white/80"
              )}
            />
          );
        })}
      </div>
    </section>
  );
}

/* --------------------- sub-componentes ---------------------- */
function SlideItem({
  slide,
  priority,
  ariaHidden,
}: {
  slide: Slide;
  priority?: boolean;
  ariaHidden?: boolean;
}) {
  const { src, alt, Icon, title, subtitle, theme } = slide;

  return (
    <div
      className="relative h-full w-full"
      aria-hidden={ariaHidden}
      role="group"
    >
      <Image
        priority={priority}
        src={src}
        alt={alt}
        fill
        className="object-cover object-center select-none"
        sizes="100vw"
        draggable={false}
      />
      {/* Gradiente sutil para legibilidad de texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />

      {/* Burbuja con SVG + textos */}
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
  const base =
    "absolute top-1/2 -translate-y-1/2 grid place-items-center size-10 rounded-full bg-white/75 backdrop-blur text-slate-800 hover:bg-white shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 ring-offset-2 ring-offset-black/10";
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={cn(base, side === "left" ? "left-3" : "right-3")}
    >
      {side === "left" ? (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
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
function Bubble({
  Icon,
  title,
  subtitle,
  colorClass = "text-slate-50",
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
  const IconCmp: React.FC<React.SVGProps<SVGSVGElement>> | (() => JSX.Element) =
    Icon;
  return (
    <div className={cn("absolute", positionClass)}>
      <div className="relative">
        {/* SVG decorativo (no interactivo, aria-hidden) */}
        <span aria-hidden>
          <IconCmp />
        </span>

        {/* Texto centrado sobre el SVG */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-6 max-w-xl w-full">
          <h2 className={cn(colorClass, titleClass)}>{title}</h2>
          <p className={cn(colorClass, "opacity-95", subtitleClass)}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

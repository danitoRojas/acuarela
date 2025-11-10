"use client";

import React, { useEffect, useRef, useState } from "react";

const PASOS = [
  {
    titulo: "Estimulación oportuna",
    texto:
      "Imagina un lugar donde tu bebé comienza su viaje de crecimiento y aprendizaje con amor y cuidado, acompañado por ti en cada paso.",
    cta: { label: "Saber más", href: "#" },
    video: { src: "/videos/baby-01.mp4", poster: "/videos/poster-01.jpg" },
  },
  {
    titulo: "Juego sensorial guiado",
    texto:
      "Actividades lúdicas que estimulan motricidad fina y gruesa, exploración sensorial y habilidades sociales.",
    cta: { label: "Conoce el programa", href: "#" },
    video: { src: "/videos/baby-02.mp4", poster: "/videos/poster-02.jpg" },
  },
  {
    titulo: "Acompañamiento familiar",
    texto:
      "Metodologías activas y reflexivas para que la familia comparta y celebre cada avance.",
    cta: { label: "Agenda una visita", href: "#" },
    video: { src: "/videos/baby-03.mp4", poster: "/videos/poster-03.jpg" },
  },
];

export default function SeccionEstimulacionScroll() {
  const [active, setActive] = useState(0);
  const pasoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: "-20% 0px -20% 0px", // activa cerca del centro
      }
    );

    pasoRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const pasoActivo = PASOS[active];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Desarrollo integral para tu bebé
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Un programa especializado que acompaña el crecimiento de tu pequeño
            con metodologías científicamente respaldadas
          </p>
        </div>

        {/* Desktop / Tablet */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-12 items-start">
            {/* Columna izquierda: navegación de pasos */}
            <div className="col-span-3">
              <div className="sticky top-32">
                {PASOS.map((paso, i) => (
                  <div
                    key={i}
                    className={`
                      relative mb-8 p-6 rounded-2xl cursor-pointer transition-all duration-300
                      ${
                        i === active
                          ? "bg-white shadow-lg ring-1 ring-slate-200 scale-105"
                          : "bg-white/50 hover:bg-white/80 hover:shadow-md"
                      }
                    `}
                    onClick={() => setActive(i)}
                  >
                    <div
                      className={`
                      text-sm font-semibold mb-2 transition-colors duration-300
                      ${i === active ? "text-blue-600" : "text-slate-500"}
                    `}
                    >
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </div>
                    <h4
                      className={`
                      text-lg font-bold mb-2 transition-colors duration-300
                      ${i === active ? "text-slate-900" : "text-slate-700"}
                    `}
                    >
                      {paso.titulo}
                    </h4>
                    <p
                      className={`
                      text-sm leading-relaxed transition-colors duration-300
                      ${i === active ? "text-slate-600" : "text-slate-500"}
                    `}
                    >
                      {paso.texto.substring(0, 80)}...
                    </p>

                    {/* Active indicator */}
                    {i === active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Centro: video sticky */}
            <div className="col-span-5">
              <div className="sticky top-32">
                <div className="relative group">
                  <video
                    key={pasoActivo.video.src}
                    ref={videoRef}
                    className="w-full aspect-[3/4] object-cover rounded-3xl shadow-2xl ring-1 ring-black/10 transition-transform duration-500 group-hover:scale-[1.02]"
                    src={pasoActivo.video.src}
                    poster={pasoActivo.video.poster}
                    playsInline
                    muted
                    autoPlay
                    loop
                  />
                  {/* Video overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl pointer-events-none" />

                  {/* Play indicator */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Derecha: contenido detallado */}
            <div className="col-span-4">
              <div className="sticky top-32">
                <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-xl ring-1 ring-slate-200/50 transition-all duration-700 ease-out">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Paso {active + 1}
                    </span>
                    <div className="flex gap-2">
                      {PASOS.map((_, i) => (
                        <div
                          key={i}
                          className={`
                            h-2 w-2 rounded-full transition-all duration-300
                            ${
                              i === active
                                ? "bg-blue-600 scale-125"
                                : "bg-slate-300"
                            }
                          `}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                    {pasoActivo.titulo}
                  </h3>

                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {pasoActivo.texto}
                  </p>

                  {pasoActivo.cta && (
                    <a
                      href={pasoActivo.cta.href}
                      className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {pasoActivo.cta.label}
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll trigger zones for intersection observer */}
          <div className="absolute left-0 top-0 w-1">
            {PASOS.map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  pasoRefs.current[i] = el;
                }}
                data-index={i}
                className="h-[100vh]"
              />
            ))}
          </div>
        </div>

        {/* Mobile: stacked layout */}
        <div className="lg:hidden space-y-16">
          {PASOS.map((paso, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-lg ring-1 ring-slate-200/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Paso {i + 1}
                </span>
              </div>

              <video
                className="w-full aspect-[3/4] object-cover rounded-2xl mb-6 shadow-lg"
                src={paso.video.src}
                poster={paso.video.poster}
                playsInline
                muted
                autoPlay
                loop
              />

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {paso.titulo}
                </h3>
                <p className="text-slate-600 leading-relaxed">{paso.texto}</p>
                {paso.cta && (
                  <a
                    href={paso.cta.href}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
                  >
                    {paso.cta.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

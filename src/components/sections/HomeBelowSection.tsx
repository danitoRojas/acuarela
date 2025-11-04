"use client";

import Image from "next/image";

export default function SeccionInstitucional() {
  const logos = [
     "/logos/alpes.svg",
    "/logos/alpes.svg",
    "/logos/kilimanjaro.svg",
    "/logos/oxford.svg",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-0 bg-slate-50">
      {/* Imagen decorativa superior derecha */}
      <div className="absolute top-8 right-24 w-56 h-56 rounded-3xl z-0 hidden lg:block overflow-hidden shadow-lg opacity-90">
        <Image
          src="/img/acurela/4.jpg"
          alt="Decoración acuarela"
          fill
          className="object-cover"
        />
      </div>

      {/* Imagen decorativa inferior izquierda */}
      <div className="absolute bottom-8 left-24 w-56 h-56 rounded-3xl z-0 hidden lg:block overflow-hidden shadow-lg opacity-90">
        <Image
        src="/img/acurela/5.jpg"
          alt="Decoración morada"
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-14 flex flex-col justify-center items-center w-full backdrop-blur-sm/10">
          <p className="text-slate-900 text-2xl lg:text-3xl font-semibold mb-6 leading-snug">
            Somos una red internacional con más de{" "}
            <span className="text-primary font-bold">70 años de experiencia</span>, comprometida a brindar una
            preparación académica altamente competitiva, guiada por principios y valores católicos.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold mt-2 mb-8 justify-center"
          >
            <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-lg">
              ›
            </span>
            Leer más
          </a>

          {/* Logos */}
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {logos.map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt="Logo"
                width={60}
                height={60}
                className="opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import Link from "next/link"
import { Briefcase, Shield, Disc3, Facebook, Instagram, Youtube, Circle } from "lucide-react"

export default function FooterPage() {
  return (
    <footer className="border w-[94%] md:w-5/7 m-auto rounded-xl border-gray-300 my-10">
      <div className="border-b border-gray-200 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-3">
            <div className="bg-gray-200 text-white p-2 rounded-lg">
              <Circle size={20} />
            </div>
            <span className="text-sm text-gray-700 font-medium">Ambientes seguros</span>
          </div>
          
          <div className="text-center order-first sm:order-none">
            <div className="text-xs font-bold text-gray-800 tracking-wide">RED DE COLEGIOS</div>
            <div className="text-sm font-bold text-gray-800">ACUARELA</div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700 font-medium">Trabaja con nosotros</span>
            <div className="bg-gray-200 text-white p-2 rounded">
              <Briefcase size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          <div>
            <h3 className="font-bold text-gray-900 text-xs mb-4">Nosotros</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Por qué elegimos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Eventos magnos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Red educativa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-xs mb-4">Niveles escolares</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Estimulación oportuna
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Primaria
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Secundaria
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Bachillerato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-xs mb-4">
              Modelo Educativo y<br />
              Pedagógico
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  ONE Semper Altius
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Modelo pedagógico
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Perfil de egreso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Bilingüismo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Educación diferenciada
                </Link>
              </li>
            </ul>
          </div>

          {/* Nuestros Colegios */}
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-4">Nuestros Colegios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Directorio de colegios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Presencia internacional
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Trasladós
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-bold text-gray-900 text-xs mb-4">Blog</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Recursos descargables
                </Link>
              </li>
            </ul>
          </div>

          {/* Admisiones */}
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-4">Admisiones</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Solicita información
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                  Proceso de admisión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="flex justify-center gap-6 px-8 py-4 border-b border-gray-200">
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <Disc3 size={20} />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <Facebook size={20} />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <Instagram size={20} />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <Youtube size={20} />
        </Link>
      </div>

      {/* Copyright y Aviso de privacidad */}
      <div className="px-8 py-6">
        {/* Cambiado a flex-col por defecto y sm:flex-row para pantallas más grandes, con un gap */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600 text-center sm:text-left">colegio de grupo acuarela 2025</p>
          <Link href="#" className="text-xs text-blue-600 hover:text-blue-800 underline">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
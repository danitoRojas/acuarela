'use client'
import { ArrowRight } from "lucide-react";
import CustomModal from "../utils/CustomModal";
import { useState } from "react";
import FormContact from "../layout/FormContact";
import Location from "../layout/Location";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  return(
    <div className="max-w-7xl w-[95%] grid grid-cols-1 lg:grid-cols-2 gap-6 m-auto">
      <div className="bg-[#c8d4e1] rounded-3xl p-8 relative overflow-hidden">
        <div className="flex items-center justify-between mb-8" onClick={() => setOpenModal(true)}>
          <span className="text-sm text-gray-700">Conócenos</span>
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </div>

        <h2 className="text-3xl font-normal text-gray-800 mb-12">Directorio de colegios</h2>

        <div className="flex gap-6">
          <div className="">
            <div className="w-20 h-20 bg-[#0066a1] rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg" />
          </div>
          <div className="text-gray-700 space-y-1">
            <p className="text-sm leading-relaxed">Alpes · Andes · Cumbres · Del Bosque</p>
            <p className="text-sm leading-relaxed">Everest · Highlands · Himalaya</p>
            <p className="text-sm leading-relaxed">
              Interamericano · Irish · Kinder Grove Kilimanjaro · Maddox · Oxford
            </p>
            <p className="text-sm leading-relaxed">Pinecrest</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1e3a5f] rounded-3xl p-8 relative overflow-hidden min-h-[320px]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nOkqkrWYoKpgkOiy3X0hV1CkbJWtw8.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2d7a5f] rounded-tl-full" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8" onClick={() => setIsModalOpen(true)}>
            <span className="text-sm text-white/90">Sé parte de la Red</span>
            <ArrowRight className="w-5 h-5 text-white/90" />
          </div>
          <div>

          </div>

          <p className="text-sm text-white/90 mb-6">Información de Admisiones</p>

          <h2 className="text-4xl font-bold text-white leading-tigh pt-14">
            Ponte en contacto<br />con nosotros
          </h2>
        </div>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Formulario de Contacto"
        size="md"
      >
        <FormContact />
      </CustomModal>
      <CustomModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        size="xl"
      >
        <Location />
      </CustomModal>
    </div>
  )
}
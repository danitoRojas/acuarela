'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper'; // Importación corregida del tipo Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useRef } from 'react';

const CardCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Datos de ejemplo para las cards
  const cards = [
    {
      id: 1,
      title: "Imagen 1",
      description: "Descripción del primer documento importante",
      downloadUrl: "/documents/doc1.pdf"
    },
    {
      id: 2,
      title: "Imagen 2",
      description: "Descripción del segundo documento relevante",
      downloadUrl: "/documents/doc2.pdf"
    },
    {
      id: 3,
      title: "Imagen 3",
      description: "Descripción del tercer documento útil",
      downloadUrl: "/documents/doc3.pdf"
    },
    {
      id: 4,
      title: "Imagen 4",
      description: "Descripción del cuarto documento informativo",
      downloadUrl: "/documents/doc4.pdf"
    },
    {
      id: 5,
      title: "Imagen 5",
      description: "Descripción del quinto documento educativo",
      downloadUrl: "/documents/doc5.pdf"
    },
    {
      id: 6,
      title: "Imagen 6",
      description: "Descripción del sexto documento técnico",
      downloadUrl: "/documents/doc6.pdf"
    }
  ];

  const handleDownload = (url:any, title:any) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Descargando: ${title}`);
  };

  return (
    <div className="w-full max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 py-8">
      <h2 className='text-2xl font-bold py-4'>Recursos Descargables</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper as SwiperType;
        }}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border p-4 border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="bg-blue-200 h-48 flex items-center justify-center rounded-lg" style={{backgroundImage: "url('https://cdn.prod.website-files.com/6620da2d02ffa63c31d36ced/6620da2d02ffa63c31d372a1_Descargable%204%20preview%20.avif')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                {/* <h3 className="text-xl font-bold text-white p-4">{card.title}</h3> */}
              </div>

              <div className="py-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={() => handleDownload(card.downloadUrl, card.title)}
                  className="w-full bg-blue-950 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  Descargar
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="flex justify-center gap-4 items-center mt-6 w-full">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-blue-100 text-xl font-bold h-12 w-12 rounded-full transition-colors duration-200"
        >
          &larr;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-blue-100 text-xl font-bold h-12 w-12 rounded-full transition-colors duration-200"
        >
           &rarr;
        </button>
      </div>
      {/* <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #3B82F6;
        }
      `}</style> */}
    </div>
  );
};

export default CardCarousel;
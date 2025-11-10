'use client';

import WhatsappIcon from "../../../public/img/icon/whatsapp";

export default function WhatsAppButton() {
  const phoneNumber = '34123456789'; // Cambia este número por el tuyo
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
     <WhatsappIcon/>
    </a>
  );
}

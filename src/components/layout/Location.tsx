
export default function Location() {
  return(
    <section>
      <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Visítanos o Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Encuentra nuestra ubicación y los datos de contacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-8 p-6 lg:p-10 bg-gray-50 rounded-xl shadow-lg">
            
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-3 border-blue-200">
              Datos de la Oficina Central
            </h3>

            <div className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <div className="ml-3">
                <p className="text-lg font-medium text-gray-900">Nuestra Ubicación</p>
                <p className="mt-1 text-gray-600">
                  Calle Principal #1234, Zona Central<br />
                  La Paz, Bolivia, CP 10001
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.35-1.026-.856-1.26l-3.321-1.66a1.125 1.125 0 0 0-1.21.366l-.34.34a2.25 2.25 0 0 1-3.182 0l-3.182-3.182a2.25 2.25 0 0 1 0-3.182l.365-.365a1.125 1.125 0 0 0 .333-1.21l-1.66-3.32A2.25 2.25 0 0 0 6.75 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <div className="ml-3">
                <p className="text-lg font-medium text-gray-900">Llámanos</p>
                <p className="mt-1 text-gray-600">+591 2 123456</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.902l-4.5 2.25c-.219.11-.47.11-.69 0l-4.5-2.25a2.25 2.25 0 0 1-1.07-1.902V6.75" />
              </svg>
              <div className="ml-3">
                <p className="text-lg font-medium text-gray-900">Envíanos un Correo</p>
                <p className="mt-1 text-gray-600">soporte@tudominio.com</p>
              </div>
            </div>
            
          </div> 

          <div className="relative overflow-hidden rounded-xl shadow-2xl h-96 lg:h-auto min-h-80">

            <iframe
              title="Ubicación de la Oficina"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15328.718698555898!2d-68.1481546!3d-16.5029671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4e13!3m3!1m2!1s0x915f206e1070559f%3A0x6b0487042a9693c3!2sPlaza%20Murillo!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Overlay sutil de color para un toque de diseño */}
            <div className="absolute inset-0 bg-blue-600 opacity-5 pointer-events-none"></div>
          </div>
          
        </div> {/* Fin de Contenido */}
        
      </div>
    </section>
  )
}
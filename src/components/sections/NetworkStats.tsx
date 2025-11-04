import { CirclePlay } from "lucide-react";

export default function NetworkStats() {
  return (
    <div className="relative">
      <div 
        className="absolute bg-blue-950/50 w-[98%] md:w-9/10 m-auto left-0 right-0 top-0 h-96 z-0 rounded-2xl flex justify-center items-center"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(23, 37, 84, 0.9)), url("https://media1.tenor.com/m/Cbdibny8xT8AAAAC/anime-high-school.gif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <CirclePlay size={70} className="text-gray-100 cursor-pointer"/>
          </div>
      <section className="w-[95%] lg:w-8/10 bg-white rounded-3xl p-4 lg:p-12 m-auto shadow-xl px-2 z-10 relative mt-80">
        <div className="flex items-center justify-between mb-12 ">
          <h2 className="text-3xl text-center md:text-left md:text-5xl w-full font-bold text-[#2d3e50]">La Red en números</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:row-span-2 bg-[#dce4ec] rounded-3xl p-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[250px] lg:min-h-[500px]">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cpath fill='%232d3e50' d='M100,100 L150,80 L180,100 L200,90 L220,110 L200,130 L180,120 L150,140 L120,130 Z M300,120 L350,100 L380,120 L400,110 L420,130 L400,150 L380,140 L350,160 L320,150 Z M500,80 L550,60 L580,80 L600,70 L620,90 L600,110 L580,100 L550,120 L520,110 Z M250,200 L300,180 L330,200 L350,190 L370,210 L350,230 L330,220 L300,240 L270,230 Z M450,180 L500,160 L530,180 L550,170 L570,190 L550,210 L530,200 L500,220 L470,210 Z'/%3E%3C/svg%3E")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="relative z-10 text-center">
              <div className="text-6xl md:text-8xl font-bold text-[#2d3e50] mb-4">2</div>
              <p className="text-lg font-semibold text-[#2d3e50]">
                Departamentos con 
                <br />
                presencia
              </p>
            </div>
          </div>

          <div className="bg-[#e07856] rounded-3xl p-12 flex flex-col items-center justify-center min-h-[240px]">
            <div className="text-6xl md:text-8xl font-bold text-white mb-4">10</div>
            <p className="text-lg font-bold text-white">años de experiencia</p>
          </div>

          <div className="bg-[#3d4a5c] rounded-3xl p-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[240px]">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent to-black" />
            <div className="relative z-10 text-center">
              <div className="text-6xl md:text-8xl font-bold text-white mb-4">51</div>
              <p className="text-lg font-bold text-white">colegios en Bolivia</p>
            </div>
          </div>

          <div className="bg-[#2d7a5f] rounded-3xl p-12 flex flex-col items-center justify-center min-h-[240px]">
            <div className="text-6xl md:text-8xl font-bold text-white mb-4">24</div>
            <p className="text-lg font-bold text-white">international schools</p>
          </div>

          <div className="bg-[#5b8db8] rounded-3xl p-12 flex flex-col items-center justify-center min-h-[240px]">
            <div className="text-6xl md:text-7xl font-bold text-white mb-4">7000</div>
            <p className="text-lg font-bold text-white">egresados</p>
          </div>
        </div>
      </section>
    </div>
  )
}

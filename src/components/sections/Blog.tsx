export default function BlogSection() {
  const blogPosts = [
    {
      image: "https://tse2.mm.bing.net/th/id/OIP.qIcdPQh0pLpyMAl-7IW0tQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      date: "August 19, 2025",
      category: "Educación",
      categoryColor: "bg-blue-200 text-blue-800",
      title: "Cómo motivar a tu hijo este regreso a clases: 7 consejos para acompañarlo con cariño y visión.",
    },
    {
      image: "https://tse2.mm.bing.net/th/id/OIP.qIcdPQh0pLpyMAl-7IW0tQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      date: "July 21, 2025",
      category: "Noticias",
      categoryColor: "bg-gray-300 text-gray-800",
      title:
        "La Participación de Nuestros Alumnos en el ISTE 2025: Un Escenario para Líderes en Tecnología e Innovación",
    },
    {
      image: "https://tse2.mm.bing.net/th/id/OIP.qIcdPQh0pLpyMAl-7IW0tQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      date: "August 19, 2025",
      category: "Red de Colegios Semper Altius",
      categoryColor: "bg-blue-200 text-blue-800",
      title: "Espiritualidad y fe: pilares esenciales en la formación integral",
    },
  ]

  return (
    <section className="py-16 px-8 relative overflow-hidden w-[94%] md:max-w-5/6 m-auto">
      <div className="h-[400px] bg-[#3d4463] absolute top-0 left-0 w-full rounded-2xl overflow-hidden"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-32 bg-[#0066a1] rounded-tr-3xl rounded-br-3xl" />
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#e67a6f] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-5xl font-bold text-white">Blog</h2>
          <p className="text-white text-right max-w-md text-sm leading-relaxed">
            Conoce la últimas noticias y comunicados de nuestra Red educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-300 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden p-4">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full rounded-lg h-full object-cover" />
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-sm text-blue-950">{post.date}</span>
                  <span className={`text-xs px-3 py-1 rounded-full ${post.categoryColor}`}>{post.category}</span>
                </div>

                <h3 className="text-blue-950 font-semibold leading-snug text-base">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

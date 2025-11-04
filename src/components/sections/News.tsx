
export default function News() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-blue-950 px-2 md:px-10 py-12 rounded-xl w-[94%] md:w-4/6 m-auto my-5">
      <div className="text-white text-center md:text-left">
        <h2 className="text-2xl font-bold">¿Quieres enviar una noticia?</h2>
        <p className="my-2 md:my-0">Comparte una noticia con nosotros y forma parte de nuestras historias.</p>
      </div>
      <div>
        <button className="bg-white border-0 px-10 py-2 rounded-lg text-blue-950 font-semibold cursor-pointer hover:scale-105">Enviar Noticia</button>
      </div>
    </section>
  )
}
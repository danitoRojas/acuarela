export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Texto principal */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-slate-800 dark:text-slate-100">Mi Sitio</span>. Todos los derechos reservados.
        </p>

        {/* Enlaces */}
        <nav className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-md px-1"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-md px-1"
          >
            Términos
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-md px-1"
          >
            Soporte
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-[#0f0f1a] text-gray-900 dark:text-gray-200 p-12 transition-colors duration-500">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
        Mis Proyectos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/40 dark:bg-white/10 backdrop-blur-md p-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Proyecto Ejemplo</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Aplicación web moderna con React y Tailwind, diseñada para mostrar tu experiencia profesional.
          </p>
          <a href="#" className="mt-4 inline-block text-pink-500 hover:underline">
            Ver más →
          </a>
        </div>
      </div>
    </section>
  );
}

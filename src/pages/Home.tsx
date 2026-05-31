export default function Home() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-[#0f0f1a] text-gray-900 dark:text-gray-200 transition-colors duration-500 flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500">
        Hola, soy Vicente Cortes
      </h1>
      <p className="text-lg max-w-xl text-center leading-relaxed mb-8">
        Full Stack Developer especializado en C#, .NET, React, PHP y SQL Server.
        Me apasiona crear soluciones modernas y escalables con un enfoque elegante y funcional.
      </p>
      <a
        href="/projects"
        className="bg-white/10 backdrop-blur-md border border-indigo-500 px-6 py-3 rounded-lg text-indigo-400 font-semibold hover:text-pink-400 hover:border-pink-400 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
      >
        Ver mis proyectos
      </a>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
   <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Vicente Cortes
        </h1>

        <div className="space-x-8 hidden md:flex">
          <Link to="/" className="text-white hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-white hover:text-yellow-300 transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-300 transition-colors">
            About
          </Link>
        </div>

        {/* Botón modo oscuro */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-gray-400 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </div>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} Vicente Cortes Hernández · Full Stack Developer
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Construido con React + Vite + Tailwind
      </p>
    </footer>
  );
}

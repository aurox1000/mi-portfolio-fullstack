import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {/* Hero */}
        <div className="flex items-center gap-6 mb-8">
          <img src={heroImg} className="w-40 h-40 rounded-full shadow-lg" alt="Hero" />
          <img src={reactLogo} className="w-16 h-16 animate-spin" alt="React logo" />
          <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        </div>

        {/* Texto principal */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">¡Mi Portafolio Fullstack!</h1>
          <p className="text-gray-600 mt-2">
            Edita <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> y guarda para probar <code>HMR</code>
          </p>
        </div>

        {/* Botón contador */}
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App

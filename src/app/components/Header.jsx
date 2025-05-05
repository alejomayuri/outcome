'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const scrollToSection = (id) => (e) => {
  e.preventDefault();
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname); // limpia el hash
  }
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col">
      {/* Parte superior */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 border-b border-gray-200 bg-black">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-8 md:h-12" />

          {/* Menú de navegación en desktop */}
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="#que-hacemos" onClick={scrollToSection('#que-hacemos')} className="text-white hover:text-purple-600">Qué hacemos</a>
            <a href="#servicios" onClick={scrollToSection('#servicios')} className="text-white hover:text-purple-600">Servicios</a>
            <a href="#pilares" onClick={scrollToSection('#pilares')} className="text-white hover:text-purple-600">Nuestros Pilares</a>
            <a href="#quienes-somos" onClick={scrollToSection('#quienes-somos')} className="text-white hover:text-purple-600">Quiénes Somos</a>
          </nav>

          {/* Botón hamburguesa en mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <nav className="md:hidden bg-black px-4 py-4 space-y-2 text-sm">
          <a href="#que-hacemos" onClick={scrollToSection('#que-hacemos')} className="block text-white hover:text-purple-600">Qué hacemos</a>
          <a href="#servicios" onClick={scrollToSection('#servicios')} className="block text-white hover:text-purple-600">Servicios</a>
          <a href="#pilares" onClick={scrollToSection('#pilares')} className="block text-white hover:text-purple-600">Nuestros Pilares</a>
          <a href="#quienes-somos" onClick={scrollToSection('#quienes-somos')} className="block text-white hover:text-purple-600">Quiénes Somos</a>
        </nav>
      )}

      {/* Parte inferior */}
      <div className="px-4 md:px-8 py-4 border-b border-gray-200 bg-white">
        <div className="w-full max-w-7xl flex justify-between items-center mx-auto">
          <nav className="flex gap-4 md:gap-8 text-sm">
            <a href="#reclutamiento" onClick={scrollToSection('#reclutamiento')} className="text-black font-bold hover:text-purple-600">RECLUTAMIENTO</a>
            <a href="#contacto" onClick={scrollToSection('#contacto')} className="text-black font-bold hover:text-purple-600">CONTACTO</a>
          </nav>
          {/* <a href="#" className="text-black font-bold hover:text-purple-600 text-sm">ES-IN</a> */}
        </div>
      </div>
    </header>
  );
}

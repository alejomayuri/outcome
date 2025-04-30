'use client';

import { useState } from 'react';

export default function FormContact() {
  const [formData, setFormData] = useState({
    tipo: '',
    empresa: '',
    solicitante: '',
    correo: '',
    ubicacion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes manejar el envío real del formulario
  };

  return (
    <section className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white max-w-4xl w-full mx-auto px-8 py-4 border border-gray-200 border-b-40 border-b-purple-600 rounded-4xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-1xl font-bold text-purple-600">SOLUCIONES A TU MEDIDA</h2>
        <div className="flex justify-start">
          <button
            type="submit"
            className="cursor-pointer text-black hover:underline font-bold py-3 px-6 rounded-md transition"
            form="contactForm"
          >
            ENVIAR
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} id="contactForm" className="flex flex-col">
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        >
          <option value="">Empresa o Particular</option>
          <option value="empresa">Empresa</option>
          <option value="particular">Particular</option>
        </select>

        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          placeholder="Nombre de la empresa"
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        />

        <input
          type="text"
          name="solicitante"
          value={formData.solicitante}
          onChange={handleChange}
          placeholder="Nombre del solicitante"
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        />

        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          placeholder="Correo electrónico"
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        />

        <select
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleChange}
          required
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        >
          <option value="">Ubicación</option>
          <option value="peru">Perú</option>
          <option value="usa">USA</option>
        </select>
      </form>
    </section>
  );
}

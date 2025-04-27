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
    <section className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Soluciones a tu medida</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tipo de cliente */}
        <div>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Empresa o Particular</option>
            <option value="empresa">Empresa</option>
            <option value="particular">Particular</option>
          </select>
        </div>

        {/* Nombre de la empresa */}
        <div>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Nombre de la empresa"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Nombre del solicitante */}
        <div>
          <input
            type="text"
            name="solicitante"
            value={formData.solicitante}
            onChange={handleChange}
            placeholder="Nombre del solicitante"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Correo electrónico */}
        <div>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Ubicación */}
        <div>
          <select
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Ubicación</option>
            <option value="peru">Perú</option>
            <option value="usa">USA</option>
          </select>
        </div>

        {/* Botón de envío */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}

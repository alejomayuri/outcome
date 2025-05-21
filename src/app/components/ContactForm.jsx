'use client';

import { useState } from 'react';

export default function FormContact() {
  const [showOtherCountry, setShowOtherCountry] = useState(false);

  const handleUbicacionChange = (e) => {
    setShowOtherCountry(e.target.value === 'otros paises');
  };

  return (
    <section id="contacto" className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white max-w-4xl w-full mx-auto px-8 py-4 border border-gray-200 border-b-40 border-b-purple-600 rounded-4xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-1xl font-bold text-purple-600">SOLUCIONES A TU MEDIDA</h2>
      </div>

      <form
        action="https://formsubmit.co/alejomayuri@gmail.com"
        method="POST"
        id="contactForm"
        className="flex flex-col"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://outcomesolution.com/gracias" />
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el formulario web" />

        <select
          name="tipo"
          required
          className="border-0 border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-purple-500"
        >
          <option value="">Empresa o Particular</option>
          <option value="empresa">Empresa</option>
          <option value="particular">Particular</option>
        </select>

        <input
          type="text"
          name="empresa"
          placeholder="Nombre de la empresa"
          className="border-0 border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-purple-500"
        />

        <input
          type="text"
          name="solicitante"
          placeholder="Nombre del solicitante"
          className="border-0 border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-purple-500"
        />

        <input
          type="email"
          name="correo"
          required
          placeholder="Correo electrónico"
          className="border-0 border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-purple-500"
        />

        <select
          name="ubicacion"
          required
          onChange={handleUbicacionChange}
          className="border-0 border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-purple-500"
        >
          <option value="">País de ubicación</option>
          <option value="peru">Perú</option>
          <option value="colombia">Colombia</option>
          <option value="ecuador">Ecuador</option>
          <option value="otros paises" className='text-purple-600'>Otros países</option>
        </select>

        {showOtherCountry && (
          <input
            type="text"
            name="ubicacion_otro"
            placeholder="Ingresa tu país"
            required
            className="mt-2 border-0 border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-purple-500"
          />
        )}
      </form>
      <div className="flex justify-start absolute bottom-0 left-full transform -translate-x-[130px] -translate-y-[-44px]">
        <button
          type="submit"
          className="cursor-pointer text-white hover:underline font-bold py-3 px-6 rounded-md transition"
          form="contactForm"
        >
          ENVIAR
        </button>
      </div>
    </section>
  );
}

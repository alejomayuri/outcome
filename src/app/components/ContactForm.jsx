'use client';

export default function FormContact() {
  return (
    <section id="contacto" className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white max-w-4xl w-full mx-auto px-8 py-4 border border-gray-200 border-b-40 border-b-purple-600 rounded-4xl shadow-md">
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

      <form
        action="https://formsubmit.co/alejomayuri@gmail.com"
        method="POST"
        id="contactForm"
        className="flex flex-col"
      >
        {/* Opcionales de configuración */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/gracias" />
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el formulario web" />

        <select
          name="tipo"
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
          placeholder="Nombre de la empresa"
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        />

        <input
          type="text"
          name="solicitante"
          placeholder="Nombre del solicitante"
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        />

        <input
          type="email"
          name="correo"
          required
          placeholder="Correo electrónico"
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        />

        <select
          name="ubicacion"
          required
          className="border-0 border-b border-gray-300 p-3 focus:ring-0 focus:border-purple-500"
        >
          <option value="">Ubicación</option>
          <option value="peru">Perú</option>
          <option value="colombia">Colombia</option>
          <option value="ecuador">Ecuador</option>
        </select>
      </form>
    </section>
  );
}

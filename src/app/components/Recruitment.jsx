export default function Recruitment() {
  const beneficios = [
    "Desarrollamos tu crecimiento en un entorno activo",
    "Impulsamos tu participación en iniciativas con impacto concreto",
    "Promovemos una cultura que reconoce, conecta y valora",
  ];

  return (
    <section id="reclutamiento" className="max-w-6xl mx-auto px-4 py-8 md:py-16">
      {/* Bloque principal */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 md:mb-12">
        {/* Textos */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">RECLUTAMIENTO</h2>
          <h3 className="text-1xl font-bold text-gray-800 mb-2">Únete a nuestro equipo</h3>
          <p className="text-gray-700 mb-6">
            Buscamos personas que compartan nuestros valores.
            Cada integrante cumple un rol esencial: su compromiso
            contribuye a construir un camino con propósito y futuro.
          </p>

          <h3 className="text-1xl font-bold text-gray-800 mb-2">¿Por qué sumarte a nuestro equipo?</h3>
          <div className="flex flex-col gap-2 mb-6">
            {beneficios.map((item, index) => (
              <div key={index} className="flex gap-3 md:items-center">
                <div className="mt-2 md:mt-0 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-purple-600 font-bold max-w-[340px] mb-6">
            Conoce nuestras oportunidades y postula
            a través de nuestro perfil en <a href="https://www.linkedin.com/company/outcomesolution/about/" target="_blank">LinkedIn</a>.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 md:h-[380px] h-auto mb-6 md:mb-0">
          <img 
            src="/rec-image.jpg" 
            alt="Reclutamiento" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

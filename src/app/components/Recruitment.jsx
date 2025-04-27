export default function Recruitment() {
    const beneficios = [
      "Ambiente de trabajo colaborativo",
      "Oportunidades de crecimiento profesional",
      "Proyectos innovadores y dinámicos",
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Bloque principal */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          {/* Textos */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Reclutamiento</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Únete a nuestro equipo</h3>
            <p className="text-gray-700 mb-6">
              Estamos en constante búsqueda de personas talentosas que quieran marcar la diferencia y crecer con nosotros.
            </p>
  
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">¿Por qué sumarte a nuestro equipo?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              {beneficios.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
  
            <p className="text-purple-600 font-semibold">
              ¡Te estamos esperando para construir el futuro juntos!
            </p>
          </div>
  
          {/* Imagen */}
          <div className="md:w-1/2">
            <img 
              src="/reclutamiento.jpg" 
              alt="Reclutamiento" 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    );
  }
  
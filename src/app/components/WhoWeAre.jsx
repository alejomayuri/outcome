export default function WhoWeAre() {
  const bloques = [
    {
      image: "/persona1.jpg",
      title: "Javier Riesco",
      subtitle: "Gerente General",
      description:
        "Javier ha liderado operaciones en seguridad física, aviación y edificios corporativos, en una de las empresas más importantes del sector, destacándose en la gestión de escenarios complejos. Su enfoque ha sido clave en el desarrollo de planes que optimizan la seguridad y gestionan los riesgos en áreas críticas. En Outcome Solution, aplica su experiencia para crear estrategias que enfrentan los desafíos más exigentes y garantizan la seguridad.",
    },
    {
      image: "/persona2.jpg",
      title: "Jack Guzmán",
      subtitle: "Gerente de Operaciones",
      description:
        "Con una sólida trayectoria en operaciones aeroportuarias y atención al cliente en Latinoamérica, Jack ha potenciado la eficiencia operativa en entornos dinámicos. Su habilidad para diseñar e implementar procesos eficaces ha consolidado a Outcome Solution como un socio estratégico, asegurando la efectividad de cada acción y adaptándose a las exigencias de nuestros aliados.",
    },
  ];

  return (
    <section id="quienes-somos" className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      {/* Título principal */}
      <div className="mb-12 text-left">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">QUIÉNES SOMOS</h2>
        <p className="text-white text-lg">
          Outcome Solution nace con el respaldo de más de 20 años de experiencia en seguridad y operaciones aeronáuticas.
          Nuestro equipo directivo combina una mirada estratégica y operativa.
        </p>
      </div>

      {/* Bloques de personas */}
      <div className="space-y-10">
        {bloques.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-6">
            {/* Imagen */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-3xs rounded-lg object-cover shadow-md"
            />
            {/* Texto */}
            <div>
              <h3 className="text-xl text-purple-600">{item.title}</h3>
              <h4 className="text-sm font-semibold text-white mb-2">{item.subtitle}</h4>
              <p className="text-white text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

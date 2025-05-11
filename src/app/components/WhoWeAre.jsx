export default function WhoWeAre() {
  const bloques = [
    {
      image: "/persona1.jpg",
      title: "Javier Riesco",
      subtitle: "Gerente General",
      description:
        "Javier ha liderado operaciones en seguridad física, aviación y edificios corporativos, en una de las empresas más importantes del sector, destacándose en la gestión de escenarios complejos. Su enfoque ha sido clave en el desarrollo de planes que optimizan la seguridad y gestionan los riesgos en áreas críticas. En Outcome Solution, aplica su experiencia para crear estrategias que enfrentan los desafíos más exigentes y garantizan la seguridad.",
      linkedin: "https://www.linkedin.com/in/javier-riesco-aa778025/",
    },
    {
      image: "/persona2.jpg",
      title: "Jack Guzmán",
      subtitle: "Gerente de Operaciones",
      description:
        "Con una sólida trayectoria en operaciones aeroportuarias y atención al cliente en Latinoamérica, Jack ha potenciado la eficiencia operativa en entornos dinámicos. Su capacidad para crear procesos transformadores ha impulsado el crecimiento tangible de las organizaciones donde ha colaborado. La experiencia adquirida a lo largo de su carrera se traduce en soluciones efectivas dentro de Outcome Solution, alineadas con las necesidades específicas de nuestros aliados.",
      linkedin: "https://www.linkedin.com/in/jack-guzm%C3%A1n-90664a6b/",
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
            <div className="flex flex-col justify-between relative md:h-[256px] flex-1">
              <div>
                <h3 className="text-xl text-purple-600">{item.title}</h3>
                <h4 className="text-sm font-semibold text-white mb-2">{item.subtitle}</h4>
                <p className="text-white text-base">{item.description}</p>
              </div>

              {/* Ícono LinkedIn */}
              <div className="mt-4 md:mt-0 md:absolute md:bottom-0 md:left-0">
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                      2.239 5 5 5h14c2.761 0 5-2.239 
                      5-5v-14c0-2.761-2.239-5-5-5zm-11 
                      19h-3v-10h3v10zm-1.5-11.268c-.966 
                      0-1.75-.784-1.75-1.75s.784-1.75 
                      1.75-1.75 1.75.784 1.75 1.75-.784 
                      1.75-1.75 1.75zm13.5 
                      11.268h-3v-5.604c0-3.368-4-3.112-4 
                      0v5.604h-3v-10h3v1.528c1.396-2.586 
                      7-2.777 7 2.476v5.996z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

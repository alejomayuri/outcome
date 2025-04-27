export default function WhoWeAre() {
    const bloques = [
      {
        image: "/persona1.jpg",
        title: "Nombre 1",
        subtitle: "Rol o título",
        description: "Descripción breve de la persona o del rol que cumple dentro del equipo.",
      },
      {
        image: "/persona1.jpg",
        title: "Nombre 2",
        subtitle: "Rol o título",
        description: "Otra descripción breve de esta segunda persona o bloque.",
      },
    ];
  
    return (
      <section className="max-w-4xl mx-auto px-4 py-16">
        {/* Título principal */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Quiénes somos</h2>
          <p className="text-gray-700 text-lg">
            Somos un equipo apasionado que combina creatividad, estrategia y tecnología para ofrecer soluciones únicas.
          </p>
        </div>
  
        {/* Bloques de personas */}
        <div className="space-y-10">
          {bloques.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Imagen */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />
              {/* Texto */}
              <div>
                <h3 className="text-xl font-semibold text-purple-600">{item.title}</h3>
                <h4 className="text-sm text-gray-500 mb-2">{item.subtitle}</h4>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
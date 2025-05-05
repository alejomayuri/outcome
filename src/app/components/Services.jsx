// src/components/Services.jsx

export default function Services() {
    const services = [
      {
        title: "Infraestructura",
        image: "/servicio1.jpg",
        features: [
          "Limpieza y mantenimiento",
        ],
      },
      {
        title: "Seguridad y bienestar",
        image: "/servicio2.jpg",
        features: [
          "Seguridad y conserjería",
          "Atención al cliente",
          "Traslado de personal",
        ],
      },
      {
        title: "Operaciones Aeroportuarias",
        image: "/servicio3.jpg",
        features: [
          "Aviation Security",
          "Atención a personas con movilidad reducida",
        ],
      },
      {
        title: "Consultoría",
        image: "/servicio4.jpg",
        features: [
          "Asesorías especializadas"
        ],
      },
    ];
  
    return (
      <section id="servicios" className="max-w-6xl mx-auto px-4 py-2 md:py-4">
        <div className="mb-4 md:mb-8 text-left">
          <h2 className="text-2xl font-bold text-purple-600 ">SERVICIOS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-sm font-bold mb-2">{service.title}</h3>
                <ul className="list-none list-inside text-gray-600 space-y-1 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
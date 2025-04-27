// src/components/Services.jsx

export default function Services() {
    const services = [
      {
        title: "Servicio 1",
        image: "/servicio1.jpg",
        features: [
          "Característica A",
          "Característica B",
          "Característica C",
        ],
      },
      {
        title: "Servicio 2",
        image: "/servicio2.jpg",
        features: [
          "Característica A",
          "Característica B",
          "Característica C",
        ],
      },
      {
        title: "Servicio 3",
        image: "/servicio3.jpg",
        features: [
          "Característica A",
          "Característica B",
          "Característica C",
        ],
      },
      {
        title: "Servicio 4",
        image: "/servicio4.jpg",
        features: [
          "Característica A",
          "Característica B",
          "Característica C",
        ],
      },
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
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
  
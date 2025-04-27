// src/components/About.jsx

export default function About() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
            
                {/* Izquierda: Título y texto */}
                <div className="md:w-1/2">
                    <h2 className="text-purple-600 text-3xl font-bold mb-6">¿Qué hacemos?</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                    Ofrecemos soluciones a medida adaptadas a las necesidades de cada cliente,
                    combinando flexibilidad, innovación y calidad en cada proyecto que desarrollamos.
                    </p>
                </div>
        
                {/* Derecha: Imagen */}
                <div className="md:w-1/2">
                    <img 
                    src="/about-image.jpg" 
                    alt="Sobre nosotros" 
                    className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
  }
  
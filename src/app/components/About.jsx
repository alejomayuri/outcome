// src/components/About.jsx

export default function About() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
            
                {/* Izquierda: Título y texto */}
                <div className="md:w-1/2">
                    <h2 className="text-purple-600 text-2xl font-bold mb-4">¿QUÉ HACEMOS?</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Nos especializamos en diseñar y ejecutar soluciones que
                        responden con agilidad y precisión a los desafíos de cada
                        socio. Como aliados estratégicos, fortalecemos tus
                        operaciones en Latinoamérica con un enfoque sólido y un
                        compromiso constante con la excelencia.
                    </p>
                </div>
        
                {/* Derecha: Imagen */}
                <div className="md:w-1/2">
                    <img 
                    src="/about-image.jpg" 
                    alt="Sobre nosotros" 
                    className="shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
  }
  
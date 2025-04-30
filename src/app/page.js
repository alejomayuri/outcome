import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pilares from "./components/pilares/Pilares";
import WhoWeAre from "./components/WhoWeAre";
import ContactForm from "./components/ContactForm";
import Recruitment from "./components/Recruitment";

export default function Home() {
  return (
    <main className="bg-white font-sans text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Qué ofrecemos */}
      <div className="md:pt-30">
        <About/>
      </div>
      {/* Servicios */}
      <Services />

      {/* Pilares */}
      <Pilares />
      <div className="bg-black w-full relative pb-50">
        {/* Quiénes somos */}
        <WhoWeAre />

        {/* Contacto */}
        <ContactForm />
      </div>

      {/* Reclutamiento */}
      <div className="pt-50">
        <Recruitment />
      </div>

      {/* Espacio para el contenido adicional */}

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center">
        <div className="w-full bg-black text-white">
          <p className="text-md font-bold text-purple-600 py-4">
            JUNTOS, LLEVAMOS LA OPERACIÓN DE TU EMPRESA AL SIGUIENTE NIVEL
          </p>
          <div className="flex bg-purple-600 justify-center py-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12"
              style={{ filter: 'brightness(0) saturate(100%)' }}
            />
          </div>
        </div>
      </footer>
    </main>
  );
}

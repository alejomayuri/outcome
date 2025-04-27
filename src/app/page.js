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
      <About/>

      {/* Servicios */}
      <Services />

      {/* Pilares */}
      <Pilares />

      {/* Quiénes somos */}
      <WhoWeAre />

      {/* Contacto */}
      <ContactForm />

      {/* Reclutamiento */}
      <Recruitment />

      {/* Espacio para el contenido adicional */}

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center py-6">
        <div className="font-semibold">outcome.solution</div>
        <p className="text-sm mt-2">© 2024 Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

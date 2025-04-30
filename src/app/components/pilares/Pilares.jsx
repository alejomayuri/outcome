'use client';

import './pilares.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // 👈 quitamos Navigation
import 'swiper/css';
import 'swiper/css/pagination';

export default function Pilares() {
  const pilares = [
    {
      title: "Transformamos servicios en <span class='text-purple-600'>soluciones estratégicas</span>",
      image: "/pilar1.jpg",
      description: "Cada proyecto es único. Nos acercamos con trato directo y analizamos a fondo las necesidades de nuestros socios. Respondemos con agilidad, ofreciendo soluciones efectivas y personalizadas en infraestructura, seguridad y bienestar, operaciones aeroportuarias y consultoría.",
    },
    {
      title: "Excelencia operativa como <span class='text-purple-600'>estándar</span>",
      image: "/servicio3.jpg",
      description: "La confianza de nuestros aliados es esencial. Superamos expectativas con eficacia, acompañamiento continuo y comunicación clara. Cada servicio es una oportunidad para innovar, optimizar procesos y aportar valor tangible.",
    },
    {
      title: "Personas al centro de <span class='text-purple-600'>nuestras operaciones</span>",
      image: "/pilar1.jpg",
      description: "Nuestro equipo impulsa cada resultado. Contamos con profesionales comprometidos, minuciosos y resolutivos. Cuidar a las personas es clave para alcanzar resultados sostenibles y responder a cada requerimiento con calidad.",
    },
    {
      title: "Crecemos junto a <span class='text-purple-600'>nuestros socios</span>",
      image: "/servicio3.jpg",
      description: "Nos adaptamos constantemente. Buscamos mejorar procesos y enriquecer la experiencia de quienes confían en nosotros. Cada servicio fortalece vínculos y potencia el éxito compartido.",
    },
  ];

  return (
    <section id="pilares" className="max-w-6xl mx-auto px-4 py-8 md:py-16">
      <div className=" text-left">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">NUESTROS PILARES</h2>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className='pilares-swiper'
      >
        {pilares.map((pilar, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-10 p-3 md:p-6 bg-white rounded-xl border-l-2 border-b-3 border-gray-300">
              {/* Texto a la izquierda */}
              <div className="md:w-1/2">
                <h3
                  dangerouslySetInnerHTML={{ __html: pilar.title }}
                  className="text-2xl font-bold mb-4 max-w-[320px]"
                />
                <p className="text-gray-700 text-lg leading-[25px]">
                  {pilar.description}
                </p>
              </div>
          
              {/* Imagen a la derecha */}
              <div className="md:w-1/2 h-64 overflow-hidden rounded-lg">
                <img
                  src={pilar.image}
                  alt={pilar.title}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

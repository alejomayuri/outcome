'use client';

import './pilares.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // 👈 quitamos Navigation
import 'swiper/css';
import 'swiper/css/pagination';

export default function Pilares() {
  const pilares = [
    {
      title: "Pilar 1",
      image: "/pilar1.jpg",
      description: "Texto descriptivo para el pilar número uno.",
    },
    {
      title: "Pilar 2",
      image: "/servicio3.jpg",
      description: "Texto descriptivo para el pilar número dos.",
    },
    {
      title: "Pilar 3",
      image: "/pilar1.jpg",
      description: "Texto descriptivo para el pilar número tres.",
    },
    {
      title: "Pilar 4",
      image: "/servicio3.jpg",
      description: "Texto descriptivo para el pilar número cuatro.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {pilares.map((pilar, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Texto a la izquierda */}
              <div className="md:w-1/2">
                <h3 className="text-purple-600 text-3xl font-bold mb-4">{pilar.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {pilar.description}
                </p>
              </div>

              {/* Imagen a la derecha */}
              <div className="md:w-1/2">
                <img 
                  src={pilar.image} 
                  alt={pilar.title} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

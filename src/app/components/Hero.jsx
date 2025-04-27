export default function Hero() {
    return (
      <section className="relative">
        <img src="/hero-image.jpg" alt="Hero" className="w-full h-auto" />
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-black text-white px-10 py-6 w-full max-w-2xl shadow-lg border-t-20 border-purple-500">
          <div className="max-w-[460px] ">
            <h1 className="text-2xl md:text-4xl text-left tracking-widest">
              Confianza, flexibilidad, y agilidad:{" "}
              <span className="text-purple-500 font-bold tracking-wide">creamos soluciones a medida</span>
            </h1>
          </div>
        </div>
      </section>
    );
  }
  
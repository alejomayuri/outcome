export default function Hero() {
    return (
      <section className="relative">
        <img src="/hero-image.jpg" alt="Hero" className="w-full h-auto" />
        <div className="md:absolute left-1/2 bottom-0 md:transform md:-translate-x-1/2 md:translate-y-1/2 bg-black text-white px-6 md:px-10 py-6 w-full max-w-[700px] shadow-lg border-t-20 border-purple-500">
          <div className="max-w-[510px] m-auto text-center">
            <h1 className="text-2xl md:text-5xl text-left md:leading-[50px]">
              Confianza, flexibilidad y agilidad:{" "}
              <span className="text-purple-500 font-bold tracking-wide">creamos soluciones a medida</span>
            </h1>
          </div>
        </div>
      </section>
    );
  }
  
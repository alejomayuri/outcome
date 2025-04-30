'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Gracias() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5); // segundos hasta redirección

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <div className="bg-white text-black rounded-3xl shadow-xl max-w-xl w-full p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
          ¡Gracias por tu mensaje!
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Nos pondremos en contacto contigo pronto.
        </p>
        <Link
          href="/"
          className="inline-block font-bold text-white bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg mb-4"
        >
          Volver a la página principal
        </Link>
        <p className="text-sm text-gray-500">
          Redirigiendo en <span className="font-semibold">{countdown}</span> segundos...
        </p>
      </div>
    </div>
  );
}

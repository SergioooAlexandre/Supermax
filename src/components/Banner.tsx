import React from 'react';

export default function Banner() {
  return (
    <section className="relative bg-gray-900 text-white py-28 mt-16 shadow-inner overflow-hidden" id="banner">
      <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-90"></div>
      <div className="relative container mx-auto px-6 text-center flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight max-w-3xl">
          O Supermercado <br className="hidden md:block" /> da sua Família
        </h1>
        <p className="mb-10 text-lg md:text-xl text-gray-200 max-w-2xl font-medium">
          As melhores marcas, frescor garantido e entrega expressa. Tudo o que você precisa a um clique de distância.
        </p>
        <a
          href="#offers"
          className="inline-block bg-white hover:bg-gray-100 text-red-700 font-extrabold px-10 py-4 rounded-full transition transform hover:-translate-y-1 shadow-xl text-lg uppercase tracking-wider"
        >
          Aproveitar Ofertas
        </a>
      </div>
    </section>
  );
}

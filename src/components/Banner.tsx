import React from 'react';

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-red-900 text-white py-32 mt-16 shadow-inner overflow-hidden" id="banner">
      <div className="relative container mx-auto px-6 text-left flex flex-col justify-center z-10 h-full">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight max-w-3xl drop-shadow-lg text-white">
          O Supermercado <br /> da Sua Família
        </h1>
        <p className="mb-8 text-lg md:text-2xl text-gray-200 max-w-2xl font-medium drop-shadow-md leading-relaxed">
          Ofertas, qualidade e entrega rápida em Propriá e região.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="#offers"
            className="inline-block text-center bg-transparent border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-500 font-black px-10 py-4 rounded-xl transition transform hover:-translate-y-1 shadow-lg text-lg uppercase tracking-wider"
          >
            Ver Ofertas
          </a>
          <a
            href="#categories"
            className="inline-block text-center bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-xl transition transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(220,38,38,0.4)] text-lg uppercase tracking-wider"
          >
            Fazer Pedido
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm sm:text-base font-bold text-gray-300">
          <span className="flex items-center gap-2"><span className="text-red-500">✓</span> Entrega rápida</span>
          <span className="flex items-center gap-2"><span className="text-red-500">✓</span> Pix</span>
          <span className="flex items-center gap-2"><span className="text-red-500">✓</span> Cartão</span>
          <span className="flex items-center gap-2"><span className="text-red-500">✓</span> Atendimento local</span>
        </div>
      </div>
    </section>
  );
}

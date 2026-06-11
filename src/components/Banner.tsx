import React from 'react';

export default function Banner() {
  return (
    <section className="relative bg-black text-white py-36 mt-16 shadow-inner overflow-hidden" id="banner">
      {/* Imagem de Fundo de Supermercado Real com Overlay Escuro */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/80 to-transparent"></div>
      
      <div className="relative container mx-auto px-6 text-left flex flex-col justify-center z-10 h-full">
        <span className="text-red-500 font-extrabold tracking-widest uppercase mb-4 text-sm md:text-base">Entregamos em Propriá e região</span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight max-w-2xl drop-shadow-lg">
          O Supermercado <br /> da Sua Família
        </h1>
        <p className="mb-10 text-lg md:text-2xl text-gray-300 max-w-xl font-medium drop-shadow-md leading-relaxed">
          As melhores ofertas em hortifrúti, carnes, bebidas e mercearia sem sair de casa.
        </p>
        <div className="flex gap-4">
          <a
            href="#offers"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-extrabold px-10 py-4 rounded-xl transition transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(220,38,38,0.4)] text-lg uppercase tracking-wider"
          >
            Ofertas da Semana
          </a>
          <a
            href="#categories"
            className="inline-block bg-gray-900/80 backdrop-blur border border-gray-700 hover:bg-white hover:text-black hover:border-white text-white font-extrabold px-8 py-4 rounded-xl transition transform hover:-translate-y-1 shadow-lg text-lg uppercase tracking-wider hidden sm:inline-block"
          >
            Departamentos
          </a>
        </div>
      </div>
    </section>
  );
}

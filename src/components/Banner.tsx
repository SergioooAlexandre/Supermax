import React from 'react';

export default function Banner() {
  return (
    <section className="relative w-full h-[550px] md:h-[600px] mt-16 bg-[#111111] text-white overflow-hidden flex items-center" id="banner">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] hover:scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80')" 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-transparent z-10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full z-20 text-left flex flex-col justify-center animate-fade-in">
        <span className="inline-block text-[#dc2626] font-extrabold tracking-widest uppercase mb-4 text-xs md:text-sm bg-[#dc2626]/10 px-3.5 py-1.5 rounded-full w-max border border-[#dc2626]/20">
          ✓ Propriá e Região
        </span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight max-w-2xl drop-shadow-md text-white">
          SuperMax <span className="text-[#dc2626]">Delivery</span>
        </h1>
        <p className="mb-10 text-lg md:text-2xl text-gray-200 max-w-xl font-medium drop-shadow-sm leading-relaxed">
          As melhores ofertas do mercado sem sair de casa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#offers"
            className="inline-block text-center bg-[#dc2626] hover:bg-[#b91c1c] text-white font-extrabold px-10 py-4.5 rounded-xl transition transform hover:-translate-y-1 shadow-[0_8px_25px_rgba(220,38,38,0.4)] active:scale-95 text-lg uppercase tracking-wider"
          >
            Ver Ofertas
          </a>
        </div>
      </div>
    </section>
  );
}

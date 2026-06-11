import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-gray-900 text-white" id="about">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">Sobre a <span className="text-red-600">SuperMax</span></h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-10 rounded-full"></div>
        <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed mb-6">
          Sua rede de supermercados online com a confiabilidade e preços de atacado que você procura, agora na palma da sua mão.
        </p>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Nascemos com a missão de democratizar o acesso a produtos de alta qualidade, desde frutas frescas até as melhores carnes e bebidas, sempre garantindo uma entrega rápida e atendimento excepcional. 
        </p>
      </div>
    </section>
  );
}

import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="about">
      {/* Elemento de decoração abstrato */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-red-600 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-red-800 rounded-full opacity-10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">Tradição em <span className="text-red-600">Propriá e Região</span></h2>
        <div className="w-24 h-1.5 bg-red-600 mx-auto mb-10 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
        
        <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed mb-8">
          Nascemos no coração de Sergipe com um propósito: simplificar a vida da sua família, entregando qualidade de supermercado atacadista direto na porta da sua casa.
        </p>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          O SuperMax une a modernidade de um e-commerce rápido e inteligente ao calor humano do atendimento local. 
          Garantimos carnes frescas selecionadas, produtos de limpeza, hortifrúti de produtores da região e tudo o que você precisa no dia a dia.
        </p>
      </div>
    </section>
  );
}

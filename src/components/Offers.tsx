import React from 'react';

const offers = [
  { title: 'Festival de Carnes com até 30% OFF', label: 'Especial Açougue' },
  { title: 'Bebidas Geladas para o Final de Semana', label: 'Bebidas' },
  { title: 'Hortifruti Fresquinho: Leve 3 Pague 2', label: 'Oferta Relâmpago' },
];

export default function Offers() {
  return (
    <section className="py-20 bg-gray-100" id="offers">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Ofertas Imperdíveis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-md bg-white transform transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col group border border-gray-200"
            >
              <div className="h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="text-white font-extrabold text-2xl uppercase tracking-widest z-10 text-center px-4">{offer.label}</span>
              </div>
              <div className="p-8 text-center flex-grow flex flex-col justify-between border-t-4 border-gray-900">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{offer.title}</h3>
                <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 px-6 rounded-xl transition shadow-md uppercase tracking-wider text-sm">
                  Aproveitar Oferta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

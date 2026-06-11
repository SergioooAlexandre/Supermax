import React from 'react';
import { CheckBadgeIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const benefits = [
  { icon: CheckBadgeIcon, title: 'Qualidade Excepcional', description: 'Produtos frescos selecionados com o mais alto rigor.' },
  { icon: TruckIcon, title: 'Entrega Expressa', description: 'Receba suas compras na porta de casa no mesmo dia.' },
  { icon: ShieldCheckIcon, title: 'Pagamento Seguro', description: 'Diversas formas de pagamento online ou na entrega com total segurança.' }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
          Vantagens SuperMax
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-2xl shadow-sm text-center transform transition duration-300 hover:scale-105 hover:shadow-lg border border-gray-100"
            >
              <div className="bg-red-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-inner mb-6 border border-red-100">
                <b.icon className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{b.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { FaTruck, FaCreditCard, FaShoppingBasket, FaStar } from 'react-icons/fa';

const trustItems = [
  { icon: FaTruck, title: 'Entrega Rápida', desc: 'Na sua porta em minutos' },
  { icon: FaCreditCard, title: 'Pix e Cartão', desc: 'Pague como preferir' },
  { icon: FaShoppingBasket, title: 'Selecionados', desc: 'Qualidade garantida' },
  { icon: FaStar, title: 'Atendimento Local', desc: 'Suporte humanizado' }
];

export default function Benefits() {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 flex items-center space-x-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 text-red-600">
                <item.icon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.title}</h4>
                <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

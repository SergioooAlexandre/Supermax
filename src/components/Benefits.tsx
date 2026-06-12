import React from 'react';
import { FaTruck, FaCreditCard, FaLock, FaPhoneAlt } from 'react-icons/fa';

const trustItems = [
  { icon: FaTruck, title: 'Entrega Rápida', desc: 'Receba suas compras em minutos no conforto do lar' },
  { icon: FaCreditCard, title: 'Pix e Cartão', desc: 'Diversas formas de pagamento facilitadas' },
  { icon: FaLock, title: 'Compra Segura', desc: 'Seus dados e transações 100% protegidos' },
  { icon: FaPhoneAlt, title: 'Atendimento Local', desc: 'Suporte humanizado e atencioso via WhatsApp' }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white border-b border-gray-100" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, idx) => (
            <div key={idx} className="bg-[#f5f5f5] rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#dc2626] shadow-sm">
                <item.icon size={24} />
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h4 className="font-extrabold text-gray-900 text-base mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

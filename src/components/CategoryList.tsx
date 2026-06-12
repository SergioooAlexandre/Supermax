import React from 'react';
import { FaDrumstickBite, FaBeer, FaAppleAlt, FaCheese, FaBreadSlice, FaSoap } from 'react-icons/fa';

const categories = [
  { name: 'Carnes', icon: FaDrumstickBite, color: 'bg-red-50 text-[#dc2626]' },
  { name: 'Bebidas', icon: FaBeer, color: 'bg-orange-50 text-orange-600' },
  { name: 'Frutas', icon: FaAppleAlt, color: 'bg-green-50 text-green-600' },
  { name: 'Laticínios', icon: FaCheese, color: 'bg-yellow-50 text-yellow-600' },
  { name: 'Padaria', icon: FaBreadSlice, color: 'bg-amber-50 text-amber-600' },
  { name: 'Limpeza', icon: FaSoap, color: 'bg-blue-50 text-blue-600' }
];

export default function CategoryList() {
  return (
    <section className="py-20 bg-[#f5f5f5]" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-12 tracking-tight text-center md:text-left">Compre por Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, idx) => (
            <a
              href={`#${category.name.toLowerCase()}`}
              key={idx}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${category.color}`}>
                <category.icon size={30} />
              </div>
              <span className="font-extrabold text-gray-800 group-hover:text-[#dc2626] transition-colors text-base tracking-wide uppercase">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

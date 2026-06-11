import React from 'react';

const categories = [
  { name: 'Açougue' },
  { name: 'Hortifruti' },
  { name: 'Padaria' },
  { name: 'Bebidas' },
  { name: 'Mercearia' },
  { name: 'Limpeza' }
];

export default function CategoryList() {
  return (
    <section className="py-20 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 tracking-tight text-center md:text-left">Compre por Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, idx) => (
            <a
              href={`#${category.name.toLowerCase()}`}
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 aspect-square flex items-center justify-center bg-gray-900 border-2 border-transparent hover:border-red-600"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-center p-4 font-black text-white text-xl tracking-wider drop-shadow-md group-hover:text-red-500 transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

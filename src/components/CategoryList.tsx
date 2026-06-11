import React from 'react';

const categories = [
  { name: 'Açougue', icon: '🥩', color: 'bg-red-50 text-red-600 border-red-100' },
  { name: 'Hortifruti', icon: '🍎', color: 'bg-green-50 text-green-600 border-green-100' },
  { name: 'Padaria', icon: '🥖', color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { name: 'Bebidas', icon: '🍷', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { name: 'Mercearia', icon: '🥫', color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  { name: 'Limpeza', icon: '🧼', color: 'bg-blue-50 text-blue-600 border-blue-100' }
];

export default function CategoryList() {
  return (
    <section className="py-16 bg-gray-50" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">Compre por Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, idx) => (
            <a
              href={`#${category.name.toLowerCase()}`}
              key={idx}
              className={`flex flex-col items-center justify-center p-6 bg-white rounded-2xl hover:bg-gray-100 border transition duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer group ${category.color}`}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 shadow-sm bg-white group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

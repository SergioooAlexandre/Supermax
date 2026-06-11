import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Picanha Maturada', price: 69.90, unit: 'kg', category: 'Açougue', color: 'bg-red-100 text-red-800' },
  { id: 2, name: 'Cerveja Heineken LATA', price: 5.49, unit: 'un', category: 'Bebidas', color: 'bg-gray-200 text-gray-800' },
  { id: 3, name: 'Arroz Branco 5kg', price: 28.90, unit: 'pct', category: 'Mercearia', color: 'bg-yellow-100 text-yellow-800' },
  { id: 4, name: 'Detergente Líquido', price: 2.29, unit: 'un', category: 'Limpeza', color: 'bg-blue-100 text-blue-800' },
];

export default function FeaturedProducts() {
  const { addItem } = useCart();

  return (
    <section className="py-20 bg-white" id="featured">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Produtos em Destaque</h2>
          <a href="#categories" className="text-red-600 font-semibold hover:text-red-800 transition">Ver todos &rarr;</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
              <div className="h-48 bg-gray-50 flex items-center justify-center relative p-6 border-b border-gray-100">
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${product.color}`}>
                  {product.category}
                </div>
                <div className="w-24 h-24 bg-white shadow-sm rounded-full flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                   <span className="text-4xl">🛒</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">{product.name}</h3>
                  <div className="flex items-baseline space-x-1 mb-6">
                    <span className="text-2xl font-black text-red-600">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                    <span className="text-gray-500 font-medium text-sm">/{product.unit}</span>
                  </div>
                </div>
                <button
                  onClick={() => addItem({ id: product.id, name: product.name, price: product.price, quantity: 1, image: '' })}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-colors duration-300 flex justify-center items-center space-x-2"
                >
                  <span className="text-xl leading-none">+</span>
                  <span>Comprar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

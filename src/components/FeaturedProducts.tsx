import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { 
    id: 1, 
    name: 'Arroz Castelão Tipo 1 5kg', 
    price: 28.90, 
    unit: 'pct', 
    category: 'Mercearia', 
    color: 'bg-yellow-100 text-yellow-800',
    image: '/images/arroz.png'
  },
  { 
    id: 2, 
    name: 'Feijão Carioca Pantera 1kg', 
    price: 7.99, 
    unit: 'un', 
    category: 'Mercearia', 
    color: 'bg-yellow-100 text-yellow-800',
    image: '/images/feijao.png'
  },
  { 
    id: 3, 
    name: 'Coca-Cola Original 2L', 
    price: 9.99, 
    unit: 'un', 
    category: 'Bebidas', 
    color: 'bg-red-100 text-red-800',
    image: '/images/coca.png'
  },
  { 
    id: 4, 
    name: 'Picanha Bovina', 
    price: 69.90, 
    unit: 'kg', 
    category: 'Açougue', 
    color: 'bg-red-100 text-red-800',
    image: '/images/picanha.png'
  },
];

export default function FeaturedProducts() {
  const { addItem } = useCart();

  return (
    <section className="py-20 bg-gray-50" id="featured">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Mais Vendidos</h2>
          <a href="#categories" className="text-red-600 font-bold hover:text-red-800 transition text-sm md:text-base">Ver todos &rarr;</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col min-h-[420px]">
              
              <div className="h-[220px] w-full bg-white relative border-b border-gray-100 flex-shrink-0 flex items-center justify-center">
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider z-10 shadow-sm ${product.color}`}>
                  {product.category}
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                  style={{ padding: '12px', backgroundColor: 'white', objectFit: 'contain' }}
                />
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline space-x-1 mb-5">
                    <span className="text-3xl font-black text-gray-900">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                    <span className="text-gray-500 font-medium text-sm">/{product.unit}</span>
                  </div>
                </div>
                <button
                  onClick={() => addItem({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-4 rounded-xl transition-all duration-300 flex justify-center items-center space-x-2 shadow-[0_4px_14px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] active:scale-95 text-sm md:text-base uppercase tracking-wider mt-auto"
                >
                  <span className="text-xl leading-none">+</span>
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

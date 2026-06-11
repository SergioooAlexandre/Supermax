import React from 'react';
import { useCart } from '../context/CartContext';

const offers = [
  { 
    id: 10,
    title: 'Leite Integral 1L', 
    oldPrice: 7.99,
    price: 5.49,
    unit: 'un',
    discount: '-31%',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80'
  },
  { 
    id: 11,
    title: 'Feijão Carioca Tipo 1 1kg', 
    oldPrice: 10.50,
    price: 7.99,
    unit: 'pct',
    discount: '-23%',
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?auto=format&fit=crop&w=500&q=80'
  },
  { 
    id: 12,
    title: 'Sabão em Pó Ação Profunda 1.6kg', 
    oldPrice: 24.90,
    price: 18.90,
    unit: 'cx',
    discount: '-24%',
    image: 'https://images.unsplash.com/photo-1584820927498-cafe4c12695f?auto=format&fit=crop&w=500&q=80'
  },
];

export default function Offers() {
  const { addItem } = useCart();

  return (
    <section className="py-24 bg-red-600" id="offers">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase drop-shadow-md">
            🔥 Ofertas da Semana
          </h2>
          <p className="text-red-100 font-medium text-lg mt-4 md:mt-0">Descontos exclusivos por tempo limitado!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-2xl overflow-hidden shadow-2xl bg-white transform transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col group relative border-4 border-transparent hover:border-yellow-400"
            >
              {/* Selo de Desconto */}
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 font-black px-4 py-1.5 rounded-full z-10 shadow-md text-sm uppercase tracking-wider">
                {offer.discount} OFF
              </div>

              {/* Imagem do Produto */}
              <div className="h-64 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Detalhes e Preço */}
              <div className="p-8 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {offer.title}
                  </h3>
                  <div className="flex flex-col mb-6">
                    <span className="text-gray-400 line-through text-sm font-bold">
                      De: R$ {offer.oldPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-black text-red-600">R$ {offer.price.toFixed(2).replace('.', ',')}</span>
                      <span className="text-gray-500 font-medium text-sm">/{offer.unit}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => addItem({ id: offer.id, name: offer.title, price: offer.price, quantity: 1, image: offer.image })}
                  className="w-full bg-gray-900 hover:bg-black text-white font-extrabold py-4 px-6 rounded-xl transition-all shadow-md uppercase tracking-widest text-sm hover:shadow-xl active:scale-95"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

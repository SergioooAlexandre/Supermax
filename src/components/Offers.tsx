import React from 'react';
import { useCart } from '../context/CartContext';

const offers = [
  { 
    id: 10,
    title: 'Heineken Lata 350ml', 
    oldPrice: 7.50,
    price: 5.49,
    unit: 'un',
    discount: '-26%',
    image: '/images/heineken.png'
  },
  { 
    id: 11,
    title: 'Sabão em Pó OMO', 
    oldPrice: 24.90,
    price: 18.90,
    unit: 'cx',
    discount: '-24%',
    image: '/images/omo.png'
  },
  { 
    id: 12,
    title: 'Leite Piracanjuba 1L', 
    oldPrice: 7.99,
    price: 5.49,
    unit: 'un',
    discount: '-31%',
    image: '/images/leite.png'
  },
];

export default function Offers() {
  const { addItem } = useCart();

  return (
    <section className="py-24 bg-[#dc2626]" id="offers">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase drop-shadow-md text-center md:text-left">
            🔥 Ofertas da Semana
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group flex flex-col min-h-[440px] relative"
            >
              {/* Discount Tag */}
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 font-black px-4.5 py-2 rounded-xl z-10 shadow-md text-xs uppercase tracking-wider">
                {offer.discount} OFF
              </div>

              {/* Product Image Area */}
              <div className="h-[240px] w-full bg-white relative overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
                />
              </div>

              {/* Product Details & Purchase Button */}
              <div className="p-5 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-extrabold text-gray-800 mb-2 group-hover:text-[#dc2626] transition-colors line-clamp-2 leading-snug min-h-[48px]">
                    {offer.title}
                  </h3>
                  <div className="flex flex-col mb-4">
                    <span className="text-gray-400 line-through text-xs sm:text-sm font-bold">
                      De: R$ {offer.oldPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <div className="flex items-baseline space-x-1 mt-1">
                      <span className="text-3xl md:text-4xl font-black text-[#dc2626] drop-shadow-sm">R$ {offer.price.toFixed(2).replace('.', ',')}</span>
                      <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">/{offer.unit}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => addItem({ id: offer.id, name: offer.title, price: offer.price, quantity: 1, image: offer.image })}
                  className="w-full bg-[#111111] hover:bg-black text-white font-extrabold py-3.5 px-4 rounded-xl transition-all shadow-md uppercase tracking-wider text-sm md:text-base hover:shadow-xl active:scale-95 mt-auto flex justify-center items-center gap-2"
                >
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

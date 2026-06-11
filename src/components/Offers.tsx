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
    <section className="py-20 bg-red-600" id="offers">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase drop-shadow-md text-center md:text-left">
            🔥 Ofertas da Semana
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-2xl overflow-hidden shadow-2xl bg-white transform transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col group relative min-h-[420px]"
            >
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 font-black px-4 py-1.5 rounded-full z-10 shadow-md text-sm uppercase tracking-wider">
                {offer.discount} OFF
              </div>

              <div className="h-[220px] w-full bg-white relative flex-shrink-0 border-b border-gray-100 flex items-center justify-center">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-contain"
                  style={{ padding: '12px', backgroundColor: 'white', objectFit: 'contain' }}
                />
              </div>

              <div className="p-5 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {offer.title}
                  </h3>
                  <div className="flex flex-col mb-4">
                    <span className="text-gray-400 line-through text-sm md:text-base font-bold">
                      De: R$ {offer.oldPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <div className="flex items-baseline space-x-1 mt-1">
                      <span className="text-3xl md:text-4xl font-black text-red-600 drop-shadow-sm">R$ {offer.price.toFixed(2).replace('.', ',')}</span>
                      <span className="text-gray-500 font-medium text-sm">/{offer.unit}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => addItem({ id: offer.id, name: offer.title, price: offer.price, quantity: 1, image: offer.image })}
                  className="w-full bg-gray-900 hover:bg-black text-white font-extrabold py-3.5 px-4 rounded-xl transition-all shadow-md uppercase tracking-wider text-sm md:text-base hover:shadow-xl active:scale-95 mt-auto flex justify-center items-center gap-2"
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

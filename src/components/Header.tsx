import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaSearch, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import CartUI from './CartUI';

const Header: React.FC = () => {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg z-50 text-white">
        {/* Top Bar for WhatsApp / Contact info */}
        <div className="bg-red-700 py-1 px-4 text-xs font-semibold tracking-wider flex justify-between items-center hidden sm:flex">
          <span className="text-red-100">🛒 Compre online, receba em casa!</span>
          <a href="https://wa.me/557999999999" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-red-200 transition">
            <FaWhatsapp />
            <span>(79) 99999-9999 - Atendimento WhatsApp</span>
          </a>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
          <a href="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black shadow-sm group-hover:bg-red-700 transition-colors">SM</div>
            <span className="text-2xl font-extrabold tracking-tight">Super<span className="text-red-600">Max</span></span>
          </a>
          
          <nav className="hidden md:flex space-x-8 font-medium">
            <a href="/" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#offers" className="hover:text-red-500 transition-colors">Ofertas 🔥</a>
            <a href="#categories" className="hover:text-red-500 transition-colors">Departamentos</a>
            <a href="#benefits" className="hover:text-red-500 transition-colors">Vantagens</a>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="relative hover:text-red-500 transition-colors" aria-label="Buscar produtos">
              <FaSearch className="w-6 h-6" />
            </button>
            <button onClick={() => setIsCartOpen(true)} className="relative hover:text-red-500 transition-colors" aria-label="Carrinho de compras">
              <FaShoppingCart className="w-6 h-6" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white font-bold rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-sm">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>

          <button className="md:hidden hover:text-red-500 transition-colors" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Floating WhatsApp button */}
      <a href="https://wa.me/557999999999" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:bg-green-600 transition-all transform hover:-translate-y-2 hover:scale-110 z-40 flex items-center justify-center animate-bounce" aria-label="WhatsApp SuperMax">
        <FaWhatsapp className="w-7 h-7" />
      </a>
      
      <CartUI isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;

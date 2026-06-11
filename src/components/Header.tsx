import React from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaSearch, FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  const { items } = useCart();
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg z-50 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <a href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black shadow-sm group-hover:bg-red-700 transition-colors">SM</div>
          <span className="text-2xl font-extrabold tracking-tight">Super<span className="text-red-600">Max</span></span>
        </a>
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="/" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#offers" className="hover:text-red-500 transition-colors">Ofertas</a>
          <a href="#categories" className="hover:text-red-500 transition-colors">Categorias</a>
          <a href="#benefits" className="hover:text-red-500 transition-colors">Vantagens</a>
        </nav>
        <div className="flex items-center space-x-6">
          <button className="relative hover:text-red-500 transition-colors" aria-label="Buscar produtos">
            <FaSearch className="w-6 h-6" />
          </button>
          <a href="/cart" className="relative hover:text-red-500 transition-colors" aria-label="Carrinho de compras">
            <FaShoppingCart className="w-6 h-6" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white font-bold rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-sm">
                {totalQuantity}
              </span>
            )}
          </a>
        </div>
        <button className="md:hidden hover:text-red-500 transition-colors" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <a href="https://wa.me/557999999999" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-red-600 text-white rounded-full p-4 shadow-xl hover:bg-red-700 transition-all transform hover:scale-110 z-50 flex items-center justify-center" aria-label="WhatsApp SuperMax">
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </header>
  );
};

export default Header;

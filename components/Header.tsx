import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaSearch, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/supermax_logo.png';

const Header: React.FC = () => {
  const { items } = useCart();
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/* Placeholder logo; replace with real asset when available */}
          <div className="h-10 w-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
            SM
          </div>
          <span className="text-2xl font-bold text-green-600">SuperMax</span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition">Home</Link>
          <Link to="/categories" className="text-gray-700 hover:text-green-600 transition">Categorias</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600 transition">Sobre Nós</Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 transition">Contato</Link>
        </nav>
        {/* Search + Cart */}
        <div className="flex items-center space-x-4">
          <button className="relative text-gray-600 hover:text-green-600 transition" aria-label="Buscar produtos">
            <FaSearch size={20} />
          </button>
          <Link to="/cart" className="relative text-gray-600 hover:text-green-600 transition" aria-label="Carrinho de compras">
            <FaShoppingCart size={20} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
        {/* Mobile menu toggle – placeholder */}
        <button className="md:hidden text-gray-600 hover:text-green-600" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/557999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition"
        aria-label="WhatsApp SuperMax"
      >
        <FaWhatsapp size={24} />
      </a>
    </header>
  );
};

export default Header;

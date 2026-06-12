import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaClock, FaCreditCard, FaBarcode } from 'react-icons/fa';
import { MdPix } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-8 border-t-[8px] border-red-600" id="footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Coluna 1: Marca e Endereço */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-lg">SM</div>
            <span className="text-3xl font-extrabold tracking-tight">Super<span className="text-red-600">Max</span></span>
          </div>
          <p className="text-gray-400 leading-relaxed font-medium">
            O supermercado inteligente, moderno e com os melhores preços. A sua compra do mês feita em minutos.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/sergioooalexandre" target="_blank" rel="noopener noreferrer" title="Instagram @sergioooalexandre" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1"><FaInstagram size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook - SuperMax Delivery" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1"><FaFacebookF size={18} /></a>
            <a href="https://wa.me/5579998832814" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1"><FaWhatsapp size={18} /></a>
          </div>
        </div>

        {/* Coluna 2: Contato e Endereço */}
        <div className="space-y-6">
          <h4 className="text-lg font-black text-white uppercase tracking-widest border-b-2 border-red-600 inline-block pb-1">Atendimento</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li className="flex items-start space-x-3">
              <FaWhatsapp className="text-green-500 mt-1 flex-shrink-0" size={18} />
              <a href="https://wa.me/5579998832814" className="hover:text-red-500 transition">(79) 99883-2814</a>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span>Centro<br/>Propriá - SE<br/>Área de entrega: Propriá e região</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaClock className="text-blue-400 mt-1 flex-shrink-0" size={18} />
              <span>Seg a Sáb: 08h às 20h<br/>Dom: 08h às 13h</span>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Links Úteis */}
        <div className="space-y-6">
          <h4 className="text-lg font-black text-white uppercase tracking-widest border-b-2 border-red-600 inline-block pb-1">Institucional</h4>
          <ul className="space-y-3 text-gray-400 font-medium flex flex-col">
            <a href="/" className="hover:text-red-500 hover:translate-x-1 transition-all w-max">Início</a>
            <a href="#offers" className="hover:text-red-500 hover:translate-x-1 transition-all w-max">Promoções</a>
            <a href="#categories" className="hover:text-red-500 hover:translate-x-1 transition-all w-max">Departamentos</a>
            <a href="#about" className="hover:text-red-500 hover:translate-x-1 transition-all w-max">Nossa História</a>
            <a href="#" className="hover:text-red-500 hover:translate-x-1 transition-all w-max">Política de Privacidade</a>
          </ul>
        </div>

        {/* Coluna 4: Pagamento */}
        <div className="space-y-6">
          <h4 className="text-lg font-black text-white uppercase tracking-widest border-b-2 border-red-600 inline-block pb-1">Pagamento</h4>
          <p className="text-gray-400 text-sm font-medium mb-4">Pague na entrega ou via site (em breve):</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-800 h-12 rounded-lg flex items-center justify-center text-teal-400 border border-gray-700 hover:border-teal-400 transition" title="Pix">
              <MdPix size={24} />
            </div>
            <div className="bg-gray-800 h-12 rounded-lg flex items-center justify-center text-blue-500 border border-gray-700 hover:border-blue-500 transition" title="Mercado Pago">
              <FaCreditCard size={24} />
            </div>
            <div className="bg-gray-800 h-12 rounded-lg flex items-center justify-center text-gray-300 border border-gray-700 hover:border-gray-300 transition" title="Boleto">
              <FaBarcode size={24} />
            </div>
            <div className="bg-gray-800 h-12 rounded-lg flex items-center justify-center text-orange-500 border border-gray-700 hover:border-orange-500 transition font-black text-xs" title="Mastercard">
              MASTER
            </div>
            <div className="bg-gray-800 h-12 rounded-lg flex items-center justify-center text-blue-600 border border-gray-700 hover:border-blue-600 transition font-black text-xs" title="Visa">
              VISA
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
        <p>© {new Date().getFullYear()} SuperMax S.A. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
        <p className="mt-4 md:mt-0 text-gray-600">Desenvolvido com tecnologia e segurança.</p>
      </div>
    </footer>
  );
}

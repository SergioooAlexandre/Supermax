import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useCart } from '../context/CartContext';
import { FaTimes, FaTrash, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';

interface CartUIProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartUI: React.FC<CartUIProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  // Bloqueia o scroll do body quando o carrinho estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    let message = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (R$ ${item.price.toFixed(2).replace('.', ',')})\n`;
    });
    message += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5579999999999?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  // Se document.body não existir (SSG/SSR), evitamos erro
  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      {/* Overlay Escuro */}
      <div 
        className={`fixed inset-0 bg-black/80 z-[9998] transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Container Principal do Carrinho (Drawer) */}
      <div className={`fixed top-0 right-0 h-screen min-h-screen w-full sm:w-[450px] z-[9999] bg-[#111111] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-gray-800 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Cabeçalho Fixo Vermelho */}
        <div className="flex-none flex items-center justify-between p-5 bg-red-600 text-white shadow-lg z-10">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="w-6 h-6" />
            <h2 className="text-xl font-black tracking-wide uppercase m-0 leading-none mt-1">Seu Carrinho</h2>
          </div>
          <button 
            onClick={onClose} 
            className="text-white hover:bg-red-800 transition-colors p-2 bg-red-700 rounded-full shadow-inner"
            aria-label="Fechar Carrinho"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        
        {/* Área de Rolagem dos Produtos */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
              <FaShoppingCart className="w-20 h-20 text-gray-800" />
              <p className="text-lg font-medium text-gray-400">Seu carrinho está vazio.</p>
              <button onClick={onClose} className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold transition-colors">
                Ver Produtos
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-sm relative group hover:border-gray-700 transition-colors">
                
                {/* Imagem do Produto à Esquerda */}
                <div className="w-28 h-auto bg-black flex-shrink-0 flex items-center justify-center border-r border-gray-800 p-2">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <span className="text-4xl drop-shadow-md">🛍️</span>
                  )}
                </div>

                {/* Informações do Produto e Controles */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div className="pr-6">
                    <h3 className="text-sm font-bold text-gray-100 leading-snug line-clamp-2">{item.name}</h3>
                    <p className="text-red-500 font-black mt-1 text-lg">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                  </div>
                  
                  {/* Seletor de Quantidade Moderno */}
                  <div className="flex items-center mt-4">
                    <div className="flex items-center bg-black rounded-lg border border-gray-700 overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center text-red-500 hover:text-white hover:bg-red-600 transition-colors font-bold text-lg"
                      >-</button>
                      <span className="text-sm font-bold w-10 text-center text-white bg-[#1a1a1a] h-full flex items-center justify-center border-x border-gray-800">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center text-red-500 hover:text-white hover:bg-red-600 transition-colors font-bold text-lg"
                      >+</button>
                    </div>
                  </div>
                </div>

                {/* Lixeira de Remoção Absoluta */}
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 p-2 bg-gray-900 rounded-bl-lg transition-colors"
                  title="Remover produto"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
        
        {/* Rodapé Fixo do Carrinho */}
        <div className="flex-none p-5 bg-[#111111] border-t border-gray-800 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-10">
          
          {/* Subtotal Fixo */}
          <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-4 mb-4 flex justify-between items-center shadow-inner">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Total do Pedido</span>
            <span className="text-3xl font-black text-red-500">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>

          {/* Botão Finalizar Fixo */}
          <button 
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white font-extrabold py-4 px-4 rounded-xl transition-all duration-300 flex justify-center items-center space-x-3 text-base uppercase tracking-wider shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-1"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Finalizar Pedido</span>
          </button>
        </div>
        
      </div>
    </>,
    document.body
  );
};

export default CartUI;

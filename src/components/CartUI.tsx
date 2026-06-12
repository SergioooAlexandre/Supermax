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
    const whatsappUrl = `https://wa.me/5579998832814?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      <div 
        className={`fixed inset-0 bg-black/80 z-[9998] transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div className={`fixed top-0 right-0 h-screen min-h-screen w-full sm:w-[480px] z-[9999] bg-[#111111] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-gray-800 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex-none flex items-center justify-between p-6 bg-red-600 text-white shadow-lg z-10">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="w-7 h-7" />
            <h2 className="text-2xl font-black tracking-wide uppercase m-0 leading-none mt-1">Seu Carrinho</h2>
          </div>
          <button 
            onClick={onClose} 
            className="text-white hover:bg-red-800 transition-colors p-2.5 bg-red-700 rounded-full shadow-inner"
            aria-label="Fechar Carrinho"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
              <FaShoppingCart className="w-24 h-24 text-gray-800" />
              <p className="text-xl font-medium text-gray-400">Seu carrinho está vazio.</p>
              <button onClick={onClose} className="mt-4 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold transition-colors">
                Explorar Produtos
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-md relative group hover:border-gray-700 transition-colors">
                
                {/* Imagem do Produto Maior */}
                <div className="w-32 sm:w-36 h-auto bg-white flex-shrink-0 flex items-center justify-center border-r border-gray-800 overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain" 
                      style={{ padding: '12px', backgroundColor: 'white', objectFit: 'contain' }}
                    />
                  ) : (
                    <span className="text-5xl drop-shadow-md">🛍️</span>
                  )}
                </div>

                {/* Informações do Produto */}
                <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
                  <div className="pr-8">
                    <h3 className="text-base font-extrabold text-gray-100 leading-snug line-clamp-2">{item.name}</h3>
                    <p className="text-red-500 font-black mt-2 text-xl drop-shadow-sm">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                  </div>
                  
                  {/* Seletor de Quantidade Maior */}
                  <div className="flex items-center mt-5">
                    <div className="flex items-center bg-black rounded-lg border border-gray-700 overflow-hidden shadow-inner">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center text-red-500 hover:text-white hover:bg-red-600 transition-colors font-bold text-xl"
                      >-</button>
                      <span className="text-base font-bold w-12 text-center text-white bg-[#1a1a1a] h-full flex items-center justify-center border-x border-gray-800">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-red-500 hover:text-white hover:bg-red-600 transition-colors font-bold text-xl"
                      >+</button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 p-2.5 bg-gray-900 rounded-bl-xl transition-colors"
                  title="Remover produto"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
        
        {/* Rodapé Fixo */}
        <div className="flex-none p-6 bg-[#111111] border-t border-gray-800 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] z-10">
          <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-5 mb-5 flex justify-between items-center shadow-inner">
            <span className="text-base font-bold text-red-500 uppercase tracking-widest">Total do Pedido</span>
            <span className="text-4xl font-black text-red-500 drop-shadow-md">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>

          <button 
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white font-extrabold py-5 px-4 rounded-xl transition-all duration-300 flex justify-center items-center space-x-3 text-lg uppercase tracking-widest shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_8px_25px_rgba(220,38,38,0.4)] hover:-translate-y-1 active:scale-95"
          >
            <FaWhatsapp className="w-7 h-7" />
            <span>Finalizar Pedido</span>
          </button>
        </div>
        
      </div>
    </>,
    document.body
  );
};

export default CartUI;

import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTimes, FaTrash, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';

interface CartUIProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartUI: React.FC<CartUIProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (!isOpen) return null;

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

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 z-[60] transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#111111] shadow-2xl z-[70] flex flex-col transform transition-transform duration-300 border-l border-gray-800">
        
        {/* Header Vermelho */}
        <div className="flex items-center justify-between p-5 bg-red-600 text-white shadow-md">
          <h2 className="text-xl font-black tracking-wide uppercase">Seu Carrinho</h2>
          <button onClick={onClose} className="text-white hover:text-red-200 transition-colors p-1 bg-red-700 rounded-full">
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        
        {/* Lista de Produtos */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
              <FaShoppingCart className="w-16 h-16 text-gray-700" />
              <p className="text-lg font-medium">Seu carrinho está vazio.</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="relative flex items-center bg-gray-900 p-3 rounded-xl border border-gray-800 shadow-sm gap-4 group hover:border-gray-700 transition-colors">
                
                {/* Imagem Placeholder ou Real */}
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center text-2xl border border-gray-800 flex-shrink-0 overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>🛍️</span>
                  )}
                </div>

                {/* Info do Produto */}
                <div className="flex-1 min-w-0 pr-8">
                  <h3 className="text-sm font-bold text-gray-100 truncate">{item.name}</h3>
                  <p className="text-red-500 font-bold mt-1 text-sm">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                </div>

                {/* Botões de Quantidade Menores */}
                <div className="absolute bottom-3 right-3 flex items-center bg-black rounded-md border border-gray-700 overflow-hidden shadow-inner">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  >-</button>
                  <span className="text-xs font-bold w-6 text-center text-white">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  >+</button>
                </div>

                {/* Lixeira */}
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-500 p-1 transition-colors"
                  aria-label="Remover item"
                >
                  <FaTrash className="w-4 h-4" />
                </button>

              </div>
            ))
          )}
        </div>
        
        {/* Footer do Carrinho */}
        <div className="p-5 bg-[#111111] border-t border-gray-800">
          {/* Card Vermelho de Subtotal */}
          <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-4 mb-4 flex justify-between items-center">
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Subtotal</span>
            <span className="text-2xl font-black text-red-500">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>

          <button 
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 flex justify-center items-center space-x-2 text-sm uppercase tracking-wider shadow-lg"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Finalizar Pedido</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartUI;



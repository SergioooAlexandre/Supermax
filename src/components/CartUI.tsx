import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTimes, FaTrash, FaWhatsapp } from 'react-icons/fa';

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
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Seu Carrinho</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600 transition-colors">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-10 text-lg">Seu carrinho está vazio.</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-red-600 font-semibold">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                  
                  <div className="flex items-center mt-2 space-x-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition-colors font-bold"
                    >-</button>
                    <span className="font-medium w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition-colors font-bold"
                    >+</button>
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-600 p-2 transition-colors"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
        
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg text-gray-600 font-medium">Total:</span>
            <span className="text-3xl font-black text-gray-900">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
          <button 
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-xl transition-colors duration-300 flex justify-center items-center space-x-2 text-lg shadow-lg"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Finalizar no WhatsApp</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartUI;

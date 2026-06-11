import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t-[6px] border-red-600" id="footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black">SM</div>
            <span className="text-2xl font-extrabold tracking-tight">Super<span className="text-red-600">Max</span></span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            O supermercado inteligente, moderno e com os melhores preços. A sua compra do mês feita em minutos.
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Navegação</h4>
          <a href="/" className="text-gray-400 hover:text-red-500 hover:translate-x-1 transition-all">Página Inicial</a>
          <a href="#offers" className="text-gray-400 hover:text-red-500 hover:translate-x-1 transition-all">Nossas Ofertas</a>
          <a href="#categories" className="text-gray-400 hover:text-red-500 hover:translate-x-1 transition-all">Departamentos</a>
          <a href="#about" className="text-gray-400 hover:text-red-500 hover:translate-x-1 transition-all">Institucional</a>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Atendimento</h4>
          <p className="text-gray-400 mb-2 font-medium">Email: <a href="mailto:sac@supermax.com.br" className="hover:text-red-500 transition">sac@supermax.com.br</a></p>
          <p className="text-gray-400 font-medium">Telefone: <a href="tel:+557999999999" className="hover:text-red-500 transition">(79) 99999-9999</a></p>
          <p className="text-gray-500 text-sm mt-4">Atendimento de Seg a Sáb, das 08h às 20h.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} SuperMax S.A. Todos os direitos reservados.</p>
        <div className="mt-4 md:mt-0 flex space-x-4">
           <span className="text-xs uppercase tracking-widest text-gray-600 font-bold">Pagamento Seguro</span>
        </div>
      </div>
    </footer>
  );
}

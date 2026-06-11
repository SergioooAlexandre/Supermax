import React from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Helmet>
        <html lang="pt-BR" />
        <title>SuperMax - Supermercado Online | Propriá-SE</title>
        <meta name="description" content="SuperMax oferece produtos de qualidade, promoções especiais e a melhor experiência de compras online em Propriá e região." />
      </Helmet>
      <Header />
      <Home />
    </CartProvider>
  );
}

export default App;

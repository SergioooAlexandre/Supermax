import React from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Helmet>
        <title>SuperMax - Supermercado Online | Ofertas e Produtos</title>
        <meta name="description" content="SuperMax oferece produtos de qualidade, promoções especiais e uma experiência moderna de compras online." />
      </Helmet>
      <Header />
      <Home />
    </CartProvider>
  );
}

export default App;

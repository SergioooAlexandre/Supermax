import React from 'react';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  return (
    <section className="bg-primary text-white py-20 sm:py-32" id="banner">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Promoções da Semana!
        </h1>
        <p className="mb-6 text-lg">
          Ofertas imperdíveis em frutas, carnes, padaria e muito mais.
        </p>
        <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition">
          Comprar Agora
        </button>
      </motion.div>
    </section>
  );
};

export default Banner;

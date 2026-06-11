import { useState, useMemo } from 'react';
import productsData from '../data/products.json';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  discount: number;
  image: string;
};

export const useSearch = (initialQuery: string = '') => {
  const [query, setQuery] = useState(initialQuery);

  const filteredProducts = useMemo(() => {
    const lower = query.toLowerCase();
    return (productsData as Product[]).filter(p =>
      p.name.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower)
    );
  }, [query]);

  return { query, setQuery, filteredProducts };
};

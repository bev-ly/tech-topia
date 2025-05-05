import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/product/ProductList';
import { products, searchProducts } from '../data/products';

const Products: React.FC = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [title, setTitle] = useState('All Products');

  useEffect(() => {
    // Get the category query parameter
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const searchQuery = params.get('q');

    if (searchQuery) {
      const results = searchProducts(searchQuery);
      setFilteredProducts(results);
      setTitle(`Search Results for "${searchQuery}"`);
    } else if (category) {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
      setTitle(`${category} Laptops`);
    } else {
      setFilteredProducts(products);
      setTitle('All Products');
    }
  }, [location.search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductList products={filteredProducts} title={title} />
    </div>
  );
};

export default Products;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/product/ProductList';
import { searchProducts } from '../data/products';
import { Product } from '../types';
import { Search } from 'lucide-react';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [results, setResults] = useState<Product[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);
    
    if (searchQuery) {
      const searchResults = searchProducts(searchQuery);
      setResults(searchResults);
    }
  }, [location.search]);

  return (
    <div className="container mx-auto px-4 py-8">
      {query ? (
        <>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Search Results for "{query}"
          </h1>
          
          {results.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
              <div className="h-20 w-20 mx-auto mb-4">
                <Search className="h-full w-full text-gray-400 dark:text-gray-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No results found</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any laptops matching "{query}". Try using different keywords or browse our categories.
              </p>
              <a
                href="/products"
                className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Browse All Products
              </a>
            </div>
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Found {results.length} {results.length === 1 ? 'product' : 'products'} matching your search
              </p>
              <ProductList products={results} />
            </>
          )}
        </>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Enter a search term</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please enter a search term to find laptops.
          </p>
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse All Products
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product, ProductCategory } from '../../types';

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title = 'All Products' }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilter, setActiveFilter] = useState<ProductCategory | 'All'>('All');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');
  const [showFilters, setShowFilters] = useState(false);

  // Update filtered products when the props or filters change
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (activeFilter !== 'All') {
      result = result.filter(product => product.category === activeFilter);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (could be by id or some other metric)
        break;
    }

    setFilteredProducts(result);
  }, [products, activeFilter, sortBy]);

  // Get unique categories
  const categories: ProductCategory[] = Array.from(
    new Set(products.map(product => product.category))
  ) as ProductCategory[];

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">{title}</h2>
        
        <button 
          onClick={toggleFilters}
          className="flex items-center sm:hidden text-gray-700 dark:text-gray-300 mb-4"
        >
          <Filter className="h-5 w-5 mr-2" />
          <span>Filters</span>
        </button>
      </div>

      <div className={`flex flex-col sm:flex-row gap-8 mb-8 ${showFilters ? 'block' : 'hidden sm:flex'}`}>
        {/* Category Filters */}
        <div className="w-full sm:w-auto">
          <h3 className="font-medium text-gray-900 dark:text-white mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-3 py-1 rounded-full text-sm ${
                activeFilter === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <h3 className="font-medium text-gray-900 dark:text-white mb-3">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="w-full sm:w-auto bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none p-2"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No products found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
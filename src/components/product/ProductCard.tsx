import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block h-full">
        {/* Product Image */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {product.brand}
            </span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
                {product.rating}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {product.name}
          </h3>

          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(product.price)}
            </p>
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          {/* Tags or Category */}
          <div className="mt-4">
            <span className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
              {product.category}
            </span>
            {!product.inStock && (
              <span className="ml-2 inline-block bg-red-100 dark:bg-red-900 rounded-full px-3 py-1 text-xs font-medium text-red-700 dark:text-red-300">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
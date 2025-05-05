import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowLeft, Check, Laptop, MemoryStick as Memory, Cpu, HardDrive, Monitor, Zap } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';

interface ProductDetailProps {
  product: Product | undefined;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-xl text-gray-600 dark:text-gray-400">Product not found</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 p-8">
          <div className="mb-2">
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to Products</span>
            </button>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 py-1 px-2 bg-blue-100 dark:bg-blue-900 rounded-md">
              {product.category}
            </span>
            <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">{product.brand}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>

          <div className="flex items-center mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600 dark:text-gray-400">{product.rating} out of 5</span>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Cpu className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Processor</p>
                  <p className="font-medium text-gray-900 dark:text-white">{product.specs.processor}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Memory className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Memory</p>
                  <p className="font-medium text-gray-900 dark:text-white">{product.specs.memory}</p>
                </div>
              </div>
              <div className="flex items-center">
                <HardDrive className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Storage</p>
                  <p className="font-medium text-gray-900 dark:text-white">{product.specs.storage}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Monitor className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Display</p>
                  <p className="font-medium text-gray-900 dark:text-white">{product.specs.display}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Graphics</p>
                  <p className="font-medium text-gray-900 dark:text-white">{product.specs.graphics}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Laptop className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Operating System</p>
                  <p className="font-medium text-gray-900 dark:text-white">{product.specs.operatingSystem}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {formatCurrency(product.price)}
              </span>
              {product.inStock ? (
                <div className="mt-2 flex items-center text-green-600 dark:text-green-400">
                  <Check className="h-4 w-4 mr-1" />
                  <span>In Stock</span>
                </div>
              ) : (
                <div className="mt-2 text-red-600 dark:text-red-400">Out of Stock</div>
              )}
            </div>
          </div>

          {product.inStock && (
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                <label htmlFor="quantity" className="mr-2 text-gray-700 dark:text-gray-300">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center px-6 py-3 rounded-md text-white ${
                product.inStock
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } transition`}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Add to Cart</span>
            </button>
            <button
              className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <Heart className="h-5 w-5 mr-2" />
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
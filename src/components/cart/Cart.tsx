import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingCart, Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';

const Cart: React.FC = () => {
  const { cart, closeCart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    closeCart();
  };

  if (!cart.isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity" 
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-full sm:w-96 bg-white dark:bg-gray-900 shadow-xl transition-transform transform flex flex-col">
          {/* Header */}
          <div className="px-4 py-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Cart</h2>
              <span className="ml-2 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full">
                {cart.items.length} {cart.items.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button 
              onClick={closeCart}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart className="h-12 w-12 mx-auto text-gray-400" />
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Your cart is empty</p>
                <button
                  onClick={handleContinueShopping}
                  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {cart.items.map((item) => (
                  <li key={item.product.id} className="py-4 flex">
                    {/* Product Image */}
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                          <h3>{item.product.name}</h3>
                          <p className="ml-4">{formatCurrency(item.product.price)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {item.product.brand}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-gray-700 dark:text-gray-300 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-600 hover:text-red-500 flex items-center"
                        >
                          <Trash className="h-4 w-4 mr-1" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white mb-4">
                <p>Subtotal</p>
                <p>{formatCurrency(subtotal)}</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
                >
                  Checkout
                </button>
                <button
                  onClick={handleContinueShopping}
                  className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={clearCart}
                  className="w-full flex justify-center items-center px-6 py-3 text-sm text-red-600 hover:text-red-500 transition"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
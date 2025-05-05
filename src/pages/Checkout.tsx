import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const location = useLocation();
  const isSuccess = location.pathname.includes('/success');
  const orderId = location.state?.orderId;

  return (
    <div className="container mx-auto px-4 py-8">
      {isSuccess ? (
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for your order. We've received your purchase and are getting it ready to ship.
          </p>
          {orderId && (
            <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg inline-block">
              <p className="text-sm text-gray-600 dark:text-gray-400">Order reference</p>
              <p className="font-mono text-lg font-semibold text-gray-900 dark:text-white">{orderId}</p>
            </div>
          )}
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            A confirmation email has been sent to your email address. You can track your order in your profile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/profile"
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Order Status
            </a>
            <a
              href="/products"
              className="inline-block bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>
          <CheckoutForm />
        </div>
      )}
    </div>
  );
};

export default Checkout;
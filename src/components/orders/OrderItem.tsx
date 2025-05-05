import React from 'react';
import { Order } from '../../types';
import { formatCurrency } from '../../utils/formatters';
import { getProductById } from '../../data/products';
import { ArrowRight, Clock, Check, Truck, XCircle } from 'lucide-react';

interface OrderItemProps {
  order: Order;
  onCancel: (orderId: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, onCancel }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'Shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'Delivered':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'Cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
      {/* Order Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Order ID:</span>
            <span className="ml-2 font-mono text-gray-900 dark:text-white">{order.id}</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Placed on {formatDate(order.date)}
          </div>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center">
          <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${getStatusClass(order.status)}`}>
            {getStatusIcon(order.status)}
            <span className="ml-1">{order.status}</span>
          </div>
          {order.status === 'Processing' && (
            <button
              onClick={() => onCancel(order.id)}
              className="ml-4 text-sm text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300"
            >
              Cancel Order
            </button>
          )}
        </div>
      </div>

      {/* Order Items */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Items</h3>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {order.items.map((item) => {
            const product = getProductById(item.productId);
            return (
              <li key={item.productId} className="py-3 flex items-center">
                {product && (
                  <>
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">
                          {product.name}
                        </h4>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                      <div className="mt-1 flex justify-between text-sm">
                        <p className="text-gray-500 dark:text-gray-400">{product.brand}</p>
                        <p className="text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Order Summary */}
      <div className="p-4 bg-gray-50 dark:bg-gray-900">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Total Amount</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(order.totalAmount)}
            </p>
          </div>
          <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            <span className="mr-1">Order Details</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
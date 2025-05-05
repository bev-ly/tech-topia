import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { User, Package, Settings, LogOut, ShoppingBag, XCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import OrderItem from '../components/orders/OrderItem';
import { OrderStatus } from '../types';

const Profile: React.FC = () => {
  const { user, logout, isAuthenticated, updateUserOrders } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleCancelOrder = (orderId: string) => {
    if (!user) return;
    
    const updatedOrders = user.orders.map(order => 
      order.id === orderId 
        ? { ...order, status: 'Cancelled' as OrderStatus } 
        : order
    );
    
    updateUserOrders(updatedOrders);
  };

  // Filter orders by status
  const activeOrders = user?.orders.filter(order => 
    order.status === 'Processing' || order.status === 'Shipped'
  ) || [];
  
  const deliveredOrders = user?.orders.filter(order => 
    order.status === 'Delivered'
  ) || [];
  
  const cancelledOrders = user?.orders.filter(order => 
    order.status === 'Cancelled'
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user?.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
              </div>
            </div>

            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`flex items-center w-full p-3 rounded-lg ${
                      activeTab === 'orders'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <ShoppingBag className="h-5 w-5 mr-3" />
                    <span>My Orders</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('cancelled')}
                    className={`flex items-center w-full p-3 rounded-lg ${
                      activeTab === 'cancelled'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <XCircle className="h-5 w-5 mr-3" />
                    <span>Cancelled Orders</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('account')}
                    className={`flex items-center w-full p-3 rounded-lg ${
                      activeTab === 'account'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <User className="h-5 w-5 mr-3" />
                    <span>Account Information</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className={`flex items-center w-full p-3 rounded-lg ${
                      activeTab === 'shipping'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Package className="h-5 w-5 mr-3" />
                    <span>Shipping Addresses</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center w-full p-3 rounded-lg ${
                      activeTab === 'settings'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Settings</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="flex items-center w-full p-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    <span>Log Out</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4">
          {activeTab === 'orders' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Orders</h1>
              
              {activeOrders.length === 0 && deliveredOrders.length === 0 ? (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                  <div className="h-20 w-20 mx-auto mb-4">
                    <ShoppingBag className="h-full w-full text-gray-400 dark:text-gray-500" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No orders yet</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    You haven't placed any orders yet. Start shopping to see your orders here.
                  </p>
                  <a
                    href="/products"
                    className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Browse Products
                  </a>
                </div>
              ) : (
                <>
                  {activeOrders.length > 0 && (
                    <section className="mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Active Orders
                      </h2>
                      {activeOrders.map((order) => (
                        <OrderItem key={order.id} order={order} onCancel={handleCancelOrder} />
                      ))}
                    </section>
                  )}
                  
                  {deliveredOrders.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Past Orders
                      </h2>
                      {deliveredOrders.map((order) => (
                        <OrderItem key={order.id} order={order} onCancel={handleCancelOrder} />
                      ))}
                    </section>
                  )}
                </>
              )}
            </div>
          )}

          {activeTab === 'cancelled' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cancelled Orders</h1>
              
              {cancelledOrders.length === 0 ? (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                  <div className="h-20 w-20 mx-auto mb-4">
                    <XCircle className="h-full w-full text-gray-400 dark:text-gray-500" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No cancelled orders</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    You don't have any cancelled orders.
                  </p>
                </div>
              ) : (
                <>
                  {cancelledOrders.map((order) => (
                    <OrderItem key={order.id} order={order} onCancel={handleCancelOrder} />
                  ))}
                </>
              )}
            </div>
          )}

          {activeTab === 'account' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Account Information</h1>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={user?.name}
                      readOnly
                      className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      readOnly
                      className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Edit Information
                </button>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shipping Addresses</h1>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Manage your shipping addresses for faster checkout.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Add New Address
                </button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h1>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Manage your account settings and preferences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receive emails about your orders and account activity</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Marketing Preferences</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Receive emails about new products and promotions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;
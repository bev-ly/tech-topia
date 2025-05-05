import { Order, OrderStatus } from '../types';

// This is just sample order data that would typically come from a database
export const sampleOrders: Order[] = [
  {
    id: 'ORD-001',
    items: [
      { productId: '1', quantity: 1, price: 1299.99 },
      { productId: '3', quantity: 2, price: 999.99 }
    ],
    totalAmount: 3299.97,
    status: 'Processing',
    date: '2025-04-01T10:30:00Z',
    shippingAddress: {
      fullName: 'John Doe',
      streetAddress: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94107',
      country: 'USA'
    }
  },
  {
    id: 'ORD-002',
    items: [
      { productId: '2', quantity: 1, price: 1799.99 }
    ],
    totalAmount: 1799.99,
    status: 'Shipped',
    date: '2025-03-15T14:45:00Z',
    shippingAddress: {
      fullName: 'John Doe',
      streetAddress: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94107',
      country: 'USA'
    }
  },
  {
    id: 'ORD-003',
    items: [
      { productId: '6', quantity: 1, price: 699.99 }
    ],
    totalAmount: 699.99,
    status: 'Delivered',
    date: '2025-02-20T09:15:00Z',
    shippingAddress: {
      fullName: 'John Doe',
      streetAddress: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94107',
      country: 'USA'
    }
  },
  {
    id: 'ORD-004',
    items: [
      { productId: '4', quantity: 1, price: 2299.99 }
    ],
    totalAmount: 2299.99,
    status: 'Cancelled',
    date: '2025-01-10T16:20:00Z',
    shippingAddress: {
      fullName: 'John Doe',
      streetAddress: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94107',
      country: 'USA'
    }
  }
];

export const getOrderById = (orderId: string): Order | undefined => {
  return sampleOrders.find(order => order.id === orderId);
};

export const updateOrderStatus = (orderId: string, newStatus: OrderStatus): Order | undefined => {
  const orderIndex = sampleOrders.findIndex(order => order.id === orderId);
  if (orderIndex !== -1) {
    sampleOrders[orderIndex] = {
      ...sampleOrders[orderIndex],
      status: newStatus
    };
    return sampleOrders[orderIndex];
  }
  return undefined;
};
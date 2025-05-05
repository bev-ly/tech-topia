// Product Types
export type ProductCategory = 'Gaming' | 'Business' | 'Student' | 'Creator';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  specs: {
    processor: string;
    memory: string;
    storage: string;
    display: string;
    graphics: string;
    operatingSystem: string;
  };
  category: ProductCategory;
  inStock: boolean;
  rating: number;
}

// Order Types
export type OrderStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  date: string;
  shippingAddress: ShippingAddress;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  orders: Order[];
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
}

// Checkout Types
export interface ShippingAddress {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface PaymentDetails {
  cardNumber: string;
  nameOnCard: string;
  expiryDate: string;
  cvv: string;
}
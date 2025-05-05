import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ProBook X5',
    brand: 'TechMaster',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A powerful laptop designed for professionals, featuring the latest processor and ample storage space for all your work needs.',
    specs: {
      processor: 'Intel Core i7-12700H',
      memory: '16GB DDR5',
      storage: '512GB NVMe SSD',
      display: '15.6" 4K IPS',
      graphics: 'NVIDIA RTX 3070',
      operatingSystem: 'Windows 11 Pro',
    },
    category: 'Business',
    inStock: true,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'GamerElite G7',
    brand: 'Raptor',
    price: 1799.99,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'The ultimate gaming laptop with RTX graphics and high refresh rate display for an immersive gaming experience.',
    specs: {
      processor: 'AMD Ryzen 9 5900HX',
      memory: '32GB DDR4',
      storage: '1TB NVMe SSD',
      display: '17.3" QHD 165Hz',
      graphics: 'NVIDIA RTX 3080',
      operatingSystem: 'Windows 11 Home',
    },
    category: 'Gaming',
    inStock: true,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'UltraBook Air',
    brand: 'LightTech',
    price: 999.99,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Ultra-thin and lightweight laptop perfect for students and travelers who need portability without sacrificing performance.',
    specs: {
      processor: 'Intel Core i5-1135G7',
      memory: '8GB LPDDR4X',
      storage: '256GB NVMe SSD',
      display: '13.3" FHD IPS',
      graphics: 'Intel Iris Xe',
      operatingSystem: 'Windows 11 Home',
    },
    category: 'Student',
    inStock: true,
    rating: 4.5,
  },
  {
    id: '4',
    name: 'CreatorPro C9',
    brand: 'ArtStation',
    price: 2299.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Designed for creative professionals with color-accurate display and powerful graphics for video editing and 3D rendering.',
    specs: {
      processor: 'Intel Core i9-12900H',
      memory: '64GB DDR5',
      storage: '2TB NVMe SSD',
      display: '16" 4K OLED',
      graphics: 'NVIDIA RTX 3080 Ti',
      operatingSystem: 'Windows 11 Pro',
    },
    category: 'Creator',
    inStock: true,
    rating: 4.9,
  },
  {
    id: '5',
    name: 'BusinessElite B5',
    brand: 'CorpTech',
    price: 1499.99,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Enterprise-grade laptop with enhanced security features and durability, perfect for business professionals.',
    specs: {
      processor: 'Intel Core i7-1270P',
      memory: '16GB DDR4',
      storage: '1TB NVMe SSD',
      display: '14" QHD+ IPS',
      graphics: 'Intel Iris Xe',
      operatingSystem: 'Windows 11 Pro',
    },
    category: 'Business',
    inStock: true,
    rating: 4.6,
  },
  {
    id: '6',
    name: 'StudentBook S3',
    brand: 'EduTech',
    price: 699.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Affordable laptop designed for students with long battery life and durable construction for daily campus use.',
    specs: {
      processor: 'AMD Ryzen 5 5500U',
      memory: '8GB DDR4',
      storage: '512GB NVMe SSD',
      display: '14" FHD IPS',
      graphics: 'AMD Radeon Graphics',
      operatingSystem: 'Windows 11 Home',
    },
    category: 'Student',
    inStock: true,
    rating: 4.3,
  },
  {
    id: '7',
    name: 'GamerBook G5',
    brand: 'Raptor',
    price: 1399.99,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Mid-range gaming laptop offering excellent performance for competitive gaming at an affordable price point.',
    specs: {
      processor: 'AMD Ryzen 7 5800H',
      memory: '16GB DDR4',
      storage: '1TB NVMe SSD',
      display: '15.6" FHD 144Hz',
      graphics: 'NVIDIA RTX 3060',
      operatingSystem: 'Windows 11 Home',
    },
    category: 'Gaming',
    inStock: true,
    rating: 4.7,
  },
  {
    id: '8',
    name: 'ProUltra P7',
    brand: 'TechMaster',
    price: 1899.99,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Premium business laptop with cutting-edge security features and exceptional build quality for demanding professionals.',
    specs: {
      processor: 'Intel Core i7-1280P',
      memory: '32GB LPDDR5',
      storage: '1TB NVMe SSD',
      display: '14" 2.8K OLED',
      graphics: 'Intel Iris Xe',
      operatingSystem: 'Windows 11 Pro',
    },
    category: 'Business',
    inStock: true,
    rating: 4.8,
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.specs.processor.toLowerCase().includes(lowercaseQuery) ||
      product.specs.memory.toLowerCase().includes(lowercaseQuery) ||
      product.specs.storage.toLowerCase().includes(lowercaseQuery) ||
      product.specs.graphics.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};
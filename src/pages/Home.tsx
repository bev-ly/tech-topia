import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Cpu, MemoryStick as Memory, Battery, Zap, Shield } from 'lucide-react';
import ProductList from '../components/product/ProductList';
import { products } from '../data/products';

const featuredProducts = products.slice(0, 4);
const gamingProducts = products.filter(product => product.category === 'Gaming').slice(0, 3);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Perfect Laptop at TechTopia
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Explore our wide selection of laptops from all major brands. Whether you're a gamer, student, or professional, we have the perfect device for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-block bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
                >
                  Shop Now
                </Link>
                <Link
                  to="/products?category=Gaming"
                  className="inline-block bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition"
                >
                  Gaming Laptops
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img
                src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Featured Laptop"
                className="rounded-lg shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Browse By Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              to="/products?category=Gaming"
              className="group bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Zap className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Gaming</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                High-performance laptops built for immersive gaming experiences.
              </p>
              <span className="text-blue-600 dark:text-blue-400 flex items-center group-hover:translate-x-1 transition-transform">
                View Collection <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/products?category=Business"
              className="group bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Shield className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Business</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Reliable and secure laptops for professionals and enterprises.
              </p>
              <span className="text-blue-600 dark:text-blue-400 flex items-center group-hover:translate-x-1 transition-transform">
                View Collection <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/products?category=Creator"
              className="group bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Cpu className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Creator</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Powerful laptops for designers, video editors, and content creators.
              </p>
              <span className="text-blue-600 dark:text-blue-400 flex items-center group-hover:translate-x-1 transition-transform">
                View Collection <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/products?category=Student"
              className="group bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Battery className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Student</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Affordable laptops with long battery life for students and everyday use.
              </p>
              <span className="text-blue-600 dark:text-blue-400 flex items-center group-hover:translate-x-1 transition-transform">
                View Collection <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Products
            </h2>
            <Link
              to="/products"
              className="text-blue-600 dark:text-blue-400 flex items-center hover:underline"
            >
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <ProductList products={featuredProducts} />
        </div>
      </section>

      {/* Gaming Laptops Showcase */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Gaming Laptops
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Experience unparalleled gaming with our selection of high-performance gaming laptops. Featuring top-tier GPUs, high refresh rate displays, and advanced cooling systems.
              </p>
              <Link
                to="/products?category=Gaming"
                className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow"
              >
                Explore Gaming Laptops
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gamingProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition ${
                    index === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {product.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-bold">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(product.price)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    John Doe
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "I purchased the GamerElite G7 and it exceeded all my expectations. The performance is stellar and the cooling system is impressive. Highly recommend for any serious gamer!"
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                  JS
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Jane Smith
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "As a graphic designer, I needed a powerful laptop with accurate color reproduction. The CreatorPro C9 has been perfect for my workflow. Battery life is excellent too!"
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                  RJ
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Robert Johnson
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg className="h-5 w-5 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "The StudentBook S3 is the perfect balance of performance and affordability. It handles all my college tasks effortlessly and the battery lasts all day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, new product announcements, and tech tips.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 py-3 px-4 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 py-3 px-6 rounded-r-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
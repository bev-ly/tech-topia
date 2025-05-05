import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Laptop className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">TechTopia</span>
            </div>
            <p className="mb-4">
              Your premier destination for high-quality laptops from all major brands. We offer the best selection at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Laptop Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Laptop Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Gaming" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Gaming Laptops</Link>
              </li>
              <li>
                <Link to="/products?category=Business" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Business Laptops</Link>
              </li>
              <li>
                <Link to="/products?category=Student" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Student Laptops</Link>
              </li>
              <li>
                <Link to="/products?category=Creator" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Creator Laptops</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-600 dark:text-blue-400" />
                <span>123 Tech Street, San Francisco, CA 94107, USA</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>support@techtopia.com</span>
              </div>
            </address>
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} TechTopia. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Terms of Service</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Shipping Information</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
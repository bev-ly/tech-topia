import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/product/ProductDetail';
import ProductList from '../components/product/ProductList';
import { getProductById, products } from '../data/products';
import { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);

      // Get related products (same category)
      if (foundProduct) {
        const related = products
          .filter(
            (p) => 
              p.category === foundProduct.category && 
              p.id !== foundProduct.id
          )
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            You might also like
          </h2>
          <ProductList products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
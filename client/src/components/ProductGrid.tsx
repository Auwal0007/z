import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@shared/schema';

interface ProductGridProps {
  products: Product[];
  searchQuery?: string;
  selectedCategory?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, searchQuery = '', selectedCategory = 'all' }) => {
  const featuredProducts = products.filter(product => product.featured);
  const regularProducts = products.filter(product => !product.featured);

  return (
    <section id="products" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-playfair">
                Featured Collection
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} featured />
              ))}
            </div>
          </div>
        )}

        {/* All Products */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-playfair">
              {products.length === featuredProducts.length ? 'Our Collection' : 'All Products'}
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {products.length === 0 
                ? 'No products found matching your criteria.' 
                : `Showing ${products.length} ${products.length === 1 ? 'product' : 'products'}`
              }
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {searchQuery || selectedCategory !== 'all' ? 'No products found' : 'No products yet'}
              </h3>
              <p className="text-gray-500">
                {searchQuery || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or category filter' 
                  : 'Use the admin panel (top right) to add your first products!'
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {regularProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
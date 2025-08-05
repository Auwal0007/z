import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@shared/schema';

interface ProductGridProps {
  products: Product[];
  newArrivals?: Product[];
  searchQuery?: string;
  selectedCategory?: string;
  showFeatured?: boolean; // New prop to control featured products display
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  newArrivals = [],
  searchQuery = '', 
  selectedCategory = 'all', 
  showFeatured = true // Default to true for backward compatibility
}) => {
  const featuredProducts = products.filter(product => product.featured);
  const regularProducts = products.filter(product => !product.featured);

  // On homepage (when newArrivals is provided), show new arrivals instead of featured products
  const isHomepage = newArrivals.length > 0 || (selectedCategory === 'all' && !searchQuery);
  const displayProducts = isHomepage && newArrivals.length > 0 ? newArrivals : featuredProducts;

  return (
    <section id="products" className="">
      <div>
        {/* Featured/New Arrivals Products - Only show if showFeatured is true */}
        {showFeatured && displayProducts.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-burgundy-900 mb-4 font-playfair">
                {isHomepage && newArrivals.length > 0 ? 'New Arrivals' : 'Featured Collection'}
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} featured />
              ))}
            </div>
          </div>
        )}

        {/* All Products */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-burgundy-900 mb-2 sm:mb-4 font-playfair px-4">
              {showFeatured && products.length === displayProducts.length ? 'Our Collection' : 
               showFeatured ? 'Our Collection' : 
               selectedCategory && selectedCategory !== 'all' ? 
                 `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Collection` : 
                 'Our Collection'}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4 text-sm sm:text-base">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
              {/* Show products excluding the ones already shown in featured/new arrivals section */}
              {(showFeatured ? 
                products.filter(product => 
                  !(isHomepage && newArrivals.length > 0 ? 
                    newArrivals.some(na => na.id === product.id) : 
                    product.featured
                  )
                ) : 
                products
              ).map((product) => (
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
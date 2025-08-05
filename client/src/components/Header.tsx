import React, { useState } from 'react';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import SearchBar from './SearchBar';

interface Category {
  id: string;
  name: string;
  value: string;
}

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories: Category[] = [
  { id: 'all', name: 'All Products', value: 'all' },
  { id: 'arabian', name: 'Arabian Perfumes', value: 'arabian' },
  { id: 'english', name: 'English Perfumes', value: 'english' },
  { id: 'oil', name: 'Oil Perfumes', value: 'oil' },
  { id: 'luxury', name: 'Luxury Collection', value: 'luxury' }
];

const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gold-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-burgundy-600 mr-1 sm:mr-2" />
            <h1 className="text-lg sm:text-2xl font-bold text-burgundy-800 font-playfair">
              Zubees Collectibles
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.value === 'all' ? '/' : `/category/${category.value}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  (category.value === 'all' && location === '/') || 
                  (location === `/category/${category.value}`)
                    ? 'text-burgundy-600 bg-gold-100 shadow-sm'
                    : 'text-gray-700 hover:text-burgundy-600 hover:bg-cream-100'
                }`}
                data-testid={`link-category-${category.value}`}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar placeholder="Search perfumes..." className="w-64" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-burgundy-600 hover:bg-cream-100 transition-colors duration-200 touch-manipulation"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-3 sm:py-4 space-y-3 sm:space-y-4 shadow-lg">
            {/* Mobile Search */}
            <div className="relative px-3 sm:px-4">
              <div className="absolute inset-y-0 left-6 sm:left-7 flex items-center pointer-events-none">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-burgundy-500 focus:border-transparent text-sm sm:text-base touch-manipulation"
                placeholder="Search perfumes..."
                autoComplete="off"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="px-3 sm:px-4 space-y-1 sm:space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.value === 'all' ? '/' : `/category/${category.value}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 touch-manipulation ${
                    (category.value === 'all' && location === '/') || 
                    (location === `/category/${category.value}`)
                      ? 'text-burgundy-600 bg-gold-100'
                      : 'text-gray-700 hover:text-burgundy-600 hover:bg-cream-100 active:bg-cream-200'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
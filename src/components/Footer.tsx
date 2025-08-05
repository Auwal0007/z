import React from 'react';
import { MessageCircle, ShoppingBag, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-burgundy-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <ShoppingBag className="h-8 w-8 text-gold-400 mr-3" />
              <h3 className="text-2xl font-bold font-playfair">Zubees Collectibles</h3>
            </div>
            <p className="text-cream-200 mb-6 max-w-md leading-relaxed">
              Your premier destination for authentic Arabian perfumes, English fragrances, 
              and luxury oil collections. Each bottle tells a story of tradition and elegance.
            </p>
            <a
              href="https://wa.me/2348038507754"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat with Us</span>
            </a>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-300">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream-200 hover:text-gold-300 transition-colors duration-200">Arabian Perfumes</a></li>
              <li><a href="#" className="text-cream-200 hover:text-gold-300 transition-colors duration-200">English Perfumes</a></li>
              <li><a href="#" className="text-cream-200 hover:text-gold-300 transition-colors duration-200">Oil Perfumes</a></li>
              <li><a href="#" className="text-cream-200 hover:text-gold-300 transition-colors duration-200">Luxury Collection</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-300">Contact</h4>
            <ul className="space-y-3">
              <li className="text-cream-200">WhatsApp: +234 803 850 7754</li>
              <li className="text-cream-200">Available: 9AM - 9PM WAT</li>
              <li className="text-cream-200">Response time: Within 1 hour</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-burgundy-700 mt-12 pt-8 text-center">
          <p className="text-cream-200 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for fragrance lovers everywhere</span>
          </p>
          <p className="text-cream-300 mt-2">
            © 2025 Zubees Collectibles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
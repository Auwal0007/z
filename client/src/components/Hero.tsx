import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-700">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gold-200/20 backdrop-blur-sm px-6 py-3 rounded-full border border-gold-300/30">
              <Sparkles className="h-5 w-5 text-gold-300" />
              <span className="text-gold-200 font-medium">Premium Collection</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-playfair leading-tight">
            Discover the Art of
            <span className="block text-gold-300">Fine Fragrances</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-cream-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            From traditional Arabian attars to contemporary English blends, 
            explore our curated collection of premium perfumes and oils
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold-500 hover:bg-gold-600 text-burgundy-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Explore Collection
            </button>
            <a
              href="https://wa.me/2348038507754"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-burgundy-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gold-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-cream-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-burgundy-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-700 min-h-screen sm:min-h-[80vh]">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-32 flex items-center min-h-screen sm:min-h-[80vh]">
        <div className="text-center w-full">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 bg-gold-200/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gold-300/30">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-gold-300" />
              <span className="text-gold-200 font-medium text-sm sm:text-base">Premium Collection</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-playfair leading-tight px-2">
            Discover the Art of
            <span className="block text-gold-300">Fine Fragrances</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-cream-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            From traditional Arabian attars to contemporary English blends, 
            explore our curated collection of premium perfumes and oils
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-burgundy-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-200 sm:duration-300 transform active:scale-95 sm:hover:scale-105 shadow-xl hover:shadow-2xl touch-manipulation"
            >
              Explore Collection
            </button>
            <a
              href="https://wa.me/2348038507754"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-burgundy-900 active:bg-cream-300 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-200 sm:duration-300 transform active:scale-95 sm:hover:scale-105 touch-manipulation"
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
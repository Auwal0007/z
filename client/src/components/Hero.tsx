import React, { useState, useEffect } from 'react';
import { Sparkles, Search, ShoppingBag, TrendingUp, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Featured product images for carousel
  const featuredImages = [
    'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6621496/pexels-photo-6621496.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredImages.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-700 min-h-screen sm:min-h-[90vh]">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      {/* Smoke/Swirl Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/50 via-transparent to-burgundy-800/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex items-center min-h-screen sm:min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Social Proof Banner */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6 animate-fadeIn">
              <div className="flex items-center space-x-4 bg-gold-200/15 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gold-300/20 shadow-lg">
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-4 w-4 text-gold-300" />
                  <span className="text-gold-200 font-medium text-xs sm:text-sm">10,000+ Sold</span>
                </div>
                <div className="w-px h-4 bg-gold-300/30"></div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4 text-gold-300" />
                  <span className="text-gold-200 font-medium text-xs sm:text-sm">Since 2022</span>
                </div>
              </div>
            </div>

            {/* Premium Badge */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6 animate-slideUp">
              <div className="flex items-center space-x-2 bg-gold-200/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gold-300/30">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-gold-300 animate-pulse" />
                <span className="text-gold-200 font-medium text-sm sm:text-base">Premium Collection</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-playfair leading-tight animate-slideUp delay-200">
              Discover the Art of
              <span className="block text-gold-300 animate-shimmer">Fine Fragrances</span>
            </h1>

            {/* SEO-Optimized Subheading */}
            <div className="mb-4 animate-slideUp delay-300">
              <p className="text-base sm:text-lg lg:text-xl text-gold-200 font-medium">
                Buy Arabian and English Perfumes Online – Fast Delivery Across Nigeria
              </p>
            </div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-cream-100 mb-6 sm:mb-8 leading-relaxed animate-slideUp delay-400">
              From traditional Arabian attars to contemporary English blends, 
              explore our curated collection of premium perfumes and oils
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center animate-slideUp delay-500">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-burgundy-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-gold-500/25 touch-manipulation relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Search className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Explore Collection</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="https://wa.me/2348038507754"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto border-2 border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-burgundy-900 active:bg-cream-300 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Users className="h-5 w-5 group-hover:bounce transition-transform duration-300" />
                  <span>Chat with Us</span>
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex justify-center lg:justify-start space-x-6 text-cream-200/80 text-sm animate-slideUp delay-700">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span>Authentic Products</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-slideRight">
            <div className="relative group">
              {/* Main Product Image */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <img
                  src={featuredImages[currentImageIndex]}
                  alt="Featured Perfume"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 via-transparent to-gold-400/20"></div>
                
                {/* Product Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-lg mb-1">Featured Collection</h3>
                    <p className="text-sm text-gold-200">Premium Arabian & English Blends</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-gold-400 rounded-full"></div>
                        ))}
                      </div>
                      <span className="text-xs text-cream-200">5.0 Rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Product Cards */}
              <div className="absolute -top-4 -left-4 w-20 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-20 bg-gold-400/20 backdrop-blur-md rounded-2xl border border-gold-300/30 animate-float delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gold-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-cream-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-burgundy-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gold-300/20 rounded-full blur-lg animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
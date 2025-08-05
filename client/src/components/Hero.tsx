import React, { useState, useEffect } from 'react';
import { Sparkles, Search, ShoppingBag, TrendingUp, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Featured perfume images for carousel - focused on fragrances
  const featuredImages = [
    'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600', // Perfume bottles
    'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600', // Elegant perfume application
    'https://images.pexels.com/photos/8980834/pexels-photo-8980834.jpeg?auto=compress&cs=tinysrgb&w=600', // Luxury fragrance collection
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
      {/* Enhanced Background with Perfume-focused Pattern */}
      <div className="absolute inset-0">
        {/* Perfume bottle silhouette pattern */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M50 10c-5 0-9 4-9 9v15c0 3-2 5-5 5h-6c-3 0-5 2-5 5v35c0 8 7 15 15 15h20c8 0 15-7 15-15V44c0-3-2-5-5-5h-6c-3 0-5-2-5-5V19c0-5-4-9-9-9z'/%3E%3Ccircle cx='50' cy='15' r='3'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        {/* Additional texture overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/80 via-burgundy-800/70 to-burgundy-700/80"></div>
      </div>
      
      {/* Improved Smoke/Swirl Effect for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-burgundy-900/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex items-center min-h-screen sm:min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Content - Enhanced spacing and contrast */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Social Proof Banner - Better mobile spacing */}
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8 animate-fadeIn">
              <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-gold-300/30 shadow-xl">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-gold-300" />
                  <span className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">10,000+ Sold</span>
                </div>
                <div className="w-px h-5 bg-gold-300/40"></div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-gold-300" />
                  <span className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">Since 2022</span>
                </div>
              </div>
            </div>

            {/* Premium Badge - Enhanced contrast */}
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8 animate-slideUp">
              <div className="flex items-center space-x-3 bg-black/25 backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-gold-400/40 shadow-lg">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-gold-300 animate-pulse" />
                <span className="text-white font-semibold text-base sm:text-lg drop-shadow-lg">Premium Collection</span>
              </div>
            </div>
            
            {/* Main heading with better contrast */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 font-playfair leading-tight animate-slideUp delay-200 drop-shadow-2xl">
              Discover the Art of
              <span className="block text-gold-300 animate-shimmer drop-shadow-lg">Fine Fragrances</span>
            </h1>

            {/* SEO-Optimized Subheading with enhanced readability */}
            <div className="mb-6 sm:mb-8 animate-slideUp delay-300">
              <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold drop-shadow-lg bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                Buy Arabian and English Perfumes Online – Fast Delivery Across Nigeria
              </p>
            </div>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 sm:mb-12 leading-relaxed animate-slideUp delay-400 drop-shadow-lg font-light">
              From traditional Arabian attars to contemporary English blends, 
              explore our curated collection of premium perfumes and oils
            </p>
            
            {/* Enhanced CTA buttons with better spacing */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center animate-slideUp delay-500 mb-12 sm:mb-16">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 active:from-gold-700 active:to-gold-800 text-black font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-gold-500/30 touch-manipulation relative overflow-hidden text-lg"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <Search className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Explore Collection</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="https://wa.me/2348038507754"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto border-3 border-white text-white hover:bg-white hover:text-burgundy-900 active:bg-gray-100 font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation relative overflow-hidden text-lg shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <Users className="h-6 w-6 group-hover:bounce transition-transform duration-300" />
                  <span>Chat with Us</span>
                </span>
              </a>
            </div>

            {/* Trust Indicators with better contrast and spacing */}
            <div className="flex justify-center lg:justify-start space-x-8 text-white/90 text-base animate-slideUp delay-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                <span className="font-medium drop-shadow-md">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300 shadow-lg"></div>
                <span className="font-medium drop-shadow-md">Authentic Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500 shadow-lg"></div>
                <span className="font-medium drop-shadow-md">24/7 Support</span>
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
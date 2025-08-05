import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const message = "Hi! I'd like to know more about your perfume collection.";
    const whatsappUrl = `https://wa.me/2348038507754?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-20 z-50 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 sm:duration-300 transform active:scale-95 sm:hover:scale-110 animate-bounce hover:animate-none touch-manipulation"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );
};

export default WhatsAppFloat;
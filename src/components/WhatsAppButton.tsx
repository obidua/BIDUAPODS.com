import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919512921903';
    const message = encodeURIComponent('Hello! I am interested in BIDUA Pods capsule beds. Could you please provide more information?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed z-40 md:z-50 md:bottom-6 md:right-6 bottom-28 right-4"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500/50 hover:bg-green-600/60 md:bg-green-500 md:hover:bg-green-600 text-white md:w-16 md:h-16 w-12 h-12 rounded-full shadow-lg md:shadow-2xl hover:md:shadow-green-500/30 flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="md:h-8 md:w-8 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;
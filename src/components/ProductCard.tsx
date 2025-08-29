import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { ChevronRight } from 'lucide-react';
import ImageSlider from './ImageSlider';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 dark:border-cyan-500/30 hover:border-cyan-300/60 dark:hover:border-cyan-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 group ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
    >
      <div className="relative overflow-hidden">
        <ImageSlider
          images={product.images}
          className="w-full h-64"
          autoPlay={false}
          interval={5000}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Origin Badge */}
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${
            product.origin === 'made-in-india' 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
              : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
          }`}>
            {product.origin === 'made-in-india' ? 'Made in India' : 'Imported'}
          </span>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-4 left-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span 
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm"
          >
            {product.price}
          </motion.span>
        </motion.div>
      </div>
      
      <motion.div 
        className="p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h3 
          className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {product.name}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">{product.description}</p>
        
        <motion.div 
          className="space-y-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {product.features.slice(0, 3).map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to={`/products/${product.id}`}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-cyan-500/30 font-semibold text-lg group/btn"
          >
            <span>View Details</span>
            <ChevronRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
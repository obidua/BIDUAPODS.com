import React from 'react';
import { motion } from 'framer-motion';
import { Feature } from '../types';
import * as Icons from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { theme } = useTheme();
  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.03, rotateY: 5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-cyan-500/30 hover:border-cyan-300/60 dark:hover:border-cyan-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 group ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
    >
      <div className="flex items-center space-x-4 mb-6">
        <motion.div 
          initial={{ rotate: 0, scale: 1 }}
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="p-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-500 shadow-lg"
        >
          <IconComponent className="h-7 w-7 text-cyan-500" />
        </motion.div>
        <motion.h3 
          className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {feature.title}
        </motion.h3>
      </div>
      <motion.p 
        className="text-gray-600 dark:text-gray-400 leading-relaxed text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
};

export default FeatureCard;
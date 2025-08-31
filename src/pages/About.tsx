import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/30 relative overflow-hidden"
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'var(--svg-background-pattern)' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">BIDUA</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering the future of sleep technology through innovative design and cutting-edge engineering
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                At BIDUA, we believe that quality sleep is the foundation of human performance and well-being. 
                As both a manufacturer and importer, our mission is to revolutionize the way people rest by creating 
                intelligent sleeping environments that adapt to individual needs and optimize recovery through 
                direct quality control and global sourcing excellence.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Through our integrated manufacturing and importing capabilities, we combine cutting-edge technology 
                with thoughtful design to create sleeping pods that don't just provide comfort—they actively enhance 
                your sleep quality through intelligent controls and advanced environmental systems, all while 
                maintaining direct oversight of materials and production quality.
              </p>
            </div>
            <div className="relative">
              <img
                src='/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed main.png'
                alt="Our Mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="py-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuously pushing boundaries to create breakthrough sleep technology solutions
              </p>
            </div>
            <div className={`text-center ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Uncompromising standards in materials, manufacturing, and customer experience
              </p>
            </div>
            <div className={`text-center ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Customer Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every decision we make is guided by what's best for our customers' sleep experience
              </p>
            </div>
            <div className={`text-center ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Environmental responsibility drives our material choices and manufacturing processes
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">2020</div>
              <div className="text-gray-400">Manufacturing Est.</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Employees</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10k+</div>
              <div className="text-gray-400">Pods Delivered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import SeriesCard from '../components/SeriesCard';
import FeatureCard from '../components/FeatureCard';
import { productSeries } from '../data/products';
import { features } from '../data/features';

const Home: React.FC = () => {
  const heroDescription = 'As a leading manufacturer and importer of hotel-grade sleeping pods, we deliver intelligent lighting, secure locks, fresh-air ventilation and compact footprint solutions—built for hostels, airports, offices, hospitals and more with direct quality control and competitive pricing.';

  // Home page hero images
  const homePageImages = [
    '/Pods_Images/ABS Flagship Series/Sleeping Pods Video.mp4',
    '/Pods_Images/ABS Flagship Series/Sleeping Pod inner view.mp4',
    '/Pods_Images/Home Page Images/IMG_1642.JPG',
    '/Pods_Images/Home Page Images/IMG_1643.JPG',
    '/Pods_Images/Home Page Images/IMG_1644.JPG',
    '/Pods_Images/Home Page Images/IMG_1645.JPG',
    '/Pods_Images/Home Page Images/IMG_1646.JPG',
    '/Pods_Images/Home Page Images/IMG_1647.JPG',
    '/Pods_Images/Home Page Images/IMG_1648.JPG',
    '/Pods_Images/Home Page Images/IMG_1649.JPG',
    '/Pods_Images/Home Page Images/IMG_1650.JPG',
    '/Pods_Images/Home Page Images/IMG_1651.JPG'
  ];

  // Show all product series (excluding any Made in India series for now)
  const featuredSeries = productSeries; // Show all 9 product series
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Image Slider Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[37.5vh] md:h-[45vh] lg:h-[52.5vh] overflow-hidden"
      >
        <ImageSlider
          images={homePageImages}
          className="w-full h-full"
          autoPlay={true}
          interval={5000}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-cyan-50/5 to-blue-50/5 dark:from-gray-950/10 dark:via-blue-900/5 dark:to-cyan-900/5"></div>
      </motion.section>

      {/* Premium Capsule Beds Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="pt-12 pb-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 via-transparent to-blue-50/30 dark:from-transparent dark:to-transparent"></div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight"
          >
            Premium Capsule
            <motion.span 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {" "}Beds
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto px-2"
          >
            {heroDescription}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3 group font-bold text-base sm:text-lg"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/features"
                className="border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 font-bold text-base sm:text-lg backdrop-blur-sm"
              >
                <span>Learn More</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl relative overflow-hidden transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 to-blue-50/30 dark:from-transparent dark:to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: Users, value: '10,000+', label: 'Happy Customers' },
              { icon: Star, value: '4.9/5', label: 'Customer Rating' },
              { icon: Award, value: '15+', label: 'Design Awards' },
              { icon: Globe, value: '25+', label: 'Countries' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                      to="/order-now"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-4 bg-gradient-to-br from-cyan-100/80 to-blue-100/80 dark:from-cyan-500/30 dark:to-blue-500/30 backdrop-blur-sm rounded-2xl shadow-lg">
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              BIDUA <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Series</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our complete range of premium capsule bed series designed for commercial and hospitality applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredSeries.map((series, index) => (
              <motion.div
                key={series.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <SeriesCard series={series} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Premium <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Experience premium comfort with our advanced features designed for commercial hospitality applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.slice(0, 6).map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      className="py-24 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 via-transparent to-blue-50/30 dark:from-transparent dark:to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Ready to Upgrade Your Facility?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Join hotels, hostels, and facilities worldwide who trust BIDUA Pods for premium guest accommodation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              to="/order-now"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 group font-bold text-xl"
            >
              <span>Order Now</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
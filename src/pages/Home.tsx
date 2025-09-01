import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import ImageSlider from '../components/ImageSlider';
import SeriesCard from '../components/SeriesCard';
import FeatureCard from '../components/FeatureCard';
import { productSeries } from '../data/products';
import { features } from '../data/features';

// Helper to extract price from product.price string
const extractPrice = (priceString: string): string => {
  const match = priceString.match(/₹([\d,]+)/);
  return match ? `₹${match[1]}` : 'Price on Request';
};

const Home: React.FC = () => {
  const { theme } = useTheme();
  
  const heroDescription = 'As a leading manufacturer and importer of hotel-grade sleeping pods, we deliver intelligent lighting, secure locks, fresh-air ventilation and compact footprint solutions—built for hostels, airports, offices, hospitals and more with direct quality control and competitive pricing.';

  // Structured data for homepage
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BIDUA Pods",
    "url": "https://biduapods.com/",
    "logo": "https://biduapods.com/image.png",
    "description": "Leading manufacturer and importer of premium capsule beds and sleeping pods for commercial applications",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H-77 Sector 63",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9512921903",
      "contactType": "sales",
      "email": "biduaindustries@gmail.com"
    },
    "sameAs": [
      "https://wa.me/919512921903"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://biduapods.com/",
    "name": "BIDUA Pods",
    "description": "Premium capsule beds and sleeping pods manufacturer and importer",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://biduapods.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

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
    <>
      <SEO
        title="BIDUA Pods | Premium Capsule Beds & Sleeping Pods Manufacturer India"
        description="Leading manufacturer & importer of premium capsule beds for hotels, hostels, airports, hospitals. Taiwan Chi-Mei ABS shell, intelligent LED controls, security features. Made-in-India & imported options. Get factory-direct pricing."
        canonical="https://biduapods.com/"
        ogTitle="BIDUA Pods | Premium Capsule Beds & Sleeping Pods"
        ogDescription="Premium capsule beds with intelligent LED controls, security features, and fresh-air ventilation. Factory-direct pricing from manufacturer."
        ogImage="https://biduapods.com/image.png"
        structuredData={[organizationData, websiteData]}
      />
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
          autoPlay={false}
          interval={6000}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-cyan-50/5 to-blue-50/5 dark:from-gray-950/10 dark:via-blue-900/5 dark:to-cyan-900/5"></div>
      </motion.section>

      {/* Premium Capsule Beds Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pt-12 pb-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 via-transparent to-blue-50/30 dark:from-transparent dark:to-transparent"></div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight"
          >
            Premium Capsule
            <motion.span 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
            >
              {" "}Beds
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto px-2"
          >
            {heroDescription}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/products"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3 group font-bold text-base sm:text-lg"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/features"
                className="border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-3 font-bold text-base sm:text-lg backdrop-blur-sm"
              >
                <span>Learn More</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl opacity-40" />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-purple-400/10 rounded-full blur-xl opacity-20" />
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-gradient-to-br from-cyan-100/80 to-blue-100/80 dark:from-cyan-500/30 dark:to-blue-500/30 backdrop-blur-sm rounded-2xl shadow-lg">
                    <stat.icon className="h-8 w-8 text-cyan-500 mx-auto" />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
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
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SeriesCard series={series} />
              </motion.div>
            ))}
          </div>
            
            {/* Pricing Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Imported Series</h4>
                  <div className="text-cyan-500 font-bold text-lg mb-2 whitespace-nowrap">Starting @ ₹4,99,999 per set</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    Note : 1 Set = 1 lower , 1 upper box
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    + delivery + GST
                  </div>
                </div>
                <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Made in India</h4>
                  <div className="text-green-500 font-bold text-lg mb-2 whitespace-nowrap">Starting @ ₹2,00,000+ per set</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    Note : 1 Set = 1 lower , 1 upper box
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    + delivery + GST
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
                Prices exclude delivery & GST
              </div>
            </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 via-transparent to-blue-50/30 dark:from-transparent dark:to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Ready to Upgrade Your Facility?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-xl mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Join hotels, hostels, and facilities worldwide who trust BIDUA Pods for premium guest accommodation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link
              to="/order-now"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/30 group font-bold text-xl"
            >
              <span>Order Now</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
      </div>
    </>
  );
};

export default Home;
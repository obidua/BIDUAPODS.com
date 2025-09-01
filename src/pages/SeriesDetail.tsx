import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Helper to extract price from product.price string
const extractPrice = (priceString: string): string => {
  const match = priceString.match(/₹([\d,]+)/);
  return match ? `₹${match[1]}` : 'Price on Request';
};
import SEO from '../components/SEO';
import ImageSlider from '../components/ImageSlider';
import ProductCard from '../components/ProductCard';
import LazyLoadWrapper from '../components/LazyLoadWrapper';
import { productSeries, products, getSeriesPriceDisplay } from '../data/products';
import { 
  ArrowLeft, 
  Home, 
  Star, 
  Package, 
  Palette, 
  Layers, 
  Shield, 
  Zap, 
  Building,
  ChevronRight,
  Award,
  Globe,
  Users
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SeriesDetail: React.FC = () => {
  const { seriesId } = useParams<{ seriesId: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const series = productSeries.find(s => s.id === seriesId);
  const seriesProducts = products.filter(product => 
    product.id.toLowerCase().includes(seriesId?.toLowerCase() || '')
  );

  if (!series) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Series Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The product series you're looking for doesn't exist.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalogue"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Catalogue</span>
            </Link>
            <Link
              to="/"
              className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-200 inline-flex items-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Generate structured data for the series
  const seriesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": series.name,
    "description": series.description,
    "brand": {
      "@type": "Brand",
      "name": "BIDUA Pods"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "BIDUA Industries Pvt Ltd"
    },
    "category": "Furniture > Beds > Capsule Beds",
    "url": `https://biduapods.com/series/${series.id}`,
    "hasVariant": seriesProducts.map(product => ({
      "@type": "Product",
      "name": product.name,
      "url": `https://biduapods.com/products/${product.id}`,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": product.price.match(/₹([\d,]+)/)?.[1]?.replace(/,/g, '') || "0"
      }
    }))
  };

  return (
    <>
      <SEO
        title={`${series.name} Series | BIDUA Pods Capsule Beds Specifications`}
        description={`${series.name} - ${series.description} Available in ${series.sizes.length} sizes and ${series.colors.length} colors. ${series.origin === 'made-in-india' ? 'Made in India' : 'Imported'} quality. View models and specifications.`}
        canonical={`https://biduapods.com/series/${series.id}`}
        ogTitle={`${series.name} Series | BIDUA Pods`}
        ogDescription={`${series.description} Available in multiple sizes and colors. Contact for pricing and delivery.`}
        ogImage={series.images.find(img => !img.toLowerCase().endsWith('.mp4')) || "https://biduapods.com/image.png"}
        structuredData={seriesStructuredData}
      />
      <div className="min-h-screen bg-white/70 dark:bg-gray-900/70">
        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link
                to="/catalogue"
                className="inline-flex items-center space-x-2 text-cyan-500 hover:text-cyan-400 transition-colors group"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Catalogue</span>
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </Link>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {series.name} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Series</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                  {series.description}
                </p>
              </div>
              
              {/* Series Badge */}
              <div className="flex flex-col items-end gap-3">
                <span className={`px-6 py-3 rounded-full text-lg font-bold shadow-lg ${
                  series.origin === 'made-in-india' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                    : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                }`}>
                  {series.origin === 'made-in-india' ? 'Made in India' : 'Imported'}
                </span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg">
                  <span className="whitespace-nowrap">Starting @ {extractPrice(getSeriesPriceDisplay(series.id))} per set</span>
                </span>
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    Note : 1 Set = 1 lower , 1 upper box
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
                    + delivery + GST
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
                    18% GST applies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Series Images */}
        <section className="py-16 bg-white/70 dark:bg-gray-950/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-cyan-500/30 overflow-hidden shadow-2xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
            >
              <ImageSlider
                images={series.images}
                className="w-full h-96"
                autoPlay={true}
                interval={5000}
              />
            </motion.div>
          </div>
        </section>

        {/* Series Details */}
        <section className="py-16 bg-gray-50/70 dark:bg-gray-900/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Series <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Specifications</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Material */}
                <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Layers className="h-6 w-6 text-cyan-400 mr-3" />
                    Material & Construction
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {series.material}
                  </p>
                </div>

                {/* Sizes */}
                <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Package className="h-6 w-6 text-cyan-400 mr-3" />
                    Available Sizes
                  </h3>
                  <div className="space-y-3">
                    {series.sizes.map((size, sizeIndex) => (
                      <div key={sizeIndex} className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <span className="font-medium text-gray-900 dark:text-white">{size.variant}</span>
                          <span className="text-cyan-400 font-mono text-sm">{size.dimensions}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Colors */}
                <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Palette className="h-6 w-6 text-cyan-400 mr-3" />
                    Color Options
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {series.colors.map((color, colorIndex) => (
                      <span 
                        key={colorIndex} 
                        className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-500/30"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Model Codes */}
                <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Zap className="h-6 w-6 text-cyan-400 mr-3" />
                    Model Codes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {series.models.map((model, modelIndex) => (
                      <span 
                        key={modelIndex} 
                        className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg text-sm font-mono"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-lg border border-cyan-200 dark:border-cyan-500/30">
                    <div className="text-center">
                      <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm mb-1 whitespace-nowrap">
                        Starting @ {extractPrice(getSeriesPriceDisplay(series.id))} per set
                      </div>
                      <div className="text-[0.5rem] text-gray-600 dark:text-gray-400 mb-1 whitespace-nowrap">
                        Note : 1 Set = 1 lower , 1 upper box
                      </div>
                      <div className="text-[0.5rem] text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        + delivery + GST
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white/70 dark:bg-gray-950/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Key <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Features</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {series.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 shadow-lg hover:shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    <Star className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Building className="h-6 w-6 text-cyan-400 mr-3" />
                Perfect Applications
              </h3>
              <div className="flex flex-wrap gap-3">
                {series.applications.map((application, appIndex) => (
                  <span 
                    key={appIndex} 
                    className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-500/20 dark:to-blue-500/20 text-cyan-700 dark:text-cyan-300 px-4 py-3 rounded-full text-sm font-medium border border-cyan-200 dark:border-cyan-500/30"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Available Models */}
        {seriesProducts.length > 0 && (
          <section className="py-16 bg-gray-50/70 dark:bg-gray-900/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Available <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Models</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  {seriesProducts.length} model{seriesProducts.length !== 1 ? 's' : ''} available in the {series.name} series
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seriesProducts.map((product, index) => (
                  <LazyLoadWrapper key={product.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg pointer-events-auto hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 inline-block whitespace-nowrap"
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  </LazyLoadWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Models Available */}
        {seriesProducts.length === 0 && (
          <section className="py-16 bg-gray-50/70 dark:bg-gray-900/70">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-12 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-10 w-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Series Available - Contact for Details
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  The {series.name} series is available for order. Contact our sales team for detailed specifications, 
                  custom configurations, and pricing information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 font-semibold"
                  >
                    Contact Sales Team
                  </Link>
                  <Link
                    to="/order-now"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-200 font-semibold"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Why Choose This Series */}
        <section className="py-16 bg-white/70 dark:bg-gray-950/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{series.name}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Premium Quality',
                  description: 'Taiwan Chi-Mei V0 fire-retardant grade materials with precision engineering for unmatched durability and safety standards.'
                },
                {
                  icon: Shield,
                  title: 'Direct Manufacturing',
                  description: 'As manufacturer and importer, we ensure complete quality control from raw materials to final assembly with competitive pricing.'
                },
                {
                  icon: Globe,
                  title: 'Full Support',
                  description: 'Comprehensive installation, after-sales service, and lifetime maintenance support for all our capsule products.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`text-center group bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-50 dark:hover:bg-gray-900/80 transition-all duration-300 border border-gray-200 dark:border-cyan-500/30 hover:border-cyan-400/60 shadow-lg hover:shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
                >
                      Starting @ {extractPrice(getSeriesPriceDisplay(series.id))} per set
                    <item.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-gray-800/30 dark:to-gray-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Ready to Order {series.name}?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
            >
              Get factory-direct pricing with our comprehensive manufacturing and import capabilities. 
              Contact us for detailed quotes and delivery timelines.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to={`/order-now?series=${series.id}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <span>Order {series.name} Now</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-200 font-semibold"
              >
                Contact Sales Team
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Navigation Footer */}
        <section className="py-12 bg-gray-50/70 dark:bg-gray-900/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Go Back</span>
              </button>
              <Link
                to="/catalogue"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Package className="h-5 w-5" />
                <span>View All Series</span>
              </Link>
              <Link
                to="/"
                className="border-2 border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-400 px-6 py-3 rounded-xl hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SeriesDetail;
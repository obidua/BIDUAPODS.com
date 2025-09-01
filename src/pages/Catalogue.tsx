import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Helper to extract price from product.price string
const extractPrice = (priceString: string): string => {
  const match = priceString.match(/₹([\d,]+)/);
  return match ? `₹${match[1]}` : 'Price on Request';
};
import SEO from '../components/SEO';
import { 
  BookOpen, 
  Star, 
  Package, 
  Palette, 
  Layers, 
  Shield, 
  Zap, 
  Building, 
  ChevronRight,
  Filter,
  Grid,
  List,
  Search,
  Share2
} from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import ProductCard from '../components/ProductCard';
import LazyLoadWrapper from '../components/LazyLoadWrapper';
import { products, productSeries, getSeriesPriceDisplay } from '../data/products';
import { useTheme } from '../context/ThemeContext';

const Catalogue: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const [showMainContent, setShowMainContent] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const allProductsRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  // Delayed rendering to prevent crashes during rapid navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // Check for series parameter in URL and set initial selection
  useEffect(() => {
    const seriesParam = searchParams.get('series');
    if (seriesParam && productSeries.find(s => s.id === seriesParam)) {
      setSelectedSeries(seriesParam);
    }
  }, [searchParams]);

  // Filter products based on selected series and search term
  const filteredProducts = products.filter(product => {
    const matchesSeries = selectedSeries === 'all' || product.id.toLowerCase().includes(selectedSeries.toLowerCase());
    const matchesOrigin = selectedOrigin === 'all' || product.origin === selectedOrigin;
    return matchesSeries && matchesOrigin;
  });

  // Show all series in filter (not just those with products)
  const seriesWithProducts = productSeries;

  // Handle series filter change - navigate to dedicated series page
  const handleSeriesFilterChange = (seriesId: string) => {
    if (seriesId === 'all') {
      setSelectedSeries('all');
    } else {
      // Navigate to dedicated series page
      navigate(`/series/${seriesId}`);
    }
  };

  return (
    <>
      <SEO
        title="Product Catalogue | BIDUA Pods Capsule Beds Specifications"
        description="Complete catalogue of BIDUA capsule beds with detailed specifications, dimensions, colors, and pricing. GALAXY, COSMOS, SPACE, Wooden, E-sports series. Download PDF catalogue available."
        canonical="https://biduapods.com/catalogue"
        ogTitle="BIDUA Pods Product Catalogue | Complete Specifications"
        ogDescription="Detailed catalogue with specifications, dimensions, colors, and pricing for all BIDUA capsule bed series."
      />
      <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'var(--svg-background-pattern)' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <BookOpen className="h-10 w-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Product <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Catalogue</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Explore our complete range of premium capsule beds and sleeping pods. From manufacturing to import, 
            we deliver hotel-grade solutions with intelligent controls, safety features, and competitive factory pricing.
          </motion.p>
          
          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className={`bg-white/20 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="text-2xl font-bold text-cyan-400">{productSeries.length}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Product Series</div>
            </div>
            <div className={`bg-white/20 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="text-2xl font-bold text-cyan-400">{products.length}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Available Models</div>
            </div>
            <div className={`bg-white/20 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="text-2xl font-bold text-cyan-400">25+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Countries Served</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            {/* Series Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedSeries}
                onChange={(e) => handleSeriesFilterChange(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="all">All Series</option>
                {seriesWithProducts.map((series) => (
                  <option key={series.id} value={series.id}>
                    {series.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Origin Filter */}
            <div className="flex items-center space-x-2">
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="all">All Origins</option>
                <option value="imported">Imported</option>
                <option value="made-in-india">Made in India</option>
              </select>
            </div>

            {/* Download Catalogue */}
            <button 
              onClick={() => {
                const message = encodeURIComponent(
                  `Check out BIDUA Pods complete product catalogue!\n\n` +
                  ` Premium Capsule Beds & Sleeping Pods\n` +
                  ` Complete specifications, dimensions & pricing\n` +
                  ` Made-in-India & Imported options available\n` +
                  ` Delivery across India\n\n` +
                  `View full catalogue: https://biduapods.com/catalogue\n\n` +
                  `Contact for quotes: +91 9512921903`
                );
                window.open(`https://wa.me/?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-green-500/25"
            >
              <Share2 className="h-4 w-4" />
              <span>Share Catalogue</span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Series Overview */}
      {showMainContent ? (
        <section className="py-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Complete <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Series Overview</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive range of capsule bed series, each engineered for specific applications and environments
              </p>
            </motion.div>

            {/* Series Cards */}
            <div className="space-y-16">
              {productSeries.map((series, seriesIndex) => {
                const seriesProducts = products.filter(product => 
                  product.id.toLowerCase().includes(series.id.toLowerCase())
                );

                return (
                  <LazyLoadWrapper
                    key={series.id}
                    placeholder={
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl animate-pulse">
                        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-t-3xl"></div>
                        <div className="p-8 space-y-4">
                          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                          <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: seriesIndex * 0.1 }}
                      className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-cyan-500/30 overflow-hidden shadow-2xl scroll-margin-top-nav ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
                    >
                      {/* Series Images */}
                      <div className="relative">
                        <ImageSlider
                          images={series.images}
                          className="w-full h-64"
                          autoPlay={false}
                          interval={4000}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>
                      </div>

                      {/* Series Header */}
                      <div className="bg-gradient-to-r from-cyan-100/50 to-blue-100/50 dark:from-cyan-500/20 dark:to-blue-600/20 p-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                          <div className="flex-1">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                              <Shield className="h-8 w-8 text-cyan-500 mr-3" />
                              {series.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                              {series.description}
                            </p>
                            
                            {/* Quick Info */}
                            <div className="flex flex-wrap gap-4">
                              <div className="flex items-center space-x-2">
                                <Package className="h-5 w-5 text-cyan-400" />
                                <span className="text-gray-600 dark:text-gray-300 font-medium">
                                  {series.sizes.length} Size{series.sizes.length > 1 ? 's' : ''}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Palette className="h-5 w-5 text-cyan-400" />
                                <span className="text-gray-600 dark:text-gray-300 font-medium">
                                  {series.colors.length} Color{series.colors.length > 1 ? 's' : ''}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Building className="h-5 w-5 text-cyan-400" />
                                <span className="text-gray-600 dark:text-gray-300 font-medium">
                                  {series.applications.length} Application{series.applications.length > 1 ? 's' : ''}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Series Stats */}
                          <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 min-w-[200px]">
                            <div className="text-center">
                              <div className="text-sm font-bold text-cyan-500 mb-1">Starting @ {extractPrice(getSeriesPriceDisplay(series.id))} per set</div>
                              <div className="text-[0.5rem] text-gray-600 dark:text-gray-400 mb-1">Note : 1 Set = 1 lower , 1 upper box</div>
                              <div className="text-[0.5rem] text-gray-600 dark:text-gray-400 mb-2">+ delivery + GST</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{seriesProducts.length} Available Models</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Series Details */}
                      <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                          {/* Left Column */}
                          <div className="space-y-6">
                            {/* Pricing Information */}
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                <Package className="h-5 w-5 text-cyan-400 mr-2" />
                                Pricing Information
                              </h4>
                              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-lg p-6 border border-cyan-200 dark:border-cyan-500/30">
                                <div className="text-center">
                                  <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm mb-1 whitespace-nowrap">
                                    Starting @ {extractPrice(getSeriesPriceDisplay(series.id))} per set
                                  </div>
                                  <div className="text-[0.5rem] text-gray-600 dark:text-gray-400 mb-1 whitespace-nowrap">
                                    Note : 1 Set = 1 lower , 1 upper box
                                  </div>
                                  <div className="text-[0.5rem] text-gray-600 dark:text-gray-400 mb-2 whitespace-nowrap">
                                    + delivery + GST
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <div>
                                      <div className="font-semibold text-gray-900 dark:text-white">Delivery</div>
                                      <div className="text-cyan-500 whitespace-nowrap">₹15,000/set</div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-gray-900 dark:text-white">GST</div>
                                      <div className="text-cyan-500">18%</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Material */}
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                <Layers className="h-5 w-5 text-cyan-400 mr-2" />
                                Material & Construction
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                                {series.material}
                              </p>
                            </div>

                            {/* Sizes */}
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                <Package className="h-5 w-5 text-cyan-400 mr-2" />
                                Available Sizes
                              </h4>
                              <div className="space-y-2">
                                {series.sizes.map((size, sizeIndex) => (
                                  <div key={sizeIndex} className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-3">
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium text-gray-900 dark:text-white">{size.variant}</span>
                                      <span className="text-cyan-400 font-mono text-sm">{size.dimensions}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-6">
                            {/* Colors */}
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                <Palette className="h-5 w-5 text-cyan-400 mr-2" />
                                Color Options
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {series.colors.map((color, colorIndex) => (
                                  <span 
                                    key={colorIndex} 
                                    className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-700 dark:text-purple-300 px-3 py-2 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-500/30"
                                  >
                                    {color}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                <Star className="h-5 w-5 text-cyan-400 mr-2" />
                                Key Features
                              </h4>
                              <div className="space-y-2">
                                {series.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Applications */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Building className="h-5 w-5 text-cyan-400 mr-2" />
                            Perfect Applications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {series.applications.map((application, appIndex) => (
                              <span 
                                key={appIndex} 
                                className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-500/20 dark:to-blue-500/20 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-200 dark:border-cyan-500/30"
                              >
                                {application}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Model Codes */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Zap className="h-5 w-5 text-cyan-400 mr-2" />
                            Model Codes
                          </h4>
                          <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                            <div className="mb-4 text-center">
                              <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">
                                Starting @ {extractPrice(getSeriesPriceDisplay(series.id))} per set
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                <span className="whitespace-nowrap">Note : 1 Set = 1 lower , 1 upper box</span>
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                <span className="whitespace-nowrap">+ delivery + GST</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {series.models.map((model, modelIndex) => (
                                <span 
                                  key={modelIndex} 
                                  className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm font-mono"
                                >
                                  {model}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Available Products */}
                        {seriesProducts.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                              <Package className="h-5 w-5 text-cyan-400 mr-2" />
                              Available Models in This Series
                            </h4>
                            <div className="mb-6">
                              <Link
                                to={`/series/${series.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-6 rounded-lg hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 text-sm font-semibold shadow-md hover:shadow-purple-500/25 inline-flex items-center space-x-2"
                              >
                                <span>View All {series.name} Models</span>
                                <ChevronRight className="h-4 w-4" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {seriesProducts.map((product, productIndex) => (
                                <LazyLoadWrapper key={product.id}>
                                  <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                                  >
                                    <ProductCard product={product} />
                                  </motion.div>
                                </LazyLoadWrapper>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </LazyLoadWrapper>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-200 dark:border-cyan-800 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Loading product series...</p>
            </div>
          </div>
        </section>
      )}

      {/* All Products Section */}
      {showMainContent && (
        <section ref={allProductsRef} className="py-20 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl scroll-margin-top-nav">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                All <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Products</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} 
                {selectedSeries !== 'all' && ` in ${productSeries.find(s => s.id === selectedSeries)?.name || 'selected series'}`}
                {selectedOrigin !== 'all' && ` (${selectedOrigin === 'made-in-india' ? 'Made in India' : 'Imported'})`}
              </p>
              {selectedSeries !== 'all' && filteredProducts.length === 0 && (
                <p className="text-amber-600 dark:text-amber-400 text-sm max-w-2xl mx-auto">
                  No specific product models are currently listed for this series. Please contact us for availability and custom configurations.
                </p>
              )}
            </motion.div>

            {/* Products Grid/List */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <LazyLoadWrapper
                  key={product.id}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                </LazyLoadWrapper>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center py-16 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
              >
                <div className="bg-gray-100 dark:bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedSeries !== 'all' ? 'Series Available - Contact for Details' : 'No Products Found'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedSeries !== 'all' 
                    ? 'This series is available for order. Contact our sales team for detailed specifications and pricing.'
                    : 'Try adjusting your search terms or filter settings'
                  }
                </p>
                <button
                  onClick={() => {
                    setSelectedSeries('all');
                    setSelectedOrigin('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 font-semibold"
                >
                  View All Products
                </button>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-gray-800/30 dark:to-gray-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Ready to Transform Your Space?
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
              to="/order-now"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
            >
              <span>Get Quote Now</span>
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
    </div>
    </>
  );
};

export default Catalogue;
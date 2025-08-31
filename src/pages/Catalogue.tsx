import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showMainContent, setShowMainContent] = useState(false);
  const [scrollTargetId, setScrollTargetId] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const allProductsRef = useRef<HTMLElement>(null);
  const seriesRefs = useRef<Map<string, HTMLDivElement>>(new Map());
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
      setScrollTargetId(seriesParam);
    }
  }, [searchParams]);

  // Filter products based on selected series and search term
  const filteredProducts = products.filter(product => {
    const matchesSeries = selectedSeries === 'all' || product.id.toLowerCase().includes(selectedSeries.toLowerCase());
    const matchesOrigin = selectedOrigin === 'all' || product.origin === selectedOrigin;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSeries && matchesOrigin && matchesSearch;
  });

  // Show all series in filter (not just those with products)
  const seriesWithProducts = productSeries;

  // Handle series content becoming visible for scrolling
  const handleContentVisible = useCallback((targetId: string) => {
    if (scrollTargetId === targetId) {
      let targetElement: HTMLElement | null = null;
      
      if (targetId === 'all-products') {
        targetElement = allProductsRef.current;
      } else {
        targetElement = seriesRefs.current.get(targetId) || null;
      }
      
      if (targetElement) {
        // Add a small delay to ensure content is fully painted
        setTimeout(() => {
          targetElement!.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
          setScrollTargetId(null); // Clear the target after scrolling
        }, 150);
      }
    }
  }, [scrollTargetId]);

  // Dedicated effect for handling scroll targets
  useEffect(() => {
    if (!scrollTargetId) return;

    let targetElement: HTMLElement | null = null;
    
    if (scrollTargetId === 'all-products') {
      targetElement = allProductsRef.current;
    } else {
      const seriesElement = seriesRefs.current.get(seriesId);
      targetElement = seriesElement;
    }
    
    // If element exists and is rendered, scroll immediately
    if (targetElement && targetElement.offsetHeight > 0) {
      setTimeout(() => {
        targetElement!.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        setScrollTargetId(null);
      }, 100);
    }
    // If element doesn't exist yet, LazyLoadWrapper will handle it via onContentVisible
  }, [scrollTargetId]);

  // Legacy scroll effects - remove these to prevent conflicts
  useEffect(() => {
    return () => {
      setScrollTargetId(null);
    };
  }, []);

  // Remove the old scroll effects that were causing loops
  /*
  useEffect(() => {
    if (selectedSeries !== 'all' && !scrollTargetId) {
      const seriesElement = seriesRefs.current.get(selectedSeries);
      if (seriesElement) {
        seriesElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }, [selectedSeries, scrollTargetId]);

  useEffect(() => {
    if (selectedSeries !== 'all') {
      const scrollToElement = () => {
        const seriesElement = seriesRefs.current.get(selectedSeries);
        const targetElement = seriesElement || allProductsRef.current;
        
        if (targetElement) {
          if (targetElement.offsetHeight > 0 && targetElement.offsetWidth > 0) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          } else {
            requestAnimationFrame(scrollToElement);
          }
        }
      };
      
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(scrollToElement);
      }, 150);
      
      return () => clearTimeout(timeoutId);
    }
  }, [selectedSeries]);
  */
        setTimeout(() => {
          seriesElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
          setScrollPendingSeries(null);
        }, 150);
      }
    }
  };

  // Scroll to specific series section or products section when series is selected
  useEffect(() => {
    if (selectedSeries !== 'all') {
      setScrollPendingSeries(selectedSeries);
      
      // Try immediate scroll if element is already rendered
      const seriesElement = seriesRefs.current.get(selectedSeries);
      if (seriesElement && seriesElement.offsetHeight > 0) {
        // Element is already rendered, scroll immediately
        setTimeout(() => {
          seriesElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
          setScrollPendingSeries(null);
        }, 100);
      } else {
        // Element not rendered yet, will be handled by onContentVisible callback
        const fallbackTimer = setTimeout(() => {
          // Fallback: scroll to all products section if series element never loads
          if (scrollPendingSeries === selectedSeries && allProductsRef.current) {
            allProductsRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
            setScrollPendingSeries(null);
          }
        }, 3000);
        
        return () => clearTimeout(fallbackTimer);
      }
    } else {
      setScrollPendingSeries(null);
    }
  }, [selectedSeries, scrollPendingSeries]);

  // Clear scroll pending when component unmounts
  useEffect(() => {
    return () => {
      setScrollPendingSeries(null);
    };
  }, []);

  // Original scroll effect - simplified
  useEffect(() => {
    if (selectedSeries !== 'all' && !scrollPendingSeries) {
      const seriesElement = seriesRefs.current.get(selectedSeries);
      if (seriesElement) {
        seriesElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }, [selectedSeries, scrollPendingSeries]);

  // Legacy scroll effect - remove this entire block
  useEffect(() => {
    if (selectedSeries !== 'all') {
      // Use requestAnimationFrame to ensure elements are properly rendered before scrolling
      const scrollToElement = () => {
        const seriesElement = seriesRefs.current.get(selectedSeries);
        const targetElement = seriesElement || allProductsRef.current;
        
        if (targetElement) {
          // Check if element has been rendered and has layout
          if (targetElement.offsetHeight > 0 && targetElement.offsetWidth > 0) {
            // Element is ready, scroll to it
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          } else {
            // Element not ready yet, try again on next frame
            requestAnimationFrame(scrollToElement);
          }
        }
      };
      
      // Start the scroll attempt after a brief delay to allow initial render
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(scrollToElement);
      }, 150);
      
      return () => clearTimeout(timeoutId);
    }
  }, [selectedSeries]);

  // Function to set series ref
  const setSeriesRef = (seriesId: string) => (element: HTMLDivElement | null) => {
    if (element) {
      seriesRefs.current.set(seriesId, element);
    } else {
      seriesRefs.current.delete(seriesId);
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
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Series Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
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

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
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
                      ref={setSeriesRef(series.id)}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: seriesIndex * 0.1 }}
                      className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-cyan-500/30 overflow-hidden shadow-2xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
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
                              <div className="text-lg font-bold text-cyan-500 mb-2">{getSeriesPriceDisplay(series.id)}</div>
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
                              <button
                                onClick={() => {
                                  setSelectedSeries(series.id);
                                  setScrollTargetId('all-products');
                                }}
                                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-6 rounded-lg hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 text-sm font-semibold shadow-md hover:shadow-purple-500/25"
                              >
                                View All {series.name} Models Below
                              </button>
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
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
              {selectedSeries !== 'all' && filteredProducts.length === 0 && (
                <p className="text-amber-600 dark:text-amber-400 text-sm max-w-2xl mx-auto">
                  No specific product models are currently listed for this series. Please contact us for availability and custom configurations.
                </p>
              )}
            </motion.div>

            {/* Products Grid/List */}
            {viewMode === 'grid' ? (
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
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product, index) => (
                  <LazyLoadWrapper
                    key={product.id}
                    placeholder={
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/3 h-64 bg-gray-200 dark:bg-gray-700 rounded-l-2xl"></div>
                          <div className="lg:w-2/3 p-8 space-y-4">
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            </div>
                            <div className="flex gap-3 mt-6">
                              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
                              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-cyan-500/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
                    >
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3">
                          <ImageSlider
                            images={product.images}
                            className="w-full h-64 lg:h-full"
                            autoPlay={false}
                            interval={4000}
                          />
                        </div>
                        <div className="lg:w-2/3 p-8">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold">
                              {product.price}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                          
                          {/* Features Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {product.features.slice(0, 6).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                              to={`/products/${product.id}`}
                              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 font-semibold text-center"
                            >
                              View Details
                            </Link>
                            <Link
                              to="/order-now"
                              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 font-semibold text-center"
                            >
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </LazyLoadWrapper>
                ))}
              </div>
            )}

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
                    setSearchTerm('');
                    setSelectedSeries('all');
                    setSelectedOrigin('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 font-semibold"
                >
                  {selectedSeries !== 'all' || selectedOrigin !== 'all' ? 'View All Products' : 'Clear Filters'}
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
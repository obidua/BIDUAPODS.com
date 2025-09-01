import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ArrowLeft, Star, Check, Layers, Shield, Zap, Package, Truck, Award } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import { products } from '../data/products';
import { useTheme } from '../context/ThemeContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { theme } = useTheme();

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  const additionalSpecs = {
    'galaxy-single': {
      bedSize: 'Single (190×95×5 cm)',
      ladderHeight: '480mm ergonomic non-slip',
      doorType: 'Security sliding door',
      panelOptions: 'Side/Back/Top panels available',
      tvSlot: 'Integrated TV slot ready',
      mirrorLight: 'Colorful mirror light included',
      safetyFeatures: 'Internal anti-theft lock, powder extinguisher',
      installationTime: '2-4 hours per set',
      warranty: '5 years comprehensive',
      certifications: 'V0 Fire-retardant, Non-toxic, Mildew-resistant'
    },
    'galaxy-double': {
      bedSize: 'Double (190×135×5 cm)',
      ladderHeight: '480mm ergonomic non-slip',
      doorType: 'Security sliding door',
      panelOptions: 'Side/Back/Top panels available',
      tvSlot: 'Integrated TV slot ready',
      mirrorLight: 'Colorful mirror light included',
      safetyFeatures: 'Internal anti-theft lock, powder extinguisher',
      installationTime: '2-4 hours per set',
      warranty: '5 years comprehensive',
      certifications: 'V0 Fire-retardant, Non-toxic, Mildew-resistant'
    },
    'cosmos-vertical': {
      bedSize: 'Single (190×95×5 cm)',
      ladderHeight: '480mm ergonomic design',
      doorType: 'Sliding door with mirror panel',
      panelOptions: 'Mirror panel integrated',
      tvSlot: 'TV slot ready',
      mirrorLight: 'Advanced mirror lighting',
      safetyFeatures: 'Internal security lock, safety systems',
      installationTime: '3-5 hours per set',
      warranty: '5 years comprehensive',
      certifications: 'V0 Fire-retardant, Non-toxic, Space-efficient'
    },
    'wooden-single': {
      bedSize: 'Single (190×95×5 cm)',
      ladderHeight: '480mm extended design',
      doorType: 'Eco-friendly sliding access',
      panelOptions: 'Wood-grain finish available',
      tvSlot: 'Optional TV integration',
      mirrorLight: 'Natural lighting system',
      safetyFeatures: 'Eco-safe lock, environmental compliance',
      installationTime: '2-4 hours per set',
      warranty: '5 years comprehensive',
      certifications: 'Eco-friendly, V0 Fire-retardant, Sustainable'
    },
    'esports-single': {
      bedSize: 'Extended Single (190×95×5 cm)',
      ladderHeight: '180mm compact design',
      doorType: 'Gaming-optimized access',
      panelOptions: 'Gaming aesthetic panels',
      tvSlot: 'Enhanced gaming display ready',
      mirrorLight: 'Gaming-focused lighting',
      safetyFeatures: 'Secure gaming environment',
      installationTime: '2-4 hours per set',
      warranty: '5 years comprehensive',
      certifications: 'Gaming-optimized, V0 Fire-retardant, Extended-use'
    }
  };

  const currentSpecs = additionalSpecs[product.id as keyof typeof additionalSpecs] || additionalSpecs['galaxy-single'];

  // Generate structured data for the product
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images.filter(img => !img.toLowerCase().endsWith('.mp4')),
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "BIDUA Pods"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "BIDUA Industries Pvt Ltd"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": product.price.match(/₹([\d,]+)/)?.[1]?.replace(/,/g, '') || "0",
      "availability": "https://schema.org/InStock",
      "url": `https://biduapods.com/products/${product.id}`,
      "seller": {
        "@type": "Organization",
        "name": "BIDUA Pods"
      }
    },
    "category": "Furniture > Beds > Capsule Beds",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Origin",
        "value": product.origin === 'made-in-india' ? 'Made in India' : 'Imported'
      },
      {
        "@type": "PropertyValue",
        "name": "Material",
        "value": product.specifications.materials
      },
      {
        "@type": "PropertyValue",
        "name": "Dimensions",
        "value": product.specifications.dimensions
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${product.name} | BIDUA Pods Capsule Bed Specifications & Price`}
        description={`${product.name} - ${product.description} Features: ${product.features.slice(0, 3).join(', ')}. Price: ${product.price}. Contact for delivery and installation.`}
        canonical={`https://biduapods.com/products/${product.id}`}
        ogTitle={`${product.name} | BIDUA Pods`}
        ogDescription={`${product.description} Price: ${product.price}. Contact for delivery and installation.`}
        ogImage={product.images.find(img => !img.toLowerCase().endsWith('.mp4')) || "https://biduapods.com/image.png"}
        structuredData={productStructuredData}
      />
      <div className="min-h-screen bg-white/70 dark:bg-gray-900/70">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-cyan-500 hover:text-cyan-400 transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Products</span>
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {product.description}
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-white/70 dark:bg-gray-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-cyan-500/30 overflow-hidden shadow-2xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                <ImageSlider
                  images={product.images}
                  className="w-full h-96"
                  autoPlay={false}
                  interval={5000}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg">
                      {product.price}
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                        product.origin === 'made-in-india' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                          : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                      }`}>
                        {product.origin === 'made-in-india' ? 'Made in India' : 'Imported'}
                      </span>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-gray-600 dark:text-gray-400">Premium Quality</span>
                    </div>
                    </div>
                  </div>
                  
                  {/* Additional Pricing Info */}
                  <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-lg border border-cyan-200 dark:border-cyan-500/30">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">{product.price}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Base Price</div>
                      </div>
                      <div>
                        <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">₹15,000</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Delivery</div>
                      </div>
                      <div>
                        <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">18%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">GST</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* SKU Information */}
                  <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Product SKU</div>
                      <div className="font-mono text-sm text-gray-900 dark:text-white font-bold">{product.id}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Star className="h-6 w-6 text-cyan-400 mr-3" />
                  Key Features
                </h2>
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`flex items-start space-x-3 bg-gray-50 dark:bg-gray-800/40 rounded-lg p-4 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
                    >
                      <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`bg-gradient-to-br from-cyan-100/50 to-blue-100/50 dark:from-cyan-500/20 dark:to-blue-600/20 rounded-xl p-4 text-center ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <Package className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1 Set</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">= 2 Pods</div>
                </div>
                <div className={`bg-gradient-to-br from-cyan-100/50 to-blue-100/50 dark:from-cyan-500/20 dark:to-blue-600/20 rounded-xl p-4 text-center ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <Truck className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">25-35</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Days Delivery</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 bg-gray-50/70 dark:bg-gray-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Layers className="h-8 w-8 text-cyan-400 mr-3" />
              Detailed Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Specifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Shield className="h-6 w-6 text-cyan-400 mr-2" />
                Basic Specifications
              </h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-gray-200 dark:border-gray-700/50 gap-2">
                    <span className="text-gray-500 dark:text-gray-400 capitalize font-medium sm:w-1/2">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium sm:w-1/2 sm:text-right break-words">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Advanced Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Zap className="h-6 w-6 text-cyan-400 mr-2" />
                Advanced Features
              </h3>
              <div className="space-y-4">
                {Object.entries(currentSpecs).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-gray-200 dark:border-gray-700/50 gap-2">
                    <span className="text-gray-500 dark:text-gray-400 capitalize font-medium sm:w-1/2">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium sm:w-1/2 sm:text-right break-words">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose This Model */}
      <section className="py-16 bg-white/70 dark:bg-gray-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{product.name.split(' - ')[0]}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'Taiwan Chi-Mei V0 fire-retardant grade ABS with precision engineering for unmatched durability and safety standards.'
              },
              {
                icon: Shield,
                title: 'Direct Manufacturing',
                description: 'As manufacturer and importer, we ensure complete quality control from raw materials to final assembly with competitive pricing.'
              },
              {
                icon: Truck,
                title: 'Full Support',
                description: 'Comprehensive installation, after-sales service, and lifetime maintenance support for all our capsule products.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`text-center group bg-gray-50 dark:bg-gray-900/40 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-900/60 transition-all duration-300 border border-gray-200 dark:border-cyan-500/30 hover:border-cyan-400/60 shadow-lg hover:shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
            Ready to Order {product.name.split(' - ')[0]}?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
          >
            Get factory-direct pricing with our comprehensive manufacturing and import capabilities. 
            Contact us for a detailed quote and delivery timeline.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/order-now"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg hover:shadow-cyan-500/25"
            >
              Order Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-200 font-semibold"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ProductDetail;
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard'; // Import ProductCard
import { products, productSeries } from '../data/products'; // Import products and productSeries
import { useTheme } from '../context/ThemeContext';



const Catalogue: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();

  // Delayed rendering to prevent crashes during rapid navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const seriesParam = searchParams.get('series');
  let displayedProducts = products; // Default to all individual products

  if (seriesParam) {
    const selectedSeries = productSeries.find(series => series.id === seriesParam);
    if (selectedSeries) {
      const productIdsInSeries = selectedSeries.models;
      displayedProducts = products.filter(product => productIdsInSeries.includes(product.id));
    } else {
      // If seriesParam is invalid, show all products
      displayedProducts = products;
    }
  }

  return (
    <>
      <SEO
        title="Product Catalogue | BIDUA Pods Capsule Beds"
        description="Explore our comprehensive range of capsule beds and sleeping pods. Find detailed specifications and pricing for all models."
        canonical="https://biduapods.com/catalogue"
        ogTitle="BIDUA Pods Product Catalogue"
        ogDescription="Comprehensive catalogue of BIDUA Pods capsule beds and sleeping pods."
      />
      {showMainContent && (
        <section className="py-20 bg-gray-50/70 dark:bg-gray-900/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Product Catalogue
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive range of capsule bed models, each engineered for specific applications and environments.
              </p>
            </div>

            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {displayedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  No products found for the selected series.
                </p>
                <Link
                  to="/catalogue" // Link back to show all products
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 inline-flex items-center space-x-2"
                >
                  <span>View All Products</span>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Catalogue;
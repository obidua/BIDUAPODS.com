{showMainContent && (
        <section className="py-20 bg-gray-50/70 dark:bg-gray-900/70">
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
            {/* Series content will go here */}
          </div>
        </section>
      )}
  );
};

export default Catalogue;
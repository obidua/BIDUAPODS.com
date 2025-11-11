import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, Search, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { allBlogPosts, blogCategories } from '../data/blogs';
import { useTheme } from '../context/ThemeContext';

const Blog: React.FC = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter blogs based on search and category
  const filteredBlogs = allBlogPosts.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort by date (newest first)
  const sortedBlogs = [...filteredBlogs].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  // Featured blogs
  const featuredBlogs = sortedBlogs.filter(blog => blog.featured).slice(0, 3);
  
  return (
    <>
      <SEO
        title="Sleeping Pods Blog - Industry Insights, Buyer Guides & Case Studies"
        description="Expert insights on sleeping pods, capsule beds, and hospitality industry trends. Learn about suppliers in India, hotel innovations, nap rooms for offices, and complete buyer guides."
        canonical="https://biduapods.com/blog"
        ogTitle="BIDUA Pods Blog - Sleeping Pod Industry Insights"
        ogDescription="Expert guides on sleeping pods, capsule beds manufacturing, hotel industry trends, and workplace wellness innovations."
      />

      <div className="min-h-screen bg-white/70 dark:bg-gray-900/70">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                BIDUA <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Industry insights, buyer guides, and expert advice on sleeping pods, capsule beds, and hospitality innovations
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, guides, case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Articles ({allBlogPosts.length})
              </button>
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredBlogs.length > 0 && selectedCategory === 'all' && !searchTerm && (
          <section className="py-16 bg-gray-50/70 dark:bg-gray-900/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${blog.slug}`}>
                      <div className={`bg-white dark:bg-gray-900/60 rounded-2xl overflow-hidden border border-gray-200 dark:border-cyan-500/30 hover:shadow-2xl transition-all duration-300 h-full group ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{blog.readTime}</span>
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-cyan-500 font-semibold">{blog.category}</span>
                            <ArrowRight className="h-5 w-5 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Blog Posts */}
        <section className="py-16 bg-white/70 dark:bg-gray-950/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {searchTerm ? 'Search Results' : selectedCategory === 'all' ? 'Latest Articles' : selectedCategory}
            </h2>
            
            {sortedBlogs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No articles found. Try adjusting your search or filter.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link to={`/blog/${blog.slug}`}>
                      <div className={`bg-white dark:bg-gray-900/60 rounded-2xl overflow-hidden border border-gray-200 dark:border-cyan-500/30 hover:shadow-2xl transition-all duration-300 h-full group ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{blog.readTime}</span>
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                            {blog.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center space-x-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 px-2 py-1 rounded-full text-xs"
                              >
                                <Tag className="h-3 w-3" />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                              <User className="h-4 w-4" />
                              <span>{blog.author}</span>
                            </div>
                            <ArrowRight className="h-5 w-5 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Get expert consultation and customized sleeping pod solutions for your facility
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-bold shadow-xl"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

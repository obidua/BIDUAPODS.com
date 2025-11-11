import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { allBlogPosts } from '../data/blogs';
import { BlogContentRenderer } from '../components/BlogContentRenderer';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = allBlogPosts.find(b => b.slug === slug);

  useEffect(() => {
    // Scroll to top when blog post loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    navigate('/blog');
    return null;
  }

  // Get related posts
  const relatedPosts = allBlogPosts
    .filter(b => 
      b.id !== blog.id && 
      (b.category === blog.category || b.tags.some(tag => blog.tags.includes(tag)))
    )
    .slice(0, 3);

  // Share functions
  const shareUrl = `https://biduapods.com/blog/${blog.slug}`;
  const shareTitle = blog.title;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  // Generate structured data for SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": `https://biduapods.com${blog.imageUrl}`,
    "datePublished": blog.publishDate,
    "dateModified": blog.updatedDate || blog.publishDate,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "BIDUA Pods",
      "logo": {
        "@type": "ImageObject",
        "url": "https://biduapods.com/image.png"
      }
    },
    "keywords": blog.metaKeywords.join(', '),
    "articleSection": blog.category,
    "wordCount": blog.content.split(' ').length
  };

  return (
    <>
      <SEO
        title={`${blog.title} | BIDUA Pods Blog`}
        description={blog.metaDescription}
        canonical={`https://biduapods.com/blog/${blog.slug}`}
        ogTitle={blog.title}
        ogDescription={blog.excerpt}
        ogImage={`https://biduapods.com${blog.imageUrl}`}
        structuredData={[articleStructuredData]}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Sticky Back Button - Below Navbar */}
        <div className="fixed top-16 md:top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>

        {/* Spacer for fixed button and navbar */}
        <div className="h-28 md:h-28"></div>

        {/* Hero Section - Newspaper Style */}
        <div className="bg-white dark:bg-gray-900 border-b-4 border-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-cyan-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider">
                {blog.category}
              </span>
              {blog.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 text-xs font-medium uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title - Newspaper Headline Style */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gradient mb-6 leading-tight font-serif">
              {blog.title}
            </h1>

            {/* Excerpt/Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-serif italic border-l-4 border-cyan-600 pl-6">
              {blog.excerpt}
            </p>

            {/* Author Info & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{blog.author}</div>
                    {blog.authorRole && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">{blog.authorRole}</div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-2xl">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content Area - 2 Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar - Table of Contents & Share (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-8 space-y-6">
                {/* Share Section */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                    Share Article
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full flex items-center space-x-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Facebook className="h-4 w-4" />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center space-x-3 bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors text-sm font-medium"
                    >
                      <Twitter className="h-4 w-4" />
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-full flex items-center space-x-3 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors text-sm font-medium"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="w-full flex items-center space-x-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border-l-4 border-cyan-600">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                    Quick Facts
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-600 font-bold mt-0.5">•</span>
                      <span>Published: {new Date(blog.publishDate).toLocaleDateString()}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-600 font-bold mt-0.5">•</span>
                      <span>Reading time: {blog.readTime}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-600 font-bold mt-0.5">•</span>
                      <span>Category: {blog.category}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Article Content */}
            <article className="lg:col-span-9 space-y-8">
              {/* Mobile Share Buttons */}
              <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 lg:hidden">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Share</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="p-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="p-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Body */}
              <BlogContentRenderer content={blog.content} />

              {/* Article Footer - Tags */}
              <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mr-2">Tags:</span>
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl border border-cyan-100 dark:border-cyan-800">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {blog.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      About {blog.author}
                    </h3>
                    {blog.authorRole && (
                      <p className="text-sm text-cyan-700 dark:text-cyan-400 font-semibold mb-2">{blog.authorRole}</p>
                    )}
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {blog.author} is an expert in the sleeping pod and hospitality industry, with extensive experience in product development and market analysis.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Related Posts - Newspaper Style */}
        {relatedPosts.length > 0 && (
          <section className="bg-white dark:bg-gray-900 py-16 border-t-2 border-gray-300 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b-4 border-cyan-600 mb-8 pb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-serif inline-block bg-cyan-600 text-white px-4 py-2">
                  Related Articles
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedBlog, index) => (
                  <motion.article
                    key={relatedBlog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${relatedBlog.slug}`} className="block">
                      <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-600 dark:hover:border-cyan-500 transition-all duration-300 overflow-hidden h-full">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedBlog.imageUrl}
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 bg-cyan-600 text-white px-3 py-1 text-xs font-bold uppercase">
                            {relatedBlog.category}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors font-serif line-clamp-2 leading-tight">
                            {relatedBlog.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                            {relatedBlog.excerpt}
                          </p>
                          
                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(relatedBlog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{relatedBlog.readTime}</span>
                            </span>
                          </div>
                          
                          {/* Read More Link */}
                          <div className="mt-4">
                            <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm group-hover:underline">
                              Read Full Article →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-500 to-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Contact us today for expert consultation and customized sleeping pod solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-bold shadow-xl"
              >
                <span>Contact Us</span>
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-cyan-600 transition-all duration-200 transform hover:scale-105 font-bold"
              >
                <span>View Products</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;

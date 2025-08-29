import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Bed, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/catalogue', label: 'Catalogue' },
    { path: '/features', label: 'Features' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/order-now', label: 'Order Now' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-cyan-500/30 transition-all duration-500 shadow-lg shadow-gray-200/50 dark:shadow-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Bed className="h-8 w-8 text-cyan-500 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-all duration-300">
              BIDUA Pods
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-400/10 shadow-sm'
                    : 'text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-cyan-400/5 hover:scale-105'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            
            <Link
              to="/order-now"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/30 font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-16 left-0 w-full md:hidden z-50"
            >
              <div className="mx-4 px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-xl border border-gray-200 dark:border-cyan-500/20 shadow-2xl">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.indexOf(item) * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-400/10 shadow-sm'
                        : 'text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-cyan-400/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <Link
                  to="/order-now"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 text-center font-semibold shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Quote
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-full mt-2 p-3 rounded-xl text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="h-5 w-5 mr-2" />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun className="h-5 w-5 mr-2" />
                      <span>Light Mode</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
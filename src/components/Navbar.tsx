import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Bed, Sun, Moon, ChevronDown, Home, ShoppingBag, BookOpen, MoreHorizontal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
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

  // Main navigation items
  const mainNavItems = [
    { path: '/', label: 'Home' },
    {
      label: 'Products & Services',
      submenu: [
        { path: '/products', label: 'All Products' },
        { path: '/catalogue', label: 'Catalogue' },
        { path: '/features', label: 'Features & Benefits' },
      ]
    },
    {
      label: 'Discover',
      submenu: [
        { path: '/gallery', label: 'Gallery' },
        { path: '/blog', label: 'Blog' },
        { path: '/about', label: 'About Us' },
      ]
    },
    { path: '/contact', label: 'Contact' },
  ];

  // Mobile bottom nav items (main 4 items)
  const mobileBottomNav = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/products', label: 'Shop', icon: ShoppingBag },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { label: 'More', icon: MoreHorizontal }
  ];

  // Items to show under "More" menu in mobile
  const moreMenuItems = [
    { path: '/catalogue', label: 'Catalogue' },
    { path: '/features', label: 'Features' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 w-full z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-cyan-500/30 transition-all duration-500 shadow-lg shadow-gray-200/50 dark:shadow-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <Bed className="h-8 w-8 text-cyan-500 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110" />
              <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-all duration-300">
                BIDUA Pods
              </span>
            </Link>

            {/* Desktop Navigation with Submenus */}
            <div className="flex items-center space-x-2">
              {mainNavItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  {item.path ? (
                    // Simple link item
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-400/10 shadow-sm'
                          : 'text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-cyan-400/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    // Menu item with submenu
                    <>
                      <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-cyan-400/5 transition-all duration-200 flex items-center gap-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      
                      {/* Submenu Dropdown */}
                      <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-gray-200 dark:border-cyan-500/20">
                        {item.submenu?.map((subitem, subidx) => (
                          <Link
                            key={subidx}
                            to={subitem.path}
                            className={`block px-4 py-2 text-sm transition-all duration-200 ${
                              isActive(subitem.path)
                                ? 'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-400/10'
                                : 'text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-cyan-400/5'
                            }`}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-cyan-500/30">
        <div className="px-4 py-3 flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Bed className="h-7 w-7 text-cyan-500 group-hover:text-cyan-400" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              BIDUA
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg border-b border-gray-200 dark:border-cyan-500/20 max-h-[calc(100vh-120px)] overflow-y-auto pb-24"
            >
              <div className="px-4 py-4 space-y-2">
                {mainNavItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          isActive(item.path)
                            ? 'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-400/10'
                            : 'text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                          className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 flex items-center justify-between"
                        >
                          {item.label}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile Submenu */}
                        <AnimatePresence>
                          {openSubmenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.submenu?.map((subitem, subidx) => (
                                <Link
                                  key={subidx}
                                  to={subitem.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                                    isActive(subitem.path)
                                      ? 'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-400/10'
                                      : 'text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400'
                                  }`}
                                >
                                  {subitem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <Link
                    to="/order-now"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Quote
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 mt-2 border border-gray-200 dark:border-gray-700"
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
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg border-t border-gray-200 dark:border-cyan-500/20">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          {mobileBottomNav.map((item, idx) => {
            const IconComponent = item.icon;
            const isMoreMenu = item.label === 'More';

            if (isMoreMenu) {
              return (
                <div key={idx} className="relative group">
                  <button className="w-full flex flex-col items-center justify-center py-3 px-2 rounded-lg text-gray-700 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-all">
                    <IconComponent className="h-6 w-6 mb-1" />
                    <span className="text-xs font-medium">More</span>
                  </button>
                  
                  {/* More Menu Dropdown */}
                  <div className="absolute bottom-full right-0 mb-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-gray-200 dark:border-cyan-500/20">
                    {moreMenuItems.map((moreItem, moreidx) => (
                      <Link
                        key={moreidx}
                        to={moreItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-cyan-400/5 transition-all"
                      >
                        {moreItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={idx}
                to={item.path!}
                className={`flex flex-col items-center justify-center py-3 px-2 rounded-lg transition-all ${
                  isActive(item.path!)
                    ? 'text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-400/10'
                    : 'text-gray-700 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400'
                }`}
              >
                <IconComponent className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Spacer for mobile bottom nav */}
      <div className="md:hidden h-20"></div>
    </>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50/70 dark:bg-gray-950/70 backdrop-blur-lg border-t border-gray-100 dark:border-cyan-500/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bed className="h-8 w-8 text-cyan-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">BIDUA Pods</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Leading manufacturer and importer of premium hotel-grade capsule beds with intelligent lighting, 
              secure locks, and fresh-air ventilation systems for commercial and hospitality applications. 
              Direct quality control and competitive factory pricing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">Products</a></li>
              <li><a href="/features" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">Technology</a></li>
              <li><a href="/gallery" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">Gallery</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 text-cyan-500" />
                <span>biduaindustries@gmail.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Company</h4>
              <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                <p>BIDUA Industries Pvt Ltd</p>
                <p>Motorsers Pvt Ltd</p>
              </div>
            </div>
          </div>
          
          {/* Developer Login Link */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link 
              to="/admin/login" 
              className="text-xs text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300"
            >
              Developer Login
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-700 dark:text-gray-400">
            © 2025 BIDUA Pods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--svg-background-pattern)' }}></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 via-transparent to-blue-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-2xl shadow-lg">
                <Bed className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  BIDUA Pods
                </span>
                <p className="text-gray-400 text-sm">Premium Sleep Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Leading manufacturer and importer of premium hotel-grade capsule beds with intelligent lighting, 
              secure locks, and fresh-air ventilation systems for commercial and hospitality applications.
            </p>
            
            {/* Company Info */}
            <div className="space-y-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  Companies
                </h4>
                <div className="text-gray-300 space-y-1">
                  <p className="font-medium">BIDUA Industries Pvt Ltd</p>
                  <p className="font-medium">Motorsers Pvt Ltd</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/products", label: "Products" },
                { href: "/catalogue", label: "Catalogue" },
                { href: "/features", label: "Technology" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <div className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 mr-0 group-hover:mr-2"></div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></div>
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Manufacturing",
                "Import Solutions", 
                "Installation",
                "Maintenance",
                "Custom Design",
                "Global Shipping"
              ].map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></div>
              Get In Touch
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-2 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <div className="space-y-1">
                      <a href="mailto:biduaindustries@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block">
                        biduaindustries@gmail.com
                      </a>
                      <a href="mailto:support@biduapods.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block">
                        support@biduapods.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-2 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <a href="tel:9512921903" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      +91 9512921903
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-2 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Visit Us</h4>
                    <p className="text-gray-300 text-sm">
                      H-77 Sector 63<br />
                      Noida, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 BIDUA Pods. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center">
                Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> in India
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/order-now" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-cyan-500/25"
              >
                Get Quote
              </Link>
              <Link 
                to="/admin/login" 
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center space-x-1 group"
              >
                <span>Developer</span>
                <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Mail, Phone, MapPin, ExternalLink, Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--svg-background-pattern)' }}></div>
      </div>
      
      {/* Minimal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/5 via-transparent to-blue-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2.5 rounded-xl">
                <Bed className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  BIDUA Pods
                </span>
                <p className="text-gray-400 text-xs mt-0.5">Premium Sleep Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
              Leading manufacturer and importer of premium hotel-grade capsule beds with intelligent lighting, 
              secure locks, and fresh-air ventilation systems.
            </p>
            
            {/* Company Info - Simplified */}
            <div className="mb-6">
              <h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wider">Companies</h4>
              <div className="text-gray-300 space-y-1 text-sm">
                <p>BIDUA Industries Pvt Ltd</p>
                <p>Motorsers Pvt Ltd</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-600/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
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
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {[
                "Manufacturing",
                "Import Solutions", 
                "Installation",
                "Maintenance",
                "Custom Design",
                "Global Shipping"
              ].map((service, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center hover:text-cyan-400 transition-colors duration-200 cursor-default">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Streamlined */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-2 rounded-lg mt-0.5">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Email</h4>
                  <div className="space-y-0.5">
                    <a href="mailto:biduaindustries@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block">
                      biduaindustries@gmail.com
                    </a>
                    <a href="mailto:support@biduapods.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm block">
                      support@biduapods.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-2 rounded-lg mt-0.5">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Phone</h4>
                  <a href="tel:9512921903" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    +91 9512921903
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-2 rounded-lg mt-0.5">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Location</h4>
                  <p className="text-gray-300 text-sm">
                    H-77 Sector 63<br />
                    Noida, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Simplified */}
        <div className="border-t border-white/5 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-center lg:text-left">© 2025 BIDUA Pods. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center">
                Made with <Heart className="h-3 w-3 text-red-400 mx-1" /> in India
              </span>
            </div>

            {/* Action Links */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/order-now" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-medium shadow-lg hover:shadow-cyan-500/20 text-sm"
              >
                Get Quote
              </Link>
              <Link 
                to="/admin/login" 
                className="text-gray-400 hover:text-cyan-400 transition-colors text-xs flex items-center space-x-1 group"
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
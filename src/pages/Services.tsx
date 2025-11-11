import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Package, Wrench, Settings, Palette, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const services = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'State-of-the-art manufacturing facility producing premium sleeping pods with precision engineering and quality control.',
      features: [
        'Taiwan Chi-Mei ABS shell material',
        'ISO 9001 certified production',
        'Quality testing at every stage',
        '10,000+ units annual capacity',
        'Customizable production runs',
        'Strict quality assurance protocols'
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Package,
      title: 'Import Solutions',
      description: 'Complete import services bringing world-class sleeping pod technology from international manufacturers to India.',
      features: [
        'Direct import from trusted suppliers',
        'Customs clearance handled',
        'Quality inspection pre-shipment',
        'Competitive pricing advantage',
        'Latest international designs',
        'End-to-end import management'
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Professional installation services ensuring your sleeping pods are set up perfectly and ready to use.',
      features: [
        'Expert installation team',
        'On-site assembly and setup',
        'Electrical and ventilation setup',
        'Space optimization planning',
        'Safety compliance verification',
        'Post-installation walkthrough'
      ],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Comprehensive maintenance programs to keep your sleeping pods in perfect condition year after year.',
      features: [
        'Scheduled preventive maintenance',
        '24/7 emergency support',
        'Replacement parts availability',
        'Regular cleaning services',
        'System diagnostics and updates',
        'Extended warranty options'
      ],
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Tailored sleeping pod solutions designed specifically for your unique space and brand requirements.',
      features: [
        'Bespoke color schemes',
        'Custom branding and logos',
        'Unique size configurations',
        '3D visualization before production',
        'Interior layout customization',
        'Special feature integration'
      ],
      gradient: 'from-orange-500 to-yellow-600'
    },
    {
      icon: Globe,
      title: 'Global Shipping',
      description: 'Worldwide shipping services delivering BIDUA Pods to customers across India and internationally.',
      features: [
        'Pan-India delivery network',
        'International shipping available',
        'Secure packaging standards',
        'Real-time tracking',
        'Insurance coverage',
        'White-glove delivery service'
      ],
      gradient: 'from-green-500 to-cyan-600'
    }
  ];

  return (
    <>
      <SEO
        title="Our Services | BIDUA Pods - Manufacturing, Import, Installation & More"
        description="Comprehensive sleeping pod services: Manufacturing, Import Solutions, Professional Installation, Maintenance, Custom Design, and Global Shipping. End-to-end solutions for your capsule bed needs."
        canonical="https://biduapods.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 pb-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              End-to-end solutions for all your sleeping pod needs. From manufacturing to maintenance, we've got you covered.
            </motion.p>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:scale-105"
                >
                  {/* Icon */}
                  <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-400">
                        <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`inline-flex items-center space-x-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 text-cyan-500" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-cyan-50 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your sleeping pod requirements. Our expert team is ready to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                to="/order-now"
                className="bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-800 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Services;

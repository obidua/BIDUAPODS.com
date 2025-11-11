import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

// Helper to extract price from product.price string
const extractPrice = (priceString: string): string => {
  const match = priceString.match(/₹([\d,]+)/);
  return match ? `₹${match[1]}` : 'Price on Request';
};
import FeatureCard from '../components/FeatureCard';
import { features } from '../data/features';
import { Cpu, Shield, Zap, Layers, Settings, Wind } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Features: React.FC = () => {
  const { theme } = useTheme();

  const coreFeatures = [
    {
      icon: Cpu,
      title: 'Intelligent LED Control',
      description: 'Advanced multifunction control panel with back-lit number plate for easy identification. Features reading light, colorful mirror light, and simple ceiling light controls.'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Internal safety anti-theft lock with stainless-steel handle provides peace of mind. Fire-retardant materials and integrated safety systems ensure maximum protection.'
    },
    {
      icon: Wind,
      title: 'Fresh Air Ventilation',
      description: 'Advanced ventilation system with two air inlets and outlets providing ~30 m³/h of fresh air circulation with adjustable airflow speed.'
    },
    {
      icon: Zap,
      title: 'Universal Power System',
      description: 'Compatible with 110–240V power supply. Energy-efficient operation with typical consumption of ~60W (no TV) or ~110W (with TV).'
    },
    {
      icon: Layers,
      title: 'Premium Materials',
      description: 'Taiwan Chi-Mei flame-retardant ABS shell with high-quality metal structure. Non-toxic, fire-retardant, resistant to mildew, water and insects.'
    },
    {
      icon: Settings,
      title: 'Customization Options',
      description: 'Available in 9 colors with custom options on MOQ. Optional TV module, safe box, card access, bedding sets, and foldable side tables.'
    }
  ];

  const standardFeatures = [
    'Intelligent LED multifunction control panel with capsule number plate (blue back-light/disc light)',
    'Internal security lock with stainless-steel handle',
    'Lighting set: reading/mirror light + ceiling light',
    'Ventilation with adjustable airflow (two inlets/outlets)',
    'Ergonomic non-slip ladder with security sliding door',
    'TV slot / mirror panel (series dependent)',
    'Fire-retardant bedboard with clothes hook',
    'Powder extinguisher and safety systems'
  ];

  return (
    <>
      <SEO
        title="Advanced Technology & Features | BIDUA Pods Capsule Beds"
        description="Discover advanced features of BIDUA capsule beds: intelligent LED controls, fresh-air ventilation, security locks, Taiwan Chi-Mei fire-retardant ABS shell, universal power system, and premium safety features."
        canonical="https://biduapods.com/features"
        ogTitle="BIDUA Pods Advanced Technology & Features"
        ogDescription="Intelligent LED controls, security features, fresh-air ventilation, and premium materials in BIDUA capsule beds."
      />
      <div className="min-h-screen bg-white/70 dark:bg-gray-900/70">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/features-background.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced <span className="text-brand-gradient">Technology</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Experience the convergence of cutting-edge technology and sleep science in our revolutionary capsule bed systems. 
            Every feature is designed with safety, comfort, and efficiency in mind.
          </p>
          
          {/* Pricing Banner */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className={`bg-white/20 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="text-xs sm:text-sm font-bold text-cyan-400">Starting @ ₹4,99,999 per set</div>
              <div className="text-[0.6rem] text-gray-600 dark:text-gray-300">Note : 1 Set = 1 lower , 1 upper box</div>
              <div className="text-[0.6rem] text-gray-600 dark:text-gray-300">+ delivery + GST</div>
            </div>
            <div className={`bg-white/20 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="text-xs sm:text-sm font-bold text-green-400">Starting @ ₹2,00,000+ per set</div>
              <div className="text-[0.6rem] text-gray-600 dark:text-gray-300">Note : 1 Set = 1 lower , 1 upper box</div>
              <div className="text-[0.6rem] text-gray-600 dark:text-gray-300">+ delivery + GST</div>
            </div>
            <div className={`bg-white/20 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl px-6 py-3 border border-cyan-400/40 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
              <div className="text-xs sm:text-sm font-bold text-orange-400">₹15,000</div>
              <div className="text-[0.6rem] text-gray-600 dark:text-gray-300">Delivery per set</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-white/70 dark:bg-gray-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gradient mb-4">
              Core Technologies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/30 text-center hover:border-cyan-400/60 transition-all duration-300 transform hover:-translate-y-1 group shadow-lg hover:shadow-xl ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* All Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-gradient mb-8 text-center">
              Complete Feature Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <FeatureCard feature={feature} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standard Features */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gradient mb-4">
              Standard Features (Per Pod)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every BIDUA capsule bed comes equipped with these essential features as standard
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standardFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center space-x-4 bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 shadow-md hover:shadow-lg ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Safety */}
      <section className="py-20 bg-white/70 dark:bg-gray-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gradient mb-6">
                Materials & Safety
              </h2>
              <div className="space-y-6">
                <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-cyan-500/30 shadow-lg ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-cyan-400 mr-2" />
                    Shell & Structure
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong className="text-gray-900 dark:text-white">Shell / Structure:</strong> Taiwan Chi-Mei V0 fire-retardant grade ABS + high-quality metal 
                    (series vary; Wooden uses eco multi-layer boards + metal). 
                    Non-toxic, fire-retardant; resistant to mildew, water and insects.
                  </p>
                </div>
                <div className={`bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-cyan-500/30 shadow-lg ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Zap className="h-5 w-5 text-cyan-400 mr-2" />
                    Electrical Systems
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Universal 110–240V input with safe 12V low-voltage lighting system. Energy-efficient design with 
                    typical consumption of ~60W (no TV) or ~110W (with TV).
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src='/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images4.png'
                alt="Materials and Safety"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="text-white dark:text-white font-semibold mb-2">Safety Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {['V0 Fire-retardant', 'Non-toxic', 'Mildew-resistant', 'Water-resistant', 'Insect-resistant'].map((feature, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-20 bg-gray-50/70 dark:bg-gray-900/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gradient mb-4">
              Innovation Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From concept to global deployment, our commitment to innovation drives every advancement
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { year: '2018', title: 'Foundation', description: 'BIDUA established with focus on capsule bed innovation' },
              { year: '2020', title: 'First Series Launch', description: 'GALAXY series introduced with intelligent LED controls and safety features' },
              { year: '2021', title: 'Material Innovation', description: 'Taiwan Chi-Mei flame-retardant ABS integration for enhanced safety' },
              { year: '2022', title: 'Series Expansion', description: 'COSMOS, SPACE, and Wooden series launched for diverse applications' },
              { year: '2023', title: 'Global Reach', description: 'International distribution network established across multiple continents' },
              { year: '2024', title: 'Smart Integration', description: 'Advanced IoT features and mobile app connectivity introduced' }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{milestone.year}</span>
                </div>
                <div className={`flex-1 bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-cyan-500/30 shadow-lg ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Features;
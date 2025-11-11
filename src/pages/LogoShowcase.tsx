import React from 'react';
import BIDUALogo from '../components/BIDUALogo';
import { useTheme } from '../context/ThemeContext';

const LogoShowcase: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          BIDUA Pods Logo Variants
        </h1>

        <div className="space-y-16">
          {/* Full Logo */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Full Logo (Icon + Text)
            </h2>
            <div className="flex justify-center items-center">
              <BIDUALogo 
                variant="full" 
                className="w-full max-w-md" 
                glowEffect={theme === 'dark'}
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
              Best for: Headers, hero sections, main branding
            </p>
          </div>

          {/* Icon Only */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Icon Only
            </h2>
            <div className="flex justify-center items-center">
              <BIDUALogo 
                variant="icon" 
                className="w-32 h-32" 
                glowEffect={theme === 'dark'}
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
              Best for: Favicon, app icons, social media profile pictures
            </p>
          </div>

          {/* Text Only */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Text Only
            </h2>
            <div className="flex justify-center items-center">
              <BIDUALogo 
                variant="text" 
                className="w-full max-w-md" 
                glowEffect={theme === 'dark'}
              />
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
              Best for: Wordmarks, banners, minimal layouts
            </p>
          </div>

          {/* Different Sizes */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Size Variations (Icon)
            </h2>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <BIDUALogo variant="icon" className="w-16 h-16 mx-auto mb-2" glowEffect={theme === 'dark'} />
                <p className="text-sm text-gray-600 dark:text-gray-400">Small (64px)</p>
              </div>
              <div className="text-center">
                <BIDUALogo variant="icon" className="w-24 h-24 mx-auto mb-2" glowEffect={theme === 'dark'} />
                <p className="text-sm text-gray-600 dark:text-gray-400">Medium (96px)</p>
              </div>
              <div className="text-center">
                <BIDUALogo variant="icon" className="w-32 h-32 mx-auto mb-2" glowEffect={theme === 'dark'} />
                <p className="text-sm text-gray-600 dark:text-gray-400">Large (128px)</p>
              </div>
              <div className="text-center">
                <BIDUALogo variant="icon" className="w-48 h-48 mx-auto mb-2" glowEffect={theme === 'dark'} />
                <p className="text-sm text-gray-600 dark:text-gray-400">XLarge (192px)</p>
              </div>
            </div>
          </div>

          {/* With and Without Glow */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Glow Effect Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-gray-900 rounded-xl p-8 mb-4">
                  <BIDUALogo variant="icon" className="w-32 h-32 mx-auto" glowEffect={false} />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Without Glow Effect</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 rounded-xl p-8 mb-4">
                  <BIDUALogo variant="icon" className="w-32 h-32 mx-auto" glowEffect={true} />
                </div>
                <p className="text-gray-600 dark:text-gray-400">With Neon Glow Effect</p>
              </div>
            </div>
          </div>

          {/* Dark/Light Background Testing */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Background Variations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-xl p-8 mb-4 border border-gray-200">
                  <BIDUALogo variant="full" className="w-full max-w-xs mx-auto" glowEffect={false} />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Light Background</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-700 rounded-xl p-8 mb-4">
                  <BIDUALogo variant="full" className="w-full max-w-xs mx-auto" glowEffect={false} />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Gray Background</p>
              </div>
              <div className="text-center">
                <div className="bg-black rounded-xl p-8 mb-4">
                  <BIDUALogo variant="full" className="w-full max-w-xs mx-auto" glowEffect={true} />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Dark Background + Glow</p>
              </div>
            </div>
          </div>

          {/* Design Notes */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Design Features
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Neon Capsule Pod Design:</strong> 
                  <span className="ml-2">Logo mimics the double-decker capsule bed structure with rounded corners</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Gradient Color Scheme:</strong> 
                  <span className="ml-2">Pink (#ec4899) → Purple (#8b5cf6) → Blue (#3b82f6) gradient for modern tech aesthetic</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Optional Neon Glow:</strong> 
                  <span className="ml-2">Dynamic glow effect enabled in dark mode for futuristic appearance</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Scalable SVG:</strong> 
                  <span className="ml-2">Vector-based design maintains quality at any size</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Three Variants:</strong> 
                  <span className="ml-2">Full logo, icon-only, and text-only for different use cases</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;

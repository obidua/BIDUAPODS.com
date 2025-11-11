import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running as PWA
    const standalone = window.matchMedia('(display-mode: standalone)').matches || 
                      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if prompt was dismissed before
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    
    // Show prompt if not dismissed recently and not already installed
    if (!standalone && Date.now() - dismissedTime > oneWeek) {
      // For Android/Desktop - show after 30 seconds
      const timer = setTimeout(() => {
        if (deferredPrompt || iOS) {
          setShowPrompt(true);
        }
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [deferredPrompt]);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt immediately if not dismissed recently
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      const dismissedTime = dismissed ? parseInt(dismissed) : 0;
      const oneWeek = 7 * 24 * 60 * 60 * 1000;
      
      if (Date.now() - dismissedTime > oneWeek) {
        setTimeout(() => setShowPrompt(true), 30000);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    setShowPrompt(false);
  };

  if (isStandalone || !showPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      {showPrompt && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleDismiss}
          />

          {/* Install Prompt Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-cyan-500/30 z-[101] overflow-hidden"
          >
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 pb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
              
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-3 relative z-10">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Install BIDUA Pods App</h3>
                  <p className="text-white/90 text-sm">Get instant access & offline browsing</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {isIOS ? (
                // iOS Instructions
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Install this app on your iPhone:
                  </p>
                  <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">1</span>
                      <span>Tap the Share button <span className="inline-block">📤</span> at the bottom of Safari</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">2</span>
                      <span>Scroll down and tap "Add to Home Screen" <span className="inline-block">➕</span></span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">3</span>
                      <span>Tap "Add" to install the app</span>
                    </li>
                  </ol>
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 mt-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      💡 <strong>Benefits:</strong> Faster loading, offline access, push notifications, and app-like experience!
                    </p>
                  </div>
                </div>
              ) : (
                // Android/Desktop
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-4 mb-2">
                        <Download className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mx-auto" />
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Fast Access</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-4 mb-2">
                        <Smartphone className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mx-auto" />
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">App Feel</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-4 mb-2">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Offline</p>
                    </div>
                  </div>

                  <button
                    onClick={handleInstallClick}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Install App Now</span>
                  </button>

                  <button
                    onClick={handleDismiss}
                    className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 py-2 text-sm font-medium transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;

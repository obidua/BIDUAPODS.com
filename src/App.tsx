import React, { useState } from 'react';
import WelcomeSplash from './components/WelcomeSplash';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PWAInstallPrompt from './components/PWAInstallPrompt';

// Import page components directly for faster loading
import Home from './pages/Home';
import Products from './pages/Products';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import Catalogue from './pages/Catalogue';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderNow from './pages/OrderNow';
import ProductDetail from './pages/ProductDetail';
import SeriesDetail from './pages/SeriesDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import LogoShowcase from './pages/LogoShowcase';

// Preload all images when app starts
const PreloadImages: React.FC = () => {
  useEffect(() => {
    const imageUrls = [
      // Home page images
      '/Pods_Images/Home Page Images/IMG_1642.JPG',
      '/Pods_Images/Home Page Images/IMG_1643.JPG',
      '/Pods_Images/Home Page Images/IMG_1644.JPG',
      '/Pods_Images/Home Page Images/IMG_1645.JPG',
      '/Pods_Images/Home Page Images/IMG_1646.JPG',
      '/Pods_Images/For Website main images/pod view.png',
      '/Pods_Images/For Website main images/inside 2.png',
      '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed main.png',
      '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed main.png',
      '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed main.png',
      '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images4.png',
      '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images.png'
    ];

    // Preload images in background
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return null;
};

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};


function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <HelmetProvider>
      <Router>
        <PreloadImages />
        <ScrollToTop />
        {showSplash && <WelcomeSplash onFinish={() => setShowSplash(false)} />}
        {!showSplash && (
          <>
            <Navbar />
            <WhatsAppButton />
            <PWAInstallPrompt />
            <div className="min-h-screen md:bg-white/70 dark:md:bg-gray-950/80 transition-colors duration-500 relative z-20">
              <main className="pt-0 md:pt-16 pb-0 md:pb-0">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/catalogue" element={<Catalogue />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/series/:seriesId" element={<SeriesDetail />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/order-now" element={<OrderNow />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/logo-showcase" element={<LogoShowcase />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </>
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;

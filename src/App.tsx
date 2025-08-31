import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load page components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const Features = React.lazy(() => import('./pages/Features'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Catalogue = React.lazy(() => import('./pages/Catalogue'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const OrderNow = React.lazy(() => import('./pages/OrderNow'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));

// Loading component
const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-white/70 dark:bg-gray-950/80 backdrop-blur-xl flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-200 dark:border-cyan-800 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400 font-medium">Loading...</p>
    </div>
  </div>
);

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />
      <div className="min-h-screen bg-white/70 dark:bg-gray-950/80 backdrop-blur-xl transition-colors duration-500 relative z-20">
        <main className="pt-16">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/features" element={<Features />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order-now" element={<OrderNow />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

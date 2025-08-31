import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import { useTheme } from '../context/ThemeContext';

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const { theme } = useTheme();

  const galleryImages = [
    {
      url: '/Pods_Images/For Website main images/pod view.png',
      title: 'GALAXY Series Pod View',
      category: 'Product Design'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1642.JPG',
      title: 'Premium Installation Setup 1',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1643.JPG',
      title: 'Premium Installation Setup 2',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1644.JPG',
      title: 'Premium Installation Setup 3',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1645.JPG',
      title: 'Premium Installation Setup 4',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1646.JPG',
      title: 'Premium Installation Setup 5',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1647.JPG',
      title: 'Premium Installation Setup 6',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1648.JPG',
      title: 'Premium Installation Setup 7',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1649.JPG',
      title: 'Premium Installation Setup 8',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1650.JPG',
      title: 'Premium Installation Setup 9',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Home Page Images/IMG_1651.JPG',
      title: 'Premium Installation Setup 10',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/For Website main images/inside 2.png',
      title: 'Interior View - Double Pod',
      category: 'Interior Design'
    },
    {
      url: '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed main.png',
      title: 'COSMOS Vertical Series',
      category: 'Commercial'
    },
    {
      url: '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed main.png',
      title: 'Wooden Series Design',
      category: 'Premium Materials'
    },
    {
      url: '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed main.png',
      title: 'E-sports Series Gaming Pod',
      category: 'Gaming'
    },
    {
      url: '/Pods_Images/For Website main images/loading .png',
      title: 'Installation Setup',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/Galaxy Series/"GALAXY"series -Horizontal single:double bed more images4.png',
      title: 'LED Control Panel',
      category: 'Technology'
    },
    {
      url: '/Pods_Images/For Website main images/Pods Hall looks.jpg',
      title: 'Multiple Pod Configuration',
      category: 'Commercial'
    },
    {
      url: '/Pods_Images/For Website main images/Pods hall look3.png',
      title: 'Space-Efficient Layout',
      category: 'Installation'
    },
    {
      url: '/Pods_Images/For Website main images/interior looks.png',
      title: 'Premium Interior Finish',
      category: 'Interior Design'
    },
    {
      url: '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images.png',
      title: 'Ventilation System',
      category: 'Technology'
    },
    {
      url: '/Pods_Images/Space Series/"SPACE"series -Horizontal single:double bed more images2.png',
      title: 'Security Features',
      category: 'Safety'
    },
    {
      url: '/Pods_Images/E-sports series/"E-sports"series -Horizontal single bed more2.png',
      title: 'Compact Design',
      category: 'Product Design'
    },
    {
      url: '/Pods_Images/wooden series/"wooden"series -Horizontal single bed:Vertical single bed more2.png',
      title: 'Modern Aesthetics',
      category: 'Design'
    },
    {
      url: '/Pods_Images/For Website main images/Reception.png',
      title: 'Hotel Installation',
      category: 'Commercial'
    },
    {
      url: '/Pods_Images/For Website main images/reception2.png',
      title: 'Hospitality Application',
      category: 'Commercial'
    },
    {
      url: '/Pods_Images/For Website main images/after loading.png',
      title: 'Quality Construction',
      category: 'Manufacturing'
    },
    {
      url: '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed more2.png',
      title: 'Professional Installation',
      category: 'Service'
    },
    {
      url: '/Pods_Images/COSMOS series/"COSMOS"series -Horizontal:Verticalsingle bed more3.png',
      title: 'Advanced Features',
      category: 'Technology'
    }
  ];

  const categories = ['All', 'Product Design', 'Interior Design', 'Commercial', 'Technology', 'Installation', 'Premium Materials', 'Gaming', 'Safety', 'Design', 'Manufacturing', 'Service'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (imageUrl: string) => {
    const imageIndex = filteredImages.findIndex(img => img.url === imageUrl);
    const imageUrls = filteredImages.map(img => img.url);
    setLightboxImages(imageUrls);
    setLightboxInitialIndex(imageIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-950 dark:via-blue-900/30 dark:to-cyan-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Project <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our installations, manufacturing process, and the remarkable environments we've created worldwide
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${theme === 'dark' ? 'dark-mode-card-glow' : ''} ${
                    activeCategory === category
                      ? 'bg-cyan-500 text-white font-semibold shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-cyan-500 dark:hover:text-cyan-400 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 ${theme === 'dark' ? 'dark-mode-card-glow' : ''}`}
                  onClick={() => openLightbox(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/400/400?random=${index + 2000}&grayscale`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white dark:text-white font-semibold mb-1">{image.title}</h3>
                      <span className="text-cyan-400 text-sm">{image.category}</span>
                    </div>
                    {/* Click to view overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 text-gray-900 dark:text-white font-medium text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view full image
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxInitialIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
};

export default Gallery;
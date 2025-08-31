import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Reset zoom when image changes
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  // Reset current index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const toggleZoom = useCallback(() => {
    setIsZoomed(!isZoomed);
  }, [isZoomed]);

  // Drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!isZoomed || !containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setStartY(e.pageY - containerRef.current.offsetTop);
    setScrollLeft(containerRef.current.scrollLeft);
    setScrollTop(containerRef.current.scrollTop);
  }, [isZoomed]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !isZoomed || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const y = e.pageY - containerRef.current.offsetTop;
    const walkX = (x - startX) * 2; // Multiply by 2 for faster scrolling
    const walkY = (y - startY) * 2;
    
    containerRef.current.scrollLeft = scrollLeft - walkX;
    containerRef.current.scrollTop = scrollTop - walkY;
  }, [isDragging, isZoomed, startX, startY, scrollLeft, scrollTop]);
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'z':
        case 'Z':
          e.preventDefault();
          toggleZoom();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext, toggleZoom]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </motion.button>

        {/* Zoom Toggle Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          onClick={(e) => {
            e.stopPropagation();
            toggleZoom();
          }}
          className="absolute top-4 right-20 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label={isZoomed ? "Zoom out" : "Zoom in"}
        >
          {isZoomed ? <ZoomOut className="h-6 w-6" /> : <ZoomIn className="h-6 w-6" />}
        </motion.button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </motion.button>
          </>
        )}

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleZoom();
          }}
        >
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1} of ${images.length}`}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl block"
            style={{
              transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://picsum.photos/800/600?random=${currentIndex + 1000}&grayscale`;
            }}
          />
        </motion.div>

        {/* Image Counter */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, delay: 0.25 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            {currentIndex + 1} / {images.length}
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg text-xs"
        >
          <div className="space-y-1">
            <div>Click image to zoom</div>
            <div>Press Z to toggle zoom</div>
            <div>Use ← → keys to navigate</div>
            <div>Press ESC to close</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
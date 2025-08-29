import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from './Lightbox';

interface ImageSliderProps {
  images: string[]; // Can now include both images and videos
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  autoPlay = true, 
  interval = 4000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const clearAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Helper function to determine if current media is video
  const isCurrentMediaVideo = () => {
    return isVideo(images[currentIndex]);
  };

  // Handle video ended event
  const handleVideoEnded = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Programmatically play video when it becomes active
  useEffect(() => {
    if (isCurrentMediaVideo() && videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.log('Video autoplay prevented by browser:', error);
          // Fallback: try to play after a short delay
          setTimeout(async () => {
            try {
              await videoRef.current?.play();
            } catch (retryError) {
              console.log('Video autoplay retry failed:', retryError);
            }
          }, 100);
        }
      };
      
      playVideo();
    }
  }, [currentIndex, images]);
  useEffect(() => {
    clearAutoPlay();
    // Don't start auto-play if user is interacting, only 1 image, or current media is video
    if (!autoPlay || images.length <= 1 || isUserInteracting || isCurrentMediaVideo()) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return clearAutoPlay;
  }, [autoPlay, interval, images.length, isUserInteracting, currentIndex]);

  const goToPrevious = () => {
    clearAutoPlay();
    setIsUserInteracting(true);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    clearAutoPlay();
    setIsUserInteracting(true);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    clearAutoPlay();
    setIsUserInteracting(true);
    setCurrentIndex(index);
  };

  // Resume auto-play after user stops interacting
  useEffect(() => {
    if (isUserInteracting) {
      const resumeTimer = setTimeout(() => {
        setIsUserInteracting(false);
      }, 5000); // Resume auto-play after 5 seconds of no interaction

      return () => clearTimeout(resumeTimer);
    }
  }, [isUserInteracting, currentIndex]);

  const openLightbox = (index: number) => {
    // Only open lightbox for images, not videos
    const currentMedia = images[index];
    const isVideo = currentMedia.toLowerCase().endsWith('.mp4');
    
    if (!isVideo) {
      setLightboxInitialIndex(index);
      setIsLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  if (images.length === 0) return null;

  // Helper function to determine if media is video
  const isVideo = (mediaUrl: string) => {
    return mediaUrl.toLowerCase().endsWith('.mp4');
  };

  return (
    <>
      <div className={`relative overflow-hidden group ${className}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={`w-full h-full ${!isVideo(images[currentIndex]) ? 'cursor-pointer' : ''}`}
            onClick={() => openLightbox(currentIndex)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {isVideo(images[currentIndex]) ? (
              <motion.video
                ref={videoRef}
                src={images[currentIndex]}
                className="w-full h-full object-cover block"
                autoPlay
                muted
                playsInline
                loop
                onEnded={handleVideoEnded}
                whileHover={{ scale: 1.02 }}
                onError={(e) => {
                  const target = e.target as HTMLVideoElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <>
                <motion.img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 block"
                  whileHover={{ scale: 1.02 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400';
                  }}
                />
                {/* Click to view overlay - only for images */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 pointer-events-none z-10">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 text-gray-900 dark:text-white font-medium text-sm shadow-lg">
                    Click to view full image
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 shadow-lg z-10"
              aria-label="Previous media"
            >
              <ChevronLeft className="h-5 w-5 text-gray-800 dark:text-white" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 shadow-lg z-10"
              aria-label="Next media"
            >
              <ChevronRight className="h-5 w-5 text-gray-800 dark:text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((media, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-cyan-400 scale-125 shadow-lg'
                      : 'bg-white/70 dark:bg-gray-400/70 hover:bg-white/90 dark:hover:bg-gray-400/90 hover:scale-110'
                  }`}
                  aria-label={`Go to ${isVideo(media) ? 'video' : 'slide'} ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Media Type Indicator */}
            {isVideo(images[currentIndex]) && (
              <div className="absolute top-3 left-3 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium z-10">
                VIDEO
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox - only show for images */}
      {!images.every(media => isVideo(media)) && (
        <Lightbox
          images={images.filter(media => !isVideo(media))}
          initialIndex={Math.max(0, images.filter((media, index) => index < lightboxInitialIndex && !isVideo(media)).length)}
          isOpen={isLightboxOpen}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default ImageSlider;
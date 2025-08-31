import React, { useState, useRef, useEffect } from 'react';

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  children,
  placeholder,
  rootMargin = '100px',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          // Disconnect observer after first load to prevent re-rendering
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, hasLoaded]);

  const defaultPlaceholder = (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse">
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-t-2xl"></div>
      <div className="p-6 space-y-3">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full mt-4"></div>
      </div>
    </div>
  );

  return (
    <div ref={elementRef} className="min-h-[400px]">
      {isVisible ? children : (placeholder || defaultPlaceholder)}
    </div>
  );
};

export default LazyLoadWrapper;
import React from 'react';

interface BIDUALogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  glowEffect?: boolean;
}

const BIDUALogo: React.FC<BIDUALogoProps> = ({ 
  className = '', 
  variant = 'full',
  glowEffect = true 
}) => {
  
  if (variant === 'icon') {
    return (
      <svg 
        viewBox="0 0 100 100" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {glowEffect && (
            <>
              <filter id="neon-glow-icon" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feFlood floodColor="#ec4899" floodOpacity="0.8" />
                <feComposite in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="pod-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              </linearGradient>
            </>
          )}
        </defs>
        
        {/* Capsule Pod Icon */}
        <g filter={glowEffect ? "url(#neon-glow-icon)" : undefined}>
          {/* Outer frame */}
          <rect 
            x="15" y="15" 
            width="70" height="70" 
            rx="15" 
            fill="none" 
            stroke="url(#pod-gradient)" 
            strokeWidth="3"
          />
          
          {/* Upper bed compartment */}
          <rect 
            x="22" y="22" 
            width="56" height="22" 
            rx="8" 
            fill="none" 
            stroke="url(#pod-gradient)" 
            strokeWidth="2.5"
          />
          
          {/* Lower bed compartment */}
          <rect 
            x="22" y="50" 
            width="56" height="22" 
            rx="8" 
            fill="none" 
            stroke="url(#pod-gradient)" 
            strokeWidth="2.5"
          />
          
          {/* Door section */}
          <rect 
            x="18" y="30" 
            width="8" height="40" 
            rx="3" 
            fill="none" 
            stroke="url(#pod-gradient)" 
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <svg 
        viewBox="0 0 300 60" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {glowEffect && (
            <filter id="neon-glow-text" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feFlood floodColor="#ec4899" floodOpacity="0.8" />
              <feComposite in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
          <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        <text 
          x="150" 
          y="42" 
          fontFamily="Arial, sans-serif" 
          fontSize="42" 
          fontWeight="900" 
          textAnchor="middle"
          fill="url(#text-gradient)"
          filter={glowEffect ? "url(#neon-glow-text)" : undefined}
        >
          BIDUA PODS
        </text>
      </svg>
    );
  }

  // Full logo (icon + text)
  return (
    <svg 
      viewBox="0 0 400 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {glowEffect && (
          <>
            <filter id="neon-glow-full" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feFlood floodColor="#ec4899" floodOpacity="0.8" />
              <feComposite in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </>
        )}
        <linearGradient id="full-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <g filter={glowEffect ? "url(#neon-glow-full)" : undefined}>
        {/* Capsule Pod Icon */}
        <g transform="translate(0, 0)">
          {/* Outer frame */}
          <rect 
            x="10" y="10" 
            width="80" height="80" 
            rx="18" 
            fill="none" 
            stroke="url(#full-gradient)" 
            strokeWidth="3.5"
          />
          
          {/* Upper bed compartment */}
          <rect 
            x="18" y="18" 
            width="64" height="26" 
            rx="10" 
            fill="none" 
            stroke="url(#full-gradient)" 
            strokeWidth="3"
          />
          
          {/* Lower bed compartment */}
          <rect 
            x="18" y="52" 
            width="64" height="26" 
            rx="10" 
            fill="none" 
            stroke="url(#full-gradient)" 
            strokeWidth="3"
          />
          
          {/* Door section */}
          <rect 
            x="12" y="32" 
            width="10" height="36" 
            rx="4" 
            fill="none" 
            stroke="url(#full-gradient)" 
            strokeWidth="2.5"
          />
        </g>
        
        {/* BIDUA PODS Text */}
        <g transform="translate(110, 0)">
          <text 
            x="0" 
            y="48" 
            fontFamily="Arial, sans-serif" 
            fontSize="36" 
            fontWeight="900" 
            fill="url(#full-gradient)"
          >
            BIDUA
          </text>
          <text 
            x="0" 
            y="75" 
            fontFamily="Arial, sans-serif" 
            fontSize="24" 
            fontWeight="600" 
            fill="url(#full-gradient)"
            opacity="0.85"
          >
            PODS
          </text>
        </g>
      </g>
    </svg>
  );
};

export default BIDUALogo;

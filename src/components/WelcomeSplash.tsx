import React, { useEffect, useState } from 'react';
import BIDUALogo from './BIDUALogo';

/**
 * WelcomeSplash
 * Animated splash: logo appears, then BIDUA Pods text, then fades to home.
 * Use as a full-screen overlay or in a GIF export tool.
 */
const WelcomeSplash: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [logoIn, setLogoIn] = useState(false);
  const [showText, setShowText] = useState(false);
  const [typed, setTyped] = useState('');
  const fullText = 'BIDUA Sleeping Pods';
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate logo zoom-in first
    const tLogo = setTimeout(() => setLogoIn(true), 100); // slight delay for effect
    // Start typing after logo animation
    const tText = setTimeout(() => setShowText(true), 1100); // logo anim duration = 1s
    let typingTimeout: NodeJS.Timeout;
    if (showText && typed.length < fullText.length) {
      typingTimeout = setTimeout(() => {
        setTyped(fullText.slice(0, typed.length + 1));
      }, 70);
    }
    // Fade out after typing is done
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;
    if (typed === fullText) {
      t2 = setTimeout(() => setFadeOut(true), 900);
      t3 = setTimeout(() => onFinish && onFinish(), 1400);
    }
    return () => {
      clearTimeout(tLogo);
      clearTimeout(tText);
      clearTimeout(typingTimeout);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish, showText, typed, fullText]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
      <div className="flex flex-col items-center">
        <div
          className="mb-6"
          style={{
            transition: 'transform 1s cubic-bezier(.22,1,.36,1), opacity 1s cubic-bezier(.22,1,.36,1)',
            transform: logoIn ? 'scale(1)' : 'scale(0.5)',
            opacity: logoIn ? 1 : 0,
          }}
        >
          <BIDUALogo variant="icon" className="h-24 w-24 drop-shadow-2xl" glow />
        </div>
        <div
          className={`transition-opacity duration-700 flex flex-col items-center ${showText ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="block text-4xl md:text-6xl font-extrabold text-brand-gradient-rtl tracking-tight mb-2 text-center" style={{letterSpacing: '0.04em'}}>
            {typed.slice(0, 5)}
            {typed.length < 5 && <span className="inline-block w-4 h-6 align-middle animate-pulse">|</span>}
          </span>
          <span className="block text-3xl md:text-5xl font-bold text-brand-gradient tracking-tight text-center">
            {typed.length > 5 ? typed.slice(5) : ''}
            {typed.length >= 5 && typed.length < fullText.length && <span className="inline-block w-4 h-6 align-middle animate-pulse">|</span>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSplash;

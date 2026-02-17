import { useEffect, useState } from 'react';
import imgFullLogo from "figma:asset/98dbba7e66bc0a60f246a6798d836e7c61e5a496.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade out animation to complete before removing
      setTimeout(onLoadingComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-[#1e08b1] z-50 flex flex-col items-center justify-center transition-opacity duration-[800ms] ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="logo-bounce mb-8">
        <div className="h-[120px] w-[388px]">
          <img 
            alt="Logo" 
            className="w-full h-full object-contain"
            src={imgFullLogo} 
          />
        </div>
      </div>

      {/* Loading text */}
      <div className="text-white text-[24px] font-['Work_Sans:SemiBold',sans-serif] mb-6 loading-text-fade">
        Loading...
      </div>

      {/* Animated dots */}
      <div className="flex gap-3">
        <div className="w-3 h-3 bg-white rounded-full loading-dot-1"></div>
        <div className="w-3 h-3 bg-white rounded-full loading-dot-2"></div>
        <div className="w-3 h-3 bg-white rounded-full loading-dot-3"></div>
      </div>

      {/* Progress bar */}
      <div className="w-[300px] h-1 bg-white/20 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-white loading-progress-bar rounded-full"></div>
      </div>
    </div>
  );
}

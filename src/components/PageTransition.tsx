import { useEffect, useState } from 'react';
import imgFullLogo from "figma:asset/98dbba7e66bc0a60f246a6798d836e7c61e5a496.png";

interface PageTransitionProps {
  show: boolean;
}

export default function PageTransition({ show }: PageTransitionProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (show) {
      setFadeOut(false);
      // Start fade out after short delay
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 bg-[#1e08b1] z-40 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="page-logo-elegant">
        <div className="h-[100px] w-[323px]">
          <img 
            alt="Logo" 
            className="w-full h-full object-contain"
            src={imgFullLogo} 
          />
        </div>
      </div>

      {/* Animated spinner */}
      <div className="mt-8">
        <div className="page-spinner"></div>
      </div>
    </div>
  );
}
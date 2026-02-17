import { useEffect, useState, ReactNode } from 'react';

interface PageAnimationWrapperProps {
  children: ReactNode;
}

export default function PageAnimationWrapper({ children }: PageAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure page transition animation starts first
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-content-wrapper ${isVisible ? 'page-visible' : ''}`}>
      {children}
    </div>
  );
}

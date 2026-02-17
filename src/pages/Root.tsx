import { Outlet, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';

export default function Root() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    // Only show transition when path actually changes
    if (location.pathname !== prevPath) {
      setShowTransition(true);
      window.scrollTo(0, 0);
      
      // Hide transition after animation completes
      const timer = setTimeout(() => {
        setShowTransition(false);
        setPrevPath(location.pathname);
      }, 1100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, prevPath]);

  return (
    <div className="min-h-screen">
      <PageTransition show={showTransition} />
      <div className="page-transition">
        <Outlet />
      </div>
    </div>
  );
}
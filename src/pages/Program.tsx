import ProgramDesktop from '../components/ProgramPage';
import ProgramMobileView from '../imports/ProgramMobile';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import imgUntitledDesign141 from "figma:asset/f86f6d63333b643522d3c5b5ffc82aa8977146ec.png";

// Mobile Navigation Component
function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    { path: '/profile', label: 'Profile' },
    { path: '/program', label: 'Program' },
    { path: '/partnership', label: 'Partnership' },
    { path: '/services', label: 'Services' },
  ];

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav className="lg:hidden flex items-center justify-between w-full px-4 py-4 bg-white sticky top-0 z-50 shadow-sm">
        <Link to="/" className="flex-shrink-0">
          <img src={imgUntitledDesign141} alt="Carent Indonesia" className="h-[32px] w-auto object-contain" />
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#1e08b1] hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpen(false)}>
          <div 
            className="absolute right-0 top-[60px] w-[280px] h-[calc(100vh-60px)] bg-white shadow-2xl p-6 animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-3 rounded-full border-2 border-[#1e08b1] text-center transition-all ${
                    isActive(item.path) ? 'bg-[#1e08b1] text-white' : 'text-[#1e08b1] hover:bg-blue-50'
                  }`}
                >
                  <span className="font-['Work_Sans',sans-serif] text-lg">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Program() {
  return (
    <>
      {/* Mobile Navigation - only shown on mobile/tablet */}
      <MobileNavigation />
      
      {/* Desktop Version - hidden on mobile/tablet */}
      <div className="hidden lg:block w-full">
        <ProgramDesktop />
      </div>
      
      {/* Mobile/Tablet Version - hidden on desktop */}
      <div className="block lg:hidden w-full overflow-x-hidden">
        <ProgramMobileView />
      </div>
    </>
  );
}
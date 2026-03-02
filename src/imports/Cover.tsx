import { Link } from 'react-router';
import imgFullLogo from "figma:asset/98dbba7e66bc0a60f246a6798d836e7c61e5a496.png";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function NavButton({ to, children }: { to: string; children: string }) {
  return (
    <Link to={to}>
      <div className="inline-grid place-items-start relative cursor-pointer nav-button">
        <div className="flex flex-col font-['Work_Sans',sans-serif] font-normal justify-end text-white text-[clamp(1rem,2.5vw,1.75rem)] px-3 py-2">
          <p className="leading-[normal] whitespace-nowrap">{children}</p>
        </div>
        <div className="border border-white border-solid rounded-[200px] transition-all duration-300 absolute inset-0" />
      </div>
    </Link>
  );
}

function FullLogo() {
  return (
    <div className="relative w-[clamp(100px,15vw,147px)] h-[clamp(30px,5vw,45px)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Carent Indonesia Logo" className="w-full h-full object-contain" src={imgFullLogo} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 pulse-animation">
        <FullLogo />
      </div>
    </Link>
  );
}

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="relative w-full z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between w-full gap-4 lg:gap-8">
          {/* Left Menu */}
          <div className="flex gap-3 lg:gap-6 slide-in-down delay-100">
            <NavButton to="/profile">Profile</NavButton>
            <NavButton to="/program">Program</NavButton>
          </div>
          
          {/* Logo */}
          <Logo />
          
          {/* Right Menu */}
          <div className="flex gap-3 lg:gap-6 slide-in-down delay-200">
            <NavButton to="/partnership">Partnership</NavButton>
            <NavButton to="/services">Services</NavButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Logo />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/20 pb-4">
            <div className="flex flex-col gap-3 px-4 pt-4">
              <NavButton to="/profile">Profile</NavButton>
              <NavButton to="/program">Program</NavButton>
              <NavButton to="/partnership">Partnership</NavButton>
              <NavButton to="/services">Services</NavButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Center() {
  return (
    <div className="font-['Work_Sans',sans-serif] font-extrabold text-white text-center px-4 w-full">
      <p className="text-[clamp(2.5rem,15vw,17.5rem)] tracking-[0.15em] leading-none zoom-in delay-500 mb-2">
        CREATE
      </p>
      <p className="text-[clamp(2rem,10vw,11.875rem)] tracking-[0.15em] leading-none slide-in-up delay-600 mb-2">
        DIFFERENT
      </p>
      <p className="text-[clamp(2rem,10vw,11.875rem)] tracking-[0.15em] leading-none slide-in-up delay-700">
        INDONESIA
      </p>
    </div>
  );
}

function Tagline() {
  return (
    <div className="mt-8 md:mt-12 fade-in delay-800 px-4">
      <p className="font-['Work_Sans',sans-serif] font-bold text-white text-[clamp(0.875rem,3vw,1.75rem)] tracking-[0.2em] uppercase text-center drop-shadow-lg">
        #YOURSTORYMATTER
      </p>
    </div>
  );
}

function Button() {
  return (
    <a 
      href="https://wa.me/+6288706415817/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block mt-8 md:mt-12 z-20 relative fade-in delay-900"
    >
      <div className="h-[clamp(40px,6vw,48px)] w-[clamp(140px,20vw,178px)] cursor-pointer button-hover pulse-animation bg-white rounded-[20px] flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
        <p className="font-['Montserrat',sans-serif] font-semibold text-[#1e08b1] text-[clamp(1rem,2.5vw,1.375rem)] text-center">
          CONTACT US
        </p>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 py-6 slide-in-up delay-1000">
      {/* Mobile Layout - Stacked */}
      <div className="flex flex-col sm:hidden gap-4 text-center">
        <SocialLink 
          href="https://www.linkedin.com/company/carent-indonesia/" 
          icon={<LinkedInIcon />}
          label="Carent Indonesia"
        />
        <SocialLink 
          href="https://www.instagram.com/carenfound.indonesia/" 
          icon={<InstagramIcon />}
          label="carenfound.indonesia"
        />
        <SocialLink 
          href="mailto:carentfoundation@gmail.com" 
          icon={<EmailIcon />}
          label="carentfoundation@gmail.com"
        />
      </div>

      {/* Desktop Layout - Spread */}
      <div className="hidden sm:flex justify-between items-end relative">
        <SocialLink 
          href="https://www.linkedin.com/company/carent-indonesia/" 
          icon={<LinkedInIcon />}
          label="Carent Indonesia"
        />
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <SocialLink 
            href="https://www.instagram.com/carenfound.indonesia/" 
            icon={<InstagramIcon />}
            label="carenfound.indonesia"
          />
        </div>
        
        <SocialLink 
          href="mailto:carentfoundation@gmail.com" 
          icon={<EmailIcon />}
          label="carentfoundation@gmail.com"
        />
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 md:gap-3 group cursor-pointer justify-center sm:justify-start hover:opacity-80 transition-opacity"
    >
      <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
        {icon}
      </div>
      <p className="font-['Work_Sans',sans-serif] font-light text-white text-[clamp(0.75rem,2vw,0.875rem)] group-hover:underline break-all sm:break-normal">
        {label}
      </p>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export default function Cover() {
  return (
    <div className="bg-[#1e08b1] min-h-screen flex flex-col justify-between w-full overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-72 md:h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Navigation />
      
      <div className="flex-grow flex flex-col justify-center items-center w-full py-8 md:py-12 relative z-10">
        <Center />
        <Tagline />
        <Button />
      </div>

      <Footer />
    </div>
  );
}

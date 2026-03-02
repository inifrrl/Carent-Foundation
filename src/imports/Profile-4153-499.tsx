import svgPaths from "./svg-6d1fxi40an";
import imgUntitledDesign141 from "figma:asset/f86f6d63333b643522d3c5b5ffc82aa8977146ec.png";
import imgUntitledDesign31 from "figma:asset/77b219b1b343e7f2e935b67d13e8c62943bda044.png";
import imgUntitledDesign41 from "figma:asset/2c6f7cfac5f78020564b6965f24f653e8cc6749d.png";
import imgUntitledDesign51 from "figma:asset/cf87406aa4c77e7446872e33ff0528cb1a7e094d.png";
import img91 from "figma:asset/40883cfdc2c38dc67036821a1f6accd32ce7b4c4.png";
import img81 from "figma:asset/47155ee6cdc9e32beded06fa71b9e0f689c55e65.png";
import img61 from "figma:asset/8a748cb9cff0c339eecb601f7571913f7a301ca4.png";
import img101 from "figma:asset/0a96821edc99801547e93ea176992ddc4060747e.png";
import img41 from "figma:asset/43a32379ab507d126dd358e28061ab246b523c2c.png";
import img51 from "figma:asset/12b0f22e59352d8d57165e9a9fc2dd56a7fe300e.png";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

// Responsive Navigation Component
function ResponsiveNavigation() {
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
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 py-6">
        {/* Left Menu */}
        <div className="flex gap-6">
          <Link 
            to="/profile"
            className={`px-6 py-2 rounded-full border-2 border-[#1e08b1] transition-all hover:bg-[#1e08b1] hover:text-white ${
              isActive('/profile') ? 'bg-[#1e08b1] text-white' : 'text-[#1e08b1]'
            }`}
          >
            <span className="font-['Work_Sans',sans-serif] text-[clamp(1rem,1.5vw,1.75rem)]">Profile</span>
          </Link>
          <Link 
            to="/program"
            className={`px-6 py-2 rounded-full border-2 border-[#1e08b1] transition-all hover:bg-[#1e08b1] hover:text-white ${
              isActive('/program') ? 'bg-[#1e08b1] text-white' : 'text-[#1e08b1]'
            }`}
          >
            <span className="font-['Work_Sans',sans-serif] text-[clamp(1rem,1.5vw,1.75rem)]">Program</span>
          </Link>
        </div>

        {/* Center Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={imgUntitledDesign141} alt="Carent Indonesia" className="h-[42px] w-auto object-contain" />
        </Link>

        {/* Right Menu */}
        <div className="flex gap-6">
          <Link 
            to="/partnership"
            className={`px-6 py-2 rounded-full border-2 border-[#1e08b1] transition-all hover:bg-[#1e08b1] hover:text-white ${
              isActive('/partnership') ? 'bg-[#1e08b1] text-white' : 'text-[#1e08b1]'
            }`}
          >
            <span className="font-['Work_Sans',sans-serif] text-[clamp(1rem,1.5vw,1.75rem)]">Partnership</span>
          </Link>
          <Link 
            to="/services"
            className={`px-6 py-2 rounded-full border-2 border-[#1e08b1] transition-all hover:bg-[#1e08b1] hover:text-white ${
              isActive('/services') ? 'bg-[#1e08b1] text-white' : 'text-[#1e08b1]'
            }`}
          >
            <span className="font-['Work_Sans',sans-serif] text-[clamp(1rem,1.5vw,1.75rem)]">Services</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
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

// Hero Section
function HeroSection() {
  return (
    <div className="w-full px-4 py-8 md:py-12 lg:py-16 flex flex-col items-center">
      {/* WE ARE CARENT INDONESIA */}
      <div className="text-center mb-6 md:mb-8 fade-in">
        <h1 className="font-['Montserrat',sans-serif] font-extrabold text-[#1e08b1] text-[clamp(2rem,5vw,3rem)] leading-[1.2] scale-in">
          WE ARE<br />CARENT INDONESIA
        </h1>
      </div>

      {/* Create Different Indonesia Logo */}
      <div className="relative w-full max-w-[483px] mb-8 slide-in-down delay-200">
        <svg className="w-full h-auto" viewBox="0 0 483 85" fill="none" preserveAspectRatio="xMidYMid meet">
          <path d="M0 0H483V85H0V0Z" fill="#1E08B1" />
          <g>
            <path d={svgPaths.pd8281f0} fill="white" />
            <path d={svgPaths.p15fc7080} fill="white" />
            <path d={svgPaths.p3f9b7900} fill="white" />
            <path d={svgPaths.p2e20ca70} fill="white" />
            <path d={svgPaths.p21789580} fill="white" />
            <path d={svgPaths.p24626400} fill="white" />
            <path d={svgPaths.p3ef75100} fill="white" />
            <path d={svgPaths.p14796380} fill="white" />
            <path d={svgPaths.p2af47300} fill="white" />
            <path d={svgPaths.p16d7d400} fill="white" />
            <path d={svgPaths.p3bf460c0} fill="white" />
            <path d={svgPaths.pa280d00} fill="white" />
            <path d={svgPaths.p3d536f80} fill="white" />
            <path d={svgPaths.p3f0f68a0} fill="white" />
            <path d={svgPaths.p32dada00} fill="white" />
            <path d={svgPaths.p35e93370} fill="white" />
            <path d={svgPaths.p20360700} fill="white" />
            <path d={svgPaths.p100e2180} fill="white" />
            <path d={svgPaths.p23322a40} fill="white" />
            <path d={svgPaths.p153d5f80} fill="white" />
            <path d={svgPaths.p2dc0600} fill="white" />
            <path d={svgPaths.p248faf20} fill="white" />
            <path d={svgPaths.p1f023900} fill="white" />
            <path d={svgPaths.p182b5a00} fill="white" />
          </g>
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="flex items-center gap-4 w-full max-w-[800px] mb-8 fade-in delay-300">
        <div className="flex-1 h-[1px] bg-[#1e08b1]"></div>
        <div className="flex-1 h-[1px] bg-[#1e08b1]"></div>
      </div>

      {/* About Text with Image */}
      <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Text */}
        <div className="px-4 fade-in delay-400">
          <p className="font-['Work_Sans',sans-serif] font-bold text-[#1e08b1] text-[clamp(0.875rem,1.75vw,1.75rem)] leading-relaxed mb-6 tracking-wide">
            Youth-focused foundation established to respond to one of the most critical challenges of our time: preparing young people to thrive in a rapidly changing, highly competitive, and increasingly crossdisciplinary world of work.
          </p>
          <p className="font-['Work_Sans',sans-serif] text-[#1e08b1] text-[clamp(0.875rem,1.75vw,1.75rem)] leading-relaxed tracking-wide">
            <span className="font-normal">Our primary focus lies in youth development through comprehensive soft skills empowerment. We believe that </span>
            <span className="font-bold">leadership, communication, collaboration, critical thinking, creativity, and professional adaptability</span>
            <span className="font-normal"> are foundational capabilities for long-term success across all industries.</span>
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center slide-in-right delay-500">
          <div className="relative w-full max-w-[450px] aspect-square">
            {/* Blue Circle Background */}
            <div className="absolute inset-0 rounded-full bg-[#1e08b1]"></div>
            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center p-8 image-hover">
              <img 
                alt="Carent Indonesia Vision" 
                className="w-full h-full object-contain relative z-10" 
                src={imgUntitledDesign31} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Vision Section
function VisionSection() {
  return (
    <div className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1300px] mx-auto">
        {/* Vision Header */}
        <div className="flex justify-center mb-8 md:mb-12 fade-in">
          <div className="bg-[#1e08b1] px-12 py-4 rounded-sm">
            <h2 className="font-['Work_Sans',sans-serif] text-white text-[clamp(1.5rem,3vw,3rem)] font-normal text-center">
              VISION
            </h2>
          </div>
        </div>

        {/* Vision Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Vision Text */}
          <div className="order-2 lg:order-1 slide-in-left delay-200">
            <p className="font-['Work_Sans',sans-serif] text-[#1e08b1] text-[clamp(0.875rem,1.5vw,1.5rem)] leading-relaxed tracking-wide">
              <span className="font-normal">To be a nationally recognized and globally credible youth development foundation that strengthens Indonesia's human capital by </span>
              <span className="font-semibold">nurturing future-ready, adaptable, and purpose driven young professionals, while bridging education, industry, and public policy</span>
              <span className="font-normal"> to support inclusive economic growth and the realization of Indonesia Emas 2045.</span>
            </p>
          </div>

          {/* Vision Image */}
          <div className="order-1 lg:order-2 flex justify-center slide-in-right delay-200">
            <div className="relative w-full max-w-[500px]">
              <img 
                alt="Vision" 
                className="w-full h-auto object-contain image-hover" 
                src={imgUntitledDesign41} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mission Objective Component
function MissionObjective({ icon, text, delay }: { icon: string; text: string; delay: number }) {
  return (
    <div 
      className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all beneficiary-card"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-[clamp(50px,8vw,60px)] h-[clamp(50px,8vw,60px)] flex-shrink-0 flex items-center justify-center float-animation">
        <img alt={text} className="w-full h-full object-contain" src={icon} />
      </div>
      <p className="font-['Work_Sans',sans-serif] font-semibold text-[#1e08b1] text-[clamp(0.875rem,1.5vw,1.5rem)] leading-snug text-center md:text-left">
        {text}
      </p>
    </div>
  );
}

// Mission Section
function MissionSection() {
  return (
    <div className="w-full px-4 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1300px] mx-auto">
        {/* Mission Header */}
        <div className="flex justify-center mb-12 md:mb-16 fade-in">
          <div className="bg-[#1e08b1] px-12 py-4 rounded-sm">
            <h2 className="font-['Work_Sans',sans-serif] text-white text-[clamp(1.5rem,3vw,3rem)] font-normal text-center">
              MISSION
            </h2>
          </div>
        </div>

        {/* Mission Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <MissionObjective 
              icon={img81}
              text="Advance Future-Ready Youth Competencies"
              delay={0.1}
            />
            <MissionObjective 
              icon={img101}
              text="Enable Sustainable Career Mobility and Lifelong Learning"
              delay={0.3}
            />
            <MissionObjective 
              icon={img51}
              text="Cultivate Innovation, Creativity, and Entrepreneurial Mindsets"
              delay={0.5}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <MissionObjective 
              icon={img91}
              text="Align Education with Industry and Workforce Demand"
              delay={0.2}
            />
            <MissionObjective 
              icon={img61}
              text="Build Strategic, Multi-Sector Partnerships"
              delay={0.4}
            />
            <MissionObjective 
              icon={img41}
              text="Ensure Measurable, Accountable, and Sustainable Impact"
              delay={0.6}
            />
          </div>
        </div>

        {/* Bottom Decorative Image */}
        <div className="mt-12 flex justify-center slide-in-up delay-700">
          <div className="w-full max-w-[400px]">
            <img 
              alt="Mission visual" 
              className="w-full h-auto object-contain" 
              src={imgUntitledDesign51} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden page-transition">
      <ResponsiveNavigation />
      <HeroSection />
      <VisionSection />
      <MissionSection />
    </div>
  );
}
import svgPaths from "../imports/svg-3r5egal57p";
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
import { Link } from "react-router";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function NavButton({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to}>
      <div className="inline-grid place-items-start relative cursor-pointer nav-button">
        <div className="flex flex-col font-['Work_Sans',sans-serif] font-normal justify-end text-[#1e08b1] text-[clamp(1rem,2.5vw,1.75rem)] px-3 py-2">
          <p className="leading-[normal] whitespace-nowrap">{label}</p>
        </div>
        <div className="border border-[#1e08b1] border-solid rounded-[200px] transition-all duration-300 absolute inset-0" />
      </div>
    </Link>
  );
}

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="w-full bg-white z-50 relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between w-full gap-4 lg:gap-8">
          {/* Left Menu */}
          <div className="flex gap-3 lg:gap-6">
            <NavButton to="/profile" label="Profile" />
            <NavButton to="/program" label="Program" />
          </div>
          
          {/* Logo */}
          <Link to="/">
            <div className="relative w-[clamp(100px,15vw,140px)] h-[clamp(30px,5vw,42px)] cursor-pointer hover:scale-105 transition-transform">
              <img alt="Logo" className="w-full h-full object-contain" src={imgUntitledDesign141} />
            </div>
          </Link>
          
          {/* Right Menu */}
          <div className="flex gap-3 lg:gap-6">
            <NavButton to="/partnership" label="Partnership" />
            <NavButton to="/services" label="Services" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/">
            <div className="relative w-[100px] h-[30px]">
              <img alt="Logo" className="w-full h-full object-contain" src={imgUntitledDesign141} />
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1e08b1] p-2 hover:bg-blue-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-blue-200 pb-4">
            <div className="flex flex-col gap-3 px-4 pt-4">
              <NavButton to="/profile" label="Profile" />
              <NavButton to="/program" label="Program" />
              <NavButton to="/partnership" label="Partnership" />
              <NavButton to="/services" label="Services" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col items-center text-center fade-in">
        <div className="font-['Montserrat',sans-serif] font-extrabold text-[#1e08b1] text-[clamp(2rem,6vw,3rem)] leading-tight mb-4 scale-in">
          <p className="mb-2">WE ARE</p>
          <p>CARENT INDONESIA</p>
        </div>
        
        <div className="relative w-full max-w-[min(500px,90vw)] mt-6">
          <svg className="w-full h-auto" viewBox="0 0 483 85" fill="none" preserveAspectRatio="xMidYMid meet">
            <g>
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
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 fade-in delay-200">
          <div className="font-['Work_Sans',sans-serif] text-[#1e08b1] text-[clamp(0.875rem,2vw,1.5rem)] tracking-wide space-y-4">
            <p className="font-bold leading-relaxed">
              Youth-focused foundation established to respond to one of the most critical challenges of our time: preparing young people to thrive in a rapidly changing, highly competitive, and increasingly crossdisciplinary world of work.
            </p>
            <p className="leading-relaxed">
              <span className="font-normal">Our primary focus lies in youth development through comprehensive soft skills empowerment. We believe that </span>
              <span className="font-bold">leadership, communication, collaboration, critical thinking, creativity, and professional adaptability</span>
              <span className="font-normal"> are foundational capabilities for long-term success across all industries.</span>
            </p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative slide-in-right">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-[#1e08b1] rounded-full opacity-20"></div>
            <div className="relative w-full h-full p-8 image-hover">
              <img alt="About Carent Indonesia" className="w-full h-full object-contain" src={imgUntitledDesign31} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="fade-in delay-300">
          <div className="bg-[#1e08b1] text-white text-center py-6 px-8 mb-6 rounded-lg">
            <h2 className="font-['Work_Sans',sans-serif] text-[clamp(2rem,5vw,3rem)] font-normal">VISION</h2>
          </div>
          
          <p className="font-['Work_Sans',sans-serif] text-[#1e08b1] text-[clamp(0.875rem,2vw,1.25rem)] tracking-wide leading-relaxed">
            <span>To be a nationally recognized and globally credible youth development foundation that strengthens Indonesia's human capital by </span>
            <span className="font-semibold">nurturing future-ready, adaptable, and purpose driven young professionals, while bridging education, industry, and public policy</span>
            <span> to support inclusive economic growth and the realization of Indonesia Emas 2045.</span>
          </p>
        </div>
        
        <div className="relative">
          <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto image-hover">
            <img alt="Vision" className="w-full h-full object-contain" src={imgUntitledDesign41} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionObjective({ icon, text, delay }: { icon: string; text: string; delay: number }) {
  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all beneficiary-card`} style={{ animationDelay: `${delay}s` }}>
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 float-animation">
        <img alt={text} className="w-full h-full object-contain" src={icon} />
      </div>
      <div className="flex-1">
        <p className="font-['Work_Sans',sans-serif] font-semibold text-[#1e08b1] text-[clamp(0.875rem,2vw,1.25rem)] leading-snug">
          {text}
        </p>
      </div>
    </div>
  );
}

function MissionSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative order-2 lg:order-1">
          <div className="relative w-full aspect-[3/4] max-w-[450px] mx-auto image-hover">
            <img alt="Mission" className="w-full h-full object-contain" src={imgUntitledDesign51} />
          </div>
        </div>
        
        <div className="order-1 lg:order-2 fade-in delay-400">
          <div className="bg-[#1e08b1] text-white text-center py-6 px-8 mb-8 rounded-lg">
            <h2 className="font-['Work_Sans',sans-serif] text-[clamp(2rem,5vw,3rem)] font-normal">MISSION</h2>
          </div>
          
          <div className="space-y-4">
            <MissionObjective 
              icon={img81} 
              text="Advance Future-Ready Youth Competencies"
              delay={0.2}
            />
            <MissionObjective 
              icon={img91} 
              text="Align Education with Industry and Workforce Demand"
              delay={0.3}
            />
            <MissionObjective 
              icon={img61} 
              text="Build Strategic, Multi-Sector Partnerships"
              delay={0.4}
            />
            <MissionObjective 
              icon={img101} 
              text="Enable Sustainable Career Mobility and Lifelong Learning"
              delay={0.5}
            />
            <MissionObjective 
              icon={img51} 
              text="Cultivate Innovation, Creativity, and Entrepreneurial Mindsets"
              delay={0.6}
            />
            <MissionObjective 
              icon={img41} 
              text="Ensure Measurable, Accountable, and Sustainable Impact"
              delay={0.7}
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
      <Navigation />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <MissionSection />
    </div>
  );
}

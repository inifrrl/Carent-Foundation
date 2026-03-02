export default function Iphone() {
  return (
    <div className="bg-[#1e08b1] min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden" data-name="responsive-mobile">
      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-[600px] mx-auto space-y-8 md:space-y-12 zoom-in">
        
        {/* Hero Text */}
        <div className="font-['Work_Sans',sans-serif] font-extrabold text-center text-white w-full">
          <p className="text-[clamp(2.5rem,12vw,4.375rem)] tracking-[0.15em] leading-none mb-2 scale-in">
            CREATE
          </p>
          <p className="text-[clamp(2rem,10vw,2.938rem)] tracking-[0.15em] leading-none mb-2 slide-in-left delay-200">
            DIFFERENT
          </p>
          <p className="text-[clamp(2rem,10vw,2.938rem)] tracking-[0.15em] leading-none slide-in-right delay-300">
            INDONESIA
          </p>
        </div>

        {/* Tagline */}
        <div className="w-full max-w-[400px] px-4 fade-in delay-400">
          <p className="font-['Work_Sans',sans-serif] font-semibold text-[clamp(0.75rem,3vw,0.875rem)] text-center text-white leading-relaxed">
            Youth Development<br />
            Through Comprehensive Soft Skills Empowerment
          </p>
        </div>

        {/* Contact Button */}
        <a 
          href="https://wa.me/+6288706415817/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full max-w-[200px] fade-in delay-500"
        >
          <div className="bg-white rounded-[20px] px-8 py-3 md:py-4 cursor-pointer button-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <p className="font-['Montserrat',sans-serif] font-semibold text-[#1e08b1] text-[clamp(1rem,4vw,1.375rem)] text-center whitespace-nowrap">
              CONTACT US
            </p>
          </div>
        </a>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-56 md:h-56 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
}

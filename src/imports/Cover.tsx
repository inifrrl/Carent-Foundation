import { Link } from 'react-router-dom';
import imgFullLogo from "figma:asset/98dbba7e66bc0a60f246a6798d836e7c61e5a496.png";

// --- NAVIGASI ---
function Group() {
  return (
    <Link to="/profile">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button slide-in-down delay-100">
        <div className="col-1 flex flex-col font-['Work_Sans',sans-serif] font-normal h-[34.404px] justify-end ml-[12px] mt-[7.3px] relative row-1 text-[28px] text-white w-[90px]">
          <p className="leading-[normal] whitespace-pre-wrap">Profile</p>
        </div>
        <div className="border border-solid border-white col-1 h-[49px] ml-0 mt-0 rounded-[200px] row-1 w-[114px] transition-all duration-300" />
      </div>
    </Link>
  );
}

function Group1() {
  return (
    <Link to="/program">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button slide-in-down delay-200">
        <div className="col-1 flex flex-col font-['Work_Sans',sans-serif] font-normal h-[33px] justify-end ml-[12px] mt-[7px] relative row-1 text-[28px] text-white w-[124px]">
          <p className="leading-[normal] whitespace-pre-wrap">Program</p>
        </div>
        <div className="border border-solid border-white col-1 h-[47px] ml-0 mt-0 rounded-[200px] row-1 w-[136px] transition-all duration-300" />
      </div>
    </Link>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[25px] h-[130px] items-center leading-[0] overflow-clip py-[10px] relative shrink-0 w-[274px]" data-name="Menu">
      <Group />
      <Group1 />
    </div>
  );
}

function FullLogo() {
  return (
    <div className="h-[45.523px] relative shrink-0 w-[147px]" data-name="FULL LOGO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Logo" className="absolute h-[179.17%] left-[-14.5%] max-w-none top-[-39.58%] w-[120.61%]" src={imgFullLogo} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/">
      <div className="content-stretch flex h-[60px] items-center justify-end overflow-clip pb-px relative shrink-0 w-[198px] cursor-pointer transition-transform duration-300 hover:scale-105 pulse-animation" data-name="Logo">
        <FullLogo />
      </div>
    </Link>
  );
}

function Group2() {
  return (
    <Link to="/partnership">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button slide-in-down delay-300">
        <div className="col-1 flex flex-col font-['Work_Sans',sans-serif] font-normal h-[33px] justify-end ml-[12.25px] mt-[8px] relative row-1 text-[28px] text-white w-[161px]">
          <p className="leading-[normal] whitespace-pre-wrap">Partnership</p>
        </div>
        <div className="border border-solid border-white col-1 h-[47px] ml-0 mt-0 rounded-[200px] row-1 w-[178px] transition-all duration-300" />
      </div>
    </Link>
  );
}

function Group3() {
  return (
    <Link to="/services">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button slide-in-down delay-400">
        <div className="col-1 flex flex-col font-['Work_Sans',sans-serif] font-normal h-[33px] justify-end ml-[12px] mt-[7px] relative row-1 text-[28px] text-white w-[124px]">
          <p className="leading-[normal] whitespace-pre-wrap">Services</p>
        </div>
        <div className="border border-solid border-white col-1 h-[47px] ml-0 mt-0 rounded-[200px] row-1 w-[136px] transition-all duration-300" />
      </div>
    </Link>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex gap-[25px] h-[130px] items-center justify-end leading-[0] overflow-clip py-[10px] relative shrink-0 w-[352px]" data-name="Menu 2">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[267px] items-center justify-center p-[10px] relative w-full">
          <Menu />
          <Logo />
          <Menu1 />
        </div>
      </div>
    </div>
  );
}

// --- BAGIAN KONTEN TENGAH ---
function Center() {
  return (
    <div className="font-['Work_Sans',sans-serif] font-extrabold grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 scale-90 md:scale-100" data-name="Center">
      <p className="col-1 h-[253px] ml-0 mt-[430px] relative row-1 text-[190px] tracking-[28.5px] w-[1440px] slide-in-up delay-700">INDONESIA</p>
      <p className="col-1 h-[253px] ml-[10px] mt-[253px] relative row-1 text-[190px] tracking-[28.5px] w-[1430px] slide-in-up delay-600">DIFFERENT</p>
      <p className="col-1 h-[253px] ml-0 mt-0 relative row-1 text-[280px] tracking-[42px] w-[1440px] zoom-in delay-500">CREATE</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-center flex flex-wrap gap-[50px_398px] items-center justify-center leading-[normal] relative shrink-0 text-center text-white w-full whitespace-pre-wrap">
      <Center />
      {/* Tagline */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[660px] flex justify-center w-full z-20 fade-in delay-800">
        <p className="font-['Work_Sans',sans-serif] font-bold text-white text-[28px] tracking-[4px] uppercase text-center leading-normal drop-shadow-md">
          #YOURSTORYMATTER
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <a href="https://wa.me/+6288706415817/" target="_blank" rel="noopener noreferrer" className="block mt-[60px] mb-[60px] z-20 relative">
      <div className="h-[48px] relative shrink-0 w-[178px] cursor-pointer button-hover pulse-animation" data-name="Button">
        <div className="absolute bg-white inset-0 rounded-[19.694px]" />
        <div className="-translate-x-1/2 absolute bottom-[12.69%] flex items-center justify-center left-[calc(50%+1.56px)] top-[18.23%] w-[278.172px]">
          <div className="flex-none h-[32.906px] skew-x-[0.24deg] w-[278.037px]">
            <div className="flex flex-col font-['Montserrat',sans-serif] font-semibold justify-center leading-[0] relative size-full text-[#1e08b1] text-[22px] text-center">
              <p className="leading-[normal] whitespace-pre-wrap">CONTACT US</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

// --- FOOTER SOSMED ---
function Footer() {
  return (
    <div className="relative w-full flex justify-between items-end px-[40px] pb-[30px] pt-[20px] mt-auto z-30 slide-in-up delay-1000">
      
      {/* 1. LINKEDIN (KIRI) - LINK AKTIF */}
      <a 
        href="https://www.linkedin.com/company/carent-indonesia/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-[10px] group cursor-pointer"
      >
        <div className="w-[24px] h-[24px]">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </div>
        <p className="font-['Work_Sans',sans-serif] font-light text-white text-[14px] group-hover:underline">Carent Indonesia</p>
      </a>

      {/* 2. INSTAGRAM (TENGAH - ABSOLUTE CENTER) - LINK AKTIF */}
      <a
        href="https://www.instagram.com/carenfound.indonesia/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-1/2 -translate-x-1/2 bottom-[30px] flex items-center gap-[10px] group cursor-pointer"
      >
        <div className="w-[24px] h-[24px]">
           <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </div>
        <p className="font-['Work_Sans',sans-serif] font-light text-white text-[14px] group-hover:underline">carenfound.indonesia</p>
      </a>

      {/* 3. EMAIL (KANAN) - LINK AKTIF */}
      <a 
        href="mailto:carentfoundation@gmail.com"
        className="flex items-center gap-[10px] group cursor-pointer"
      >
        <div className="w-[24px] h-[24px]">
           <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <p className="font-['Work_Sans',sans-serif] font-light text-white text-[14px] group-hover:underline">carentfoundation@gmail.com</p>
      </a>

    </div>
  );
}

// --- STRUKTUR UTAMA ---
export default function Cover() {
  return (
    <div className="bg-[#1e08b1] min-h-screen flex flex-col justify-between items-center py-[10px] relative w-full overflow-hidden" data-name="Cover">
      <div className="w-full">
        <Navigation />
      </div>

      <div className="flex-grow flex flex-col justify-center items-center w-full mt-[50px]">
        <Frame1 />
        <Button />
      </div>

      <Footer />
    </div>
  );
}
import { Link, useLocation } from 'react-router';
import imgFullLogo from "figma:asset/98dbba7e66bc0a60f246a6798d836e7c61e5a496.png";

function NavButton({ to, children, isActive }: { to: string; children: string; isActive: boolean }) {
  return (
    <Link to={to}>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button">
        <div className={`col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[34.404px] justify-end ml-[12px] mt-[7.3px] relative row-1 text-[28px] ${isActive ? 'text-white' : 'text-white opacity-90'} w-auto px-2`}>
          <p className="leading-[normal] whitespace-pre-wrap">{children}</p>
        </div>
        <div className={`border border-solid ${isActive ? 'border-white bg-white/20' : 'border-white'} col-1 h-[49px] ml-0 mt-0 rounded-[200px] row-1 w-full transition-all duration-300`} />
      </div>
    </Link>
  );
}

function FullLogo() {
  return (
    <div className="h-[45.523px] relative shrink-0 w-[147px]" data-name="FULL LOGO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[179.17%] left-[-14.5%] max-w-none top-[-39.58%] w-[120.61%]" src={imgFullLogo} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/">
      <div className="content-stretch flex h-[60px] items-center justify-end overflow-clip pb-px relative shrink-0 w-[198px] cursor-pointer transition-transform duration-300 hover:scale-105" data-name="Logo">
        <FullLogo />
      </div>
    </Link>
  );
}

export function Navigation() {
  const location = useLocation();
  
  return (
    <div className="relative shrink-0 w-full bg-[#1e08b1]" data-name="Navigation">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[267px] items-center justify-center p-[10px] relative w-full">
          <div className="content-stretch flex gap-[25px] h-[130px] items-center leading-[0] overflow-clip py-[10px] relative shrink-0">
            <NavButton to="/profile" isActive={location.pathname === '/profile'}>Profile</NavButton>
            <NavButton to="/program" isActive={location.pathname === '/program'}>Program</NavButton>
          </div>
          <Logo />
          <div className="content-stretch flex gap-[25px] h-[130px] items-center justify-end leading-[0] overflow-clip py-[10px] relative shrink-0">
            <NavButton to="/partnership" isActive={location.pathname === '/partnership'}>Partnership</NavButton>
            <NavButton to="/services" isActive={location.pathname === '/services'}>Services</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}
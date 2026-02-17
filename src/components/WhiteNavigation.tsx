import { Link, useLocation } from 'react-router';
import imgUntitledDesign141 from "figma:asset/f86f6d63333b643522d3c5b5ffc82aa8977146ec.png";

function NavButton({ to, children, isActive }: { to: string; children: string; isActive: boolean }) {
  return (
    <Link to={to}>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button">
        <div className={`col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[34.404px] justify-end ml-[12px] mt-[7.3px] relative row-1 text-[28px] ${isActive ? 'text-[#1e08b1] font-semibold' : 'text-[#1e08b1]'} w-auto px-2`}>
          <p className="leading-[normal] whitespace-pre-wrap">{children}</p>
        </div>
        <div className={`border border-solid ${isActive ? 'border-[#1e08b1] bg-[#1e08b1]/10' : 'border-[#1e08b1]'} col-1 h-[49px] ml-0 mt-0 rounded-[200px] row-1 w-full transition-all duration-300`} />
      </div>
    </Link>
  );
}

function Logo() {
  return (
    <Link to="/">
      <div className="content-stretch flex items-start overflow-clip p-[10px] relative shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105" data-name="Logo">
        <div className="h-[42px] relative shrink-0 w-[140px]" data-name="Untitled design-14 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[211.57%] left-[-5.75%] max-w-none top-[-56.2%] w-[112.24%]" src={imgUntitledDesign141} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Navigation() {
  const location = useLocation();
  
  return (
    <div className="content-stretch flex gap-[287px] h-[150px] items-center justify-center overflow-clip pl-[36px] pr-[10px] py-[10px] relative shrink-0 w-[1440px]" data-name="Navigation">
      <div className="content-stretch flex gap-[25px] h-[130px] items-center leading-[0] overflow-clip py-[10px] relative shrink-0 w-[280px]">
        <NavButton to="/profile" isActive={location.pathname === '/profile'}>Profile</NavButton>
        <NavButton to="/program" isActive={location.pathname === '/program'}>Program</NavButton>
      </div>
      <Logo />
      <div className="content-stretch flex gap-[25px] h-[130px] items-center justify-end leading-[0] overflow-clip py-[10px] relative shrink-0 w-[352px]">
        <NavButton to="/partnership" isActive={location.pathname === '/partnership'}>Partnership</NavButton>
        <NavButton to="/services" isActive={location.pathname === '/services'}>Services</NavButton>
      </div>
    </div>
  );
}
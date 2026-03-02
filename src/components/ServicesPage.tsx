import { Link } from 'react-router';
import svgPaths from "../imports/svg-ejw2wauu7s";
import imgUntitledDesign141 from "figma:asset/f86f6d63333b643522d3c5b5ffc82aa8977146ec.png";
import Group15 from "../imports/Group15";

function Group() {
  return (
    <Link to="/profile">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button">
        <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[34.404px] justify-end ml-[12px] mt-[7.3px] relative row-1 text-[#1e08b1] text-[28px] w-[90px]">
          <p className="leading-[normal] whitespace-pre-wrap">Profile</p>
        </div>
        <div className="border border-[#1e08b1] border-solid col-1 h-[49px] ml-0 mt-0 rounded-[200px] row-1 w-[114px] transition-all duration-300" />
      </div>
    </Link>
  );
}

function Group1() {
  return (
    <Link to="/program">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button">
        <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[33px] justify-end ml-[12px] mt-[7px] relative row-1 text-[#1e08b1] text-[28px] w-[124px]">
          <p className="leading-[normal] whitespace-pre-wrap">Program</p>
        </div>
        <div className="border border-[#1e08b1] border-solid col-1 h-[47px] ml-0 mt-0 rounded-[200px] row-1 w-[136px] transition-all duration-300" />
      </div>
    </Link>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[25px] h-[130px] items-center leading-[0] overflow-clip py-[10px] relative shrink-0 w-[280px]" data-name="Menu">
      <Group />
      <Group1 />
    </div>
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

function Group2() {
  return (
    <Link to="/partnership">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button">
        <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[33px] justify-end ml-[12.25px] mt-[8px] relative row-1 text-[#1e08b1] text-[28px] w-[161px]">
          <p className="leading-[normal] whitespace-pre-wrap">Partnership</p>
        </div>
        <div className="border border-[#1e08b1] border-solid col-1 h-[47px] ml-0 mt-0 rounded-[200px] row-1 w-[178px] transition-all duration-300" />
      </div>
    </Link>
  );
}

function Group3() {
  return (
    <Link to="/services">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer nav-button">
        <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[33px] justify-end ml-[12px] mt-[7px] relative row-1 text-[#1e08b1] text-[28px] w-[124px]">
          <p className="leading-[normal] whitespace-pre-wrap">Services</p>
        </div>
        <div className="border border-[#1e08b1] border-solid col-1 h-[47px] ml-0 mt-0 rounded-[200px] row-1 w-[136px] transition-all duration-300" />
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
    <div className="h-[150px] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[287px] items-center justify-center pl-[24px] pr-[10px] py-[10px] relative size-full">
          <Menu />
          <Logo />
          <Menu1 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[55px] items-center justify-center left-0 top-[91px] w-[1000px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#1e08b1] h-[55px] w-[1000px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[45px] justify-end leading-[0] left-[506.15px] text-[32px] text-center text-white top-[136px] w-[965.324px] fade-in delay-500">
        <p className="leading-[normal] whitespace-pre-wrap">{`Government & BUMN Strategic Collaboration Programs`}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Work_Sans:ExtraBold',sans-serif] font-extrabold h-[75px] justify-center leading-[0] left-[500px] text-[#1e08b1] text-[64px] text-center top-[37.5px] w-[1000px] scale-in">
        <p className="whitespace-pre-wrap">
          <span className="leading-[normal]">{`FLAGSHIP `}</span>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">PROGRAM</span>
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative h-[146px] w-[1000px]">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 card-entrance">
      <div className="col-1 h-[98px] ml-0 mt-[99px] relative row-1 w-[517px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 98">
          <path d={svgPaths.p7893580} fill="var(--fill-0, #1E08B1)" id="Rectangle 7" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[76px] justify-end ml-0 mt-[110px] relative row-1 text-[32px] text-center text-white w-[517px]">
        <p className="leading-[normal] whitespace-pre-wrap">Carent Future-Ready Youth Program (FRYP)</p>
      </div>
      <p className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[45px] ml-[56px] mt-[218px] relative row-1 text-[#1e08b1] text-[0px] text-[20px] text-center w-[405px] whitespace-pre-wrap">
        <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal]">Flagship Focus:</span>
        <span className="leading-[normal]">{` Employability, Soft Skills & Career Readiness`}</span>
      </p>
      <div className="col-1 flex h-[67px] items-center justify-center ml-[245px] mt-[338px] relative row-1 w-0 arrow-bounce" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[67px]">
            <div className="absolute inset-[-22.09px_-4.48%_-22.09px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 44.1838">
                <path d={svgPaths.p2bd3aa00} fill="var(--stroke-0, #1E08B1)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 h-[98px] ml-0 mt-[437px] relative row-1 w-[517px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 98">
          <path d={svgPaths.p7893580} fill="var(--fill-0, #1E08B1)" id="Rectangle 7" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[76px] justify-end ml-0 mt-[448px] relative row-1 text-[32px] text-center text-white w-[517px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Carent Innovation & Creative Impact Program (ICIP)`}</p>
      </div>
      <p className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[45px] ml-[56px] mt-[556px] relative row-1 text-[#1e08b1] text-[20px] text-center w-[405px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`Flagship Focus: `}</span>
        <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{`Innovation, Creativity & Entrepreneurship `}</span>
      </p>
      <div className="col-1 flex h-[67px] items-center justify-center ml-[245px] mt-0 relative row-1 w-0 arrow-bounce" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[67px]">
            <div className="absolute inset-[-22.09px_-4.48%_-22.09px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 44.1838">
                <path d={svgPaths.p2bd3aa00} fill="var(--stroke-0, #1E08B1)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 card-entrance">
      <div className="col-1 h-[103px] ml-0 mt-[96px] relative row-1 w-[531px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 531 103">
          <path d={svgPaths.p182d7700} fill="var(--fill-0, #1E08B1)" id="Rectangle 8" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[76px] justify-end ml-[9px] mt-[110px] relative row-1 text-[32px] text-center text-white w-[517px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Carent Industry & BUMN Talent Pipeline Program (IBTP)`}</p>
      </div>
      <p className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[45px] ml-[65px] mt-[218px] relative row-1 text-[#1e08b1] text-[20px] text-center w-[405px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`Flagship Focus: `}</span>
        <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{`Industry Alignment & Workforce Development`}</span>
      </p>
      <div className="col-1 h-[98px] ml-[14px] mt-[437px] relative row-1 w-[517px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 98">
          <path d={svgPaths.p7893580} fill="var(--fill-0, #1E08B1)" id="Rectangle 7" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[76px] justify-end ml-[14px] mt-[448px] relative row-1 text-[32px] text-center text-white w-[517px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Carent CSR, ESG & Sustainable Impact Program (CESIP)`}</p>
      </div>
      <p className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[45px] ml-[70px] mt-[556px] relative row-1 text-[#1e08b1] text-[20px] text-center w-[405px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`Flagship Focus: `}</span>
        <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{`CSR, ESG & Long-Term Impact`}</span>
      </p>
      <div className="col-1 flex h-[67px] items-center justify-center ml-[273px] mt-[337px] relative row-1 w-0 arrow-bounce" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[67px]">
            <div className="absolute inset-[-22.09px_-4.48%_-22.09px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 44.1838">
                <path d={svgPaths.p2bd3aa00} fill="var(--stroke-0, #1E08B1)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[67px] items-center justify-center ml-[273px] mt-0 relative row-1 w-0 arrow-bounce" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[67px]">
            <div className="absolute inset-[-22.09px_-4.48%_-22.09px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 44.1838">
                <path d={svgPaths.p2bd3aa00} fill="var(--stroke-0, #1E08B1)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Judul() {
  return (
    <div className="relative shrink-0 w-full" data-name="JUDUL">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="py-[10px] relative flex justify-center">
          <Group6 />
        </div>
        <div className="flex gap-[43px] items-start justify-center leading-[0] py-[10px] relative">
          <Group5 />
          <Group7 />
        </div>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="h-0 relative shrink-0 w-[1363px]">
      <div className="absolute inset-[-4px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1363 4">
          <g id="Group 16">
            <line id="Line 1" stroke="var(--stroke-0, #1E08B1)" strokeWidth="4" x2="514" y1="2" y2="2" />
            <line id="Line 2" stroke="var(--stroke-0, #1E08B1)" strokeWidth="3" x1="849" x2="1363" y1="2.5" y2="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[34px] items-center py-[10px] relative size-full" data-name="Services">
      <Navigation />
      <Judul />
      <Group23 />
      <div className="relative h-[1000px] w-[1240px]">
        <Group15 />
      </div>
    </div>
  );
}

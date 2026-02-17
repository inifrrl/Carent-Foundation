import { Link } from 'react-router';
import svgPaths from "../imports/svg-e3q4l57xmc";
import imgUntitledDesign141 from "figma:asset/f86f6d63333b643522d3c5b5ffc82aa8977146ec.png";
import imgLogoLogoCarent1 from "figma:asset/38078f032e3068fa9a87b89156bd5ca10daeccdf.png";
import imgPazelll41 from "figma:asset/5d6fa3d5c0e6b58b1c064fa4cdaf680ab9a24bf1.png";
import imgUntitledDesign81 from "figma:asset/013c24719818834bd5e0b1ae12556f425275cff5.png";
import img131 from "figma:asset/0f1ed81bdf60031f139fb72358d40a80469e0710.png";
import imgUntitledDesign131 from "figma:asset/9131770f5fc35500322b939d693db8d50663d1a1.png";
import imgUntitledDesign161 from "figma:asset/f43f5c81f603bfb782c50e74bdda9b9df12f0a8c.png";

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
    <div className="content-stretch flex gap-[25px] h-[130px] items-center leading-[0] overflow-clip py-[10px] relative shrink-0 w-[340px]" data-name="Menu">
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
        <div className="content-stretch flex gap-[242px] items-center justify-center pr-[3px] py-[10px] relative size-full">
          <Menu />
          <Logo />
          <Menu1 />
        </div>
      </div>
    </div>
  );
}

function LogoLogoCarent() {
  return (
    <div className="col-1 h-[118.252px] ml-[666.65px] mt-[23.02px] relative row-1 w-[100.734px] float-animation" data-name="Logo/Logo Carent 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[178.63%] left-[-50.5%] max-w-none top-[-38.75%] w-[209.7%]" src={imgLogoLogoCarent1} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[637.41px] mt-[44.79px] place-items-start relative row-1 scale-in">
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[82px] justify-end ml-0 mt-[100px] relative row-1 text-[#1e08b1] text-[80px] w-[803.589px] slide-in-right delay-300">
        <p className="leading-[normal] whitespace-pre-wrap">STATEMENT</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[100px] justify-end ml-0 mt-0 relative row-1 text-[#1e08b1] text-[92.016px] w-[767.608px] slide-in-right delay-400">
        <p className="leading-[normal] whitespace-pre-wrap">PROBLEM</p>
      </div>
      <LogoLogoCarent />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[345.549px] relative w-[183.112px] float-animation" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[178.63%] left-[-81.18%] max-w-none top-[-38.75%] w-[337.1%]" src={imgLogoLogoCarent1} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex h-[768px] items-center justify-center ml-0 mt-0 relative row-1 w-[511.895px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[511.895px] relative w-[768px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 768 511.895">
              <path d={svgPaths.p2f00d000} fill="var(--fill-0, #1E08B1)" id="Polygon 1" />
            </svg>
          </div>
        </div>
      </div>
      <Group4 />
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[560px] justify-end ml-[637.16px] mt-[261.79px] relative row-1 text-[#1e08b1] text-[24px] tracking-[2.4px] w-[737.76px] whitespace-pre-wrap fade-in">
        <p className="mb-0">
          <span className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] tracking-[1.6px]">{`Indonesia faces a critical youth employment crisis `}</span>
          <span className="leading-[normal]">that threatens its Indonesia Emas 2045 vision. Despite government efforts, youth unemployment remains high at 16.16%, while nearly 23.79% of youth (aged 16–30) are classified as NEET (Not in Employment, Education, or Training), signaling a failure to transition from education to the labor market.</span>
        </p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[normal]">{`The core issue is a severe `}</span>
          <span className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal] tracking-[1.6px]">skills mismatch</span>
          <span className="leading-[normal]">. Graduates often lack both the technical proficiency and essential soft skills—such as leadership and problem-solving—that modern employers demand. As automation and digital transformation reshape industries, traditional education pathways are proving insufficient. Without urgent intervention to bridge these gaps, Indonesia's potential demographic dividend risks devolving into a demographic burden, leading to economic stagnation and increased inequality.</span>
        </p>
      </div>
      <div className="col-1 flex h-[183.112px] items-center justify-center ml-[195.59px] mt-[689.83px] relative row-1 w-[345.549px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Logo1 />
        </div>
      </div>
      <div className="col-1 h-[443px] ml-[116px] mt-[123px] relative row-1 w-[459px] image-hover" data-name="pazelll 4 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-14.08%] max-w-none top-0 w-[146.33%]" src={imgPazelll41} />
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[670.06px] mt-[209.42px] place-items-start relative row-1 slide-in-right">
      <div className="col-1 h-[200.755px] ml-0 mt-0 relative row-1 w-[357.073px] image-hover" data-name="Untitled design-8 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUntitledDesign81} />
      </div>
      <div className="bg-[#fffd47] col-1 h-[27.448px] ml-[141.18px] mt-[400.54px] row-1 w-[223.354px]" />
      <div className="bg-[#fffd47] col-1 h-[27.448px] ml-[23.18px] mt-[425.95px] row-1 w-[305.532px]" />
      <div className="bg-[#fffd47] col-1 h-[27.448px] ml-[23.18px] mt-[453.4px] row-1 w-[232.836px]" />
      <p className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[376.137px] ml-[23.18px] mt-[346.66px] relative row-1 text-[#1e08b1] text-[22px] w-[341.353px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`To strengthen Indonesia's youth human capital by producing adaptive, industry-ready, and purpose-driven young professionals who are capable of navigating cross-sector careers, contributing to productivity growth, and advancing `}</span>
        <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal]">the national vision of Indonesia Emas 2045.</span>
      </p>
      <div className="col-1 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[81.327px] justify-end ml-[4.21px] mt-[254.15px] relative row-1 text-[#1e08b1] text-[32px] text-center w-[332.924px]">
        <p className="leading-[normal] whitespace-pre-wrap">ULTIMATE IMPACT GOAL</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[229.68px] mt-[209.42px] place-items-start relative row-1 slide-in-left">
      <div className="bg-[#fffd47] col-1 h-[27.448px] ml-[1.05px] mt-[508.29px] row-1 w-[86.392px]" />
      <div className="bg-[#fffd47] col-1 h-[27.448px] ml-[1.05px] mt-[480.85px] row-1 w-[285.514px]" />
      <div className="col-1 h-[200.681px] ml-[59.86px] mt-0 relative row-1 w-[212.252px] image-hover" data-name="13 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.38%] left-[-68.82%] max-w-none top-[-20.9%] w-[232.71%]" src={img131} />
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[81.327px] justify-end ml-0 mt-[254.15px] relative row-1 text-[#1e08b1] text-[32px] text-center w-[332.924px]">
        <p className="leading-[normal] whitespace-pre-wrap">STRATEGIC IMPACT ORIENTATION</p>
      </div>
      <div className="bg-[#fffd47] col-1 h-[27.448px] ml-[121.16px] mt-[373.09px] row-1 w-[211.765px]" />
      <div className="bg-[#fffd47] col-1 h-[27.448px] ml-0 mt-[400.54px] row-1 w-[299.211px]" />
      <div className="bg-[#fffd47] col-1 h-[27.448px] ml-[77.96px] mt-[453.4px] row-1 w-[148.552px]" />
      <p className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[381.22px] ml-0 mt-[346.66px] relative row-1 text-[#1e08b1] text-[22px] w-[387.709px] whitespace-pre-wrap">
        <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal]">Carent Foundation Indonesia</span>
        <span className="leading-[normal]">{` adopts an orientation-driven youth development model that moves beyond training delivery toward measurable transformation of human capital. Our solution is designed to intentionally align youth capability development, labor market needs, and national development priorities, ensuring that every intervention produces clear, traceable, and scalable impact.`}</span>
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1095.7px] mt-[220.6px] place-items-start relative row-1 slide-in-right">
      <div className="bg-white border border-[#1e08b1] border-solid col-1 h-[35.581px] ml-[30.55px] mt-[578.44px] row-1 w-[268.657px]" />
      <p className="col-1 font-['Work_Sans:Medium',sans-serif] font-medium h-[27.448px] leading-[normal] ml-[33.71px] mt-[580.47px] relative row-1 text-[#1e08b1] text-[22px] text-center w-[260.229px] whitespace-pre-wrap">National Orientation</p>
      <div className="col-1 flex h-[23.381px] items-center justify-center ml-[170.68px] mt-[544.89px] relative row-1 w-0" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23.381px]">
            <div className="absolute inset-[-7.36px_-4.28%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3815 14.7279">
                <path d={svgPaths.p19c03800} fill="var(--stroke-0, #1E08B1)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-[#1e08b1] border-solid col-1 h-[35.581px] ml-[30.55px] mt-[501.18px] row-1 w-[268.657px]" />
      <p className="col-1 font-['Work_Sans:Medium',sans-serif] font-medium h-[27.448px] leading-[normal] ml-[33.71px] mt-[505.24px] relative row-1 text-[#1e08b1] text-[22px] text-center w-[265.497px] whitespace-pre-wrap">{`Ecosystem Orientation `}</p>
      <div className="col-1 flex h-[23.381px] items-center justify-center ml-[170.68px] mt-[471.7px] relative row-1 w-0" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23.381px]">
            <div className="absolute inset-[-7.36px_-4.28%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3815 14.7279">
                <path d={svgPaths.p19c03800} fill="var(--stroke-0, #1E08B1)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 h-[204.633px] ml-[69.31px] mt-0 relative row-1 w-[209.337px] image-hover" data-name="Untitled design-13 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.17%] left-[-35.96%] max-w-none top-[-0.08%] w-[174.16%]" src={imgUntitledDesign131} />
        </div>
      </div>
      <div className="bg-white border border-[#1e08b1] border-solid col-1 h-[35.581px] ml-[30.55px] mt-[358.85px] row-1 w-[268.657px]" />
      <div className="bg-white border border-[#1e08b1] border-solid col-1 h-[35.581px] ml-[30.55px] mt-[430.02px] row-1 w-[268.657px]" />
      <div className="col-1 font-['Work_Sans:Medium',sans-serif] font-medium h-[26.431px] leading-[normal] ml-[33.71px] mt-[362.92px] relative row-1 text-[#1e08b1] text-[22px] text-center w-[265.497px] whitespace-pre-wrap">
        <p className="mb-0">{`Capability Orientation `}</p>
        <p>&nbsp;</p>
      </div>
      <p className="col-1 font-['Work_Sans:Medium',sans-serif] font-medium h-[26.431px] leading-[normal] ml-[37.93px] mt-[435.1px] relative row-1 text-[#1e08b1] text-[22px] text-center w-[256.015px] whitespace-pre-wrap">Career Orientation</p>
      <div className="col-1 flex h-[23.381px] items-center justify-center ml-[170.68px] mt-[402.57px] relative row-1 w-0" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[23.381px]">
            <div className="absolute inset-[-7.36px_-4.28%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3815 14.7279">
                <path d={svgPaths.p19c03800} fill="var(--stroke-0, #1E08B1)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[104.708px] justify-end ml-0 mt-[219.58px] relative row-1 text-[#1e08b1] text-[32px] text-center w-[340.299px]">
        <p className="leading-[normal] whitespace-pre-wrap">ORIENTATION LOGIC FRAMEWORK</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group8 />
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[87.426px] justify-center ml-[115.89px] mt-0 relative row-1 text-[#1e08b1] text-[100px] w-[804.919px] scale-in">
        <p className="whitespace-pre-wrap">
          <span className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal]">OUR</span>
          <span className="leading-[normal]">{` SOLUTION`}</span>
        </p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold h-[28.464px] justify-end ml-[124.32px] mt-[87.43px] relative row-1 text-[#1e08b1] text-[24px] w-[796.49px] fade-in">
        <p className="leading-[normal] whitespace-pre-wrap">{`Orientation-Driven Impact Metrics & Measurement Framework`}</p>
      </div>
      <div className="bg-[#fffd47] col-1 h-[23.381px] ml-[125.37px] mt-[120.97px] row-1 w-[431.959px]" />
      <div className="col-1 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[28.464px] justify-center ml-[125.37px] mt-[115.89px] relative row-1 text-[#1e08b1] text-[24px] text-center w-[441.441px]">
        <p className="leading-[normal] whitespace-pre-wrap">( Strategic–Operational Alignment)</p>
      </div>
      <Group9 />
      <div className="col-1 h-[961.691px] ml-0 mt-[22.36px] relative row-1 w-[148.552px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.552 961.691">
          <path d={svgPaths.p29cea800} fill="var(--fill-0, #1E08B1)" id="Rectangle 3" />
        </svg>
      </div>
      <Group7 />
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[38.22px] mt-[444.57px] place-items-start relative row-1">
      <div className="bg-[#1e08b1] col-1 h-[48.389px] ml-0 mt-0 row-1 w-[843.004px] card-entrance" />
      <div className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[169.361px] ml-[13.43px] mt-[69.56px] relative row-1 text-[#1e08b1] text-[24px] w-[388.443px] whitespace-pre-wrap fade-in">
        <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] mb-0">Strategic Focus</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[normal] text-[#1e08b1]">{`Develop `}</span>
          <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal]">adaptive, resilient, and industry-ready youth</span>
          <span className="leading-[normal] text-[#1e08b1]">{` equipped with transferable skills and professional mindset.`}</span>
        </p>
      </div>
      <div className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[169.361px] ml-[478.32px] mt-[69.56px] relative row-1 text-[#1e08b1] text-[24px] w-[431.833px] whitespace-pre-wrap fade-in">
        <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] mb-0">Program Orientation</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[normal]">{`Shift youth preparation from academic achievement to `}</span>
          <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal]">real-world professional capability.</span>
        </p>
      </div>
      <div className="bg-[#1e08b1] col-1 h-[48.389px] ml-0 mt-[286.3px] row-1 w-[840.938px] card-entrance" />
      <div className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[169.361px] ml-[11.36px] mt-[355.86px] relative row-1 text-[#1e08b1] text-[24px] w-[388.443px] whitespace-pre-wrap fade-in">
        <p className="leading-[normal] mb-0">Strategic Focus</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">Facilitate i</span>
          <span className="leading-[normal]">ntentional and supported transitions</span>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{` from education to employment and across career pathways.`}</span>
        </p>
      </div>
      <div className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[169.361px] ml-[476.26px] mt-[355.86px] relative row-1 text-[#1e08b1] text-[24px] w-[433.899px] whitespace-pre-wrap fade-in">
        <p className="leading-[normal] mb-0">Program Orientation</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{`Position youth development as a `}</span>
          <span className="leading-[normal]">shared responsibility</span>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{` across sectors`}</span>
        </p>
      </div>
      <div className="bg-[#1e08b1] col-1 h-[48.389px] ml-0 mt-[572.6px] row-1 w-[854.368px] card-entrance" />
      <div className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[169.361px] ml-[11.36px] mt-[642.16px] relative row-1 text-[#1e08b1] text-[24px] w-[388.443px] whitespace-pre-wrap fade-in">
        <p className="leading-[normal] mb-0">Strategic Focus</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{`Build a `}</span>
          <span className="leading-[normal]">functional and collaborative talent ecosystem</span>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{` connecting youth, industry, and policymakers.`}</span>
        </p>
      </div>
      <div className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[169.361px] ml-[476.26px] mt-[642.16px] relative row-1 text-[#1e08b1] text-[24px] w-[433.899px] whitespace-pre-wrap fade-in">
        <p className="leading-[normal] mb-0">Program Orientation</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{`Position youth development as a `}</span>
          <span className="leading-[normal]">shared responsibility</span>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{` across sectors`}</span>
        </p>
      </div>
      <div className="bg-[#1e08b1] col-1 h-[48.389px] ml-0 mt-[856.89px] row-1 w-[921.519px] card-entrance" />
      <div className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[169.361px] ml-[11.36px] mt-[926.45px] relative row-1 text-[#1e08b1] text-[24px] w-[388.443px] whitespace-pre-wrap fade-in">
        <p className="leading-[normal] mb-0">Strategic Focus</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{`Cultivate `}</span>
          <span className="leading-[normal]">ethical leaders and changemakers</span>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">{` who contribute to society beyond employment`}</span>
        </p>
      </div>
      <div className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[169.361px] leading-[normal] ml-[476.26px] mt-[926.45px] relative row-1 text-[#1e08b1] text-[24px] w-[445.263px] whitespace-pre-wrap fade-in">
        <p className="mb-0">Program Orientation</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal">Embed leadership, purpose, and social responsibility into career development.</p>
      </div>
      <p className="col-1 font-['Work_Sans:Bold',sans-serif] font-bold h-[33.267px] leading-[normal] ml-0 mt-[862.94px] relative row-1 text-[28px] text-center text-white w-[921.519px] whitespace-pre-wrap">{`4. Leadership, Social Innovation & Change Agents Development`}</p>
      <div className="col-1 h-[1134.31px] ml-[1036.06px] mt-[56.26px] relative row-1 w-[336.924px] image-hover" data-name="Untitled design-16 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.63%] left-[-299.05%] max-w-none top-[-4.81%] w-[650.48%]" src={imgUntitledDesign161} />
        </div>
      </div>
      <p className="col-1 font-['Work_Sans:Bold',sans-serif] font-bold h-[33.267px] leading-[normal] ml-[13.43px] mt-[6.05px] relative row-1 text-[28px] text-center text-white w-[645.683px] whitespace-pre-wrap">1. Future-Ready Youth Capacity Development</p>
      <p className="col-1 font-['Work_Sans:Bold',sans-serif] font-bold h-[33.267px] leading-[normal] ml-[13.43px] mt-[292.35px] relative row-1 text-[28px] text-center text-white w-[721.099px] whitespace-pre-wrap">{`2. Career Transition & Industry Exposure Programs`}</p>
      <p className="col-1 font-['Work_Sans:Bold',sans-serif] font-bold h-[33.267px] leading-[normal] ml-[13.43px] mt-[578.65px] relative row-1 text-[28px] text-center text-white w-[815.111px] whitespace-pre-wrap">3. Youth–Industry–Government Ecosystem Collaboration</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Work_Sans:Medium',sans-serif] font-medium h-[119px] ml-[62px] mt-[271px] relative row-1 text-[#1e08b1] text-[24px] text-center w-[1306px] whitespace-pre-wrap fade-in">
        <span className="leading-[normal]">{`Carent Foundation Indonesia structures its programs around `}</span>
        <span className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal]">four strategic focus areas</span>
        <span className="leading-[normal]">{` designed to address critical gaps in youth employability, workforce readiness, and ecosystem alignment. Each focus area is `}</span>
        <span className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal]">{`impact-oriented, industry-linked, `}</span>
        <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">and</span>
        <span className="font-['Work_Sans:Bold',sans-serif] font-bold leading-[normal]">{` scalable`}</span>
        <span className="leading-[normal]">, ensuring long-term contribution to Indonesia's human capital development.</span>
      </p>
      <div className="col-1 font-['Work_Sans:Bold',sans-serif] font-bold h-[235.896px] leading-[85px] ml-[609.53px] mt-[13.11px] relative row-1 text-[#1e08b1] text-[100px] w-[825.442px] whitespace-pre-wrap scale-in">
        <p className="mb-0">PROGRAM</p>
        <p className="font-['Work_Sans:Medium',sans-serif] font-medium">FOCUS AREA</p>
      </div>
      <Group5 />
      <div className="col-1 h-[254.042px] ml-0 mt-0 relative row-1 w-[581px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 581 254.042">
          <path d={svgPaths.p21d2e900} fill="var(--fill-0, #1E08B1)" id="Ellipse 1" />
        </svg>
      </div>
    </div>
  );
}

export default function ProgramPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Program">
      <Navigation />
      <Group6 />
      <Group11 />
      <Group10 />
      <div className="absolute bg-[#fffd47] h-[27px] left-[321px] top-[1882px] w-[57px]" />
      <div className="absolute bg-[#fffd47] h-[27px] left-[400px] top-[1855px] w-[102px]" />
      <div className="absolute bg-[#fffd47] h-[27px] left-[230px] top-[1882px] w-[170px]" />
    </div>
  );
}
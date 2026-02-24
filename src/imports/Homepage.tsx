import { Link, useLocation } from 'react-router';
import svgPaths from "./svg-jvn38emvby";
import imgUntitledDesign141 from "figma:asset/f86f6d63333b643522d3c5b5ffc82aa8977146ec.png";
import imgUntitledDesign171 from "figma:asset/f6dd65d5868244530a5e51c14f0a5de4518f1f31.png";

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
    <div className="content-stretch flex gap-[242px] h-[150px] items-center justify-center overflow-clip pr-[95px] py-[10px] relative shrink-0 w-[1440px]" data-name="Navigation">
      <Menu />
      <Logo />
      <Menu1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[76.407px] leading-[normal] ml-0 mt-[39.21px] relative row-1 text-[#1e08b1] text-[80px] w-[565.393px] whitespace-pre-wrap slide-in-right delay-300">PARTNERSHIP</p>
      <p className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[109.584px] leading-[normal] ml-0 mt-[115.62px] relative row-1 text-[#1e08b1] text-[80px] w-[515.358px] whitespace-pre-wrap slide-in-right delay-400">MODEL</p>
      <div className="col-1 flex h-[2.006px] items-center justify-center ml-[11.01px] mt-[246.31px] relative row-1 w-[834.58px]" style={{ "--transform-inner-width": "1185.59375", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.14deg]">
          <div className="h-0 relative w-[834.582px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 834.582 1">
                <line id="Line 1" stroke="var(--stroke-0, #1E08B1)" x2="834.582" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 h-[205.847px] ml-[565.2px] mt-[19.34px] relative row-1 w-[168.322px]" data-name="Untitled design-17 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-58.76%] max-w-none top-0 w-[217.52%]" src={imgUntitledDesign171} />
        </div>
      </div>
      <div className="col-1 h-[301.607px] ml-[1139.79px] mt-0 relative row-1 w-[300.208px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300.208 301.607">
          <ellipse cx="150.104" cy="150.804" fill="var(--fill-0, #1E08B1)" id="Ellipse 1" rx="150.104" ry="150.804" />
        </svg>
      </div>
      <div className="col-1 h-[301.607px] ml-[946.66px] mt-[77.41px] relative row-1 w-[300.208px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300.208 301.607">
          <path d={svgPaths.p20a95c80} fill="var(--fill-0, white)" id="Ellipse 2" stroke="var(--stroke-0, #1E08B1)" />
        </svg>
      </div>
      <div className="col-1 h-[301.607px] ml-[1083.75px] mt-[261.39px] relative row-1 w-[300.208px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300.208 301.607">
          <ellipse cx="150.104" cy="150.804" fill="var(--fill-0, #1E08B1)" id="Ellipse 1" rx="150.104" ry="150.804" />
        </svg>
      </div>
      <p className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[84.45px] ml-[23.02px] mt-[300.6px] relative row-1 text-[#1e08b1] text-[24px] w-[822.571px] whitespace-pre-wrap text-fade-in paragraph-1">
        <span className="leading-[normal]">{`Carent Foundation Indonesia believes in `}</span>
        <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal]">collaborative impact</span>
        <span className="leading-[normal]">{`, where sustainable youth development is achieved through `}</span>
        <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal]">shared value creation</span>
        <span className="leading-[normal]">{` among government, industry, academia, and civil society.`}</span>
      </p>
      <p className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[23.123px] leading-[normal] ml-[34.02px] mt-[423.26px] relative row-1 text-[#1e08b1] text-[24px] w-[489.34px] whitespace-pre-wrap text-fade-in paragraph-2">Our partnership model is designed to be:</p>
      <div className="bg-[#1e08b1] col-1 h-[29.155px] ml-[535.37px] mt-[420.24px] row-1 w-[213.148px]" />
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[21.113px] justify-center ml-[545.38px] mt-[423.26px] relative row-1 text-[24px] text-white w-[203.141px]">
        <p className="leading-[normal] whitespace-pre-wrap">Outcome-driven</p>
      </div>
      <div className="bg-[#1e08b1] col-1 h-[34.182px] ml-[537.37px] mt-[471.51px] row-1 w-[349.243px]" />
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[28.15px] justify-center ml-[545.38px] mt-[474.53px] relative row-1 text-[24px] text-white w-[346.24px]">
        <p className="leading-[normal] whitespace-pre-wrap">Policy- and industry-aligned</p>
      </div>
      <div className="bg-[#1e08b1] col-1 h-[39.209px] ml-[537.37px] mt-[520.77px] row-1 w-[316.22px]" />
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[35.188px] justify-center ml-[545.38px] mt-[520.77px] relative row-1 text-[24px] text-white w-[334.232px]">
        <p className="leading-[normal] whitespace-pre-wrap">Scalable and measurable</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      
      {/* ========================================================= */}
      {/* BAGIAN "partnership type" (Teks Diubah jadi Kecil)      */}
      {/* ========================================================= */}
      <div className="col-1 ml-[550px] mt-[183px] relative row-1 w-[289px] h-[158px] flex items-center justify-center z-10 hover:scale-105 transition-transform duration-300">
        {/* Background Abu-abu */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="-rotate-90 w-[158px] h-[289px]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 289">
              <path d={svgPaths.pd46f3b0} fill="var(--fill-0, #D9D9D9)" id="Polygon 1" />
            </svg>
          </div>
        </div>
        {/* Teks (Diubah jadi lowercase) */}
        <p className="relative z-10 font-['Work_Sans',sans-serif] font-semibold text-[#1e08b1] text-[30px] text-center leading-tight pointer-events-none">
          partnership<br />type
        </p>
      </div>
      {/* ========================================================= */}

      {/* SISA KODE DI BAWAH INI TETAP SAMA */}
      <div className="col-1 flex h-[131.367px] items-center justify-center ml-[839px] mt-[93px] relative row-1 w-[240.285px]" style={{ "--transform-inner-width": "1185.59375", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[240.285px] relative w-[131.367px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.367 240.285">
              <path d={svgPaths.p1a7b6cc0} fill="var(--fill-0, #1E08B1)" id="Polygon 2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[139.958px] items-center justify-center ml-[285px] mt-[105px] relative row-1 w-[256px]" style={{ "--transform-inner-width": "1185.59375", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[256px] relative w-[139.958px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.958 256">
              <path d={svgPaths.p30f8e100} fill="var(--fill-0, #1E08B1)" id="Polygon 6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[139.958px] items-center justify-center ml-0 mt-[198px] relative row-1 w-[256px]" style={{ "--transform-inner-width": "1185.59375", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[256px] relative w-[139.958px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.958 256">
              <path d={svgPaths.p30f8e100} fill="var(--fill-0, #1E08B1)" id="Polygon 6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[129px] items-center justify-center ml-[244px] mt-[312px] relative row-1 w-[242px]" style={{ "--transform-inner-width": "1185.59375", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[242px] relative w-[129px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129 242">
              <path d={svgPaths.p25e4de00} fill="var(--fill-0, #1E08B1)" id="Polygon 8" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[85px] items-center justify-center ml-[839px] mt-[292px] relative row-1 w-[179px]" style={{ "--transform-inner-width": "1185.59375", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[179px] relative w-[85px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 179">
              <path d={svgPaths.p25d7b900} fill="var(--fill-0, #1E08B1)" id="Polygon 4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[147px] items-center justify-center ml-[1083px] mt-[183px] relative row-1 w-[278px]" style={{ "--transform-inner-width": "1185.59375", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[278px] relative w-[147px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147 278">
              <path d={svgPaths.p2cb97800} fill="var(--fill-0, #1E08B1)" id="Polygon 3" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[77px] justify-center ml-[856px] mt-[120px] relative row-1 text-[24px] text-center text-white w-[212px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Government & Public Institution Partnership`}</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[77px] justify-center ml-[10px] mt-[229px] relative row-1 text-[24px] text-center text-white w-[236px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Academic & Training Institution Partnership`}</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[77px] justify-center ml-[853px] mt-[292px] relative row-1 text-[24px] text-center text-white w-[151px]">
        <p className="leading-[normal] whitespace-pre-wrap">BUMN Partnership</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[77px] justify-center ml-[1077px] mt-[218px] relative row-1 text-[24px] text-center text-white w-[295px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`International Organization & Donor Partnership`}</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[55px] justify-center ml-[330px] mt-[147px] relative row-1 text-[24px] text-center text-white w-[166px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Private Sector & Industry Partnership`}</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[77px] justify-center ml-[262px] mt-[338px] relative row-1 text-[24px] text-center text-white w-[205px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Community & Civil Society Partnership`}</p>
      </div>
      <div className="col-1 flex h-[74px] items-center justify-center ml-[686px] mt-0 relative row-1 w-0" style={{ "--transform-inner-width": "1185.59375", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[74px]">
            <div className="absolute inset-[-7.36px_-1.35%_-7.36px_-7.8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.7735 14.7279">
                <path d={svgPaths.p10fa9bf0} fill="var(--stroke-0, #1E08B1)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[179px] leading-[normal] ml-0 mt-[16px] relative row-1 text-[#1e08b1] text-[80px] w-[699px] whitespace-pre-wrap">
        <p className="mb-0">SUSTAINIBILITY</p>
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal">MODEL</p>
      </div>
      <div className="col-1 h-0 ml-0 mt-0 relative row-1 w-[667px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 667 1">
            <line id="Line 2" stroke="var(--stroke-0, #1E08B1)" x2="667" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="col-1 h-0 ml-0 mt-[20px] relative row-1 w-[70.369px]">
        <div className="absolute inset-[-14.43px_-20.51%_-14.43px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.8028 28.8675">
            <path d={svgPaths.p1123e130} fill="var(--stroke-0, #1E08B1)" id="Arrow 2" />
          </svg>
        </div>
      </div>
      <div className="bg-[#1e08b1] col-1 h-[40px] ml-[101.39px] mt-0 row-1 w-[306.18px]" />
      <div className="col-1 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[33px] justify-center ml-[106.56px] mt-[3px] relative row-1 text-[28px] text-center text-white w-[297.905px]">
        <p className="leading-[normal] whitespace-pre-wrap">Sustainability Vision</p>
      </div>
      <div className="col-1 h-0 ml-[732.36px] mt-[20px] relative row-1 w-[70.369px]">
        <div className="absolute inset-[-14.43px_-20.51%_-14.43px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.8028 28.8675">
            <path d={svgPaths.p1123e130} fill="var(--stroke-0, #1E08B1)" id="Arrow 2" />
          </svg>
        </div>
      </div>
      <div className="bg-[#1e08b1] col-1 h-[40px] ml-[833.73px] mt-0 row-1 w-[445.823px]" />
      <div className="col-1 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[33px] justify-center ml-[838.91px] mt-[3px] relative row-1 text-[28px] text-center text-white w-[440.651px]">
        <p className="leading-[normal] whitespace-pre-wrap">Four Pillars of Sustainability</p>
      </div>
      <div className="col-1 font-['Work_Sans:Regular',sans-serif] font-normal h-[264px] leading-[normal] ml-[111.73px] mt-[68px] relative row-1 text-[#1e08b1] text-[24px] tracking-[2.4px] w-[500.646px] whitespace-pre-wrap text-fade-in paragraph-3">
        <p className="mb-0">Carent Foundation Indonesia is committed to building a financially resilient, institutionally strong, and impact-driven organization that delivers long-term value for youth, partners, and national development.</p>
        <p>Our sustainability model ensures:</p>
      </div>
      <div className="bg-white border-2 border-[#1e08b1] border-solid col-1 h-[77px] ml-[769.6px] mt-[82px] row-1 w-[209.982px]" />
      <div className="bg-white border-2 border-[#1e08b1] border-solid col-1 h-[77px] ml-[758.22px] mt-[215px] row-1 w-[233.773px]" />
      <div className="bg-white border-2 border-[#1e08b1] border-solid col-1 h-[77px] ml-[1070.61px] mt-[82px] row-1 w-[238.945px]" />
      <div className="bg-white border-2 border-[#1e08b1] border-solid col-1 h-[77px] ml-[1041.65px] mt-[215px] row-1 w-[310.318px]" />
      <div className="col-1 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[57px] justify-center ml-[1078.89px] mt-[89px] relative row-1 text-[#1e08b1] text-[28px] text-center w-[223.429px]">
        <p className="leading-[normal] whitespace-pre-wrap">Programmatic Sustainability</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[57px] justify-center ml-[1041.65px] mt-[222px] relative row-1 text-[#1e08b1] text-[28px] text-center w-[311.352px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Impact & Ecosystem Sustainability`}</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[57px] justify-center ml-[775.81px] mt-[222px] relative row-1 text-[#1e08b1] text-[28px] text-center w-[197.569px]">
        <p className="leading-[normal] whitespace-pre-wrap">Institutional Sustainability</p>
      </div>
      <div className="col-1 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium h-[57px] justify-center ml-[775.81px] mt-[89px] relative row-1 text-[#1e08b1] text-[28px] text-center w-[197.569px]">
        <p className="leading-[normal] whitespace-pre-wrap">Financial Sustainability</p>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[83px] items-start pl-[43px] pr-[19px] relative size-full" data-name="Homepage">
      <Navigation />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

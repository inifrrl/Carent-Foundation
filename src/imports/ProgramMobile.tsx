export default function ProgramMobile() {
  return (
    {/* 1. Ubah tinggi utama menjadi min-h-[1250px] agar elemen yang didorong ke bawah tidak terpotong */}
    <div className="bg-white relative w-full min-h-[1250px] overflow-hidden page-transition" data-name="Program Mobile">
      
      {/* Bagian Judul PROBLEM STATEMENT tetap di posisi aslinya */}
      <Group />
      
      <div className="absolute flex h-[284px] items-center justify-center left-[1.15px] top-[29.5px] w-[110px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[110px] relative w-[284px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 110">
              <path d={svgPaths.p26909ac0} fill="#1E08B1" id="Polygon 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[137px] left-[27px] top-[91px] w-[142px]" data-name="pazelll 4 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-14.08%] max-w-none top-0 w-[146.33%]" src={imgPazelll41} />
        </div>
      </div>

      {/* 2. Paragraf 1 didorong ke bawah 80px */}
      <div className="translate-y-[80px]">
        <div className="-translate-y-full absolute flex flex-col font-['Work_Sans',sans-serif] font-normal h-[80px] justify-end leading-[0] left-[156px] text-[#1e08b1] text-[8.786px] text-justify top-[213px] w-[210px]">
          <p className="whitespace-pre-wrap">
            <span className="font-['Work_Sans',sans-serif] font-bold leading-[normal]">{`Indonesia faces a critical youth employment crisis `}</span>
            <span className="leading-[normal]">that threatens its Indonesia Emas 2045 vision. Despite government efforts, youth unemployment remains high at 16.16%, while nearly 23.79% of youth (aged 16–30) are classified as NEET (Not in Employment, Education, or Training), signaling a failure to transition from education to the labor market.</span>
          </p>
        </div>
      </div>

      {/* 3. Paragraf 2 dan Logo samping didorong ke bawah 120px */}
      <div className="translate-y-[120px]">
        <div className="-translate-y-full absolute flex flex-col font-['Work_Sans',sans-serif] font-normal h-[87px] justify-end leading-[0] left-[89px] text-[#1e08b1] text-[0px] text-justify top-[310px] tracking-[0.85px] w-[277px]">
          <p className="text-[8.5px] whitespace-pre-wrap">
            <span className="leading-[normal]">{`The core issue is a severe `}</span>
            <span className="font-['Work_Sans',sans-serif] font-bold leading-[normal]">skills mismatch</span>
            <span className="leading-[normal]">. Graduates often lack both the technical proficiency and essential soft skills—such as leadership and problem-solving—that modern employers demand. As automation and digital transformation reshape industries, traditional education pathways are proving insufficient. Without urgent intervention to bridge these gaps, Indonesia's potential demographic dividend risks devolving into a demographic burden, leading to economic stagnation and increased inequality.</span>
          </p>
        </div>
        <Group2 />
      </div>

      {/* 4. Section OUR SOLUTION didorong ke bawah 180px */}
      <div className="translate-y-[180px]">
        <Group7 />
      </div>

      {/* 5. Section PROGRAM FOCUS AREA didorong ke bawah 240px */}
      <div className="translate-y-[240px]">
        <div className="absolute h-[58px] left-0 top-[547px] w-[137px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 58">
            <path d={svgPaths.p1d42880} fill="#1E08B1" id="Ellipse 1" />
          </svg>
        </div>
        
        {/* Lebar teks diubah jadi w-max dan left disesuaikan agar tulisan FOCUS AREA tidak patah dan nabrak teks bawahnya */}
        <p className="absolute font-['Work_Sans',sans-serif] font-bold h-[13px] leading-[0] left-[140px] text-[#1e08b1] text-[15.17px] top-[547px] w-max whitespace-pre-wrap">
          <span className="leading-[12.895px]">{`PROGRAM `}</span>
          <span className="font-['Work_Sans',sans-serif] font-medium leading-[12.895px]">FOCUS AREA</span>
        </p>
        <p className="absolute font-['Work_Sans',sans-serif] font-medium h-[47px] leading-[0] left-[143px] text-[#1e08b1] text-[6.643px] text-justify top-[567px] w-[214px] whitespace-pre-wrap">
          <span className="leading-[normal]">{`Carent Foundation Indonesia structures its programs around `}</span>
          <span className="font-['Work_Sans',sans-serif] font-bold leading-[normal]">four strategic focus areas</span>
          <span className="leading-[normal]">{` designed to address critical gaps in youth employability, workforce readiness, and ecosystem alignment. Each focus area is `}</span>
          <span className="font-['Work_Sans',sans-serif] font-bold leading-[normal]">{`impact-oriented, industry-linked, `}</span>
          <span className="font-['Work_Sans',sans-serif] font-normal leading-[normal]">and</span>
          <span className="font-['Work_Sans',sans-serif] font-bold leading-[normal]">{` scalable`}</span>
          <span className="leading-[normal]">, ensuring long-term contribution to Indonesia's human capital development.</span>
        </p>
      </div>

      {/* 6. Konten daftar 4 Focus Area didorong ke bawah 280px */}
      <div className="translate-y-[280px]">
        <Group6 />
      </div>

    </div>
  );
}

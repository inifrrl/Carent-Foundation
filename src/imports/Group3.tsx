export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[55px] items-center justify-center left-0 top-[91px] w-[1000px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#1e08b1] h-[55px] w-[1000px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-[45px] justify-end leading-[0] left-[506.15px] text-[32px] text-center text-white top-[136px] w-[965.324px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Government & BUMN Strategic Collaboration Programs`}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Work_Sans:ExtraBold',sans-serif] font-extrabold h-[75px] justify-center leading-[0] left-[500px] text-[#1e08b1] text-[64px] text-center top-[37.5px] w-[1000px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[normal]">{`FLAGSHIP `}</span>
          <span className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal]">PROGRAM</span>
        </p>
      </div>
    </div>
  );
}
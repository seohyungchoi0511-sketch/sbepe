import React from "react";
const seoulBg = import.meta.env.BASE_URL + "images/picts/seoul.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">
      {/* 배경 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${seoulBg})` }}  // import한 변수 바로 사용
      />
      <div className="absolute inset-0 bg-white/35 pointer-events-none" />

      {/* 컨텐츠 영역 */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-left">
            {/* 왼쪽 절반 */}
            <div className="text-left max-w-[900px]">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.15] font-normal font-seif-kr">
                  사회적 가치를 추구하는 열린 세상
                </h2>

                <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tight leading-[1.10] font-normal font-serif-kr">
                  건설감정법인{" "}
                  <span className="font-semibold text-[#002aba]">
                    서울건축환경
                  </span>
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-70 tracking-wide">
                  법원감정 · 하자진단 · VE · 건설클레임
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 border border-white/70 rounded-full px-4 py-3 backdrop-blur-sm bg-white/10">
        <svg
          className="w-4 h-4 text-[#002aba] animate-[bounce_2s_infinite_0s] opacity-80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>

        <svg
          className="w-4 h-4 text-[#002aba] animate-[bounce_2s_infinite_0.15s] opacity-60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>

        <svg
          className="w-4 h-4 text-[#002aba] animate-[bounce_2s_infinite_0.3s] opacity-40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
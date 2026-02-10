
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Static Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-slate-50"
          style={{
            backgroundImage: `url('/images/picts/seoul.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-blue-50/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-5xl">
          {/* 상단 포인트 라벨 */}
          <div className="mb-12 flex items-center gap-4">
            <div className="w-12 h-1 bg-blue-600" />
            <span className="text-blue-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">Corporate Philosophy</span>
          </div>

          <div className="flex flex-col gap-4">
            {/* 문구 1: 사회적 가치를 추구하는 열린 세상 (느낌표 제거) */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tighter">
              사회적 가치를 추구하는 <span className="text-slate-900">열린 세상</span>
            </h2>

            {/* 문구 2: 건설감정법인 서울건축환경 (동일 크기, 서울건축환경 강조 유지) */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-[1.2] tracking-tighter">
              건설감정법인 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">서울건축환경</span>
            </h2>
          </div>

          {/* 하단 데코레이션 요소 */}
          <div className="mt-20 flex flex-col gap-8">
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-1.5 transition-all duration-1000 ${i === 0 ? 'w-20 bg-blue-600' : 'w-8 bg-slate-100'}`} />
              ))}
            </div>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.5em]">
              Excellence in Forensic Engineering since 2002
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const SERVICES = [
  {
    id: "MOD-01",
    title: "건설기술정책연구 / 소비자분쟁조정",
    description: "건설 현장 분쟁 사례를 분석하고, 계약 내용과 시공 상태를 검토하여 쟁점을 정리합니다. 이를 바탕으로 합리적인 조정 기준과 실질적인 해결 방향을 제시합니다.",
  },
  {
    id: "MOD-02",
    title: "공기 및 원가계산 검토",
    description: "공사 지연의 원인을 규명하고 설계 변경에 따른 추가 비용의 적정성을 데이터 기반으로 산정하여 분쟁의 기준점을 제시합니다.",
  },
  {
    id: "MOD-03",
    title: "현장 기술분쟁·의견조정",
    description: "기술적 견해 차이로 멈춰선 현장에서 설계와 시공의 불일치를 판별하고, 이해관계자 모두가 납득할 수 있는 공학적 합의안을 도출합니다.",
  },
  {
    id: "MOD-04",
    title: "하자·공사대금 / 유익비판단",
    description: "하자 발생 여부와 공사대금의 적정성을 기술적으로 검토하고, 추가 공사의 필요성과 효과를 분석하여 유익비 해당 여부와 합리적인 비용 기준을 제시합니다.",
  },
  {
    id: "MOD-05",
    title: "열병합발전소 / 극저온 기술분석",
    description: "설비 운영 상태와 공정 조건을 기술적으로 검토하여 문제 원인을 분석하고, 시스템 특성을 반영한 합리적인 개선 방향과 판단 기준을 제시합니다.",
  },
  {
    id: "MOD-06",
    title: "송무 지원 / 건설감정",
    description: "대한민국 법원 감정 실무의 정수를 담은 보고서로, 판결의 결정적 증거가 되는 감정 결과를 공학적 무결성으로 뒷받침합니다.",
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">

      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 sm:gap-10 lg:gap-12
                        mb-10 sm:mb-16 lg:mb-24 border-l-4 border-[#002aba]600 pl-4 sm:pl-6 lg:pl-8">

          <div className="max-w-2xl">
            <span className="text-[#002aba]600 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em]">
              Operational Framework
            </span>

            <h3 className="mt-3 text-[34px] sm:text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.92] mb-5 sm:mb-8">
              PRECISION<br />
              <span className="text-[#002aba]600">FORENSICS</span>
            </h3>
          </div>

          <div className="hidden lg:block text-right">
            <div className="text-[120px] font-black text-slate-100 leading-none select-none">06</div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">

          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group relative h-full rounded-none border border-slate-200 bg-white/70 backdrop-blur
                         p-5 sm:p-7 lg:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1
                         hover:shadow-xl hover:border-[#002aba]/30 hover:bg-[#002aba]/[0.04]"
            >

              <h4 className="text-[18px] sm:text-xl font-semibold text-slate-900 mb-4 break-keep group-hover:text-[#002aba]">
                {service.title}
              </h4>

              <p className="text-[13px] sm:text-sm text-slate-600 leading-5 sm:leading-6">
                {service.description}
              </p>

              {/* Hover Lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#002aba]600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-[#002aba]600 group-hover:h-full transition-all duration-700 delay-100" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
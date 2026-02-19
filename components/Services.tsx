
import React from 'react';

const SERVICES = [
  {
    id: "MOD-01",
    title: "건설기술정책연구 / 소비자분쟁조정",
    description: "건설 현장 분쟁 사례를 분석하고, 계약 내용과 시공 상태를 검토하여 쟁점을 정리합니다. 이를 바탕으로 합리적인 조정 기준과 실질적인 해결 방향을 제시합니다.",
    meta: "CONTRACT_LOGIC",
    tags: ["Evidence", "Audit"],
    spec: "ISO-9001 COMPLIANT"
  },
  {
    id: "MOD-02",
    title: "공기 및 원가계산 검토",
    description: "공사 지연의 원인을 규명하고 설계 변경에 따른 추가 비용의 적정성을 데이터 기반으로 산정하여 분쟁의 기준점을 제시합니다.",
    meta: "COST_PRECISION",
    tags: ["CPM", "Budget"],
    spec: "DATA_VERIFIED"
  },
  {
    id: "MOD-03",
    title: "현장 기술검토·의견조정",
    description: "기술적 견해 차이로 멈춰선 현장에서 설계와 시공의 불일치를 판별하고, 이해관계자 모두가 납득할 수 있는 공학적 합의안을 도출합니다.",
    meta: "TECH_MEDIATION",
    tags: ["Compliance", "Site"],
    spec: "NEUTRAL_STAND"
  },
  {
    id: "MOD-04",
    title: "하자·공사대금 / 유익비판단",
    description: "하자 발생 여부와 공사대금의 적정성을 기술적으로 검토하고, 추가 공사의 필요성과 효과를 분석하여 유익비 해당 여부와 합리적인 비용 기준을 제시합니다.",
    meta: "STRATEGIC_PREB",
    tags: ["Settlement", "Legal"],
    spec: "WIN_LOGIC_SYNC"
  },
  {
    id: "MOD-05",
    title: "열병합발전소 / 극저온 기술분석",
    description: "설비 운영 상태와 공정 조건을 기술적으로 검토하여 문제 원인을 분석하고, 시스템 특성을 반영한 합리적인 개선 방향과 판단 기준을 제시합니다.",
    meta: "GEO_SAFETY",
    tags: ["Geotechnical", "Risk"],
    spec: "REALTIME_MONITOR"
  },
  {
    id: "MOD-06",
    title: "송무 지원 / 건설감정",
    description: "대한민국 법원 감정 실무의 정수를 담은 보고서로, 판결의 결정적 증거가 되는 감정 결과를 공학적 무결성으로 뒷받침합니다.",
    meta: "COURT_EXPERT",
    tags: ["Appraisal", "Forensic"],
    spec: "SUPREME_COURT_STD"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Engineering Layout */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24 border-l-4 border-[#002aba]600 pl-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#002aba]600 font-black text-[10px] uppercase tracking-[0.4em]">Operational Framework</span>
              <div className="h-px flex-grow bg-[#002aba]100" />
            </div>
            {/* 타이틀 크기 축소: 5xl/7xl -> 4xl/6xl */}
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              PRECISION<br />
              <span className="text-[#002aba]600">FORENSICS</span>
            </h3>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-[120px] font-black text-slate-100 leading-none select-none">06</div>
            <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.6em] -mt-8">Certified Modules</p>
          </div>
        </div>

        {/* Blueprint Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group relative h-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#002aba]/30 hover:bg-[#002aba]/[0.04]"
            >
              {/* Module Header 제거 (MOD 넘버 및 Active 표시 제거) */}
              <div className="mb-8" />

              {/* Module Title */}
              <div className="relative mb-8">
                <h4 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#002aba]">
                  {service.title}
                </h4>
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-px bg-slate-100 group-hover:bg-[#002aba]600 transition-all duration-500 group-hover:w-12" />
              </div>

              {/* Module Content */}
              <div className="relative mt-3 flex-grow">
                <p className="text-sm text-slate-600 leading-6">
                  {service.description}
                </p>
              </div>

              {/* Hover Interaction: Technical Scan Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#002aba]600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              <div className="absolute bottom-0 left-0 w-1.5 h-0 bg-[#002aba]600 group-hover:h-full transition-all duration-700 ease-in-out delay-100" />

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-slate-100 group-hover:border-[#002aba]600 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 opacity-30">
          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-1 h-4 bg-slate-300" />
            ))}
          </div>

          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-1 h-4 bg-slate-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

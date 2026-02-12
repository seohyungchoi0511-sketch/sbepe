
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 900) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>();

  useEffect(() => {
    const start = performance.now();

    const animate = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));

      if (p < 1) raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return value;
}


const METRICS = [
  { label: "창립 연도", value: 2002, suffix: "", sub: "Since" },
  { label: "감정 처리", value: 300, suffix: "+", sub: "Cases" },
  { label: "핵심 분야", value: 6, suffix: "", sub: "Areas" },
  { label: "지원 단계", value: 3, suffix: "", sub: "Steps" },
];

const MetricCard = ({ label, value, suffix = "", sub, delay }: {
  label: string;
  value: number;
  suffix?: string;
  sub: string;
  delay: number;
}) => {
  const n = useCountUp(value, 900 + delay);

  return (
    <div className="p-10 rounded-none bg-slate-50 border border-slate-100">
      <span className="mt-2 inline-block text-xs tracking-wide text-[#002aba]/70">
        {label}
      </span>

      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        {n}{suffix}
      </div>

      <span className="px-3 py-1 bg-[#002aba]/10 text-[10px] text-[#002aba]">
        {sub}
      </span>
    </div>
  );
};



export default MetricCard;

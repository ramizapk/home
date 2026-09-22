'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, MessageCircle, ArrowUpRight, Award, Zap } from 'lucide-react';

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = 0;
          const startTime = performance.now();
          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(start + (end - start) * eased));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsCard() {
  const t = useTranslations('stats');

  const stats = [
    { value: 4, suffix: '+', label: t('experience'), growth: 'Since 2019' },
    { value: 20, suffix: '+', label: t('projects'), growth: 'All Live' },
    { value: 99, suffix: '%', label: t('clients'), growth: 'Top Rated' },
  ];

  return (
    <div className="bento-card card-sage flex flex-col justify-between relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" preserveAspectRatio="none">
          <path d="M0,150 Q100,60 200,100 T400,30" stroke="white" strokeWidth="3" fill="none" />
          <path d="M0,180 Q120,90 220,130 T400,70" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/15">
        <div className="flex items-center gap-1.5 font-mono text-xs text-white/80 font-bold uppercase tracking-wider">
          <Award size={14} className="text-amber-300" />
          <span>KEY PERFORMANCE METRICS</span>
        </div>
        <span className="text-[10px] font-mono bg-white/15 px-2 py-0.5 rounded-full text-white/90">
          AUDITED 2026
        </span>
      </div>

      {/* Metric Columns */}
      <div className="relative z-10 grid grid-cols-3 gap-2 py-4">
        {stats.map((stat, i) => (
          <div key={i} className="text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex flex-col justify-between">
            <span className="text-[10px] font-mono font-semibold text-emerald-200 block mb-1">
              {stat.growth}
            </span>
            <div
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-none mb-1 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <CountUp end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-[11px] text-white/80 leading-tight font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="relative z-10 inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-navy hover:bg-cream text-xs sm:text-sm font-bold rounded-[var(--radius-button)] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        <MessageCircle size={15} className="text-terracotta" />
        <span>{t('cta')}</span>
        <ArrowUpRight size={14} className="text-navy" />
      </a>
    </div>
  );
}

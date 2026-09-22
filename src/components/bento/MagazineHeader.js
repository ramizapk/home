'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { Clock, Radio, Terminal, Sparkles } from 'lucide-react';

export default function MagazineHeader() {
  const t = useTranslations('magazine');
  const locale = useLocale();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(locale === 'ar' ? 'ar-SA' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: 'Asia/Riyadh',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [locale]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-sand/80 px-4 py-3 md:px-6 md:py-3.5 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal">
        {/* Issue & Edition */}
        <div className="flex items-center gap-3 font-mono">
          <span className="px-2.5 py-1 bg-navy text-white rounded-md font-bold tracking-wider text-[11px]">
            {t('vol')}
          </span>
          <span className="font-semibold text-navy tracking-wider hidden sm:inline">
            // {t('edition')}
          </span>
        </div>

        {/* Live Availability */}
        <div className="flex items-center gap-2 px-3 py-1 bg-sage-bg border border-sage/20 rounded-full text-sage-dark font-medium">
          <span className="w-2 h-2 rounded-full bg-sage animate-[pulse-dot_1.8s_ease-in-out_infinite]" />
          <span className="font-semibold tracking-wide text-[11px]">{t('status')}</span>
        </div>

        {/* Time & Location */}
        <div className="flex items-center gap-4 ms-auto md:ms-0 font-mono text-[11px] text-charcoal/80">
          <div className="flex items-center gap-1.5 bg-cream px-2.5 py-1 rounded-md border border-sand-light">
            <Clock size={13} className="text-terracotta" />
            <span className="tabular-nums font-semibold text-navy">{time || '11:45 AM'}</span>
          </div>
          <span className="hidden md:inline text-charcoal/40">•</span>
          <span className="hidden md:inline font-medium text-charcoal/70">{t('location')}</span>
        </div>
      </div>
    </div>
  );
}

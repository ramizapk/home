'use client';

import { useTranslations } from 'next-intl';
import { Quote, Sparkles } from 'lucide-react';

export default function QuoteCard() {
  const t = useTranslations('quote');

  return (
    <div className="bento-card card-navy flex flex-col justify-between relative overflow-hidden">
      {/* Background oversized quotation watermark */}
      <div className="absolute -right-3 -bottom-6 text-white/5 font-serif text-9xl pointer-events-none select-none">
        &rdquo;
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
          <Quote size={20} className="text-terracotta-light opacity-90" />
          <span className="font-mono text-[10px] text-white/40 tracking-wider">
            PHILOSOPHY // 01
          </span>
        </div>

        <blockquote className="text-xs sm:text-sm text-white/90 leading-relaxed italic font-medium">
          &ldquo;{t('text')}&rdquo;
        </blockquote>
      </div>

      <div className="relative z-10 pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
        <p className="text-[11px] font-mono font-bold text-amber-300">
          — {t('author')}
        </p>
        <span className="text-[10px] font-mono text-white/40">
          Clean Code Paradigm
        </span>
      </div>
    </div>
  );
}

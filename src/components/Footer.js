'use client';

import { useTranslations } from 'next-intl';
import { ArrowUp, Heart, Terminal, Sparkles } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 mt-6 border-t border-sand-light/80">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Barcode representation */}
        <div className="flex items-center gap-4">
          <div>
            <span
              className="text-lg font-black tracking-tight text-navy"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              RAMIZ<span className="text-terracotta">.</span>
            </span>
            <p className="text-[11px] font-mono text-charcoal/70">
              SOFTWARE ARCHITECT & ENGINEER // EDITION 2026
            </p>
          </div>

          {/* Editorial Barcode Graphic */}
          <div className="hidden sm:flex items-center gap-[2px] h-6 px-2 py-0.5 bg-white border border-sand-light rounded">
            {[4, 2, 6, 3, 8, 2, 5, 3, 7, 2, 4, 6, 2, 5, 8, 3, 2, 6].map((h, i) => (
              <span
                key={i}
                className="bg-navy/80 inline-block w-[1.5px]"
                style={{ height: `${h * 2 + 6}px` }}
              />
            ))}
          </div>
        </div>

        {/* Center: Made with text */}
        <div className="text-xs font-mono text-charcoal/70 text-center">
          <p className="flex items-center justify-center gap-1.5 font-medium">
            {t('copyright')}
          </p>

        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-cream text-navy rounded-xl border border-sand text-xs font-mono font-bold shadow-xs hover:shadow-sm transition-all cursor-pointer group"
          aria-label="Back to Top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={13} className="text-terracotta group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

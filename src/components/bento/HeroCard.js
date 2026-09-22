'use client';

import { useTranslations } from 'next-intl';
import { ArrowDown, FileText, ArrowUpRight, Cpu } from 'lucide-react';

const techBadges = [
  'Next.js', 'Laravel', 'React', 'C#', 'PHP', 'Vue.js',
  'Tailwind CSS', 'MySQL', 'REST APIs', 'System Design', 'Git & GitHub', 'Figma'
];

export default function HeroCard() {
  const t = useTranslations('hero');
  const tMag = useTranslations('magazine');

  return (
    <div className="bento-card flex flex-col justify-between relative overflow-hidden group bg-gradient-to-br from-white via-cream/40 to-warm-white border border-sand/90">
      {/* Decorative ambient gradients safely enclosed in absolute background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-terracotta/10 via-amber/5 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-sage/10 via-sage-light/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      {/* Top Editorial Index Tag */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-sand-light/80">
        <div className="flex items-center gap-2 font-mono text-[11px] text-charcoal/70">
          <span className="px-2 py-0.5 bg-navy/5 border border-navy/10 rounded font-bold text-navy">
            [INDEX // 01]
          </span>
          <span className="hidden sm:inline tracking-wider uppercase font-semibold">
            {tMag('specialty')}
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-sage font-semibold">
          <Cpu size={13} className="text-sage" />
          <span>PRODUCTION-PROVEN</span>
        </div>
      </div>

      {/* Main Content — compact, balanced & punchy */}
      <div className="relative z-10 py-3 sm:py-4">
        <p className="text-xs font-bold text-terracotta tracking-[0.2em] uppercase mb-1.5 font-mono">
          // {t('greeting')}
        </p>

        {/* Large Editorial Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-navy leading-[0.95] tracking-tight mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('name')}
          <span className="text-terracotta">.</span>
        </h1>

        {/* Subtitle with stylish badge */}
        <div className="flex items-center gap-2.5 flex-wrap mb-3">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-bold text-navy-light"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('title')}
          </h2>
          <span className="px-2.5 py-0.5 bg-sage-bg border border-sage/30 text-sage-dark rounded-full text-xs font-semibold font-mono">
            {tMag('yearsExp')}
          </span>
        </div>

        <div className="mag-divider mb-3" />

        {/* Tagline */}
        <p className="text-xs sm:text-sm md:text-base text-charcoal/90 max-w-xl leading-relaxed mb-5 font-medium">
          {t('tagline')}
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-navy text-white text-xs sm:text-sm font-bold rounded-[var(--radius-button)] hover:bg-terracotta transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t('cta')}</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href="/files/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Ramiz_Ali_Mohammed_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-white text-navy border border-sand hover:border-navy text-xs sm:text-sm font-semibold rounded-[var(--radius-button)] hover:bg-cream transition-all duration-300 shadow-sm"
          >
            <FileText size={14} className="text-terracotta" />
            <span>{t('ctaResume')}</span>
          </a>

          <a
            href="#skills"
            className="inline-flex items-center gap-1.5 ms-2 text-xs font-semibold text-charcoal/70 hover:text-navy transition-colors py-1.5"
          >
            <ArrowDown size={13} className="animate-bounce text-terracotta" />
            <span>{t('scroll')}</span>
          </a>
        </div>
      </div>

      {/* Dynamic Infinite Tech Marquee Footer */}
      <div className="relative z-10 pt-3 border-t border-sand-light/80 overflow-hidden">
        <div className="animate-marquee gap-2.5 py-0.5">
          {techBadges.concat(techBadges).map((badge, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-sand-light text-[11px] font-mono font-semibold text-charcoal shadow-xs hover:border-terracotta/40 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

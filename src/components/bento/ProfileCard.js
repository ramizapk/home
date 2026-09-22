'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MapPin, ShieldCheck, GitBranch, Link2, Mail } from 'lucide-react';

export default function ProfileCard() {
  const t = useTranslations('profile');
  const tMag = useTranslations('magazine');

  return (
    <div className="bento-card flex flex-col items-center justify-between text-center relative group bg-gradient-to-b from-white to-cream/30">
      {/* Top Tag & Verified Stamp */}
      <div className="w-full flex items-center justify-between pb-2.5 border-b border-sand-light/80 font-mono text-[11px]">
        <div className="flex items-center gap-1.5 text-sage font-bold">
          <ShieldCheck size={14} className="text-sage" />
          <span>VERIFIED ENGINEER</span>
        </div>
        <span className="text-charcoal/50 font-semibold tracking-wider">
          {tMag('vol')}
        </span>
      </div>

      {/* Portrait Image with Editorial Ring */}
      <div className="relative my-3 sm:my-4">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1.5 bg-gradient-to-tr from-terracotta via-amber to-sage shadow-lg group-hover:scale-103 transition-transform duration-500">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-cream-dark">
            <Image
              src="/images/profile.jpg"
              alt="Ramiz — Software Engineer"
              width={160}
              height={160}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* Live Availability Pill */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md border border-sage/40 rounded-full shadow-md whitespace-nowrap">
          <span className="w-2 h-2 bg-sage rounded-full animate-[pulse-dot_1.8s_ease-in-out_infinite]" />
          <span className="text-[11px] font-bold text-sage-dark font-mono">
            {t('available')}
          </span>
        </div>
      </div>

      {/* Profile Details */}
      <div className="w-full pt-1">
        <h3
          className="text-base sm:text-lg md:text-xl font-black tracking-tight text-navy"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('name')}
        </h3>
        <p className="text-xs font-mono font-bold text-terracotta tracking-wider uppercase mb-1">
          {t('title')}
        </p>

        <div className="flex items-center justify-center gap-1.5 text-xs text-charcoal/70 font-medium">
          <MapPin size={12} className="text-terracotta" />
          <span>{t('location')}</span>
        </div>

        {/* Quick Social Micro-Bar */}
        <div className="mt-2.5 pt-2.5 border-t border-sand-light/80 flex items-center justify-center gap-2">
          <a
            href="https://github.com/ramizapk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-cream hover:bg-navy hover:text-white text-charcoal/70 transition-all duration-300"
            aria-label="GitHub"
          >
            <GitBranch size={13} />
          </a>
          <a
            href="https://www.linkedin.com/in/ramiz-apk/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-cream hover:bg-[#0A66C2] hover:text-white text-charcoal/70 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Link2 size={13} />
          </a>
          <a
            href="mailto:ramiz.apk7@gmail.com"
            className="p-2 rounded-lg bg-cream hover:bg-terracotta hover:text-white text-charcoal/70 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

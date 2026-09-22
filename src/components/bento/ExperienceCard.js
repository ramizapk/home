'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ExperienceCard() {
  const t = useTranslations('experience');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const items = [
    {
      role: t('items.0.role'),
      company: t('items.0.company'),
      period: t('items.0.period'),
      description: t('items.0.description'),
      impact: isAr ? 'منصات مؤسسية متعددة' : 'Multiple Enterprise Platforms',
      skills: ['Next.js', 'Laravel', 'C#', 'MySQL']
    },
    {
      role: t('items.1.role'),
      company: t('items.1.company'),
      period: t('items.1.period'),
      description: t('items.1.description'),
      impact: isAr ? 'حلول فل ستاك متكاملة' : 'End-to-End Full-Stack Solutions',
      skills: ['Laravel', 'React', 'REST APIs', 'MySQL']
    },
    {
      role: t('items.2.role'),
      company: t('items.2.company'),
      period: t('items.2.period'),
      description: t('items.2.description'),
      impact: isAr ? 'أنظمة تشغيلية حيوية' : 'Mission-Critical Systems',
      skills: ['System Arch.', 'C# / .NET', 'SQL']
    },
  ];

  return (
    <div id="experience" className="bento-card flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-sand-light/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-terracotta-bg text-terracotta flex items-center justify-center">
              <Briefcase size={15} />
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-navy">
                {t('title')}
              </p>
              <p className="text-[11px] text-charcoal/60 font-medium">
                {isAr ? 'القيادة الهندسية والأثر' : 'Engineering Leadership & Impact'}
              </p>
            </div>
          </div>

          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-cream border border-sand text-charcoal/80 font-semibold">
            CHRONOLOGY
          </span>
        </div>

        {/* Timeline Items */}
        <div className="relative ps-2">
          {/* Timeline continuous vertical line */}
          <div className="absolute top-3 bottom-3 start-[11px] w-[2px] bg-gradient-to-b from-sage via-sand to-sand-light" />

          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="relative ps-7 group">
                {/* Timeline Node */}
                <div
                  className={`absolute start-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    i === 0
                      ? 'bg-sage border-sage text-white shadow-md shadow-sage/30'
                      : 'bg-white border-sand group-hover:border-terracotta text-charcoal/40 group-hover:text-terracotta'
                  }`}
                >
                  <span className="text-[9px] font-mono font-bold">0{i + 1}</span>
                </div>

                {/* Content */}
                <div className="p-3 rounded-xl bg-cream/40 border border-sand-light hover:border-sand hover:bg-cream/80 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                    <div>
                      <h4
                        className="text-sm font-bold text-navy group-hover:text-terracotta transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.role}
                      </h4>
                      <p className="text-xs font-mono font-bold text-terracotta">
                        {item.company}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-charcoal/70 bg-white px-2 py-0.5 rounded-md border border-sand-light">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal/80 leading-relaxed mb-2 font-medium">
                    {item.description}
                  </p>

                  {/* Impact Tag & Skills */}
                  <div className="flex items-center justify-between gap-2 flex-wrap pt-2 border-t border-sand-light/60">
                    <span className="text-[10px] font-mono font-bold text-sage flex items-center gap-1">
                      <CheckCircle2 size={11} />
                      {item.impact}
                    </span>

                    <div className="flex items-center gap-1">
                      {item.skills.map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] font-mono px-1.5 py-0.5 bg-white rounded border border-sand-light text-charcoal/70"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 mt-3 border-t border-sand-light/80 flex items-center justify-between text-[11px] font-mono text-charcoal/60">
        <span>{isAr ? 'سجل حافل بالإنجازات' : 'PROVEN TRACK RECORD'}</span>
        <span>{isAr ? 'مؤسسي وعالي النمو' : 'ENTERPRISE & HIGH-GROWTH'}</span>
      </div>
    </div>
  );
}


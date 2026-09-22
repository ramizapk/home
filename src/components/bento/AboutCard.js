'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Code2, Sparkles, Zap, Shield, Layers, Workflow } from 'lucide-react';

export default function AboutCard() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  const pillars = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      titleAr: 'هندسة معمارية نظيفة',
      desc: 'Modular, layered codebases built on SOLID principles — designed to scale without technical debt.',
      descAr: 'كود مُهيكل بطبقات واضحة مبني على مبادئ SOLID — مصمم للتوسع بدون ديون تقنية.',
      color: 'text-terracotta bg-terracotta-bg'
    },
    {
      icon: Zap,
      title: 'Performance-Driven',
      titleAr: 'أداء بلا تنازلات',
      desc: 'Optimized queries, smart caching strategies, and sub-second API responses — even under heavy load.',
      descAr: 'استعلامات محسّنة وتخزين مؤقت ذكي واستجابة فورية — حتى تحت الضغط العالي.',
      color: 'text-amber bg-amber/10'
    },
    {
      icon: Layers,
      title: 'Full-Stack Mastery',
      titleAr: 'إتقان شامل للطبقات',
      desc: 'Frontend to backend to database — I own every layer of the stack and deliver end-to-end solutions.',
      descAr: 'من الواجهات إلى السيرفر إلى قواعد البيانات — أتقن كل طبقة وأسلّم حلولاً متكاملة.',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Workflow,
      title: 'API-First Engineering',
      titleAr: 'هندسة APIs احترافية',
      desc: 'RESTful APIs with clean contracts, versioning, authentication, and documentation built from day one.',
      descAr: 'واجهات RESTful بعقود واضحة مع إدارة الإصدارات والمصادقة والتوثيق من اليوم الأول.',
      color: 'text-cyan-600 bg-cyan-50'
    },
    {
      icon: Shield,
      title: 'Production-Grade Quality',
      titleAr: 'جودة على مستوى الإنتاج',
      desc: 'Secure, tested, and battle-hardened systems — built for real users, real traffic, and zero downtime.',
      descAr: 'أنظمة آمنة ومُختبرة وصلبة — مبنية لمستخدمين حقيقيين وحركة مرور فعلية بدون توقف.',
      color: 'text-sage bg-sage-bg'
    }
  ];

  return (
    <div id="about" className="bento-card flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-sand-light/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-navy text-white flex items-center justify-center">
              <Sparkles size={14} />
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-navy">
                {isAr ? 'الفلسفة الهندسية' : 'ENGINEERING PHILOSOPHY'}
              </p>
              <p className="text-[11px] text-charcoal/60 font-medium">
                {isAr ? 'كيف أتعامل مع كل مشروع' : 'How I approach every project'}
              </p>
            </div>
          </div>

          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-cream border border-sand text-charcoal/80 font-semibold">
            MANIFESTO
          </span>
        </div>

        {/* Pillars List */}
        <div className="space-y-2.5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-white border border-sand-light hover:border-terracotta/30 hover:shadow-xs transition-all duration-300 flex items-start gap-3 group"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${pillar.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-navy group-hover:text-terracotta transition-colors">
                    {isAr ? pillar.titleAr : pillar.title}
                  </h4>
                  <p className="text-[11px] text-charcoal/70 leading-relaxed font-medium">
                    {isAr ? pillar.descAr : pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 mt-3 border-t border-sand-light/80 flex items-center justify-between text-[11px] font-mono text-charcoal/60">
        <span className="text-sage font-bold">{isAr ? 'مُثبت في الإنتاج' : 'PRODUCTION PROVEN'}</span>
        <span>{isAr ? 'مصمم للتوسع' : 'SCALABLE BY DESIGN'}</span>
      </div>
    </div>
  );
}

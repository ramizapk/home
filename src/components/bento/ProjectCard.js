'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, TrendingUp, Laptop } from 'lucide-react';

export default function ProjectCard() {
  const t = useTranslations('projects');
  const [active, setActive] = useState(0);

  const items = [
    {
      title: t('items.0.title'),
      subtitle: t('items.0.subtitle'),
      description: t('items.0.description'),
      tech: ['Next.js', 'Laravel', 'Tailwind CSS', 'MySQL', 'REST APIs'],
      metric: t('items.0.metric'),
      image: '/images/project-washly.jpg',
      url: 'https://washly.salasah.sa/',
    },
    {
      title: t('items.1.title'),
      subtitle: t('items.1.subtitle'),
      description: t('items.1.description'),
      tech: ['Next.js', 'Laravel', 'POS System', 'MySQL', 'REST APIs'],
      metric: t('items.1.metric'),
      image: '/images/project-makhzoon.jpg',
      url: 'https://makhzoon.salasah.sa/',
    },
    {
      title: t('items.2.title'),
      subtitle: t('items.2.subtitle'),
      description: t('items.2.description'),
      tech: ['Laravel', 'RESTful APIs', 'MySQL', 'Real-time Tracking'],
      metric: t('items.2.metric'),
      image: '/images/project-had.jpg',
      url: 'https://play.google.com/store/apps/details?id=com.had.customer&hl=en_US',
    },
    {
      title: t('items.3.title'),
      subtitle: t('items.3.subtitle'),
      description: t('items.3.description'),
      tech: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
      metric: t('items.3.metric'),
      image: '/images/project-connecthub.jpg',
      url: 'https://ejar.salasah.sa/',
    },
    {
      title: t('items.4.title'),
      subtitle: t('items.4.subtitle'),
      description: t('items.4.description'),
      tech: ['Next.js', 'React', 'Laravel', 'MySQL'],
      metric: t('items.4.metric'),
      image: '/images/project-taskflow.jpg',
      url: 'https://salasahgo.com/',
    },
    {
      title: t('items.5.title'),
      subtitle: t('items.5.subtitle'),
      description: t('items.5.description'),
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Figma UI/UX'],
      metric: t('items.5.metric'),
      image: '/images/project-ecotrack.jpg',
      url: 'https://talio.live/',
    },
  ];

  const project = items[active];

  const next = () => setActive((prev) => (prev + 1) % items.length);
  const prev = () => setActive((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div id="projects" className="bento-card flex flex-col justify-between overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-sand-light/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-navy text-white flex items-center justify-center">
            <Laptop size={15} />
          </div>
          <div>
            <p className="text-xs font-mono font-bold tracking-wider uppercase text-navy">
              {t('title')}
            </p>
            <p className="text-[11px] text-charcoal/60 font-medium">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Carousel controls & tabs */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 bg-cream p-1 rounded-lg border border-sand-light">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                  active === i
                    ? 'bg-white text-navy shadow-xs border border-sand/50'
                    : 'text-charcoal/60 hover:text-navy'
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={prev}
              className="p-1.5 rounded-lg border border-sand hover:border-terracotta hover:bg-terracotta/10 text-navy transition-all cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="p-1.5 rounded-lg border border-sand hover:border-terracotta hover:bg-terracotta/10 text-navy transition-all cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Project View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center my-auto">
        {/* Mockup Frame with Image */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl overflow-hidden border border-sand shadow-lg bg-navy/5 group relative">
            {/* Mockup Top Window Bar */}
            <div className="bg-[#1e2433] px-3 py-2 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block opacity-80" />
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-0.5 bg-black/40 hover:bg-black/60 rounded-full font-mono text-[10px] text-white/70 hover:text-white tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>{project.url.replace('https://', '')}</span>
                <ExternalLink size={10} />
              </a>
              <div className="w-8" />
            </div>

            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-cream-dark">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-5 flex flex-col justify-between py-1">
          <div>
            {/* Impact Metric Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-bg border border-terracotta/25 text-terracotta text-xs font-bold font-mono mb-2">
              <TrendingUp size={13} />
              <span>{project.metric}</span>
            </div>

            <p className="text-xs font-mono font-bold text-charcoal/60 tracking-wider uppercase mb-1">
              {project.subtitle}
            </p>

            <h3
              className="text-2xl md:text-3xl font-black text-navy mb-2 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {project.title}
            </h3>

            <div className="mag-divider mb-3" />

            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-4 font-medium">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-cream rounded-md border border-sand text-charcoal/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-navy hover:bg-terracotta text-white text-xs font-bold rounded-[var(--radius-button)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>{t('explore')}</span>
                <ExternalLink size={13} />
              </a>

              <span className="text-xs font-mono text-charcoal/60">
                PROJ // 0{active + 1} OF 0{items.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Thumbnail Bar */}
      <div className="pt-3 mt-4 border-t border-sand-light/80 flex items-center justify-between text-xs text-charcoal/70 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-max">
          {items.map((it, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`flex items-center gap-1.5 text-xs font-mono transition-colors cursor-pointer ${
                active === idx ? 'text-terracotta font-bold' : 'text-charcoal/60 hover:text-navy'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${active === idx ? 'bg-terracotta' : 'bg-sand'}`} />
              <span>{it.title.replace(/\(.*?\)/, '')}</span>
            </button>
          ))}
        </div>

        <span className="font-mono text-[11px] text-charcoal/50 min-w-max ms-4">
          PROD-READY ARCHITECTURE
        </span>
      </div>
    </div>
  );
}

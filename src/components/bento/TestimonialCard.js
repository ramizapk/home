'use client';

import { useTranslations } from 'next-intl';
import { Star, MessageSquareQuote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialCard() {
  const t = useTranslations('testimonials');
  const [active, setActive] = useState(0);

  const items = [
    {
      quote: t('items.0.quote'),
      name: t('items.0.name'),
      role: t('items.0.role'),
      avatar: t('items.0.avatar'),
      project: 'EcoTrack Analytics Platform'
    },
    {
      quote: t('items.1.quote'),
      name: t('items.1.name'),
      role: t('items.1.role'),
      avatar: t('items.1.avatar'),
      project: 'CoreLogic Data Engine'
    },
  ];

  const testimonial = items[active];

  return (
    <div className="bento-card flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-sand-light/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sage-bg text-sage flex items-center justify-center">
              <MessageSquareQuote size={15} />
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-navy">
                {t('title')}
              </p>
              <p className="text-[11px] text-charcoal/60 font-medium">
                Verified Client Endorsement
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-amber text-amber" />
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-xs sm:text-sm text-charcoal/90 leading-relaxed italic mb-4 font-medium min-h-[64px]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      {/* Author & Controls */}
      <div className="pt-3 border-t border-sand-light/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-navy to-charcoal flex items-center justify-center text-white text-xs font-bold font-mono border-2 border-white shadow-sm">
            {testimonial.avatar}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-xs sm:text-sm font-bold text-navy">{testimonial.name}</p>
              <CheckCircle size={12} className="text-sage" />
            </div>
            <p className="text-[11px] text-charcoal/60 font-mono font-medium">{testimonial.role}</p>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-1">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? 'bg-terracotta w-6' : 'bg-sand hover:bg-sand-dark w-2'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

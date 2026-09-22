'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ compact = false }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale) => {
    if (newLocale === locale || isPending) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-cream-dark/60 border border-sand shadow-xs backdrop-blur-md transition-all ${
        isPending ? 'opacity-70 pointer-events-none' : ''
      }`}
      role="group"
      aria-label="Language selector"
    >
      <div className="flex items-center pl-2 pr-1 text-charcoal/60">
        <Globe size={14} className={isPending ? 'animate-spin' : ''} />
      </div>

      {/* English button */}
      <button
        type="button"
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          locale === 'en'
            ? 'bg-navy text-white shadow-sm scale-100'
            : 'text-charcoal/80 hover:text-navy hover:bg-sand/40'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>

      {/* Arabic button */}
      <button
        type="button"
        onClick={() => switchLocale('ar')}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 font-arabic ${
          locale === 'ar'
            ? 'bg-navy text-white shadow-sm scale-100'
            : 'text-charcoal/80 hover:text-navy hover:bg-sand/40'
        }`}
        aria-pressed={locale === 'ar'}
      >
        عربي
      </button>
    </div>
  );
}

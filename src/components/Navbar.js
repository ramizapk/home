'use client';

import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/80 backdrop-blur-xl shadow-sm border-b border-sand-light'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-navy hover:text-sage transition-colors duration-300"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          RAMIZ<span className="text-terracotta">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-charcoal hover:text-navy transition-colors duration-300 relative group"
            >
              {t(item.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile quick switcher & toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-sand/30 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-sand-light px-6 py-6 space-y-4 animate-[fadeInUp_0.3s_ease-out]">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-charcoal hover:text-navy transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
          <div className="pt-4 border-t border-sand">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}

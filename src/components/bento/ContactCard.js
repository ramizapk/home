'use client';

import { useTranslations } from 'next-intl';
import { Send, Mail, Link2, GitBranch, Copy, Check, Sparkles, MessageCircle, ArrowUpRight, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactCard() {
  const t = useTranslations('contact');
  const [inquiryType, setInquiryType] = useState('fulltime');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const formRef = useRef();

  const inquiryTypes = [
    { id: 'fulltime', label: 'Full-Time Role' },
    { id: 'freelance', label: 'MVP / Project' },
    { id: 'advisory', label: 'Tech Advisory' },
    { id: 'general', label: 'Say Hello' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          inquiry_type: inquiryTypes.find(t => t.id === inquiryType)?.label || inquiryType,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('ramiz.apk7@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div id="contact" className="bento-card overflow-hidden relative bg-gradient-to-br from-white via-cream/30 to-warm-white">
      {/* Decorative ambient background safely wrapped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-terracotta/8 via-amber/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column — Editorial Heading & Info */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-terracotta font-bold tracking-wider uppercase mb-2">
              <Sparkles size={14} />
              <span>COMMUNICATION TERMINAL</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-[0.98] tracking-tight mb-2.5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('title')}
              <br />
              <span className="text-terracotta">{t('titleHighlight')}.</span>
            </h2>

            <div className="mag-divider my-3" />

            <p className="text-xs sm:text-sm md:text-base text-charcoal/80 leading-relaxed mb-4 max-w-lg font-medium">
              {t('subtitle')}
            </p>
          </div>

          {/* Direct channels & Quick email copy */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sand-light shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-terracotta-bg flex items-center justify-center text-terracotta">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="text-[9px] font-mono font-bold text-charcoal/50 uppercase">DIRECT INBOX</p>
                  <p className="text-xs sm:text-sm font-bold text-navy">{t('info.email')}</p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1 bg-cream hover:bg-cream-dark text-navy rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer border border-sand"
              >
                {copiedEmail ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/967777366265"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sand-light hover:border-[#25D366]/40 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle size={14} />
                  </div>
                  <span className="text-xs font-bold text-navy">WhatsApp</span>
                </div>
                <ArrowUpRight size={12} className="text-charcoal/40 group-hover:text-[#25D366] transition-colors" />
              </a>

              <a
                href="https://github.com/ramizapk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sand-light hover:border-navy/40 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-navy/10 flex items-center justify-center text-navy">
                    <GitBranch size={14} />
                  </div>
                  <span className="text-xs font-bold text-navy">GitHub</span>
                </div>
                <ArrowUpRight size={12} className="text-charcoal/40 group-hover:text-navy transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/ramiz-apk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sand-light hover:border-terracotta/40 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-terracotta-bg flex items-center justify-center text-terracotta">
                    <Link2 size={14} />
                  </div>
                  <span className="text-xs font-bold text-navy">LinkedIn</span>
                </div>
                <ArrowUpRight size={12} className="text-charcoal/40 group-hover:text-terracotta transition-colors" />
              </a>

              <a
                href="tel:+967777366265"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-sand-light hover:border-sage/40 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sage-bg flex items-center justify-center text-sage">
                    <Mail size={14} />
                  </div>
                  <span className="text-xs font-bold text-navy">+967 777366265</span>
                </div>
                <ArrowUpRight size={12} className="text-charcoal/40 group-hover:text-sage transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column — Interactive Form */}
        <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-2xl border border-sand shadow-sm">
          <p className="text-xs font-mono font-bold text-charcoal/60 uppercase tracking-wider mb-2.5">
            Select Inquiry Intent:
          </p>

          {/* Project Type Selectors */}
          <div className="grid grid-cols-2 gap-2 mb-3.5">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setInquiryType(type.id)}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer border text-center ${
                  inquiryType === type.id
                    ? 'bg-navy text-white border-navy shadow-xs'
                    : 'bg-cream/60 text-charcoal/70 border-sand-light hover:border-sand'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div>
              <input
                type="text"
                required
                placeholder={t('form.name')}
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-cream/40 text-navy placeholder:text-charcoal/40 text-xs sm:text-sm focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder={t('form.email')}
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-cream/40 text-navy placeholder:text-charcoal/40 text-xs sm:text-sm focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 transition-all"
              />
            </div>

            <div>
              <textarea
                rows={3}
                required
                placeholder={t('form.message')}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-sand bg-cream/40 text-navy placeholder:text-charcoal/40 text-xs sm:text-sm focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-md cursor-pointer ${
                submitted
                  ? 'bg-sage text-white'
                  : error
                  ? 'bg-red-500 text-white'
                  : sending
                  ? 'bg-navy/70 text-white cursor-wait'
                  : 'bg-terracotta hover:bg-terracotta-dark text-white hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {submitted ? (
                <>
                  <Check size={15} />
                  <span>Message Sent Successfully!</span>
                </>
              ) : error ? (
                <>
                  <span>Failed to send — please try again</span>
                </>
              ) : sending ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>{t('form.send')}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { GitBranch, Link2, MessageCircle, Mail, ArrowUpRight, Share2 } from 'lucide-react';

const socials = [
  { key: 'github', label: 'GitHub', handle: 'github.com/ramizapk', icon: GitBranch, href: 'https://github.com/ramizapk' },
  { key: 'linkedin', label: 'LinkedIn', handle: 'in/ramiz-apk', icon: Link2, href: 'https://www.linkedin.com/in/ramiz-apk/' },
  { key: 'twitter', label: 'WhatsApp', handle: '+967 777366265', icon: MessageCircle, href: 'https://wa.me/967777366265' },
  { key: 'email', label: 'Email', handle: 'ramiz.apk7@gmail.com', icon: Mail, href: 'mailto:ramiz.apk7@gmail.com' },
];

export default function SocialCard() {
  const t = useTranslations('social');

  return (
    <div className="bento-card card-terracotta flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/20">
        <div className="flex items-center gap-1.5 font-mono text-xs text-white font-bold uppercase tracking-wider">
          <Share2 size={14} className="text-white" />
          <span>NETWORKS & CHANNELS</span>
        </div>
        <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded-full text-white">
          ACTIVE
        </span>
      </div>

      {/* Socials Grid */}
      <div className="grid grid-cols-2 gap-2 my-auto">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/25 border border-white/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1">
                <Icon size={16} className="text-white group-hover:scale-110 transition-transform" />
                <ArrowUpRight size={12} className="text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">
                  {t(social.key)}
                </p>
                <p className="text-[10px] font-mono text-white/70 truncate">
                  {social.handle}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Bottom note */}
      <div className="pt-2 mt-2 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-white/80">
        <span>DIRECT CHANNELS</span>
        <span>FAST RESPONSE (&lt; 24h)</span>
      </div>
    </div>
  );
}

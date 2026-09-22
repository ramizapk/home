'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Layers, Sparkles, Code2, Server, Cloud, Cpu } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'Next.js', level: '96%', icon: '▲', color: '#000000' },
      { name: 'React', level: '95%', icon: '⚛️', color: '#61DAFB' },
      { name: 'Vue.js', level: '90%', icon: '🟢', color: '#42B883' },
      { name: 'Tailwind CSS', level: '96%', icon: '🎨', color: '#38BDF8' },
    ]
  },
  {
    id: 'backend',
    label: 'Backend & DB',
    icon: Server,
    skills: [
      { name: 'Laravel', level: '96%', icon: '🔴', color: '#FF2D20' },
      { name: 'PHP', level: '92%', icon: '🐘', color: '#777BB4' },
      { name: 'C# / .NET', level: '88%', icon: '🔷', color: '#239120' },
      { name: 'MySQL & SQL', level: '92%', icon: '🐬', color: '#4479A1' },
    ]
  },
  {
    id: 'arch',
    label: 'Architecture & Tools',
    icon: Cloud,
    skills: [
      { name: 'System Arch.', level: '94%', icon: '🏛️', color: '#2D7A58' },
      { name: 'RESTful APIs', level: '96%', icon: '⚡', color: '#DE5D35' },
      { name: 'Git & GitHub', level: '95%', icon: '⎇', color: '#F05032' },
      { name: 'Figma (UI/UX)', level: '88%', icon: '🎯', color: '#F24E1E' },
    ]
  }
];

export default function SkillsCard() {
  const t = useTranslations('skills');
  const [activeTab, setActiveTab] = useState('all');

  const displaySkills = activeTab === 'all'
    ? skillCategories.flatMap(c => c.skills)
    : skillCategories.find(c => c.id === activeTab)?.skills || [];

  return (
    <div id="skills" className="bento-card flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-sand-light/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-terracotta-bg text-terracotta flex items-center justify-center">
              <Layers size={15} />
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

          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-cream border border-sand text-charcoal/80 font-semibold">
            12 CORE TECHNOLOGIES
          </span>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 mb-3 bg-cream/70 p-1 rounded-xl border border-sand-light">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white text-navy shadow-xs border border-sand/50'
                : 'text-charcoal/70 hover:text-navy'
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-white text-navy shadow-xs border border-sand/50'
                  : 'text-charcoal/70 hover:text-navy'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {displaySkills.map((skill, i) => (
            <div
              key={i}
              className="p-2.5 rounded-xl bg-white border border-sand-light hover:border-terracotta/40 hover:shadow-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="text-base group-hover:scale-115 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="text-[10px] font-mono font-bold text-sage">
                  {skill.level}
                </span>
              </div>
              <span className="text-xs font-bold text-navy group-hover:text-terracotta transition-colors truncate">
                {skill.name}
              </span>
              {/* Micro progress bar */}
              <div className="w-full h-1 bg-cream-dark rounded-full mt-1.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sage to-terracotta rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <div className="pt-3 mt-3 border-t border-sand-light/80 flex items-center justify-between text-[11px] font-mono text-charcoal/70">
        <span className="flex items-center gap-1 text-sage font-semibold">
          <Cpu size={12} />
          Modern Toolchain
        </span>
        <span>Clean Architecture • TDD</span>
      </div>
    </div>
  );
}

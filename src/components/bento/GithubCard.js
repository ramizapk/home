'use client';

import { useTranslations } from 'next-intl';
import { GitBranch, Flame, GitCommit, Star, ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function GithubCard() {
  const t = useTranslations('github');
  const [hoveredCell, setHoveredCell] = useState(null);

  // Deterministic heatmap data — uses a seeded pattern to avoid hydration mismatch
  const heatmapData = useMemo(() => {
    const cols = 26;
    const rows = 7;
    const grid = [];
    // Simple deterministic hash function to replace Math.random()
    const seed = (c, r) => {
      const x = Math.sin(c * 127.1 + r * 311.7) * 43758.5453;
      return x - Math.floor(x); // Returns 0..1 deterministically
    };
    for (let c = 0; c < cols; c++) {
      const week = [];
      for (let r = 0; r < rows; r++) {
        const rand = seed(c, r);
        let level = 0;
        let count = 0;
        if (rand > 0.82) {
          level = 4;
          count = Math.floor(seed(c + 50, r + 50) * 8) + 9;
        } else if (rand > 0.6) {
          level = 3;
          count = Math.floor(seed(c + 100, r + 100) * 5) + 4;
        } else if (rand > 0.35) {
          level = 2;
          count = Math.floor(seed(c + 150, r + 150) * 3) + 2;
        } else if (rand > 0.15) {
          level = 1;
          count = 1;
        }
        week.push({ level, count, day: r, week: c });
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 4: return 'bg-[#196127] border-[#196127]';
      case 3: return 'bg-[#239a3b] border-[#239a3b]';
      case 2: return 'bg-[#7bc96f] border-[#7bc96f]';
      case 1: return 'bg-[#c6e48b] border-[#c6e48b]';
      default: return 'bg-[#ebedf0] border-[#e1e4e8]';
    }
  };

  return (
    <div className="bento-card flex flex-col justify-between overflow-hidden">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-navy flex items-center justify-center text-white">
              <GitBranch size={14} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-navy font-mono">
                {t('title')}
              </p>
              <p className="text-[11px] text-charcoal/70 font-medium">
                {t('contributions')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber/10 border border-amber/25 rounded-full text-amber font-mono text-[11px] font-bold">
            <Flame size={13} className="text-amber animate-pulse" />
            <span>{t('streak')}</span>
          </div>
        </div>

        {/* Contribution Heatmap */}
        <div className="py-2.5 overflow-x-auto">
          <div className="inline-flex gap-1 min-w-full justify-between">
            {heatmapData.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((cell, dIdx) => (
                  <div
                    key={dIdx}
                    onMouseEnter={() => setHoveredCell(cell)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`w-[11px] h-[11px] rounded-[2.5px] border transition-transform duration-200 hover:scale-135 cursor-pointer ${getLevelColor(cell.level)}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Tooltip bar */}
          <div className="h-5 flex items-center justify-between mt-2 text-[10px] text-charcoal/60 font-mono">
            <div>
              {hoveredCell ? (
                <span className="text-navy font-bold">
                  {hoveredCell.count} commits on this day
                </span>
              ) : (
                <span>{t('active')}</span>
              )}
            </div>

            <div className="flex items-center gap-1">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#ebedf0] inline-block" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#c6e48b] inline-block" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#7bc96f] inline-block" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#239a3b] inline-block" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#196127] inline-block" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom repo stats strip */}
      <div className="pt-2.5 border-t border-sand-light flex items-center justify-between text-xs text-charcoal/80 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-semibold text-navy">
            <GitCommit size={13} className="text-sage" />
            {t('repoCount')}
          </span>
          <span className="flex items-center gap-1 font-medium text-charcoal/70">
            <Star size={12} className="text-amber fill-amber" />
            320+ Stars
          </span>
        </div>

        <a
          href="https://github.com/ramizapk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-terracotta hover:text-terracotta-dark font-semibold text-[11px] transition-colors"
        >
          <span>github.com/ramizapk</span>
          <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}

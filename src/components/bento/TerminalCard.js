'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Copy, Check, Play, Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalCard() {
  const t = useTranslations('terminal');
  const [copied, setCopied] = useState(false);
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState([]);

  const codeSnippet = `// engineer.config.ts
export const Engineer = {
  name: "Ramiz Ali Mohammed",
  role: "Full-Stack Software Engineer",
  experience: "4+ Years | 6 Production Platforms",
  education: "B.Sc. CS & Engineering — Aden University",
  stack: {
    frontend: ["Next.js", "React", "Vue.js", "Tailwind CSS"],
    backend: ["Laravel", "PHP", "C#", "RESTful APIs"],
    database: ["MySQL", "Relational DB Architecture"],
    tools: ["Git", "GitHub", "Figma", "System Design"]
  },
  approach: ["Scalable Architecture", "Clean Code", "Rapid Delivery"],
  philosophy: "Ship fast, scale smart, never stop learning.",
  status: "OPEN_TO_OPPORTUNITIES"
} as const;`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runDiagnostics = () => {
    setRunning(true);
    setLogs([]);
    const steps = [
      '▶ Initializing production diagnostics...',
      '✔ Next.js & Laravel: Active & healthy (200 OK)',
      '✔ MySQL: Schema optimized, 0 slow queries detected',
      '✔ 6 platforms verified: All live & responding (99.9% uptime)',
      '🚀 Verdict: All production systems operational & scalable'
    ];
    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) setRunning(false);
      }, (index + 1) * 350);
    });
  };

  return (
    <div className="bento-card card-navy flex flex-col justify-between overflow-hidden relative">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block opacity-80 hover:opacity-100 cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block opacity-80 hover:opacity-100 cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block opacity-80 hover:opacity-100 cursor-pointer" />
          </div>
          <div className="flex items-center gap-1.5 ms-3 px-2.5 py-0.5 bg-white/10 rounded-md font-mono text-[11px] text-white/80">
            <TerminalIcon size={12} className="text-terracotta-light" />
            <span>{t('file')}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={runDiagnostics}
            disabled={running}
            className="flex items-center gap-1 px-2.5 py-1 bg-sage/30 hover:bg-sage/50 text-white rounded-md font-mono text-[11px] border border-sage/40 transition-all cursor-pointer"
            title="Execute test suite"
          >
            <Play size={10} className={running ? 'animate-spin' : ''} />
            <span className="hidden sm:inline">{t('run')}</span>
          </button>
          <button
            onClick={copyCode}
            className="p-1.5 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-md transition-colors cursor-pointer"
            title={t('copy')}
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="font-mono text-xs text-white/90 overflow-x-auto py-2 leading-relaxed selection:bg-terracotta selection:text-white">
        <div>
          <span className="text-emerald-400 font-semibold">export const </span>
          <span className="text-amber-300 font-bold">Engineer </span>
          <span className="text-white">= &#123;</span>
        </div>
        <div className="ps-4">
          <span className="text-cyan-300">name</span>: <span className="text-terracotta-light">&quot;Ramiz Ali Mohammed&quot;</span>,
        </div>
        <div className="ps-4">
          <span className="text-cyan-300">role</span>: <span className="text-terracotta-light">&quot;Full-Stack Software Engineer (4+ Yrs)&quot;</span>,
        </div>
        <div className="ps-4">
          <span className="text-cyan-300">stack</span>: &#123;
        </div>
        <div className="ps-8">
          <span className="text-purple-300">frontend</span>: [<span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Vue.js&quot;</span>, <span className="text-emerald-300">&quot;Tailwind&quot;</span>],
        </div>
        <div className="ps-8">
          <span className="text-purple-300">backend</span>: [<span className="text-emerald-300">&quot;Laravel&quot;</span>, <span className="text-emerald-300">&quot;PHP&quot;</span>, <span className="text-emerald-300">&quot;C#&quot;</span>, <span className="text-emerald-300">&quot;MySQL&quot;</span>]
        </div>
        <div className="ps-4">&#125;,</div>
        <div className="ps-4">
          <span className="text-cyan-300">approach</span>: [<span className="text-amber-300">&quot;Scalable Architecture&quot;</span>, <span className="text-amber-300">&quot;Clean Code&quot;</span>, <span className="text-amber-300">&quot;Rapid Delivery&quot;</span>],
        </div>
        <div className="ps-4">
          <span className="text-cyan-300">philosophy</span>: <span className="text-terracotta-light">&quot;Ship fast, scale smart, never stop learning.&quot;</span>
        </div>
        <div>&#125; <span className="text-emerald-400">as const</span>;</div>
      </div>

      {/* Interactive Terminal Output Drawer */}
      {logs.length > 0 && (
        <div className="mt-3 p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] space-y-1 text-emerald-400 animate-[fadeInUp_0.2s_ease-out]">
          {logs.map((log, i) => (
            <div key={i} className="leading-tight">{log}</div>
          ))}
        </div>
      )}

      {/* Bottom status bar */}
      <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t('status')}</span>
        </div>
        <span className="hidden sm:inline text-white/40">UTF-8 // TypeScript</span>
      </div>
    </div>
  );
}

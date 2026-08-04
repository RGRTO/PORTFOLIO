import React from 'react';
import { HiTrophy, HiSparkles, HiCheckBadge, HiShieldCheck } from 'react-icons/hi2';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Label */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
          <HiTrophy className="w-3.5 h-3.5" />
          <span>06. MILESTONES & RECOGNITION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Key Achievements & <span className="gradient-text-emerald">Highlights</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <HiTrophy className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                {item.institution}
              </div>
              <h3 className="text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800/80 flex items-center gap-2 text-xs font-mono text-gray-400">
              <HiCheckBadge className="w-4 h-4 text-emerald-400" />
              <span>Verified Milestone</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

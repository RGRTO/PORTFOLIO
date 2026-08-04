import React, { useState } from 'react';
import { 
  HiBriefcase, 
  HiCalendar, 
  HiLocationMarker, 
  HiCheckCircle, 
  HiSparkles,
  HiCode
} from 'react-icons/hi';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Label */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          <HiBriefcase className="w-3.5 h-3.5" />
          <span>02. EXPERIENCE & IMPACT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Proven Industry & <span className="gradient-text-cyan">Development Journey</span>
        </h2>
      </div>

      {/* Experience Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Tabs */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0">
          {experiences.map((exp) => {
            const isActive = activeTab === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                  isActive 
                    ? 'bg-gradient-to-r from-cyan-950/60 to-indigo-950/40 border-cyan-500/50 shadow-lg shadow-cyan-950/40 text-white' 
                    : 'glass-panel border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/10'
                }`}
              >
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    {exp.type}
                  </div>
                  <div className="text-base font-bold font-display text-white">
                    {exp.company}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {exp.role}
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-cyan-400 shadow-glow' : 'bg-gray-700'}`} />
              </button>
            );
          })}
        </div>

        {/* Experience Detail Panel */}
        <div className="lg:col-span-8">
          {experiences.map((exp) => {
            if (exp.id !== activeTab) return null;
            return (
              <div 
                key={exp.id} 
                className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden animate-in fade-in duration-300"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-bl-full blur-3xl pointer-events-none" />

                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-mono mt-2">
                      <div className="flex items-center gap-1.5">
                        <HiCalendar className="w-4 h-4 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <HiLocationMarker className="w-4 h-4 text-rose-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {exp.type}
                  </span>
                </div>

                {/* Overview Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    Key Deliverables & Responsibilities:
                  </div>
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <HiCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                    Technologies & Methodologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono glass-pill text-cyan-300 border border-cyan-500/20"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { 
  HiAcademicCap, 
  HiCode, 
  HiShieldCheck, 
  HiCpuChip, 
  HiSquare3Stack3D, 
  HiCheckCircle,
  HiLightBulb
} from 'react-icons/hi2';
import { FaPython, FaServer } from 'react-icons/fa';
import { aboutMe, personalInfo } from '../data/portfolioData';

export default function About() {
  const getPillarIcon = (iconName) => {
    switch(iconName) {
      case 'python': return <FaPython className="w-6 h-6 text-cyan-400" />;
      case 'layers': return <HiSquare3Stack3D className="w-6 h-6 text-emerald-400" />;
      case 'cpu': return <HiCpuChip className="w-6 h-6 text-violet-400" />;
      case 'shield': return <HiShieldCheck className="w-6 h-6 text-rose-400" />;
      default: return <HiCode className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Label */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          <HiLightBulb className="w-3.5 h-3.5" />
          <span>01. ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Architecting Robust Solutions with <span className="gradient-text-cyan">Code & Security</span>
        </h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column - Bio & Recruiter Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl font-bold font-display text-white mb-4">
              {aboutMe.headline}
            </h3>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              {aboutMe.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values / Strengths list */}
            <div className="mt-8 pt-6 border-t border-gray-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {[
                "Production Django Architecture",
                "RESTful API Development",
                "Relational Database Design",
                "WebAR & 3D Interactive Web",
                "AI & Secure Code Practices",
                "Agile Team Leadership & Git"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-300">
                  <HiCheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Education Card */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 text-purple-400">
              <HiAcademicCap className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">Education</div>
              <div className="text-base font-bold text-white font-display">
                {personalInfo.education.degree}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                {personalInfo.education.institution} • <span className="text-cyan-400 font-mono font-semibold">CGPA {personalInfo.education.cgpa}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 4 Core Pillars */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {aboutMe.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-cyan-500/50 transition-colors">
                  {getPillarIcon(pillar.icon)}
                </div>
                <div>
                  <h4 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

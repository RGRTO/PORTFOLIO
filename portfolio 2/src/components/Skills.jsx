import React, { useState } from 'react';
import { 
  HiCpuChip, 
  HiSearch, 
  HiSparkles,
  HiCode,
  HiDatabase,
  HiWrenchScrewdriver,
  HiCheckBadge
} from 'react-icons/hi2';
import { skills } from '../data/portfolioData';
import Tech3DCluster from './Tech3DCluster';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Languages', 'Frameworks', 'Databases', 'Tools', 'Other'];

  // Flatten skills if 'All' is selected
  const getAllSkills = () => {
    let result = [];
    Object.keys(skills).forEach((cat) => {
      skills[cat].forEach((item) => {
        result.push({ ...item, category: cat });
      });
    });
    return result;
  };

  const currentSkills = activeCategory === 'All' 
    ? getAllSkills() 
    : (skills[activeCategory] || []).map(s => ({ ...s, category: activeCategory }));

  const filteredSkills = currentSkills.filter(skill => 
    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Label */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          <HiCpuChip className="w-3.5 h-3.5" />
          <span>04. SKILLS & CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Categorized <span className="gradient-text-cyan">Technical Stack</span>
        </h2>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                  : 'glass-panel text-gray-400 hover:text-white border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-64">
          <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
          <input
            type="text"
            placeholder="Search skill (e.g. Django)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900/90 border border-gray-800 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5 flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <HiCheckBadge className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">
                    {skill.category}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400">
                {skill.level}%
              </span>
            </div>

            {/* Glowing Skill Level Bar */}
            <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
              <div
                className={`h-full bg-gradient-to-r ${skill.color || 'from-cyan-500 to-indigo-600'} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Interactive 3D Tech Orbit Canvas */}
      <Tech3DCluster />

    </section>
  );
}

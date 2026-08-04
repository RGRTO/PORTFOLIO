import React from 'react';
import { 
  HiArrowDown, 
  HiSparkles, 
  HiCode, 
  HiTerminal, 
  HiLocationMarker,
  HiMail,
  HiChevronRight
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaPython } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-4" />
          <span>{personalInfo.status}</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white mb-4">
          Hi, I'm <span className="gradient-text-cyan">{personalInfo.name}</span>
        </h1>

        {/* Subtitle Roles */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-2xl font-medium text-gray-300 mb-6 font-display">
          <span className="text-cyan-400 font-semibold">{personalInfo.title}</span>
          <span className="text-gray-600 hidden sm:inline">•</span>
          <span className="text-purple-400">{personalInfo.subtitle}</span>
        </div>

        {/* Brief Intro */}
        <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed mb-10">
          Crafting production-ready Python Django web systems, resilient REST APIs, and interactive user interfaces. Passionate about AI integrations, application security, and high-performance WebAR experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03]"
          >
            <span>Explore Projects</span>
            <HiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-gray-200 glass-panel glass-panel-hover border border-white/10 hover:text-cyan-400 transition-all duration-300"
          >
            <HiMail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-gray-300 glass-panel glass-panel-hover border border-white/10 hover:text-purple-300 transition-all duration-300"
          >
            <HiCode className="w-4 h-4 text-purple-400" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Quick Social & Location Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-3 px-6 rounded-2xl glass-panel border border-white/5 mb-14 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <HiLocationMarker className="w-4 h-4 text-rose-400" />
            <span>{personalInfo.location}</span>
          </div>
          <span className="text-gray-700">|</span>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-gray-700">|</span>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-1">
                <span className="gradient-text-cyan">{stat.value}</span>
                <span className="text-sm font-mono text-cyan-400 ml-1">{stat.suffix}</span>
              </div>
              <div className="text-xs text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about"
          className="mt-16 flex flex-col items-center gap-2 text-xs font-mono text-gray-500 hover:text-cyan-400 transition-colors"
        >
          <span>SCROLL DOWN</span>
          <HiArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>

      </div>
    </section>
  );
}

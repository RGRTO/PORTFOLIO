import React from 'react';
import { HiArrowUp, HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-gray-900 bg-[#030712]/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="font-display font-bold text-xl text-white">
            Nayan <span className="text-cyan-400">Naveen</span>
          </a>
          <p className="text-xs text-gray-500 font-mono mt-1">
            Python Django Developer | Full Stack Developer | AI & Cybersecurity
          </p>
        </div>

        {/* Middle Copyright */}
        <div className="text-xs font-mono text-gray-500 text-center flex items-center gap-1">
          <span>Designed & Built by Nayan Naveen © {new Date().getFullYear()}</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
            aria-label="Back to Top"
            title="Back to top"
          >
            <HiArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

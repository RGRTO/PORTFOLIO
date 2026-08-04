import React, { useState, useEffect } from 'react';
import { 
  HiMenuAlt3, 
  HiX, 
  HiSearch, 
  HiDocumentDownload, 
  HiCode, 
  HiSparkles,
  HiLightningBolt
} from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCommandPalette, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-900/30 py-3 shadow-2xl shadow-cyan-950/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-3 text-white font-display text-xl font-bold tracking-tight"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center font-mono text-cyan-400 font-extrabold text-base group-hover:bg-[#0b0f19]">
              NN
            </div>
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-gray-100 group-hover:text-cyan-400 transition-colors">
              Nayan Naveen
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider uppercase mt-1">
              Python & Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-200"
            title="Open Command Palette"
          >
            <HiSearch className="w-3.5 h-3.5 text-cyan-400" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-gray-800 text-gray-300 rounded border border-gray-700">
              Ctrl+K
            </kbd>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-medium text-white overflow-hidden bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <HiDocumentDownload className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 text-gray-300 hover:text-cyan-400 bg-gray-900/80 border border-gray-800 rounded-lg"
          >
            <HiSearch className="w-5 h-5 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-300 hover:text-white bg-gray-900/80 border border-gray-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cyan-500/20 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
            >
              <HiDocumentDownload className="w-5 h-5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

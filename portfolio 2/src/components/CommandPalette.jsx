import React, { useState, useEffect } from 'react';
import { 
  HiSearch, 
  HiX, 
  HiCode, 
  HiBriefcase, 
  HiAcademicCap, 
  HiMail, 
  HiDocumentDownload, 
  HiExternalLink,
  HiUser
} from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled outside
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commandItems = [
    { name: 'Jump to About Me', type: 'Section', href: '#about', icon: <HiUser className="text-cyan-400" /> },
    { name: 'Jump to Experience', type: 'Section', href: '#experience', icon: <HiBriefcase className="text-emerald-400" /> },
    { name: 'Jump to Projects', type: 'Section', href: '#projects', icon: <HiCode className="text-purple-400" /> },
    { name: 'Jump to Skills', type: 'Section', href: '#skills', icon: <HiCode className="text-cyan-400" /> },
    { name: 'Jump to Education', type: 'Section', href: '#education', icon: <HiAcademicCap className="text-purple-400" /> },
    { name: 'Jump to Contact', type: 'Section', href: '#contact', icon: <HiMail className="text-rose-400" /> },
    { name: 'Open Resume Preview', type: 'Action', action: () => { onClose(); onOpenResume(); }, icon: <HiDocumentDownload className="text-cyan-400" /> },
    { name: 'Open GitHub Profile', type: 'External', href: personalInfo.github, icon: <FaGithub className="text-white" /> },
    { name: 'Open LinkedIn Profile', type: 'External', href: personalInfo.linkedin, icon: <FaLinkedin className="text-blue-400" /> },
    { name: 'Send Email Directly', type: 'External', href: `mailto:${personalInfo.email}`, icon: <HiMail className="text-amber-400" /> },
  ];

  const filteredItems = commandItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      onClose();
      if (item.href.startsWith('#')) {
        window.location.hash = item.href;
      } else {
        window.open(item.href, '_blank');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="glass-panel w-full max-w-xl rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/50">
        
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-800 bg-gray-950/80">
          <HiSearch className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or section name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-gray-100 placeholder-gray-500 focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-gray-800 text-gray-400 rounded border border-gray-700">
            ESC
          </kbd>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* Command Items List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-gray-500">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item)}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-900 border border-gray-800">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-cyan-300">
                    {item.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800">
                  {item.type}
                </span>
              </button>
            ))
          )}
        </div>

        <div className="px-4 py-2.5 bg-gray-950/90 border-t border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-500">
          <span>Use Esc to close</span>
          <span>Nayan Naveen Portfolio</span>
        </div>

      </div>
    </div>
  );
}

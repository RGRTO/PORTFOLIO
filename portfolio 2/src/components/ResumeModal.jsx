import React from 'react';
import { HiX, HiPrinter, HiDownload, HiBriefcase, HiAcademicCap, HiCode } from 'react-icons/hi';
import { personalInfo, experiences, projects, skills } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-cyan-500/30 p-6 sm:p-10 relative shadow-2xl shadow-cyan-950/60 bg-[#090d16]">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400" />
            <h3 className="text-xl font-bold font-display text-white">Curriculum Vitae</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
            >
              <HiPrinter className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white bg-gray-900 border border-gray-800"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div id="printable-resume" className="space-y-8 text-gray-200 font-sans">
          
          {/* Header */}
          <div className="border-b border-gray-800 pb-6">
            <h1 className="text-3xl font-extrabold font-display text-white">{personalInfo.name}</h1>
            <p className="text-cyan-400 font-mono text-sm mt-1">{personalInfo.title} | {personalInfo.subtitle}</p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 mt-3">
              <span>📍 {personalInfo.location}</span>
              <span>📧 {personalInfo.email}</span>
              <span>📞 {personalInfo.phone}</span>
              <span>🔗 linkedin.com/in/nayan-naveen-3a8668318</span>
              <span>💻 github.com/RGRTO</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-2">
              <HiAcademicCap className="w-4 h-4" />
              Education
            </h2>
            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-bold text-white">{personalInfo.education.degree}</h3>
                  <p className="text-xs text-gray-400">{personalInfo.education.institution}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-cyan-400 font-bold">CGPA: {personalInfo.education.cgpa}</span>
                  <p className="text-[11px] text-gray-500">{personalInfo.education.period}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-mono uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-2">
              <HiBriefcase className="w-4 h-4" />
              Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-gray-900/60 border border-gray-800">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.role}</h3>
                      <p className="text-xs text-cyan-300">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Summary */}
          <div>
            <h2 className="text-sm font-mono uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-2">
              <HiCode className="w-4 h-4" />
              Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-gray-900/60 border border-gray-800 text-xs">
                  <h3 className="font-bold text-white">{proj.title}</h3>
                  <p className="text-gray-400 mt-1">{proj.tagline}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {proj.tech.slice(0, 4).map((t, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-gray-800 text-[10px] font-mono text-cyan-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="text-sm font-mono uppercase text-cyan-400 tracking-wider mb-3">
              Technical Stack Overview
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="font-bold text-white">Languages:</span>
                <p className="text-gray-400 mt-1">Python, Java, JavaScript, C, SQL, HTML, CSS</p>
              </div>
              <div>
                <span className="font-bold text-white">Frameworks:</span>
                <p className="text-gray-400 mt-1">Django, React, FastAPI, REST Framework</p>
              </div>
              <div>
                <span className="font-bold text-white">Databases & Tools:</span>
                <p className="text-gray-400 mt-1">MySQL, SQLite, Git, GitHub, Linux, VS Code</p>
              </div>
              <div>
                <span className="font-bold text-white">Specialized:</span>
                <p className="text-gray-400 mt-1">Blockchain, AR.js, A-Frame, Cybersecurity</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

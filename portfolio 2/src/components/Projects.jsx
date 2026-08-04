import React, { useState } from 'react';
import { 
  HiCode, 
  HiExternalLink, 
  HiEye, 
  HiX, 
  HiSparkles,
  HiCheck,
  HiChevronRight
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Label */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          <HiCode className="w-3.5 h-3.5" />
          <span>03. FEATURED PROJECTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Production Systems & <span className="gradient-text-cyan">Creative Engineering</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Card Image Header */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono bg-[#030712]/90 border border-cyan-500/30 text-cyan-300 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 border border-cyan-500/20 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex items-center justify-between gap-3 border-t border-gray-800/60 pt-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                <HiEye className="w-4 h-4" />
                <span>Expand Details</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-gray-400 hover:text-white bg-gray-900 border border-gray-800 hover:border-cyan-500/40 transition-colors"
                  title="View GitHub Source"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>Live Demo</span>
                  <HiExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Expandable Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/30 p-6 sm:p-8 relative shadow-2xl shadow-cyan-950/50">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-gray-400 hover:text-white bg-gray-900 border border-gray-800 hover:border-cyan-400"
            >
              <HiX className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-gray-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent" />
            </div>

            {/* Title & Tagline */}
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
              {selectedProject.category}
            </span>
            <h3 className="text-3xl font-bold font-display text-white mt-3 mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Features List */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-3">
                Key Technical Architecture & Features:
              </h4>
              <div className="space-y-2">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <HiCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono glass-pill text-cyan-300 border border-cyan-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 bg-gray-900 border border-gray-800 hover:text-white hover:border-cyan-500/40 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <button
                onClick={() => alert(`Launching Demo for ${selectedProject.title}`)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all"
              >
                <span>Interactive Demo</span>
                <HiExternalLink className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

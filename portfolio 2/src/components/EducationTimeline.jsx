import React from 'react';
import { HiAcademicCap, HiStar, HiLocationMarker, HiCalendar, HiCheckCircle } from 'react-icons/hi2';
import { personalInfo } from '../data/portfolioData';

export default function EducationTimeline() {
  const edu = personalInfo.education;

  return (
    <section id="education" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Section Label */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
          <HiAcademicCap className="w-3.5 h-3.5" />
          <span>05. ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Education & <span className="gradient-text-violet">Academic Excellence</span>
        </h2>
      </div>

      {/* Main Card */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-bl-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
              <HiAcademicCap className="w-9 h-9" />
            </div>
            <div>
              <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Honours Degree
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">
                {edu.degree}
              </h3>
              <p className="text-base text-gray-300">
                {edu.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-950 to-indigo-950 border border-purple-500/40 text-white font-display text-lg font-extrabold shadow-lg shadow-purple-950/40">
              <HiStar className="w-5 h-5 text-amber-400" />
              <span>CGPA {edu.cgpa} / 10</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400 font-mono mt-2">
              <span className="flex items-center gap-1">
                <HiCalendar className="w-3.5 h-3.5 text-purple-400" />
                {edu.period}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <HiLocationMarker className="w-3.5 h-3.5 text-rose-400" />
                {edu.location}
              </span>
            </div>
          </div>
        </div>

        {/* Academic Coursework Highlights */}
        <div className="mt-8">
          <h4 className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-4">
            Core Coursework & Specialized Modules:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Software Engineering Principles",
              "Data Structures & Algorithms",
              "Database Management Systems (DBMS)",
              "Python & Web Development",
              "Computer Networks & Security",
              "Object-Oriented Programming (Java/C)"
            ].map((course, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-900/60 border border-gray-800 text-xs text-gray-200">
                <HiCheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

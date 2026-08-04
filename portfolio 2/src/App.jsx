import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroThreeCanvas from './components/HeroThreeCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationTimeline from './components/EducationTimeline';
import Achievements from './components/Achievements';
import VisitorCounter from './components/VisitorCounter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* Three.js Interactive 3D Canvas Background */}
      <HeroThreeCanvas />

      {/* Navigation Header */}
      <Navbar 
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationTimeline />
        <Achievements />
        <VisitorCounter />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Ctrl+K Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Structured CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

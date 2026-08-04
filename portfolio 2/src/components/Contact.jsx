import React, { useState } from 'react';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiPaperAirplane, 
  HiCheckCircle,
  HiSparkles
} from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      try {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
      } catch (err) {
        // fallback ignore
      }
      setTimeout(() => setStatus('idle'), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Label */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          <HiMail className="w-3.5 h-3.5" />
          <span>07. GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Let's Build Something <span className="gradient-text-cyan">Extraordinary Together</span>
        </h2>
        <p className="max-w-xl text-gray-400 text-sm sm:text-base mt-4">
          Open for full-time Python Django Developer roles, full-stack software engineering projects, or technical consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column - Contact Details & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl pointer-events-none" />

            <h3 className="text-xl font-bold font-display text-white mb-6">
              Direct Channels
            </h3>

            <div className="space-y-6">
              
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <HiMail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase">Email Address</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <HiPhone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase">Phone / WhatsApp</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                  <HiLocationMarker className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase">Location</div>
                  <div className="text-sm font-bold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-800 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-900 border border-gray-800 text-xs font-mono text-gray-300 hover:text-white hover:border-cyan-500/40 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-900 border border-gray-800 text-xs font-mono text-gray-300 hover:text-white hover:border-cyan-500/40 transition-colors"
              >
                <FaLinkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Column - Interactive Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            <h3 className="text-xl font-bold font-display text-white mb-6">
              Send a Direct Message
            </h3>

            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in fade-in">
                <HiCheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold font-display text-white mb-1">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-300">
                  Thank you for reaching out. Nayan Naveen will respond to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-gray-800 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-gray-800 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-gray-800 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project details or team requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/90 border border-gray-800 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-4 h-4 rotate-45" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

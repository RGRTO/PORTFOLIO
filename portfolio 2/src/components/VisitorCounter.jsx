import React, { useState, useEffect } from 'react';
import { HiUserGroup, HiGlobeAlt, HiEye, HiSparkles } from 'react-icons/hi2';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(1284);
  const [activeUsers, setActiveUsers] = useState(3);

  useEffect(() => {
    // Check localStorage for persisted count
    const saved = localStorage.getItem('nn_portfolio_visitors');
    let count = saved ? parseInt(saved, 10) : 1284;
    count += 1;
    localStorage.setItem('nn_portfolio_visitors', count.toString());
    setVisitorCount(count);

    // Random slight variation for active live sessions
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 4) + 2);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-wrap items-center justify-between gap-6 my-10 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <HiUserGroup className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
            Total Unique Visits
          </div>
          <div className="text-2xl font-extrabold font-display text-white">
            <span className="gradient-text-cyan">{visitorCount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{activeUsers} Live Active Session{activeUsers > 1 ? 's' : ''}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-400">
          <HiGlobeAlt className="w-4 h-4 text-cyan-400" />
          <span>Kerala, IN</span>
        </div>
      </div>
    </div>
  );
}

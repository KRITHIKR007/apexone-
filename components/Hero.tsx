'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
      {/* Light Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-50/80 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-50/80 rounded-full blur-[80px]" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-100 bg-indigo-50/50 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span className="text-sm font-medium text-indigo-700 tracking-wide">System v2.0 Live</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            The Intelligence Layer for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Global Enterprise.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Predict revenue, automate execution, and scale net profit with proprietary AI.
            <span className="font-semibold text-slate-900"> Zero headcount added.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="/contact" className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200/50 flex items-center gap-2 transform hover:-translate-y-0.5">
              Start Your Audit
            </a>

            <a href="#how-it-works" className="px-8 py-4 text-slate-600 font-medium hover:text-slate-900 flex items-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              View Platform
            </a>
          </div>

          {/* Stats / Dashboard Bar - Clean & Contained */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Revenue Tracked", value: "$420M+", color: "text-slate-900" },
              { label: "Active Nodes", value: "14,029", color: "text-slate-900" },
              { label: "Efficiency", value: "+308%", color: "text-emerald-600" },
              { label: "Security", value: "Enterprise", color: "text-indigo-600" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-1 tracking-tight`}>{stat.value}</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

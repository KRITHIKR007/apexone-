'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto">

        {/* Content Wrapper - Centered & Stark */}
        <div className={`flex flex-col justify-center w-full max-w-[90vw] xl:max-w-[1200px] mx-auto transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

          {/* Heading - Clean, Custom Tracking, Standard Premium */}
          <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter text-slate-900 leading-[0.9] mb-6 md:mb-10 text-left">
            The Cognitive Engine for
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 block pl-12 md:pl-48">
              Global Enterprise.
            </span>
          </h1>

          {/* Subheading - Refined Grey, Good Measure */}
          <p className="max-w-3xl text-2xl leading-relaxed text-slate-600 mb-12 antialiased">
            Predict revenue, automate execution, and scale net profit with proprietary AI.
            <span className="text-slate-900 font-medium"> Zero headcount added.</span>
          </p>

          {/* Actions - Standard, High Contrast */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <a
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white text-lg font-bold rounded-full hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              Start Audit
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 border border-slate-200 text-lg font-bold rounded-full hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200"
            >
              View Platform
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

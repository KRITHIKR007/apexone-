'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-white pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      <div className="container mx-auto">

        {/* Content Wrapper - Centered & Stark */}
        <div className={`flex flex-col items-center text-center max-w-4xl mx-auto transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

          {/* Heading - Clean, Custom Tracking, Standard Premium */}
          <h1 className="text-5xl font-medium tracking-tight text-slate-900 md:text-7xl lg:text-[5rem] leading-[1.05] mb-8">
            The Cognitive Engine for <br className="hidden md:block" />
            <span className="text-slate-900">
              Global Enterprise.
            </span>
          </h1>

          {/* Subheading - Refined Grey, Good Measure */}
          <p className="max-w-2xl text-xl leading-relaxed text-slate-600 mb-10 antialiased">
            Predict revenue, automate execution, and scale net profit with proprietary AI.
            <span className="text-slate-900 font-medium"> Zero headcount added.</span>
          </p>

          {/* Actions - Standard, High Contrast */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              Start Audit
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 text-sm font-bold rounded-full hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200"
            >
              View Platform
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

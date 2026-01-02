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

          {/* Badge - Minimal Pills */}
          <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-black"></span>
            System v2.0 Available
          </div>

          {/* Heading - Clean, Custom Tracking, Standard Premium */}
          <h1 className="text-5xl font-medium tracking-tight text-black md:text-7xl lg:text-[5rem] leading-[1.05] mb-8">
            The Cognitive Engine for <br className="hidden md:block" />
            Global Enterprise.
          </h1>

          {/* Subheading - Refined Grey, Good Measure */}
          <p className="max-w-2xl text-xl leading-relaxed text-gray-500 mb-10 antialiased">
            Predict revenue, automate execution, and scale net profit with proprietary AI.
            <span className="text-black font-medium"> Zero headcount added.</span>
          </p>

          {/* Actions - Standard, High Contrast */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm"
            >
              Start Audit
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              View Platform
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

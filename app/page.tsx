'use client';

import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Solution from '@/components/Solution';
import CoreServices from '@/components/CoreServices';
import HowItWorks from '@/components/HowItWorks';
import WhoWeAre from '@/components/WhoWeAre';
import WhatMakesDifferent from '@/components/WhatMakesDifferent';
import ForWhom from '@/components/ForWhom';
import Results90Days from '@/components/Results90Days';

import Testimonials from '@/components/Testimonials';
import RiskReversal from '@/components/RiskReversal';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navigation from '@/components/Navigation';
import MobileActions from '@/components/MobileActions';

export default function Home() {
  useScrollReveal();

  return (
    <main className="bg-white selection:bg-indigo-500/30">
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <TrustedBy />

      <div id="solution">
        <Solution />
      </div>

      {/* Concrete Services & Scope Deliverables */}
      <CoreServices />

      <WhoWeAre />
      <WhatMakesDifferent />
      <ForWhom />
      
      <Results90Days />
      <HowItWorks />

      <Testimonials />
      <RiskReversal />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileActions />
    </main>
  );
}

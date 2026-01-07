'use client';

import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';

import Solution from '@/components/Solution';
import GoldenGoose from '@/components/GoldenGoose';

import ACN from '@/components/ACN';
import Products from '@/components/Products';
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

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Navigation />
      <Hero />
      <TrustedBy />

      <Solution />
      <GoldenGoose />

      <ACN />
      <WhoWeAre />
      <WhatMakesDifferent />
      <ForWhom />
      <Products />
      <Results90Days />
      <HowItWorks />

      <Testimonials />
      <RiskReversal />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

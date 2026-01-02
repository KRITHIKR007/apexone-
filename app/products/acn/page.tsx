
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ACNPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />

      {/* Hero Section - Editorial Style */}
      <section className="pt-40 pb-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase mb-6 block">The Collective</span>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">
              Apex Creators <br />
              <span className="text-slate-400">Network.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
              We are not an agency. We are a decentralized guild of the world's top 1% creative engineers, curated to solve enterprise growth challenges.
            </p>
          </div>
        </div>
      </section>

      {/* The Visual & Definition */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left: The Visual */}
            <div className="sticky top-32">
              <div className="aspect-square rounded-sm overflow-hidden bg-slate-50 relative">
                <img
                  src="/products/acn-network.png"
                  alt="Abstract Network Connectivity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5"></div>
              </div>
              <div className="mt-6 flex justify-between text-xs font-mono text-slate-400 uppercase tracking-widest">
                <span>Fig. 01 — The Network Topology</span>
                <span>Active Nodes: 1200+</span>
              </div>
            </div>

            {/* Right: The Explanation */}
            <div className="space-y-20">

              {/* Block 1 */}
              <div>
                <h2 className="text-3xl font-medium mb-6">What is ACN?</h2>
                <div className="h-px w-12 bg-indigo-600 mb-8"></div>
                <p className="text-lg text-slate-500 leading-relaxed mb-6">
                  The Apex Creators Network (ACN) is a closed-loop ecosystem of pre-vetted talent. Unlike traditional freelance platforms where quality is varying, ACN operates on a <strong>"Invite-Only"</strong> admission protocol.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  We identify, vet, and onboard elite specialists—from 3D motion designers to direct-response copywriters—and integrate them directly into your business workflows via our ApexOne operating system.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 className="text-3xl font-medium mb-6">The "Anti-Agency" Model</h2>
                <div className="h-px w-12 bg-slate-200 mb-8"></div>
                <ul className="space-y-8">
                  <ListItem
                    title="No Overhead Scaling"
                    desc="Agencies charge you for their office rent and account managers. ACN gives you direct access to the talent executing the work."
                  />
                  <ListItem
                    title="Algorithmically Matched"
                    desc="Our CIIP platform analyzes your brand voice and growth goals to match you with the exact creator subset that fits your niche."
                  />
                  <ListItem
                    title="Performance Based"
                    desc="Creators in the network are ranked by their 'Impact Score'—a metric derived from the actual revenue revenue they generate for clients."
                  />
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-slate-100">
                <h3 className="text-xl font-medium mb-4">Ready to deploy elite talent?</h3>
                <a href="/contact" className="inline-flex items-center gap-3 text-indigo-600 font-bold uppercase tracking-widest text-sm hover:text-indigo-800 transition-colors">
                  Initialize Request <span className="text-xl">→</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ListItem({ title, desc }: { title: string, desc: string }) {
  return (
    <li className="flex gap-6">
      <span className="flex-shrink-0 w-3 h-3 rounded-full bg-indigo-600 mt-2"></span>
      <div>
        <h4 className="text-xl font-medium text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}


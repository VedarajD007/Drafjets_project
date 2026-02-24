'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle2, Users, Code, Rocket, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white" id="hero">
      {/* Structural background decoration */}
      <div className="absolute inset-0 grid-soft opacity-40 -z-10" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-dark-50" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-dark-50" />

      {/* Soft brand glows for uniform light theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-50/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10" />

      <div className="relative z-10 container-main">
        <div className="text-center max-w-4xl mx-auto space-y-10 lg:space-y-12">

          {/* Uniform Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 animate-fade-in shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-brand-700">New Batch Release: 2026 Collection Live</span>
          </div>

          {/* Clean Light Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-dark-900 tracking-tighter leading-[1.1] md:leading-[0.9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Your VIVA, <br className="hidden md:block" />
              Our <span className="text-gradient">Signature.</span>
            </h1>
            <p className="text-lg md:text-2xl text-dark-500 max-w-3xl mx-auto leading-relaxed px-4">
              Premium <span className="text-dark-900 font-bold underline decoration-brand-500 decoration-4">Custom Engineering Projects</span>.
              Expertly designed, fully documented, and ready for your final defense.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 animate-fade-up">
            <Link
              href="/projects"
              className="btn-primary group w-full sm:w-auto !py-5 !px-12 text-sm uppercase tracking-widest"
            >
              Explore Repository
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary w-full sm:w-auto !py-5 !px-12 text-sm uppercase tracking-widest"
            >
              Contact Support
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-dark-100 max-w-4xl mx-auto animate-fade-up">
            {[
              { val: '4.9/5', label: 'Average Rating', icon: <Star className="w-4 h-4 text-brand-500 fill-brand-500" /> },
              { val: '100%', label: 'Delivery Rate', icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
              { val: '30+', label: 'Fresh Projects', icon: <Rocket className="w-4 h-4 text-brand-500" /> },
              { val: '24/7', label: 'Tech Support', icon: <Sparkles className="w-4 h-4 text-brand-600" /> },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1 text-center">
                <div className="text-3xl font-black text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{stat.val}</div>
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-dark-400 uppercase tracking-widest">
                  {stat.icon}
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

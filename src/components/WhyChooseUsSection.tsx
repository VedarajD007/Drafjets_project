'use client';

import React from 'react';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { Layers, Sparkles, CheckCircle, DollarSign, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  DollarSign: <DollarSign className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
};

const descriptions = [
  'Modular, clean, and easily understandable code designed for longevity.',
  'Latest frameworks and industry-standard tools for professional results.',
  'Strict adherence to timelines and project goals with zero compromises.',
  'Highly competitive, student-centric pricing for every project tier.',
  'Expert technical support to assist you at every step of your project.',
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-py bg-white relative overflow-hidden" id="why-choose-us">
      {/* Structural background decoration */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-dark-100" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-dark-100" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left - Visual/Text */}
          <div className="space-y-8">
            <div className="badge-uniform">
              <ShieldCheck className="w-4 h-4" />
              The DrafJets Standard
            </div>
            <h2 className="heading-m text-dark-900 leading-[1.1]">
              Why Students <span className="text-gradient">Choose DrafJets</span>
            </h2>
            <p className="text-dark-500 text-lg leading-relaxed">
              We've built our reputation on two core pillars: <span className="text-brand-600 font-bold underline">consistency</span> and <span className="text-brand-600 font-bold underline">quality</span>. Every project we ship meets our rigorous standards.
            </p>

            {/* Main Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-brand-50 rounded-3xl border border-brand-100">
                <div className="text-3xl font-black text-brand-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>1,000+</div>
                <div className="text-sm font-bold text-dark-500 uppercase tracking-widest mt-1">Students Assisted</div>
              </div>
              <div className="p-6 bg-dark-50 rounded-3xl border border-dark-100">
                <div className="text-3xl font-black text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>100%</div>
                <div className="text-sm font-bold text-dark-500 uppercase tracking-widest mt-1">Delivery Success</div>
              </div>
            </div>
          </div>

          {/* Right - Features List */}
          <div className="space-y-4">
            {WHY_CHOOSE_US.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 p-6 rounded-3xl border border-transparent
                  hover:bg-white hover:border-dark-100 hover:shadow-premium transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center
                  group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-500 leading-relaxed max-w-sm">
                    {descriptions[i]}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Uniform Final CTA Banner */}
        <div className="mt-24 relative p-10 md:p-16 rounded-[40px] overflow-hidden group">
          <div className="absolute inset-0 bg-brand-600 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-transparent opacity-60" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Start Your Project Today.
              </h3>
              <p className="text-white/80 max-w-md">
                Don't wait until the last minute. Get professional help and ace your final year.
              </p>
            </div>
            <a href="/contact" className="btn-white">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

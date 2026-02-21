'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import { Code, Database, Zap, Settings, Wifi, Brain, ArrowUpRight } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Code: <Code className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Settings: <Settings className="w-8 h-8" />,
  Wifi: <Wifi className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-py bg-dark-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-soft opacity-30" />

      <div className="container-main relative z-10 text-center">
        {/* Uniform Header */}
        <div className="mb-20 space-y-4">
          <div className="badge-uniform mx-auto">
            <Zap className="w-4 h-4" />
            Our Technical Expertise
          </div>
          <h2 className="heading-m text-dark-900">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="text-dark-500 text-lg max-w-2xl mx-auto">
            We provide specialized solutions across multiple domains with a uniform focus on quality and innovation.
          </p>
        </div>

        {/* Uniform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="group card-uniform flex flex-col items-center text-center space-y-6"
            >
              {/* Uniform Icon Style */}
              <div className="w-20 h-20 rounded-3xl bg-brand-50 text-brand-600 flex items-center justify-center
                border border-brand-100 group-hover:bg-brand-600 group-hover:text-white
                group-hover:scale-110 transition-all duration-500 group-hover:shadow-red-lg">
                {icons[svc.icon]}
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {svc.title}
                </h3>
                <p className="text-dark-500 leading-relaxed text-[15px]">
                  {svc.description}
                </p>
              </div>

              {/* View Projects Link */}
              <a
                href="/projects"
                className="pt-4 inline-flex items-center gap-2 text-brand-600 font-bold uppercase tracking-wider text-xs border-b-2 border-brand-200 group-hover:border-brand-600 transition-all"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent animate-fade-in">
          Build Your Final Year Project With Confidence 🚀
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto animate-slide-up">
          Professional Mini & Major Projects for IT Students
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
          <Link
            href="/projects"
            className="px-8 py-4 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-16">
          <div className="p-6 bg-card/50 backdrop-blur rounded-lg border border-primary/20">
            <div className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">50+</div>
            <p className="text-foreground/60 text-sm mt-2">Projects</p>
          </div>
          <div className="p-6 bg-card/50 backdrop-blur rounded-lg border border-primary/20">
            <div className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">1000+</div>
            <p className="text-foreground/60 text-sm mt-2">Students</p>
          </div>
          <div className="p-6 bg-card/50 backdrop-blur rounded-lg border border-primary/20">
            <div className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">100%</div>
            <p className="text-foreground/60 text-sm mt-2">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

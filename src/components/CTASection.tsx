'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>

        <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          Join hundreds of students who have successfully completed their projects with DrafJets
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-4 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

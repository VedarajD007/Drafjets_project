'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import * as Icons from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">Services</span>
            <span className="text-foreground"> Offered</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            We provide comprehensive solutions for all your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
            return (
              <div
                key={service.id}
                className="p-8 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:shadow-neon-cyan"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground/60 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="inline-block text-primary hover:text-primary/80 font-semibold text-sm group-hover:translate-x-2 transition-transform"
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

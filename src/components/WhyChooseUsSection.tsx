'use client';

import React from 'react';
import { WHY_CHOOSE_US } from '@/lib/constants';
import * as Icons from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-foreground">Why </span>
          <span className="bg-gradient-neon bg-clip-text text-transparent">Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] as any;
            return (
              <div
                key={index}
                className="p-8 bg-background border border-primary/20 rounded-xl group hover:border-primary/50 transition-all duration-300 hover:shadow-neon-cyan"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

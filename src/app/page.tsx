'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}

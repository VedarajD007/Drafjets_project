'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function CTASection() {
  return (
    <section className="section-py bg-dark-50 relative overflow-hidden" id="cta">
      {/* Background uniform pattern */}
      <div className="absolute inset-0 grid-soft opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-main relative z-10 text-center space-y-12">
        <div className="space-y-6">
          <div className="badge-uniform mx-auto">
            <MessageSquare className="w-4 h-4" />
            Let&apos;s Have a Conversation
          </div>
          <h2 className="heading-m text-dark-900">
            Have a <span className="text-gradient">Project Idea?</span>
          </h2>
          <p className="text-dark-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Reach out to our expert team for consultation and professional guidance on your next project.
          </p>
        </div>

        {/* Uniform Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div className="card-uniform group">
            <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-dark-900">Call Us</h3>
            <p className="text-sm text-dark-500 mb-4">Direct technical assistance</p>
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="text-brand-600 font-black text-lg hover:underline transition-all">
              +91 {CONTACT_INFO.phones[0]}
            </a>
          </div>

          {/* Email Card */}
          <div className="card-uniform group">
            <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-dark-900">Email Us</h3>
            <p className="text-sm text-dark-500 mb-4">Inquiries & documentation</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-600 font-bold text-sm truncate block hover:underline transition-all">
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="card-uniform group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-dark-900">WhatsApp</h3>
            <p className="text-sm text-dark-500 mb-4">Instant support & chatting</p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-black text-lg hover:underline transition-all"
            >
              +91 {CONTACT_INFO.whatsappNumber}
            </a>
          </div>
        </div>

        <div className="pt-8">
          <Link href="/projects" className="btn-primary">
            Explore All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

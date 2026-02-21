'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Rocket, ArrowRight, Heart, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-dark-100 pt-20 pb-10 overflow-hidden" id="footer">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center shadow-red">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Draf<span className="text-brand-600">Jets</span>
              </span>
            </Link>
            <p className="text-dark-500 text-[15px] leading-relaxed">
              Premium IT project developers specializing in Mini and Major projects for IT & Engineering students across India. Uniform quality, expertise, and support.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-dark-50 border border-dark-100 flex items-center justify-center hover:bg-brand-50 hover:text-brand-600 transition-all cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-dark-50 border border-dark-100 flex items-center justify-center hover:bg-brand-50 hover:text-brand-600 transition-all cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-dark-900 font-bold mb-6 text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'Browse Projects', href: '/projects' },
                { label: 'Technical Services', href: '/services' },
                { label: 'About DrafJets', href: '/about' },
                { label: 'Contact Support', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-dark-500 hover:text-brand-600 font-medium transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="text-dark-900 font-bold mb-6 text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Categories</h4>
            <ul className="space-y-4">
              {['MERN Stack Development', 'Python & Machine Learning', 'IoT & Embedded Systems', 'React Native Apps'].map((cat) => (
                <li key={cat} className="text-dark-500 hover:text-brand-600 font-medium transition-colors flex items-center gap-2 cursor-pointer group">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-200 group-hover:bg-brand-600 transition-colors" />
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-dark-900 font-bold mb-6 text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Contact</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-dark-900 font-bold text-sm">Call/WhatsApp</p>
                  <p className="text-dark-500 text-sm font-medium">+91 {CONTACT_INFO.whatsappNumber}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-dark-900 font-bold text-sm">Email Support</p>
                  <p className="text-dark-500 text-sm font-medium truncate">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-dark-400 text-sm font-medium">
            © {year} DrafJets. Developed for academic excellence.
          </p>
          <div className="flex items-center gap-2 text-dark-400 text-sm font-medium">
            Developed with <Heart className="w-4 h-4 text-brand-500 fill-brand-500" /> by DrafJets Engineering
          </div>
        </div>
      </div>
    </footer>
  );
}

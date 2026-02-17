'use client';

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
              DrafJets
            </h3>
            <p className="text-foreground/60 text-sm">
              Providing professional mini and major projects for IT students
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              {['MERN Stack', 'ML Projects', 'IoT Solutions', 'Full Stack'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3">
              {CONTACT_INFO.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-foreground/40 text-sm">
              © 2026 DrafJets. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

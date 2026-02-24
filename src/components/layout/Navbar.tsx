'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Rocket, Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || isOpen ? 'py-2 md:py-3 px-4 md:px-0' : 'py-5 px-4 md:px-0'}`}>
      <div className="container-main p-0">
        <div className={`relative px-6 py-4 rounded-[32px] transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-2xl border border-dark-100' : 'bg-transparent border border-transparent'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center shadow-red group-hover:scale-105 transition-transform">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-dark-900 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Draf<span className="text-brand-600">Jets</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-bold tracking-wide uppercase transition-colors ${pathname === link.href ? 'text-brand-600' : 'text-dark-500 hover:text-brand-600'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phones[0]}`}
                className="flex items-center gap-2 px-4 py-2 text-dark-900 font-bold hover:text-brand-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                </div>
                +91 {CONTACT_INFO.phones[0]}
              </a>
              <Link href="/projects" className="btn-primary !py-2.5 !px-6 !text-xs !rounded-xl">
                Get My Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-dark-50 text-dark-900 hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
            <div className="py-6 space-y-3 border-t border-dark-100">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-5 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${pathname === link.href ? 'bg-brand-50 text-brand-600' : 'text-dark-900 hover:bg-dark-50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <a href={`tel:${CONTACT_INFO.phones[0]}`} className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-brand-50 text-brand-600 font-black uppercase tracking-widest text-xs">
                  <Phone className="w-4 h-4" />
                  +91 {CONTACT_INFO.phones[0]}
                </a>
                <Link href="/projects" className="btn-primary w-full !py-4 !rounded-2xl !text-xs !tracking-[0.2em]">
                  Explore Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

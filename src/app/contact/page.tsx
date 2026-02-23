'use client';

import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        // We keep the success message visible for a bit longer or forever until refresh
      }
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white pt-24 pb-20 page-enter"
    >

      {/* Header */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="red-blob w-72 h-72 -top-20 -left-20 opacity-30" />
        <div className="container-x relative z-10 text-center py-16">
          <div className="section-label inline-flex"><MessageCircle className="w-4 h-4" />Get in Touch</div>
          <h1 className="section-heading">
            Contact <span className="text-red-gradient">Us</span>
          </h1>
          <p className="section-desc mx-auto">
            Have a question? We're here to help. Reach out anytime!
          </p>
        </div>
      </section>

      <div className="container-x -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">

          {/* Contact Info */}
          <div className="space-y-5">
            {/* Phones */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center shadow-red">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-900">Phone</h3>
                  <p className="text-xs text-dark-300">Available 9AM - 9PM</p>
                </div>
              </div>
              <div className="space-y-3 pl-1">
                {CONTACT_INFO.phones.map((ph: string, i: number) => (
                  <a key={ph} href={`tel:${ph}`} className="group flex items-center gap-3 text-dark-400 hover:text-brand-600 transition-colors">
                    <span className="w-6 h-6 bg-brand-50 rounded-lg flex items-center justify-center text-[10px] font-bold text-brand-600 group-hover:bg-brand-100">{i + 1}</span>
                    <span className="font-semibold">+91 {ph}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-900">Email</h3>
                  <p className="text-xs text-dark-300">Reply within 24 hrs</p>
                </div>
              </div>
              <a href={`mailto:${CONTACT_INFO.email}`} className="pl-1 font-semibold text-dark-400 hover:text-brand-600 transition-colors">{CONTACT_INFO.email}</a>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">WhatsApp</h3>
                  <p className="text-white/80 text-sm">Fastest way to reach us!</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 font-semibold">+91 {CONTACT_INFO.whatsappNumber}</span>
                <span className="flex items-center gap-1 text-sm font-bold group-hover:translate-x-1 transition-transform">Chat Now <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="card p-8 md:p-10" id="contact-form">
              <h2 className="text-2xl font-bold text-dark-900 mb-6">Send us a message</h2>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Full Name <span className="text-brand-500">*</span></label>
                  <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="Your name" className="input" id="contact-name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Phone <span className="text-brand-500">*</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} required placeholder="Your phone" className="input" id="contact-phone" />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-dark-900 mb-2">Email <span className="text-brand-500">*</span></label>
                <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com" className="input" id="contact-email" />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-dark-900 mb-2">Subject <span className="text-brand-500">*</span></label>
                <input type="text" name="subject" value={form.subject} onChange={onChange} required placeholder="How can we help?" className="input" id="contact-subject" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-dark-900 mb-2">Message <span className="text-brand-500">*</span></label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell us about your project..." className="input resize-none" id="contact-message" />
              </div>
              <button type="submit" disabled={loading} className="btn-red w-full !py-4 text-base disabled:opacity-50" id="contact-submit">
                <Send className="w-5 h-5" />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {sent && (
                <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <p className="text-green-700 text-sm font-medium">Message sent! We'll get back within 24 hours.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

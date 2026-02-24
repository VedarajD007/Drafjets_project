'use client';

import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, MessageCircle, ArrowRight, User, Hash, HelpCircle, Bell, ExternalLink, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

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
    // Simulate API call for premium UI experience
    await new Promise(resolve => setTimeout(resolve, 1500));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50/20 rounded-full blur-[160px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[140px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* LEFT COLUMN: Info & Context */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[10px] font-black uppercase tracking-[0.2em]">
                <Bell className="w-3.5 h-3.5" /> Fast Response Guaranteed
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-dark-900 tracking-tighter leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Let&apos;s Build Your <br />
                <span className="text-gradient">Success Story.</span>
              </h1>
              <p className="text-xl text-dark-500 leading-relaxed max-w-md">
                Reach out for technical consultation, project requirements, or custom build requests. We usually respond within an hour.
              </p>
            </motion.div>

            {/* Premium Support Cards */}
            <div className="grid gap-6">
              {/* WhatsApp Premium Card */}
              <motion.a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group p-8 rounded-[40px] bg-white border border-dark-100 shadow-premium flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-dark-400 uppercase tracking-widest mb-1">Instant Support</h3>
                    <div className="text-xl font-black text-dark-900">+91 {CONTACT_INFO.whatsappNumber}</div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-dark-50 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.a>

              {/* Email Premium Card */}
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group p-8 rounded-[40px] bg-white border border-dark-100 shadow-premium flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-dark-400 uppercase tracking-widest mb-1">Mail Inquiries</h3>
                    <div className="text-xl font-black text-dark-900 truncate max-w-[180px] md:max-w-none">
                      {CONTACT_INFO.email}
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-dark-50 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </motion.a>
            </div>

            {/* Verification Badge */}
            <div className="flex items-center gap-4 p-6 bg-brand-50/50 rounded-3xl border border-brand-100/50">
              <ShieldCheck className="w-6 h-6 text-brand-600" />
              <p className="text-xs font-bold text-dark-600 tracking-tight">
                Your data is secure. We never share your project details or contact info with third parties.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 md:p-12 rounded-[60px] bg-white border border-dark-100 shadow-premium relative overflow-hidden"
            >
              {/* Form Progress Indicator */}
              <div className="absolute top-0 left-0 h-1.5 bg-brand-600 transition-all duration-300" style={{ width: sent ? '100%' : '10%' }} />

              <form onSubmit={onSubmit} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-dark-900 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Send a Message</h2>
                  <p className="text-sm text-dark-400 font-medium">Fill out the form below and we benchmark our response time.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black text-black uppercase tracking-widest">
                      <User className="w-3 h-3" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="e.g. Rahul Kumar"
                      className="w-full px-6 py-4 bg-white border-2 border-dark-100 rounded-2xl focus:outline-none focus:border-brand-500 transition-all font-bold text-black placeholder:text-dark-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black text-black uppercase tracking-widest">
                      <Mail className="w-3 h-3" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="rahul@example.com"
                      className="w-full px-6 py-4 bg-white border-2 border-dark-100 rounded-2xl focus:outline-none focus:border-brand-500 transition-all font-bold text-black placeholder:text-dark-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black text-black uppercase tracking-widest">
                      <Phone className="w-3 h-3" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      required
                      placeholder="+91 00000 00000"
                      className="w-full px-6 py-4 bg-white border-2 border-dark-100 rounded-2xl focus:outline-none focus:border-brand-500 transition-all font-bold text-black placeholder:text-dark-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-[10px] font-black text-black uppercase tracking-widest">
                      <Hash className="w-3 h-3" /> Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      required
                      placeholder="e.g. Project Query"
                      className="w-full px-6 py-4 bg-white border-2 border-dark-100 rounded-2xl focus:outline-none focus:border-brand-500 transition-all font-bold text-black placeholder:text-dark-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[10px] font-black text-black uppercase tracking-widest">
                    <HelpCircle className="w-3 h-3" /> Detailed Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={4}
                    placeholder="Describe your requirements or questions here..."
                    className="w-full px-6 py-4 bg-white border-2 border-dark-100 rounded-2xl focus:outline-none focus:border-brand-500 transition-all font-bold text-black placeholder:text-dark-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || sent}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-5 bg-dark-900 text-white rounded-3xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 disabled:opacity-50 transition-all shadow-xl hover:shadow-brand-500/10"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : sent ? (
                    <><CheckCircle className="w-5 h-5" /> Message Sent Successfully</>
                  ) : (
                    <><Send className="w-5 h-5" /> Dispatch Inquiry</>
                  )}
                </motion.button>
              </form>

              {/* Success Overlay */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-12 space-y-6"
                  >
                    <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-4xl font-black text-dark-900 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Inquiry Received!</h2>
                      <p className="text-dark-500 font-medium">Thank you for reaching out. An expert from DrafJets will contact you shortly on your provided phone number or email.</p>
                    </div>
                    <button
                      onClick={() => setSent(false)}
                      className="text-xs font-black uppercase tracking-[0.3em] text-brand-600 hover:text-brand-700 transition-colors pt-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

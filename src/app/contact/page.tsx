'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">Get in Touch</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Have questions about our projects? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="p-6 bg-card border border-primary/20 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Phone</h3>
              </div>
              <div className="ml-12 space-y-2">
                {CONTACT_INFO.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="block text-primary hover:text-primary/80">
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="p-6 bg-card border border-primary/20 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Email</h3>
              </div>
              <a href={`mailto:${CONTACT_INFO.email}`} className="ml-12 text-primary hover:text-primary/80">
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 bg-card border border-primary/20 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">WhatsApp</h3>
              </div>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-12 text-primary hover:text-primary/80"
              >
                +91 {CONTACT_INFO.whatsappNumber}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-8 bg-card border border-primary/20 rounded-xl">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-foreground font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all"
                />
              </div>

              <div className="mb-4">
                <label className="block text-foreground font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-success/10 border border-success/50 rounded-lg text-success text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="text-center p-8 bg-card border border-primary/20 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Scan to Check Projects</h2>
          <p className="text-foreground/60 mb-6">Use WhatsApp to quickly browse our projects</p>
          <div className="inline-block p-4 bg-background rounded-lg border border-primary/20">
            {/* QR Code placeholder */}
            <div className="w-32 h-32 bg-primary/10 rounded-lg flex items-center justify-center text-foreground/60">
              QR Code Here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

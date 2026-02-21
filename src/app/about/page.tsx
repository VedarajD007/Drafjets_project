import React from 'react';
import Link from 'next/link';
import {
  CheckCircle, Users, Zap, Target, Shield, Rocket,
  ArrowRight, Star, Award, Clock, HeadphonesIcon, Code,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 page-enter">

      {/* Hero */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="red-blob w-80 h-80 -top-20 -right-20 opacity-30" />

        <div className="container-x relative z-10 text-center py-16">
          <div className="section-label inline-flex"><Rocket className="w-4 h-4" />About Us</div>
          <h1 className="section-heading">
            About <span className="text-red-gradient">DrafJets</span>
          </h1>
          <p className="section-desc mx-auto">
            Empowering IT students with professional, reliable, and affordable project solutions.
          </p>
        </div>
      </section>

      <div className="container-x -mt-10 relative z-20">

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="card p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center shadow-red">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-dark-900">Our Mission</h2>
            </div>
            <p className="text-dark-300 leading-relaxed">
              Provide high-quality, professional projects that help IT students gain practical experience and complete their academic requirements with confidence. Every student deserves real-world, well-built projects.
            </p>
          </div>
          <div className="card p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-dark-900">Our Vision</h2>
            </div>
            <p className="text-dark-300 leading-relaxed">
              Become the most trusted platform for project solutions in India, delivering innovative, scalable, and affordable solutions for students across all branches.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { val: '50+', label: 'Projects Delivered', icon: <Code className="w-5 h-5" /> },
            { val: '1000+', label: 'Happy Students', icon: <Users className="w-5 h-5" /> },
            { val: '100%', label: 'Success Rate', icon: <Award className="w-5 h-5" /> },
            { val: '24/7', label: 'Support', icon: <Clock className="w-5 h-5" /> },
          ].map((s) => (
            <div key={s.label} className="relative rounded-2xl bg-brand-50 border border-brand-100 p-6 text-center overflow-hidden stat-pattern">
              <div className="w-10 h-10 mx-auto bg-white rounded-xl flex items-center justify-center text-brand-600 mb-3 shadow-soft">{s.icon}</div>
              <div className="text-3xl font-extrabold text-red-gradient mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.val}</div>
              <p className="text-sm text-dark-400 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <div className="section-label inline-flex"><Shield className="w-4 h-4" />Our Promise</div>
            <h2 className="section-heading text-3xl md:text-4xl">
              Why <span className="text-red-gradient">DrafJets</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Simple & Scalable', desc: 'Clean code that grows with your project.', icon: <Zap className="w-6 h-6" /> },
              { title: 'Modern Tech', desc: 'Latest frameworks and industry practices.', icon: <Star className="w-6 h-6" /> },
              { title: 'On-time Delivery', desc: 'Rigorous QA and deadline commitment.', icon: <CheckCircle className="w-6 h-6" /> },
              { title: 'Affordable', desc: 'Student-first pricing, premium quality.', icon: <Award className="w-6 h-6" /> },
              { title: 'Live Support', desc: 'Doubt-solving via WhatsApp and calls.', icon: <HeadphonesIcon className="w-6 h-6" /> },
              { title: 'Expert Team', desc: 'Experienced developers and mentors.', icon: <Users className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="card-lift p-7 group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-red">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-dark-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500" />
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10 px-8 py-14 md:px-14 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Have questions? Let&apos;s talk.</h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Get in touch and let&apos;s build something amazing together.</p>
            <Link href="/contact" className="btn-white text-base font-bold" id="about-cta">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

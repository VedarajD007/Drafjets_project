import React from 'react';
import { CheckCircle, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">About DrafJets</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Empowering IT students with professional project solutions
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="p-8 bg-card border border-primary/20 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-foreground/70">
              To provide high-quality, professional mini and major projects that help IT students
              gain practical experience and complete their academic requirements with confidence.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 bg-card border border-primary/20 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-foreground/70">
              To become the most trusted platform for project solutions in India, delivering
              innovative, scalable, and affordable solutions for students across all branches.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose DrafJets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Simple & Scalable', description: 'Easy to understand and implement solutions' },
              { title: 'Modern Technologies', description: 'Built with latest tech stacks and frameworks' },
              { title: 'Reliable Delivery', description: 'On-time delivery with quality assurance' },
              { title: 'Affordable Pricing', description: 'Budget-friendly solutions for students' },
              { title: 'Live Support', description: 'Live doubt solving sessions available' },
              { title: 'Expert Team', description: 'Experienced developers and mentors' },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/60 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-8 bg-card border border-primary/20 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-foreground/60 mb-6">
            Have questions? We'd love to hear from you.
          </p>
          <div className="inline-block">
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

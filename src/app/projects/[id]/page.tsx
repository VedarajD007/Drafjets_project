'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Mail, Phone, ArrowRight, Code, BookOpen, Layers, Zap } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface Project {
  _id: string;
  projectId: string;
  projectName: string;
  category: string;
  domain: string;
  technologyStack: string[];
  branch: string;
  difficultyLevel: string;
  description: string;
  longDescription?: string;
  pdfUrl?: string;
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/projects/${params.id}`);
        if (res.ok) setProject(await res.json());
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    })();
  }, [params.id]);

  const diffColor = (l: string) => {
    if (l === 'Beginner') return 'bg-green-50 text-green-700 border-green-200';
    if (l === 'Intermediate') return 'bg-amber-50 text-amber-700 border-amber-200';
    if (l === 'Advanced') return 'bg-red-50 text-red-700 border-red-200';
    return 'bg-dark-50 text-dark-400 border-dark-200';
  };

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-24">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-dark-300">Loading project...</p>
      </div>
    </div>
  );

  if (!project) return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-24">
      <div className="text-center">
        <BookOpen className="w-12 h-12 text-dark-200 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-dark-900 mb-2">Project not found</h2>
        <Link href="/projects" className="btn-red mt-4"><ArrowLeft className="w-4 h-4" />Back to Projects</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 page-enter">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-dark-300 hover:text-brand-600 transition-colors mb-8 group" id="back-link">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />Back to Projects
        </Link>

        {/* Header */}
        <div className="card p-8 md:p-10 mb-8">
          <div className="flex flex-wrap gap-2.5 mb-5">
            <span className="font-mono text-xs bg-dark-50 px-3 py-1 rounded-lg text-dark-400 border border-dark-100">{project.projectId}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${project.category === 'Major' ? 'bg-brand-50 text-brand-700 border-brand-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>{project.category} Project</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${diffColor(project.difficultyLevel)}`}>{project.difficultyLevel}</span>
            <span className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-bold border border-violet-200">{project.branch}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark-900 mb-4 tracking-tight">{project.projectName}</h1>
          <p className="text-lg text-dark-300 leading-relaxed max-w-3xl">{project.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="card p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600"><BookOpen className="w-5 h-5" /></div>
                <h2 className="text-xl font-bold text-dark-900">About This Project</h2>
              </div>
              <p className="text-dark-400 leading-relaxed">{project.longDescription || project.description}</p>
            </div>
            {/* Tech */}
            <div className="card p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600"><Code className="w-5 h-5" /></div>
                <h2 className="text-xl font-bold text-dark-900">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.technologyStack.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-50 text-brand-700 rounded-xl font-semibold text-sm border border-brand-100 hover:bg-brand-100 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />{t}
                  </span>
                ))}
              </div>
            </div>
            {/* Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6"><div className="flex items-center gap-2 mb-2"><Layers className="w-4 h-4 text-dark-300" /><p className="text-sm text-dark-300">Domain</p></div><p className="text-dark-900 font-bold text-lg">{project.domain}</p></div>
              <div className="card p-6"><div className="flex items-center gap-2 mb-2"><Zap className="w-4 h-4 text-dark-300" /><p className="text-sm text-dark-300">Project ID</p></div><p className="text-dark-900 font-bold text-lg font-mono">{project.projectId}</p></div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="card p-7">
                <h3 className="text-lg font-bold text-dark-900 mb-5">Get This Project</h3>
                {project.pdfUrl && <a href={project.pdfUrl} className="btn-red w-full mb-3" download id="dl-pdf"><Download className="w-5 h-5" />Download PDF</a>}
                <a href={`mailto:${CONTACT_INFO.email}`} className="btn-outline w-full mb-3" id="email-cta"><Mail className="w-5 h-5" />Email Us</a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi, I'm interested in project: ${project.projectName} (${project.projectId})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-green-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  id="wa-cta"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp Us
                </a>
              </div>
              <div className="bg-brand-50 rounded-2xl border border-brand-100 p-6">
                <h4 className="font-bold text-dark-900 mb-3 text-sm">Need help?</h4>
                <p className="text-sm text-dark-300 mb-4 leading-relaxed">Our team is ready for setup, customization, and doubt solving.</p>
                {CONTACT_INFO.phones.map((ph) => (
                  <a key={ph} href={`tel:${ph}`} className="flex items-center gap-2 text-sm text-brand-700 hover:text-brand-800 font-medium mb-1">
                    <Phone className="w-3.5 h-3.5" />+91 {ph}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More CTA */}
        <div className="mt-14 relative rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500" />
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10 px-8 py-12 md:px-14 md:py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">Looking for More Projects?</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Browse our full collection.</p>
            <Link href="/projects" className="btn-white font-bold">View All Projects <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

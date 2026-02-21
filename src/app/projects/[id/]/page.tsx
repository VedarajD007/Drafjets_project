'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, ArrowRight, Code, BookOpen, Layers, Zap, Hash, Globe, ChevronLeft } from 'lucide-react';
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
        if (l === 'Beginner') return 'bg-emerald-50 text-emerald-700 border-emerald-100';
        if (l === 'Intermediate') return 'bg-amber-50 text-amber-700 border-amber-100';
        if (l === 'Advanced') return 'bg-brand-50 text-brand-700 border-brand-100';
        return 'bg-dark-50 text-dark-400 border-dark-100';
    };

    if (loading) return (
        <div className="min-h-screen bg-white flex items-center justify-center pt-32">
            <div className="text-center space-y-4">
                <div className="w-12 h-12 border-4 border-brand-100 border-t-brand-600 rounded-full animate-spin mx-auto" />
                <p className="font-black text-dark-300 tracking-widest uppercase text-[10px]">Loading Specifications...</p>
            </div>
        </div>
    );

    if (!project) return (
        <div className="min-h-screen bg-white flex items-center justify-center pt-32">
            <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-dark-50 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-10 h-10 text-dark-200" />
                </div>
                <div>
                    <h2 className="text-2xl font-black text-dark-900 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Asset Not Found</h2>
                    <p className="text-dark-400">The project requested is currently unavailable.</p>
                </div>
                <Link href="/projects" className="btn-primary uppercase tracking-widest text-xs"><ArrowLeft className="w-4 h-4" /> Back to Library</Link>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 page-enter">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50/20 rounded-full blur-[120px] -z-10" />

            <div className="container-main">
                {/* Breadcrumb / Back Link */}
                <Link href="/projects" className="inline-flex items-center gap-2 group text-sm font-bold text-dark-400 hover:text-brand-600 transition-colors mb-12">
                    <div className="w-8 h-8 rounded-full border border-dark-200 flex items-center justify-center group-hover:border-brand-200 group-hover:bg-brand-50 transition-all">
                        <ChevronLeft className="w-4 h-4" />
                    </div>
                    Return to Project Library
                </Link>

                {/* Project Header */}
                <div className="mb-16 space-y-8 animate-fade-in">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900 text-white rounded-lg text-[9px] font-black uppercase tracking-widest">
                            <Hash className="w-3 h-3" /> {project.projectId}
                        </div>
                        <div className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${diffColor(project.difficultyLevel)}`}>
                            {project.difficultyLevel} Level
                        </div>
                        <div className="px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-dark-100 bg-dark-50 text-dark-500">
                            {project.branch} Specialized
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-7xl font-black text-dark-900 tracking-tighter leading-[1.1]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {project.projectName}
                        </h1>
                        <p className="text-xl md:text-2xl text-dark-500 max-w-4xl leading-relaxed font-medium">
                            {project.description}
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 pt-16 border-t border-dark-100">

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Technical Overview */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                                    <BookOpen className="w-7 h-7" />
                                </div>
                                <h2 className="text-3xl font-black text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Project Brief</h2>
                            </div>
                            <div className="text-xl text-dark-500 leading-relaxed font-medium">
                                {project.longDescription || project.description}
                            </div>
                        </div>

                        {/* Architecture / Tech Stack */}
                        <div className="p-12 rounded-[48px] bg-dark-50 border border-dark-100 space-y-10">
                            <div className="space-y-2 text-center md:text-left">
                                <h3 className="text-2xl font-black text-dark-900 flex items-center gap-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    <Code className="w-6 h-6 text-brand-600" /> Technology Foundation
                                </h3>
                                <p className="text-sm text-dark-400 font-bold uppercase tracking-widest">Core stack used in this implementation</p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {project.technologyStack.map((t) => (
                                    <div key={t} className="flex items-center gap-4 px-8 py-4 bg-white border border-dark-200 rounded-[20px] shadow-sm hover:border-brand-500 transition-all group">
                                        <div className="w-2.5 h-2.5 rounded-full bg-brand-600 group-hover:scale-150 transition-transform" />
                                        <span className="font-black text-dark-900 text-sm uppercase tracking-tight">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Domain Info Cards */}
                        <div className="grid md:grid-cols-2 gap-8 pt-8">
                            <div className="p-10 rounded-[40px] border border-dark-100 flex flex-col gap-6 hover:shadow-premium transition-all">
                                <div className="w-12 h-12 bg-dark-900 text-white rounded-2xl flex items-center justify-center">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-dark-400 uppercase tracking-[0.3em] mb-2">Technical Domain</div>
                                    <div className="text-2xl font-black text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.domain}</div>
                                </div>
                            </div>
                            <div className="p-10 rounded-[40px] border border-dark-100 flex flex-col gap-6 hover:shadow-premium transition-all">
                                <div className="w-12 h-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-dark-400 uppercase tracking-[0.3em] mb-2">Build Type</div>
                                    <div className="text-2xl font-black text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.category} System</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Action Center */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28 space-y-8">

                            {/* Acquisition Card */}
                            <div className="p-10 rounded-[48px] bg-white border-2 border-dark-900 shadow-premium space-y-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-600/5 -translate-y-1/2 translate-x-1/2 rounded-full" />

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-dark-900 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Ready to deploy?</h3>
                                    <p className="text-sm text-dark-400 leading-relaxed font-bold uppercase tracking-tight">Full Source Code • Documentation • VIVA Prep</p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi, I'm interested in the project: ${project.projectName} (${project.projectId})`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-emerald-200 hover:brightness-110 hover:-translate-y-1 transition-all"
                                    >
                                        Direct WhatsApp
                                    </a>

                                    <a
                                        href={`mailto:${CONTACT_INFO.email}?subject=Inquiry: ${project.projectName}`}
                                        className="flex items-center justify-center gap-3 w-full py-5 bg-white border-2 border-dark-900 text-dark-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-dark-50 transition-all"
                                    >
                                        Email Consultation
                                    </a>
                                </div>

                                <div className="pt-10 border-t border-dark-100">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Fast</div>
                                            <div className="text-[9px] font-black text-dark-400 uppercase tracking-widest">Delivery</div>
                                        </div>
                                        <div className="text-center border-l border-dark-100">
                                            <div className="text-2xl font-black text-dark-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Full</div>
                                            <div className="text-[9px] font-black text-dark-400 uppercase tracking-widest">Doubt Solving</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Support Info */}
                            <div className="p-10 rounded-[40px] bg-brand-50 border border-brand-100 space-y-6">
                                <h4 className="font-black text-brand-900 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <Phone className="w-4 h-4" /> Expert Hotlines
                                </h4>
                                <div className="space-y-3">
                                    {CONTACT_INFO.phones.map(ph => (
                                        <a key={ph} href={`tel:${ph}`} className="block text-xl font-black text-brand-600 hover:underline tracking-tight">+91 {ph}</a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Global CTA Banner */}
                <div className="mt-32 rounded-[60px] bg-dark-900 p-16 md:p-24 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="absolute top-0 right-0 w-[500px] h-full bg-brand-600 -skew-x-[30deg] translate-x-1/2 opacity-20" />
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Explore more <br />options?</h2>
                        <p className="text-white/60 text-xl max-w-md font-medium">Browse our full 1k+ repository of verified technical architectures.</p>
                    </div>
                    <Link href="/projects" className="relative z-10 btn-white !px-16 !py-6 !rounded-3xl uppercase tracking-widest font-black text-sm">
                        Open Library <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>

            </div>
        </div>
    );
}

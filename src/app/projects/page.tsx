'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, LayoutGrid, Table2, Database, BookOpen, Hash, Mail, Phone } from 'lucide-react';
import { PROJECT_CATEGORIES, CONTACT_INFO } from '@/lib/constants';

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
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'table' | 'grid'>('table');

  useEffect(() => { fetchProjects(); }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/projects');
      if (res.ok) { const d = await res.json(); setProjects(d); setFiltered(d); }
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  useEffect(() => {
    let f = projects;
    if (category !== 'all') {
      if (category === 'MERN') f = f.filter(p => p.technologyStack.some(t => ['MongoDB', 'Express', 'React', 'Node.js'].includes(t)));
      else if (category === 'ML') f = f.filter(p => p.technologyStack.some(t => ['Python', 'TensorFlow', 'PyTorch', 'ML', 'CNN'].includes(t)));
      else if (category === 'IoT') f = f.filter(p => p.technologyStack.some(t => ['IoT', 'Arduino', 'Raspberry Pi', 'NodeMCU'].includes(t)));
      else if (category === 'ECE') f = f.filter(p => p.branch === 'ECE');
      else f = f.filter(p => p.category === category);
    }
    if (search) {
      const q = search.toLowerCase();
      f = f.filter(p => p.projectName.toLowerCase().includes(q) || p.domain.toLowerCase().includes(q) || p.technologyStack.some(t => t.toLowerCase().includes(q)));
    }
    setFiltered(f);
  }, [category, search, projects]);

  const diffColor = (l: string) => {
    if (l === 'Beginner') return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    if (l === 'Intermediate') return 'bg-amber-50 text-amber-700 border-amber-100';
    if (l === 'Advanced') return 'bg-brand-50 text-brand-700 border-brand-100';
    return 'bg-dark-50 text-dark-400 border-dark-100';
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 page-enter transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50/20 rounded-full blur-[120px] -z-10" />

      <div className="container-main">

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-center md:text-left mx-auto md:mx-0">
          <div className="badge-uniform mx-auto md:mx-0"><BookOpen className="w-4 h-4" />Project Library</div>
          <h1 className="heading-m text-dark-900 !mb-2">
            Academic <span className="text-gradient">Masterpieces</span>
          </h1>
          <p className="text-lg text-dark-500 leading-relaxed">
            Professional mini & major projects architecture for engineering success. Reach out to get started.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-stretch lg:items-center">
          <div className="relative flex-grow group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-300 group-focus-within:text-brand-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-dark-50 border border-dark-200 rounded-2xl focus:outline-none focus:border-brand-300 focus:bg-white transition-all text-dark-900"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {PROJECT_CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${category === c.value
                  ? 'bg-dark-900 text-white border-dark-900 shadow-lg'
                  : 'bg-white text-dark-600 border-dark-200 hover:border-brand-600 hover:text-brand-600'
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex bg-dark-50 p-1.5 rounded-2xl border border-dark-200 ml-auto">
            <button onClick={() => setView('table')} className={`p-2.5 rounded-xl transition-all ${view === 'table' ? 'bg-white text-brand-600 shadow-sm' : 'text-dark-400'}`}><Table2 className="w-5 h-5" /></button>
            <button onClick={() => setView('grid')} className={`p-2.5 rounded-xl transition-all ${view === 'grid' ? 'bg-white text-brand-600 shadow-sm' : 'text-dark-400'}`}><LayoutGrid className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Main Content */}
        {loading ? (
          <div className="py-40 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="w-12 h-12 border-4 border-brand-100 border-t-brand-600 rounded-full animate-spin mx-auto" />
            <p className="font-black text-dark-300 uppercase tracking-widest text-[10px]">Filtering Database...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-40 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-dark-50 flex items-center justify-center text-dark-200"><Database className="w-10 h-10" /></div>
            <h3 className="text-xl font-black text-dark-900">No Projects Found</h3>
            <p className="text-dark-400 max-w-sm">Try clearing your filters or using different search keywords.</p>
          </div>
        ) : view === 'table' ? (
          /* PREMIUM SPACIOUS TABLE */
          <div className="premium-table-container">
            <div className="overflow-x-auto">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th className="w-[120px]">ID</th>
                    <th>Full Project Title</th>
                    <th>Core Domain</th>
                    <th>Tech Stack</th>
                    <th className="text-right">Contact Us</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr key={p._id} className="group cursor-pointer">
                      <td className="font-bold text-dark-400">
                        <div className="flex items-center gap-2 opacity-60">
                          <Hash className="w-3.5 h-3.5" />
                          {p.projectId}
                        </div>
                      </td>
                      <td>
                        <div className="space-y-1.5">
                          <div className="text-[17px] font-black text-dark-900 group-hover:text-brand-600 transition-colors leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {p.projectName}
                          </div>
                          <div className={`inline-flex px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider border ${diffColor(p.difficultyLevel)}`}>
                            {p.difficultyLevel}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-[11px] font-black uppercase tracking-widest text-dark-400">
                          {p.domain}
                        </span>
                      </td>
                      <td>
                        <div className="flex flex-wrap gap-2 max-w-[250px]">
                          {p.technologyStack.slice(0, 3).map(t => (
                            <span key={t} className="text-[10px] font-bold text-dark-400/80 border border-dark-200 px-2 py-0.5 rounded-md uppercase tracking-tight">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="text-right min-w-[280px]">
                        <div className="flex flex-col items-end gap-1.5">
                          <div className="flex gap-3 text-[11px] font-bold text-dark-600">
                            {CONTACT_INFO.phones.map((phone) => (
                              <a
                                key={phone}
                                href={`https://wa.me/${phone}?text=I'm interested in project: ${p.projectName} (${p.projectId})`}
                                className="flex items-center gap-1 hover:text-brand-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Phone className="w-3 h-3 text-brand-600" /> {phone}
                              </a>
                            ))}
                          </div>
                          <a
                            href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${p.projectName}`}
                            className="flex items-center gap-1 text-[11px] font-bold text-dark-400 hover:text-brand-600 transition-colors"
                          >
                            <Mail className="w-3 h-3 text-brand-600" /> {CONTACT_INFO.email}
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* SPACIOUS GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <div
                key={p._id}
                className="group card-uniform flex flex-col items-start space-y-6 !rounded-[40px] !p-10"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-[10px] font-black text-brand-600 uppercase tracking-[0.2em]">{p.projectId}</div>
                  <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border ${diffColor(p.difficultyLevel)}`}>{p.difficultyLevel}</span>
                </div>
                <h3 className="text-2xl font-black text-dark-900 leading-tight group-hover:text-brand-600 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {p.projectName}
                </h3>
                <p className="text-dark-500 text-sm leading-relaxed line-clamp-3 font-medium">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.technologyStack.slice(0, 4).map(t => (
                    <span key={t} className="px-3 py-1 bg-dark-50 text-dark-500 rounded-lg text-[10px] font-black uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <div className="pt-6 w-full border-t border-dark-100 flex flex-col gap-3">
                  <div className="text-[10px] font-black text-dark-300 uppercase tracking-widest">Contact for implementation</div>
                  <div className="flex flex-wrap gap-4">
                    {CONTACT_INFO.phones.map(ph => (
                      <a key={ph} href={`https://wa.me/${ph}`} className="text-xs font-bold text-dark-900 hover:text-brand-600 transition-all flex items-center gap-1">
                        <Phone className="w-3 h-3 text-brand-600" /> {ph}
                      </a>
                    ))}
                  </div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-xs font-bold text-dark-400 hover:text-brand-600 transition-all flex items-center gap-1">
                    <Mail className="w-3 h-3 text-brand-600" /> {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Stats Section */}
        <div className="mt-24 pt-24 border-t border-dark-100 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-12 md:gap-24">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-5xl font-black text-dark-900 tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{projects.length}</div>
              <div className="text-[10px] font-black text-dark-400 uppercase tracking-[0.3em]">Total Systems</div>
            </div>
            <div className="space-y-1 text-center md:text-left">
              <div className="text-5xl font-black text-brand-600 tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>10+</div>
              <div className="text-[10px] font-black text-dark-400 uppercase tracking-[0.3em]">Special Domains</div>
            </div>
            <div className="space-y-1 text-center md:text-left">
              <div className="text-5xl font-black text-dark-900 tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Verified</div>
              <div className="text-[10px] font-black text-dark-400 uppercase tracking-[0.3em]">Code Quality</div>
            </div>
          </div>

          <a href="/contact" className="btn-primary !px-12 !py-5 uppercase tracking-widest text-sm font-black whitespace-nowrap">
            Request Custom Build
          </a>
        </div>
      </div>
    </div>
  );
}

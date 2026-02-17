'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { PROJECT_CATEGORIES } from '@/lib/constants';
import Link from 'next/link';

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
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== 'all') {
      if (selectedCategory === 'MERN') {
        filtered = filtered.filter(p =>
          p.technologyStack.some(t => ['MongoDB', 'Express', 'React', 'Node.js'].includes(t))
        );
      } else if (selectedCategory === 'ML') {
        filtered = filtered.filter(p =>
          p.technologyStack.some(t => ['Python', 'TensorFlow', 'PyTorch', 'ML'].includes(t))
        );
      } else if (selectedCategory === 'IoT') {
        filtered = filtered.filter(p =>
          p.technologyStack.some(t => ['IoT', 'Arduino', 'Raspberry Pi'].includes(t))
        );
      } else if (selectedCategory === 'ECE') {
        filtered = filtered.filter(p => p.branch === 'ECE');
      } else {
        filtered = filtered.filter(p => p.category === selectedCategory);
      }
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.domain.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm, projects]);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-neon bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            Browse our collection of professional projects for IT students
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-primary" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-primary/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">Category:</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-gradient-neon text-background shadow-neon-cyan'
                    : 'bg-card border border-primary/20 text-foreground hover:border-primary/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-card border border-primary/20 rounded-xl overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-foreground/60">Loading projects...</div>
          ) : filteredProjects.length === 0 ? (
            <div className="p-8 text-center text-foreground/60">
              No projects found. Try adjusting your filters.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-primary/20 bg-background">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Project Name</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Domain</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Technology</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Category</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    <tr
                      key={project._id}
                      className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-foreground font-semibold">{project.projectName}</td>
                      <td className="px-6 py-4 text-foreground/60">{project.domain}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologyStack.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologyStack.length > 2 && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              +{project.technologyStack.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.category === 'Major'
                              ? 'bg-secondary/10 text-secondary'
                              : 'bg-success/10 text-success'
                          }`}
                        >
                          {project.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/projects/${project._id}`}
                          className="text-primary hover:text-primary/80 font-semibold text-sm hover:underline"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 bg-card border border-primary/20 rounded-xl text-center">
            <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              {projects.length}
            </div>
            <p className="text-foreground/60 mt-2">Total Projects</p>
          </div>

          <div className="p-8 bg-card border border-primary/20 rounded-xl text-center">
            <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              {new Set(projects.map(p => p.domain)).size}
            </div>
            <p className="text-foreground/60 mt-2">Different Domains</p>
          </div>

          <div className="p-8 bg-card border border-primary/20 rounded-xl text-center">
            <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              {new Set(projects.flatMap(p => p.technologyStack)).size}
            </div>
            <p className="text-foreground/60 mt-2">Technologies Used</p>
          </div>
        </div>
      </div>
    </div>
  );
}

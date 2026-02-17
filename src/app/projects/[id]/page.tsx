'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Mail } from 'lucide-react';

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
  imageUrl?: string;
  pdfUrl?: string;
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, [params.id]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/projects/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data);
      }
    } catch (error) {
      console.error('Failed to fetch project:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground/60">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground/60 mb-4">Project not found</p>
          <Link href="/projects" className="text-primary hover:text-primary/80">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 text-foreground">{project.projectName}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <span
              className={`px-4 py-2 rounded-full font-semibold text-sm ${
                project.category === 'Major'
                  ? 'bg-secondary/10 text-secondary'
                  : 'bg-success/10 text-success'
              }`}
            >
              {project.category}
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm">
              {project.difficultyLevel}
            </span>
            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full font-semibold text-sm">
              {project.branch}
            </span>
          </div>

          <p className="text-foreground/70 text-lg">{project.description}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Details */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="p-8 bg-card border border-primary/20 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">About This Project</h2>
              <p className="text-foreground/70 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="p-8 bg-card border border-primary/20 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologyStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card border border-primary/20 rounded-xl">
                <p className="text-foreground/60 text-sm mb-2">Domain</p>
                <p className="text-foreground font-semibold">{project.domain}</p>
              </div>
              <div className="p-6 bg-card border border-primary/20 rounded-xl">
                <p className="text-foreground/60 text-sm mb-2">Project ID</p>
                <p className="text-foreground font-semibold">{project.projectId}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* CTA Box */}
            <div className="sticky top-20 p-8 bg-gradient-dark border border-primary/20 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-foreground">Get This Project</h3>

              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  className="w-full px-6 py-3 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all duration-200 flex items-center justify-center gap-2 mb-4"
                  download
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              )}

              <a
                href="mailto:drafjet.solutions@gmail.com"
                className="w-full px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-foreground/80">
                  Need help with this project? Contact us for support and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-12 p-8 bg-card border border-primary/20 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Looking for More Projects?</h2>
          <p className="text-foreground/60 mb-6">Browse our full collection of projects</p>
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

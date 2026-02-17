'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogOut, Plus, Trash2, Edit } from 'lucide-react';
import { getAdminToken, setAdminToken, clearAdminToken } from '@/lib/auth';

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

export default function AdminPage() {
  const router = useRouter();
  const [auth, setAuth] = useState<{ username: string; password: string } | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectId: '',
    projectName: '',
    category: 'Mini',
    domain: '',
    technologyStack: '',
    branch: '',
    difficultyLevel: 'Beginner',
    description: '',
  });

  useEffect(() => {
    const token = getAdminToken();
    if (!token) {
      // Show login if not authenticated
      return;
    }
    fetchProjects();
  }, [auth]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const username = (formElement.elements.namedItem('username') as HTMLInputElement).value;
    const password = (formElement.elements.namedItem('password') as HTMLInputElement).value;

    // Check credentials
    if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && 
        password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAdminToken(`${username}-${Date.now()}`);
      setAuth({ username, password });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    clearAdminToken();
    setAuth(null);
    router.push('/');
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          technologyStack: formData.technologyStack.split(',').map(t => t.trim()),
        }),
      });

      if (response.ok) {
        setFormData({
          projectId: '',
          projectName: '',
          category: 'Mini',
          domain: '',
          technologyStack: '',
          branch: '',
          difficultyLevel: 'Beginner',
          description: '',
        });
        fetchProjects();
      }
    } catch (error) {
      console.error('Failed to add project:', error);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await fetch(`/api/projects/${id}`, { method: 'DELETE' });
        fetchProjects();
      } catch (error) {
        console.error('Failed to delete project:', error);
      }
    }
  };

  // Login Page
  if (!auth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-card border border-primary/20 rounded-xl">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-neon bg-clip-text text-transparent">
            admin Login
          </h1>
          <p className="text-foreground/60 mb-6">Enter your credentials to access the admin panel</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-foreground font-semibold mb-2">Username</label>
              <input
                type="text"
                name="username"
                placeholder="admin"
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all"
              />
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary focus:shadow-neon-cyan transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all"
            >
              Login
            </button>
          </form>

          <p className="text-foreground/60 text-sm mt-4 text-center">
            <Link href="/" className="text-primary hover:text-primary/80">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-primary/20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Project Form */}
          <div className="p-8 bg-card border border-primary/20 rounded-xl h-fit lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Plus className="w-6 h-6 text-primary" />
              Add Project
            </h2>

            <form onSubmit={handleAddProject} className="space-y-4">
              <input
                type="text"
                placeholder="Project ID"
                value={formData.projectId}
                onChange={(e) => setFormData({...formData, projectId: e.target.value})}
                required
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Project Name"
                value={formData.projectName}
                onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                required
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary"
              >
                <option>Mini</option>
                <option>Major</option>
              </select>
              <input
                type="text"
                placeholder="Domain"
                value={formData.domain}
                onChange={(e) => setFormData({...formData, domain: e.target.value})}
                required
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Technology Stack (comma separated)"
                value={formData.technologyStack}
                onChange={(e) => setFormData({...formData, technologyStack: e.target.value})}
                required
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Branch"
                value={formData.branch}
                onChange={(e) => setFormData({...formData, branch: e.target.value})}
                required
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              <select
                value={formData.difficultyLevel}
                onChange={(e) => setFormData({...formData, difficultyLevel: e.target.value})}
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
                className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-2 bg-gradient-neon text-background font-semibold rounded-lg hover:shadow-neon-cyan transition-all"
              >
                Add Project
              </button>
            </form>
          </div>

          {/* Projects List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>

            {loading ? (
              <p className="text-foreground/60">Loading projects...</p>
            ) : projects.length === 0 ? (
              <p className="text-foreground/60">No projects yet. Add one to get started!</p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {projects.map((project) => (
                  <div
                    key={project._id}
                    className="p-4 bg-card border border-primary/20 rounded-lg hover:border-primary/50 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-foreground">{project.projectName}</h3>
                        <p className="text-foreground/60 text-sm">{project.domain}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteProject(project._id)}
                        className="text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {project.difficultyLevel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

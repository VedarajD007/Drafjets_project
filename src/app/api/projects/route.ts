import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/project-loader';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rawProjects = await getProjects();

    // Map CSV projects to the format expected by the user's original UI
    const mappedProjects = rawProjects.map(p => ({
      _id: p.id,
      projectId: p.id,
      projectName: p.title,
      category: p.domain, // Use domain as category
      domain: p.domain,
      technologyStack: p.technologies,
      branch: p.domain.includes('IoT') || p.domain.includes('Arduino') ? 'ECE' : 'CSE',
      difficultyLevel: 'Intermediate',
      description: `Professional implementation of ${p.title} using ${p.technologies.join(', ')}.`
    }));

    return NextResponse.json(mappedProjects);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Project from '@/models/Project';

type RouteContext = {
    params: Promise<{ id: string }>;
};

// GET single project
export async function GET(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const { id } = await params;
        await connectDB();
        const project = await Project.findById(id);

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
    }
}

// PUT update project
export async function PUT(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const { id } = await params;
        await connectDB();
        const data = await request.json();

        const project = await Project.findByIdAndUpdate(id, data, { new: true });

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error('Error updating project:', error);
        return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
    }
}

// DELETE project
export async function DELETE(
    request: NextRequest,
    { params }: RouteContext
) {
    try {
        const { id } = await params;
        await connectDB();
        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
    }
}

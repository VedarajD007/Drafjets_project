import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { connectDB } from '@/lib/db';
import Contact from '@/models/Contact';

// POST contact message
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const data = await request.json();

    const contact = await Contact.create(data);
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ error: 'Failed to save contact message' }, { status: 500 });
  }
}

// GET all contacts (admin only)
export async function GET(request: NextRequest) {
  try {
    // Check admin token
    const token = request.headers.get('Authorization');
    if (token !== `Bearer ${process.env.NEXT_PUBLIC_ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}

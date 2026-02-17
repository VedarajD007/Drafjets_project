import { NextRequest, NextResponse } from 'next/server';
import { validateAdminCredentials } from '@/lib/auth';

// POST login
export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (validateAdminCredentials(username, password)) {
      // In a real app, you'd generate a JWT token here
      return NextResponse.json({
        success: true,
        token: `${username}-${Date.now()}`,
        message: 'Login successful',
      });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}

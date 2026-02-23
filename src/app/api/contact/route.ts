import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { connectDB } from '@/lib/db';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

// POST contact message
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const data = await request.json();

    // Save to database
    const contact = await Contact.create(data);

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'drafjet.solutions@gmail.com',
        subject: `New Query from ${data.name}: ${data.subject || 'No Subject'}`,
        text: `
          Name: ${data.name}
          Email: ${data.email}
          Subject: ${data.subject || 'N/A'}
          Message: ${data.message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">New Contact Message</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Subject:</strong> ${data.subject || 'N/A'}</p>
            <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin-top: 15px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${data.message}</p>
            </div>
            <p style="font-size: 12px; color: #666; margin-top: 20px;">This message was sent from the Drafjets.com contact form.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Notification email sent successfully');
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // We don't return error here because the contact was successfully saved to DB
    }

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

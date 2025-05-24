import { Resend } from 'resend';
import { SignupNotificationEmail } from '@/emails/signup-notification';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, businessName, serviceType, paymentType } = body;

    const data = await resend.emails.send({
      from: 'Llama Leads <signups@yourdomain.com>',
      to: ['czmendoza97@gmail.com'], // Replace with your email
      subject: `New Dealer Signup: ${businessName}`,
      react: SignupNotificationEmail({
        firstName,
        lastName,
        businessName,
        serviceType,
        paymentType,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
} 
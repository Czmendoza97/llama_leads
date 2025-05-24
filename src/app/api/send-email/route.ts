import { SignupNotificationEmail } from '@/emails/signup-notification';
import { NextResponse } from 'next/server';

// Move Resend initialization to a separate function
async function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Resend API key is missing');
  }
  const { Resend } = await import('resend');
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, businessName, serviceType, paymentType } = body;
    
    const resend = await getResendClient();

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
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email notification' },
      { status: 500 }
    );
  }
} 
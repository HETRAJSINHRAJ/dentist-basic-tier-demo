import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Phone number validation regex - supports multiple formats:
// (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890, etc.
const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

// Custom phone validation function
const validatePhone = (phone: string) => {
  // Remove all non-digit characters to count actual digits
  const digitsOnly = phone.replace(/\D/g, '');

  // Must have at least 10 digits
  if (digitsOnly.length < 10) {
    return false;
  }

  // Must match the phone regex pattern
  return phoneRegex.test(phone);
};

// Validation schema for contact form (matches client-side validation)
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: z
    .string()
    .email('Invalid email address')
    .max(100, 'Email must be less than 100 characters')
    .toLowerCase(),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine(validatePhone, {
      message: 'Please enter a valid phone number with at least 10 digits',
    }),

  service: z
    .string()
    .min(1, 'Please select a service'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 5; // Maximum 5 submissions per hour per IP

function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count };
}

// Clean up old rate limit records periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60 * 60 * 1000); // Clean up every hour

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': MAX_REQUESTS_PER_WINDOW.toString(),
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = validationResult.data;

    // Sanitize inputs (XSS prevention and phone number cleaning)
    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    const sanitizedName = sanitize(name);
    const sanitizedMessage = sanitize(message);

    // Sanitize phone number - remove any potentially harmful characters while keeping formatting
    const sanitizedPhone = phone.replace(/[<>{}[\]\\]/g, '').trim();

    // Check if required environment variables are set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured. Please contact the administrator.',
        },
        { status: 500 }
      );
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error('ADMIN_EMAIL is not set');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured. Please contact the administrator.',
        },
        { status: 500 }
      );
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: 'DentalCare Contact Form <onboarding@resend.dev>', // Use your verified domain in production
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
                
                <div style="margin: 15px 0;">
                  <strong style="color: #555; display: inline-block; width: 120px;">Name:</strong>
                  <span style="color: #333;">${sanitizedName}</span>
                </div>
                
                <div style="margin: 15px 0;">
                  <strong style="color: #555; display: inline-block; width: 120px;">Email:</strong>
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </div>
                
                <div style="margin: 15px 0;">
                  <strong style="color: #555; display: inline-block; width: 120px;">Phone:</strong>
                  <a href="tel:${sanitizedPhone}" style="color: #667eea; text-decoration: none;">${sanitizedPhone}</a>
                </div>
                
                <div style="margin: 15px 0;">
                  <strong style="color: #555; display: inline-block; width: 120px;">Service:</strong>
                  <span style="color: #333; background: #e8eaf6; padding: 4px 12px; border-radius: 4px; display: inline-block;">${service}</span>
                </div>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h2>
                <p style="color: #333; white-space: pre-wrap; line-height: 1.8; margin: 15px 0;">${sanitizedMessage}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                  <strong>⏰ Received:</strong> ${new Date().toLocaleString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #d1ecf1; border-left: 4px solid #0c5460; border-radius: 4px;">
                <p style="margin: 0; color: #0c5460; font-size: 14px;">
                  <strong>💡 Quick Action:</strong> Reply directly to this email to respond to ${sanitizedName}
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px;">
              <p style="margin: 5px 0;">This email was sent from your DentalCare website contact form</p>
              <p style="margin: 5px 0;">IP Address: ${ip}</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Contact Information:
-------------------
Name: ${sanitizedName}
Email: ${email}
Phone: ${sanitizedPhone}
Service: ${service}

Message:
--------
${sanitizedMessage}

-------------------
Received: ${new Date().toLocaleString()}
IP Address: ${ip}

Reply to this email to respond to ${sanitizedName}.
      `,
    });

    if (emailResult.error) {
      console.error('Resend API error:', emailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send email. Please try again later.',
        },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
        emailId: emailResult.data?.id,
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': MAX_REQUESTS_PER_WINDOW.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}


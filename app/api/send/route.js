
import { Resend } from 'resend';

// Initialize Resend with fallback for build time
const resend = new Resend(process.env.RESEND_API_KEY || 'fallback_key_for_build');

export async function POST(request) {
  try {
    // Check if API key is properly configured at runtime
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'fallback_key_for_build') {
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const { name, email, message } = await request.json();

    // Validate the data
    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h1 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h1>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #10b981; margin-bottom: 15px; font-size: 18px;">Contact Details</h2>
              <p style="margin: 10px 0; color: #333;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px;">
              <h2 style="color: #10b981; margin-bottom: 15px; font-size: 18px;">Message</h2>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981; color: #333; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e6fffa; border-radius: 6px;">
              <p style="margin: 0; font-size: 14px; color: #0d9488;">
                This message was sent from the Backternity contact form.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Backternity Contact <team@backternity.dev>',
      to: ['sparshsharmadav@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      html: htmlContent,
      replyTo: email,   
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });
  } catch (error) {
    console.error('API route error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
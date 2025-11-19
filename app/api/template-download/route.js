import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'fallback_key_for_build');

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'fallback_key_for_build') {
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const { email, templateName, templateSlug } = await request.json();

    if (!email || !templateName || !templateSlug) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Template Download Notification</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h1 style="color: #333; margin-bottom: 20px;">🎉 New Template Download</h1>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #10b981; margin-bottom: 15px; font-size: 18px;">Download Details</h2>
              <p style="margin: 10px 0; color: #333;"><strong>User Email:</strong> ${email}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Template:</strong> ${templateName}</p>
              <p style="margin: 10px 0; color: #333;"><strong>Template Slug:</strong> ${templateSlug}</p>
              <p style="margin: 10px 0; color: #666;"><strong>Downloaded At:</strong> ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZoneName: 'short'
              })}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e6fffa; border-radius: 6px;">
              <p style="margin: 0; font-size: 14px; color: #0d9488;">
                A user has downloaded a template from Backternity. You may want to follow up with them.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Backternity Templates <team@backternity.dev>',
      to: ['sparshsharmadav@gmail.com'],
      subject: `Template Download: ${templateName} - ${email}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send notification' }, { status: 500 });
    }

    return Response.json({ 
      success: true, 
      message: 'Download notification sent successfully',
      data 
    });
  } catch (error) {
    console.error('API route error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

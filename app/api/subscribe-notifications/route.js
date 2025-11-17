import { Resend } from 'resend';

// Initialize Resend with fallback for build time
const resend = new Resend(process.env.RESEND_API_KEY || 'fallback_key_for_build');

export async function POST(request) {
  try {
    // Check if API key is properly configured at runtime
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'fallback_key_for_build') {
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const { email } = await request.json();

    // Validate email
    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create HTML email template for notification subscription
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Component Notification Subscription</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h1 style="color: #333; margin-bottom: 20px;">🔔 New Component Notification Subscription</h1>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #10b981; margin-bottom: 15px; font-size: 18px;">Subscriber Details</h2>
              <p style="margin: 10px 0; color: #333;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0; color: #666; font-size: 14px;">
                This user wants to be notified when new components are released.
              </p>
            </div>
            
            <div style="background-color: #e6fffa; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981;">
              <p style="margin: 0; font-size: 14px; color: #0d9488;">
                <strong>Action Required:</strong> Add this email to your notification list for component releases.
              </p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f0fdf4; border-radius: 6px;">
              <p style="margin: 0; font-size: 12px; color: #16a34a;">
                Subscribed from: <strong>backternity.dev</strong><br>
                Timestamp: ${new Date().toLocaleString('en-US', { 
                  timeZone: 'UTC',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Create plain text version
    const textContent = `
New Component Notification Subscription

Subscriber Email: ${email}

This user wants to be notified when new components are released.

Action Required: Add this email to your notification list for component releases.

Subscribed from: backternity.dev
Timestamp: ${new Date().toLocaleString('en-US', { 
  timeZone: 'UTC',
  dateStyle: 'full',
  timeStyle: 'long'
})}
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Backternity Notifications <team@backternity.dev>',
      to: ['sparshsharmadav@gmail.com'], // Your email to receive notifications
      subject: '🔔 New Component Notification Subscription',
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      return Response.json({ error: 'Failed to send notification subscription' }, { status: 500 });
    }

    // Also send confirmation email to the subscriber
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to Backternity Notifications</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h1 style="color: #10b981; margin-bottom: 20px;">🎉 You're Subscribed!</h1>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <p style="margin: 10px 0; color: #333; line-height: 1.6;">
                Thank you for subscribing to <strong>Backternity</strong> component notifications!
              </p>
              <p style="margin: 10px 0; color: #333; line-height: 1.6;">
                You'll receive updates whenever we release new backend components, including:
              </p>
              <ul style="color: #333; line-height: 1.8;">
                <li>🔐 Authentication & Authorization modules</li>
                <li>💾 Database connectors & integrations</li>
                <li>📡 Real-time communication components</li>
                <li>💳 Payment gateway integrations</li>
                <li>📧 Email & notification services</li>
                <li>And much more...</li>
              </ul>
            </div>
            
            <div style="background-color: #e6fffa; padding: 15px; border-radius: 6px; text-align: center;">
              <p style="margin: 0 0 15px 0; color: #0d9488;">
                Build scalable backends with one command.
              </p>
              <a href="https://backternity.dev/browse/auth-jwt" 
                 style="display: inline-block; background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Browse Components
              </a>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f0fdf4; border-radius: 6px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #16a34a;">
                Questions? Reply to this email or visit <a href="https://backternity.dev" style="color: #10b981;">backternity.dev</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: 'Backternity <onboarding@resend.dev>',
      to: [email],
      subject: '🎉 Welcome to Backternity Component Notifications',
      html: confirmationHtml,
    });

    return Response.json({ 
      success: true, 
      message: 'Successfully subscribed to notifications' 
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing notification subscription:', error);
    return Response.json({ 
      error: 'Internal server error. Please try again later.' 
    }, { status: 500 });
  }
}

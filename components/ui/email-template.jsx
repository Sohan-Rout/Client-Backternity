import * as React from 'react';

export function EmailTemplate({ name, email, message }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          New Contact Form Submission
        </h1>
        
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '6px', marginBottom: '20px' }}>
          <h2 style={{ color: '#10b981', marginBottom: '15px', fontSize: '18px' }}>
            Contact Details
          </h2>
          
          <p style={{ margin: '10px 0', color: '#333' }}>
            <strong>Name:</strong> {name}
          </p>
          
          <p style={{ margin: '10px 0', color: '#333' }}>
            <strong>Email:</strong> {email}
          </p>
        </div>
        
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '6px' }}>
          <h2 style={{ color: '#10b981', marginBottom: '15px', fontSize: '18px' }}>
            Message
          </h2>
          
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '4px',
            borderLeft: '4px solid #10b981',
            color: '#333',
            lineHeight: '1.6'
          }}>
            {message}
          </div>
        </div>
        
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e6fffa', borderRadius: '6px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#0d9488' }}>
            This message was sent from the Backternity contact form.
          </p>
        </div>
      </div>
    </div>
  );
}
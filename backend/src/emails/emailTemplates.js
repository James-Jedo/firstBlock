export function createWelcomeTemplate(name, clientUrl){

  const year = new Date().getFullYear();


 return `
 <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #2c3e50; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; }
        .wrapper { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { font-size: 28px; margin-bottom: 10px; font-weight: 700; }
        .header p { font-size: 14px; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 18px; color: #2c3e50; margin-bottom: 20px; }
        .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
        .feature-box { background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; border-radius: 8px; text-align: center; }
        .feature-box .icon { font-size: 32px; margin-bottom: 10px; }
        .feature-box h3 { font-size: 14px; color: #667eea; margin-bottom: 8px; }
        .feature-box p { font-size: 12px; color: #666; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 40px; text-decoration: none; border-radius: 8px; margin: 25px 0; font-weight: 600; transition: transform 0.3s; }
        .cta-button:hover { transform: translateY(-2px); }
        .divider { height: 1px; background: #e0e0e0; margin: 30px 0; }
        .info-box { background: #f0f4ff; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .info-box strong { color: #667eea; }
        .footer { background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0; }
        .footer p { font-size: 12px; color: #999; margin: 8px 0; }
        .social-links { margin: 15px 0; }
        .social-links a { display: inline-block; width: 36px; height: 36px; background: #667eea; color: white; text-align: center; line-height: 36px; border-radius: 50%; margin: 0 5px; text-decoration: none; font-size: 16px; }
        .highlight { color: #667eea; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>🚀 Welcome to ChatApp</h1>
          <p>Your new communication hub awaits!</p>
        </div>
        <div class="content">
          <div class="greeting">Hi <span class="highlight">${name}</span>,</div>
          <p>Welcome aboard! We're thrilled to have you join the <strong>ChatApp</strong> community. You're now part of a platform that connects people and brings conversations to life.</p>
          
          <div class="feature-grid">
            <div class="feature-box">
              <div class="icon">💬</div>
              <h3>Real-time Chat</h3>
              <p>Instant messaging with friends</p>
            </div>
            <div class="feature-box">
              <div class="icon">👥</div>
              <h3>Group Chats</h3>
              <p>Connect with multiple people</p>
            </div>
            <div class="feature-box">
              <div class="icon">🔔</div>
              <h3>Notifications</h3>
              <p>Never miss a message</p>
            </div>
            <div class="feature-box">
              <div class="icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your conversations are safe</p>
            </div>
          </div>

          <center>
            <a href="${clientUrl}" class="cta-button">Open ChatApp</a>
          </center>

         <!-- <div class="info-box">
            <strong>⏱️ Verification expires in 24 hours</strong>
            <p style="margin-top: 8px; font-size: 13px;">If you didn't create this account, please ignore this email.</p>
          </div>
            -->

          <div class="divider"></div>

          <p>Here's what you can do next:</p>
          <ul style="margin: 15px 0 15px 20px; color: #555;">
            <li>Complete your profile to let others find you</li>
            <li>Start a conversation with friends</li>
            <li>Explore groups and join communities</li>
            <li>Customize your notification preferences</li>
          </ul>

         <!-- <p>Questions? Check out our <strong><a href="{{helpLink}}" style="color: #667eea; text-decoration: none;">help center</a></strong> or reach out to our support team at <span class="highlight">{{supportEmail}}</span></p>
        </div> -->
        <div class="footer">
          <p><strong>ChatApp</strong></p>
          <div class="social-links">
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Instagram">📷</a>
          </div>
          <p>&copy; ${year} ChatApp. All rights reserved.</p>
          <p><a href="#" style="color: #667eea; text-decoration: none;">Privacy Policy</a> | <a href="#" style="color: #667eea; text-decoration: none;">Terms of Service</a></p>
        </div>
      </div>
    </body>
    </html>
  `
}


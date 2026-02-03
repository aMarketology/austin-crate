import { NextRequest, NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'

// Initialize Mailjet with API key and secret (only if keys are available)
const mailjet = process.env.MAILJET_API_KEY && process.env.MAILJET_SECRET_KEY
  ? Mailjet.apiConnect(
      process.env.MAILJET_API_KEY,
      process.env.MAILJET_SECRET_KEY
    )
  : null

export async function POST(request: NextRequest) {
  console.log('📧 Contact form submission received')
  
  // Check if Mailjet is configured
  if (!mailjet) {
    console.error('❌ Mailjet is not configured')
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact the administrator.' },
      { status: 500 }
    )
  }
  
  try {
    const body = await request.json()
    console.log('📋 Form data received:', JSON.stringify(body, null, 2))
    
    const { name, email, phone, serviceType, length, width, height, weight, zipcode, message } = body

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !length || !width || !height || !weight) {
      console.log('❌ Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    console.log('✅ Validation passed, preparing to send email...')

    // Format the email content
    const serviceLabel = serviceType === 'shipping' ? 'Shipping Service' : 'Crate Purchase Only'
    
    const emailContent = `
New Quote Request from Austin Crate Website

CONTACT INFORMATION
--------------------
Name: ${name}
Email: ${email}
Phone: ${phone}

SERVICE DETAILS
---------------
Service Type: ${serviceLabel}
Dimensions: ${length}" L x ${width}" W x ${height}" H
Weight: ${weight} lbs
${serviceType === 'shipping' ? `Destination Zipcode: ${zipcode}` : ''}

ADDITIONAL DETAILS
------------------
${message || 'No additional details provided.'}

---
This message was sent from the Austin Crate website contact form.
    `.trim()

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1e6b4a; color: white; padding: 20px; text-align: center; }
    .section { margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 8px; }
    .section-title { font-weight: bold; color: #1e6b4a; margin-bottom: 10px; border-bottom: 2px solid #1e6b4a; padding-bottom: 5px; }
    .field { margin: 8px 0; }
    .label { font-weight: bold; color: #555; }
    .footer { text-align: center; color: #888; font-size: 12px; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Quote Request</h1>
      <p>Austin Crate & Freight</p>
    </div>
    
    <div class="section">
      <div class="section-title">Contact Information</div>
      <div class="field"><span class="label">Name:</span> ${name}</div>
      <div class="field"><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></div>
      <div class="field"><span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a></div>
    </div>
    
    <div class="section">
      <div class="section-title">Service Details</div>
      <div class="field"><span class="label">Service Type:</span> ${serviceLabel}</div>
      <div class="field"><span class="label">Dimensions:</span> ${length}" L x ${width}" W x ${height}" H</div>
      <div class="field"><span class="label">Weight:</span> ${weight} lbs</div>
      ${serviceType === 'shipping' ? `<div class="field"><span class="label">Destination Zipcode:</span> ${zipcode}</div>` : ''}
    </div>
    
    <div class="section">
      <div class="section-title">Additional Details</div>
      <p>${message || 'No additional details provided.'}</p>
    </div>
    
    <div class="footer">
      <p>This message was sent from the Austin Crate website contact form.</p>
    </div>
  </div>
</body>
</html>
    `.trim()

    // Get notification emails from environment variables
    const notificationEmails = [
      process.env.NOTIFICATION_EMAIL_1,
      process.env.NOTIFICATION_EMAIL_2
    ].filter(Boolean) as string[] // Filter out any undefined values

    console.log('📬 Sending to:', notificationEmails)

    // Send separate emails to each recipient using Mailjet
    const emailPromises = notificationEmails.map(async (recipientEmail) => {
      console.log(`📧 Sending email to: ${recipientEmail}`)
      
      const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: 'info@amarketology.com',
                Name: 'Austin Crate'
              },
              To: [
                {
                  Email: recipientEmail,
                  Name: 'Austin Crate Team'
                }
              ],
              ReplyTo: {
                Email: email,
                Name: name
              },
              Subject: `New Quote Request from ${name} - Austin Crate`,
              TextPart: emailContent,
              HTMLPart: htmlContent
            }
          ]
        })
      
      return request
    })

    await Promise.all(emailPromises)
    console.log('✅ All emails sent successfully!')

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error: any) {
    console.error('❌ Mailjet error:', error)
    
    // Log detailed error info
    if (error.statusCode) {
      console.error('Mailjet response:', JSON.stringify(error.response?.body || error, null, 2))
    }
    
    return NextResponse.json(
      { error: 'Failed to send email', details: error.response?.body || error.message },
      { status: 500 }
    )
  }
}

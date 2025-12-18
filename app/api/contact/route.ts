import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  console.log('📧 Contact form submission received')
  
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

    // Send email via SendGrid
    const msg = {
      to: notificationEmails, // Send to both notification emails
      from: 'info@amarketology.com', // Verified sender in SendGrid
      replyTo: email, // Customer's email for easy reply
      subject: `New Quote Request from ${name} - Austin Crate`,
      text: emailContent,
      html: htmlContent,
    }

    await sgMail.send(msg)
    console.log('✅ Email sent successfully!')

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error: any) {
    console.error('❌ SendGrid error:', error)
    
    // Log detailed error info
    if (error.response) {
      console.error('SendGrid response body:', JSON.stringify(error.response.body, null, 2))
    }
    
    return NextResponse.json(
      { error: 'Failed to send email', details: error.response?.body?.errors || error.message },
      { status: 500 }
    )
  }
}

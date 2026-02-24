import { NextRequest, NextResponse } from 'next/server'
import Mailgun from 'mailgun.js'
import FormData from 'form-data'
import Mailjet from 'node-mailjet'

// Initialize Mailgun
const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY!,
})

// Initialize Mailjet
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_SECRET_KEY!,
})

export async function POST(request: NextRequest) {
  console.log('📧 Contact form submission received')
  
  try {
    const body = await request.json()
    console.log('📋 Form data received:', JSON.stringify(body, null, 2))
    
    const { name, email, phone, serviceType, length, width, height, weight, zipcode, message, sourceUrl } = body

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
    const leadSource = sourceUrl || 'Unknown'
    
    const emailContent = `
NEW QUOTE REQUEST — Austin Crate & Freight
==========================================

CONTACT INFORMATION
-------------------
Name:   ${name}
Email:  ${email}
Phone:  ${phone}

SERVICE DETAILS
---------------
Service Type: ${serviceLabel}
Dimensions:   ${length}" L x ${width}" W x ${height}" H
Weight:       ${weight} lbs
${serviceType === 'shipping' ? `Destination:  ${zipcode}` : ''}

ADDITIONAL DETAILS
------------------
${message || 'No additional details provided.'}

LEAD SOURCE
-----------
${leadSource}

---
Austin Crate & Freight · (512) 240-9818 · austincrate.com
    `.trim()

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #f3f4f6; font-family: 'Helvetica Neue', Arial, sans-serif; color: #374151; }
    .wrapper { max-width: 620px; margin: 32px auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    /* Header */
    .header { background: linear-gradient(135deg, #1a3d28 0%, #2d5f3f 60%, #3d8b5c 100%); padding: 36px 32px; text-align: center; }
    .header-logo { font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 0.5px; margin-bottom: 4px; }
    .header-sub { font-size: 13px; color: rgba(255,255,255,0.75); letter-spacing: 1px; text-transform: uppercase; }
    .header-badge { display: inline-block; margin-top: 14px; background: rgba(255,255,255,0.15); color: #fff; font-size: 14px; font-weight: 600; padding: 6px 18px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.3); }
    /* Alert bar */
    .alert-bar { background: #d4a5a5; text-align: center; padding: 10px 16px; font-size: 13px; font-weight: 700; color: #1a3d28; letter-spacing: 0.3px; }
    /* Body */
    .body { padding: 28px 32px; }
    .section { margin-bottom: 22px; }
    .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #2d5f3f; border-bottom: 2px solid #2d5f3f; padding-bottom: 6px; margin-bottom: 14px; }
    .field { display: flex; gap: 10px; padding: 7px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
    .field:last-child { border-bottom: none; }
    .field-label { font-weight: 600; color: #6b7280; min-width: 130px; flex-shrink: 0; }
    .field-value { color: #111827; }
    .field-value a { color: #2d5f3f; text-decoration: none; font-weight: 600; }
    .message-box { background: #f9fafb; border-left: 4px solid #2d5f3f; border-radius: 4px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #374151; }
    .source-box { background: #f3f4f6; border-radius: 6px; padding: 10px 14px; font-size: 12px; color: #6b7280; word-break: break-all; }
    .source-box a { color: #2d5f3f; text-decoration: none; }
    /* CTA */
    .cta { text-align: center; padding: 8px 0 24px; }
    .cta a { display: inline-block; background: #2d5f3f; color: #fff; font-size: 14px; font-weight: 700; padding: 12px 32px; border-radius: 6px; text-decoration: none; letter-spacing: 0.3px; }
    /* Footer */
    .footer { background: #1a3d28; padding: 20px 32px; text-align: center; }
    .footer p { color: rgba(255,255,255,0.6); font-size: 12px; line-height: 1.7; }
    .footer a { color: rgba(255,255,255,0.85); text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">

    <div class="header">
      <div class="header-logo">Austin Crate & Freight</div>
      <div class="header-sub">White-Glove Specialty Shipping · Austin, TX</div>
      <div class="header-badge">&#128228; New Quote Request</div>
    </div>

    <div class="alert-bar">Action Required — A new lead has submitted a quote request</div>

    <div class="body">

      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="field"><span class="field-label">Name</span><span class="field-value">${name}</span></div>
        <div class="field"><span class="field-label">Email</span><span class="field-value"><a href="mailto:${email}">${email}</a></span></div>
        <div class="field"><span class="field-label">Phone</span><span class="field-value"><a href="tel:${phone}">${phone}</a></span></div>
      </div>

      <div class="section">
        <div class="section-title">Service Details</div>
        <div class="field"><span class="field-label">Service Type</span><span class="field-value">${serviceLabel}</span></div>
        <div class="field"><span class="field-label">Dimensions</span><span class="field-value">${length}&quot; L &times; ${width}&quot; W &times; ${height}&quot; H</span></div>
        <div class="field"><span class="field-label">Weight</span><span class="field-value">${weight} lbs</span></div>
        ${serviceType === 'shipping' ? `<div class="field"><span class="field-label">Destination ZIP</span><span class="field-value">${zipcode}</span></div>` : ''}
      </div>

      <div class="section">
        <div class="section-title">Additional Details</div>
        <div class="message-box">${message || 'No additional details provided.'}</div>
      </div>

      <div class="section">
        <div class="section-title">Lead Source</div>
        <div class="source-box"><a href="${leadSource}" target="_blank">${leadSource}</a></div>
      </div>

      <div class="cta">
        <a href="mailto:${email}?subject=Re: Your Austin Crate Quote Request">Reply to ${name}</a>
      </div>

    </div>

    <div class="footer">
      <p>
        <strong style="color:#fff">Austin Crate & Freight</strong><br />
        <a href="tel:5122409818">(512) 240-9818</a> &nbsp;·&nbsp;
        <a href="https://austincrate.com">austincrate.com</a><br />
        Serving Austin, Round Rock, Cedar Park &amp; Georgetown, TX
      </p>
    </div>

  </div>
</body>
</html>
    `.trim()

    // Notification recipients
    const notificationEmails = [
      process.env.NOTIFICATION_EMAIL_1,
      process.env.NOTIFICATION_EMAIL_2,
    ].filter(Boolean) as string[]

    console.log('📬 Sending to:', notificationEmails)

    const subject = `New Quote Request from ${name} - Austin Crate`

    // ── Primary: Mailgun ──────────────────────────────────────────────────────
    try {
      await Promise.all(
        notificationEmails.map(recipient =>
          mg.messages.create(process.env.MAILGUN_DOMAIN!, {
            from: process.env.MAILGUN_FROM!,
            to: recipient,
            'h:Reply-To': email,
            subject,
            text: emailContent,
            html: htmlContent,
          })
        )
      )
      console.log('[email] Sent via Mailgun')
      return NextResponse.json({ success: true, message: 'Email sent successfully' })
    } catch (mailgunError: any) {
      console.error('⚠️ Mailgun failed, trying Mailjet fallback:', mailgunError?.message)
    }

    // ── Fallback: Mailjet ─────────────────────────────────────────────────────
    try {
      await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: notificationEmails.map(recipient => ({
          From: { Email: 'info@amarketology.com', Name: 'Austin Crate' },
          To: [{ Email: recipient }],
          ReplyTo: { Email: email, Name: name },
          Subject: subject,
          TextPart: emailContent,
          HTMLPart: htmlContent,
        })),
      })
      console.log('[email] Sent via Mailjet fallback')
      return NextResponse.json({ success: true, message: 'Email sent successfully' })
    } catch (mailjetError: any) {
      console.error('❌ Mailjet fallback also failed:', mailjetError?.message)
      return NextResponse.json(
        { error: 'Failed to send email', details: mailjetError?.message },
        { status: 500 }
      )
    }

  } catch (error: any) {
    console.error('❌ Unexpected error in contact route:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}

# Mailjet Migration Guide

## Overview
The contact form has been successfully migrated from SendGrid to Mailjet for email delivery.

## Changes Made

### 1. Package Dependencies
- **Removed**: `@sendgrid/mail` (^8.1.6)
- **Added**: `node-mailjet` (^6.0.6)

### 2. Environment Variables
Updated `.env` and `.env.example` with new Mailjet credentials:

```env
# Old SendGrid variables (REMOVED)
SENDGRID_API_KEY=
CONTACT_EMAIL=

# New Mailjet variables (ADDED)
MAILJET_API_KEY=66fdc7247a4cfc195feaba2e8761f5c4
MAILJET_SECRET_KEY=477fb06006380c7c18549efbab2dfb8b
NOTIFICATION_EMAIL_1=hello@austincrate.com
NOTIFICATION_EMAIL_2=info@amarketology.com
```

### 3. API Route Updated
File: `app/api/contact/route.ts`

**Key Changes**:
- Import statement changed from `@sendgrid/mail` to `node-mailjet`
- Mailjet client initialization using API key and secret
- Email sending logic updated to use Mailjet's API v3.1
- Error handling updated for Mailjet response format
- Support for multiple notification recipients

### 4. Documentation Updated
- `README.md` - Updated all references from SendGrid to Mailjet
- `LAUNCH-CHECKLIST.md` - Updated setup steps and references
- `.env.example` - Updated with Mailjet credentials format

## Setup Instructions

### 1. Install Dependencies
```bash
npm install node-mailjet
```

### 2. Configure Environment Variables
Create or update `.env.local` with your Mailjet credentials:

```env
MAILJET_API_KEY=your_api_key_here
MAILJET_SECRET_KEY=your_secret_key_here
NOTIFICATION_EMAIL_1=hello@austincrate.com
NOTIFICATION_EMAIL_2=info@amarketology.com
```

### 3. Verify Sender Email in Mailjet
1. Go to https://app.mailjet.com/account/sender
2. Add and verify `info@amarketology.com` as a sender
3. Configure SPF and DKIM records for your domain

### 4. Test the Contact Form
1. Start the development server: `npm run dev`
2. Navigate to the contact page
3. Submit a test form
4. Check both notification emails for delivery

## API Configuration

### Mailjet Settings
- **API Version**: v3.1
- **Sender Email**: info@amarketology.com
- **Sender Name**: Austin Crate
- **Reply-To**: Customer's email from form submission

### Email Structure
Each form submission sends emails to:
1. `NOTIFICATION_EMAIL_1` (hello@austincrate.com)
2. `NOTIFICATION_EMAIL_2` (info@amarketology.com)

Both emails contain:
- HTML formatted version with styled layout
- Plain text version for compatibility
- Customer's email as reply-to for easy responses
- All form fields (dimensions, weight, service type, etc.)

## Benefits of Mailjet

1. **Better Deliverability**: Mailjet has excellent deliverability rates
2. **Free Tier**: 6,000 emails/month free (vs SendGrid's 100/day)
3. **Multiple Recipients**: Native support for multiple notification emails
4. **Better Analytics**: Detailed tracking and statistics
5. **GDPR Compliant**: Better for European customers

## Troubleshooting

### Email Not Sending
1. Check API credentials are correct in `.env.local`
2. Verify sender email is authenticated in Mailjet dashboard
3. Check Mailjet dashboard for error logs
4. Ensure SPF/DKIM records are configured

### Test Email Delivery
```bash
# Check server logs for detailed error messages
npm run dev
# Look for logs starting with 📧, ✅, or ❌
```

### Common Issues
- **401 Unauthorized**: Invalid API key or secret
- **403 Forbidden**: Sender email not verified
- **404 Not Found**: Check API endpoint and version

## Support Resources

- **Mailjet Dashboard**: https://app.mailjet.com
- **Mailjet API Docs**: https://dev.mailjet.com/email/guides/
- **Support**: https://www.mailjet.com/support/

## Rollback (If Needed)

To rollback to SendGrid:
```bash
# Reinstall SendGrid
npm install @sendgrid/mail

# Restore environment variables
SENDGRID_API_KEY=your_sendgrid_key

# Revert app/api/contact/route.ts from git history
git checkout HEAD~1 -- app/api/contact/route.ts
```

---

**Migration completed on**: February 3, 2026
**Developer**: GitHub Copilot

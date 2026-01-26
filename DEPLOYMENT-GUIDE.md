# 🚀 Production Deployment Guide
## Austin Crate & Freight - Enterprise SEO Setup

This guide will walk you through deploying the site with full enterprise-level SEO.

---

## 📋 Pre-Deployment Checklist

### 1. Environment Variables

Create `.env.local` file (copy from `.env.example`):

```bash
# Copy example file
cp .env.example .env.local
```

Fill in these required values:

```env
# Required: Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Required: SendGrid (for contact form)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Required: Contact email
CONTACT_EMAIL=info@austincrate.com

# Required: Site URL
NEXT_PUBLIC_SITE_URL=https://austincrate.com
```

### 2. Google Analytics 4 Setup

1. Go to https://analytics.google.com
2. Create new property: "Austin Crate & Freight"
3. Select "Web" platform
4. Copy Measurement ID (format: `G-XXXXXXXXXX`)
5. Add to `.env.local` as `NEXT_PUBLIC_GA_ID`

### 3. Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property: `https://austincrate.com`
3. Verify ownership (HTML tag method):
   - Copy verification code
   - Replace `your-google-verification` in `app/layout.tsx` (line 126)
4. Submit sitemap: `https://austincrate.com/sitemap.xml`

### 4. SendGrid Setup (Contact Form)

1. Go to https://sendgrid.com
2. Create account
3. Generate API key (Settings > API Keys)
4. Add to `.env.local` as `SENDGRID_API_KEY`
5. Verify sender email: info@austincrate.com

### 5. Create OG Images

Create these images in `public/` directory:

- **og-image.jpg** (1200x630px) - Default social media image
- **hero-image.jpg** - Homepage hero
- **services-overview.jpg** - Services page image

### 6. Update Verification Codes

Replace placeholders in `app/layout.tsx`:

```typescript
// Line 126: Google verification
<meta name="google-site-verification" content="YOUR_ACTUAL_CODE_HERE" />

// Lines 93-95: Optional verifications
verification: {
  google: 'YOUR_ACTUAL_CODE',
  yandex: 'YOUR_ACTUAL_CODE', // Optional
  yahoo: 'YOUR_ACTUAL_CODE',  // Optional
}
```

---

## 🔧 Build & Deploy

### Local Testing

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel --prod
```

4. **Add Environment Variables** in Vercel Dashboard:
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.local`
   - Redeploy

### Deploy to Other Platforms

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Custom Server (Node.js)
```bash
# Build for production
npm run build

# Start server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "austin-crate" -- start
```

---

## 🎯 Post-Deployment Tasks

### Immediate (Day 1)

- [ ] **Verify site is live**: Visit https://austincrate.com
- [ ] **Test all pages**: Check navigation, links, forms
- [ ] **Verify SSL**: Ensure HTTPS is working
- [ ] **Check mobile responsiveness**: Test on multiple devices
- [ ] **Test contact form**: Send test submission
- [ ] **Verify Analytics**: Check GA4 real-time reports

### Week 1

- [ ] **Submit sitemap** to Google Search Console
- [ ] **Submit sitemap** to Bing Webmaster Tools
- [ ] **Verify structured data**: https://search.google.com/test/rich-results
- [ ] **Check page speed**: https://pagespeed.web.dev
- [ ] **Set up Google Business Profile**
- [ ] **Create social media profiles** (Facebook, Instagram, LinkedIn)

### Month 1

- [ ] **Monitor Search Console** for indexing issues
- [ ] **Review analytics data**
- [ ] **Check keyword rankings**
- [ ] **Build initial backlinks** (directories, local listings)
- [ ] **Create Google Posts** (if using Google Business Profile)

---

## 🔍 SEO Verification

### Rich Results Test

Test structured data:
```
https://search.google.com/test/rich-results
```

Enter your URLs:
- https://austincrate.com
- https://austincrate.com/services/fine-art
- https://austincrate.com/locations/round-rock
- https://austincrate.com/contact

Should show:
- ✅ Organization
- ✅ Service
- ✅ LocalBusiness
- ✅ FAQ
- ✅ Review Aggregation
- ✅ Breadcrumbs

### Schema Validator

Validate JSON-LD:
```
https://validator.schema.org
```

### PageSpeed Insights

Test performance:
```
https://pagespeed.web.dev
```

Target scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 📊 Analytics Setup

### Google Analytics 4 Events

The site automatically tracks:

- **Page views** (automatic)
- **Quote requests** (contact form submissions)
- **Phone clicks** (tel: links)
- **Service page views**
- **Location page views**
- **Resource views**

### Custom Event Tracking

Add to any component:

```typescript
import { trackConversion } from '@/lib/analytics'

// Track quote request
const handleSubmit = () => {
  trackConversion('quote_request')
  // ... form logic
}
```

### Goals & Conversions

Set up in GA4:
1. **Conversions** > **New conversion event**
2. Add these events:
   - `conversion` (form submissions)
   - `phone_call` (phone clicks)
   - `quote_request` (quote form)

---

## 🌐 Domain Setup

### DNS Configuration

Point domain to hosting:

#### Vercel
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

#### Netlify
```
A     @     75.2.60.5
CNAME www   austin-crate.netlify.app
```

### SSL Certificate

- **Vercel**: Automatic HTTPS
- **Netlify**: Automatic HTTPS
- **Custom**: Use Let's Encrypt

---

## 🔐 Security

### Environment Variables

Never commit to git:
```bash
# .gitignore already includes:
.env.local
.env*.local
```

### API Keys

Rotate regularly:
- SendGrid API key (every 90 days)
- Google Analytics (not needed, use service account)

### Content Security Policy

Already configured in `next.config.js`:
```javascript
headers: [
  {
    source: '/:path*',
    headers: [
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
    ],
  },
]
```

---

## 📈 Ongoing Maintenance

### Weekly Tasks

- [ ] Check Google Search Console for errors
- [ ] Monitor site uptime
- [ ] Review spam submissions (if any)
- [ ] Check broken links

### Monthly Tasks

- [ ] Review analytics data
- [ ] Update content (blog posts, news)
- [ ] Check keyword rankings
- [ ] Analyze competitor SEO
- [ ] Update service offerings

### Quarterly Tasks

- [ ] Audit entire site for SEO
- [ ] Update structured data
- [ ] Refresh images
- [ ] Review backlink profile
- [ ] Update documentation

---

## 🆘 Troubleshooting

### Site Not Loading

1. Check DNS propagation: https://dnschecker.org
2. Verify deployment status in hosting dashboard
3. Check SSL certificate validity

### Analytics Not Tracking

1. Verify `NEXT_PUBLIC_GA_ID` in environment variables
2. Check browser console for errors
3. Test in incognito mode (ad blockers can block GA)
4. Use GA4 DebugView to see real-time events

### Contact Form Not Working

1. Verify `SENDGRID_API_KEY` is set
2. Check SendGrid dashboard for errors
3. Verify sender email is verified in SendGrid
4. Check API route: `/api/contact/route.ts`

### Search Console Issues

**"Not indexed"**:
- Wait 1-2 weeks for initial crawling
- Request indexing manually
- Check robots.txt isn't blocking

**"Mobile usability issues"**:
- Test on real devices
- Use Chrome DevTools mobile emulator
- Fix responsive design issues

---

## 📚 Resources

### Documentation

- [SEO Documentation](./SEO-DOCUMENTATION.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)

### Tools

- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev

### Support

For technical issues:
1. Check documentation first
2. Review Next.js documentation
3. Check Google Search Console
4. Review analytics for insights

---

## ✅ Final Checklist

Before going live:

- [ ] All environment variables configured
- [ ] Google Analytics tracking code added
- [ ] Search Console verified
- [ ] OG images created and uploaded
- [ ] Contact form tested
- [ ] All pages loading correctly
- [ ] Mobile responsive verified
- [ ] SSL certificate active
- [ ] Sitemap submitted
- [ ] Structured data validated
- [ ] Page speed optimized (90+ score)
- [ ] 404 page works
- [ ] Thank you page noindexed
- [ ] Footer links working
- [ ] Navigation working
- [ ] All images have alt text

---

**Last Updated**: January 2026  
**Version**: 1.0 - Production Ready 🚀

# Orange Hat Website Deployment Guide

## 🚀 Cloudflare Pages Deployment

### Prerequisites
1. **Domain**: Purchase from Namecheap (e.g., orangehat.org)
2. **Email**: Set up Zoho Mail for professional email
3. **GitHub**: Code repository for automatic deployments

### Step 1: Prepare Repository
```bash
# Build the project locally to test
npm run build

# Commit all changes
git add .
git commit -m "Prepare for Cloudflare Pages deployment"
git push origin main
```

### Step 2: Cloudflare Pages Setup
1. **Login to Cloudflare Dashboard**
2. **Go to Pages** → Create a project
3. **Connect to Git** → Select your repository
4. **Build Settings**:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (leave empty)

### Step 3: Environment Variables
In Cloudflare Pages dashboard, add these environment variables:

**Production Environment:**
```
VITE_ORG_NAME=Orange Hat Childcare Foundation
VITE_CONTACT_EMAIL=info@orangehat.org
VITE_PHONE_NUMBER=+234-XXX-XXX-XXXX
VITE_ORG_ADDRESS=COCIN Church Jiyep, Hwolshe, Jos, Plateau State, Nigeria
VITE_FACEBOOK_URL=https://facebook.com/orangehatchildcare
VITE_INSTAGRAM_URL=https://instagram.com/orangehatchildcare
VITE_YOUTUBE_URL=https://youtube.com/@orangehatchildcare
VITE_TWITTER_URL=https://twitter.com/orangehatchildcare
VITE_DONATION_URL=https://paystack.com/pay/your-actual-link
```

### Step 4: Custom Domain Setup
1. **In Cloudflare Pages** → Custom domains
2. **Add domain**: orangehat.org
3. **DNS Configuration** (in Namecheap):
   ```
   Type: CNAME
   Name: @
   Value: your-site.pages.dev
   
   Type: CNAME  
   Name: www
   Value: your-site.pages.dev
   ```

### Step 5: Email Setup (Zoho)
1. **Purchase Zoho Mail** plan
2. **Add MX Records** in Namecheap DNS:
   ```
   Type: MX
   Priority: 10
   Value: mx.zoho.com
   
   Type: MX
   Priority: 20
   Value: mx2.zoho.com
   ```
3. **Verify domain** in Zoho
4. **Create email**: info@orangehat.org

## 🔧 Post-Deployment Checklist

### Immediate Tasks
- [ ] Test all pages load correctly
- [ ] Verify forms work (they'll show success but won't send yet)
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify SSL certificate is active

### Content Updates Needed
- [ ] Replace placeholder images with real photos
- [ ] Update phone number from +234-XXX-XXX-XXXX
- [ ] Set up actual Paystack payment link
- [ ] Update social media URLs to real accounts
- [ ] Add real YouTube video IDs

### Optional Enhancements
- [ ] Set up Google Analytics
- [ ] Add contact form backend (Cloudflare Workers)
- [ ] Set up newsletter backend
- [ ] Add blog/news section
- [ ] Implement donation tracking

## 💰 Cost Breakdown

**Annual Costs:**
- Domain (Namecheap): ~$12/year
- Zoho Mail: ~$12-36/year (depending on plan)
- Cloudflare Pages: FREE
- **Total: ~$24-48/year**

**One-time Setup:**
- Domain setup: 30 minutes
- Cloudflare Pages: 15 minutes  
- Zoho Mail: 20 minutes
- **Total setup time: ~1 hour**

## 🚨 Important Notes

1. **Environment Variables**: Never commit real API keys to GitHub
2. **Images**: Upload real images to `/public/images/` folder
3. **Forms**: Currently show success messages but don't send emails
4. **SSL**: Automatic with Cloudflare Pages
5. **Backups**: GitHub serves as your backup

## 📞 Support Resources

- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Namecheap DNS**: https://www.namecheap.com/support/knowledgebase/
- **Zoho Mail**: https://www.zoho.com/mail/help/

## 🔄 Future Upgrades

When you're ready to add more features:
- **Contact Forms**: Cloudflare Workers ($5/month for 10M requests)
- **Database**: Cloudflare D1 (generous free tier)
- **Analytics**: Cloudflare Web Analytics (free)
- **Email Automation**: Zapier integration
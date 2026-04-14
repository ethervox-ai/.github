# EthervoxAI Website - GitHub Pages Deployment Guide

## GitHub Pages Configuration

This repository is configured to deploy to GitHub Pages with a custom domain: **ethervox.ai**

### Files Added:
- `CNAME` - Contains the custom domain name
- `_config.yml` - Jekyll configuration file
- Jekyll site structure with layouts, includes, and pages

### Deployment Steps:

1. **Enable GitHub Pages** (if not already enabled):
   - Go to repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Set Branch to "main" and folder to "/ (root)"
   - Click Save

2. **Custom Domain Configuration**:
   - The CNAME file in the repository root contains: `ethervox.ai`
   - GitHub Pages will automatically detect this
   - In Settings → Pages, the custom domain should show `ethervox.ai`

3. **DNS Configuration**:
   
   You need to configure DNS records at your domain registrar:
   
   **For apex domain (ethervox.ai):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```
   
   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: ethervox-ai.github.io
   ```

4. **Verify DNS**:
   - DNS propagation can take up to 48 hours
   - Verify with: `dig ethervox.ai +noall +answer`
   - Should show the GitHub Pages IPs

5. **HTTPS**:
   - After DNS is configured, GitHub Pages will automatically provision an SSL certificate
   - This may take a few minutes to a few hours
   - Enable "Enforce HTTPS" in Settings → Pages once the certificate is ready

### Automatic Deployment:

GitHub Pages automatically builds and deploys Jekyll sites when you push to the main branch. No additional CI/CD configuration is needed.

### Testing Locally:

To test the site locally before deployment:

```bash
# Install dependencies
bundle install

# Run Jekyll server
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Site Structure:

```
.github/
├── _config.yml           # Jekyll configuration
├── _layouts/
│   └── default.html      # Base layout template
├── _includes/
│   ├── header.html       # Site header/navigation
│   ├── footer.html       # Site footer
│   └── cookie-notice.html # Cookie consent notice
├── assets/
│   ├── css/
│   │   └── main.css      # Main stylesheet
│   ├── js/
│   │   └── main.js       # JavaScript
│   └── images/
│       ├── favicon.svg
│       ├── qr-android-placeholder.svg
│       └── qr-ios-placeholder.svg
├── index.html            # Homepage
├── about.html            # About page
├── downloads.html        # Downloads page
├── CNAME                 # Custom domain
└── Gemfile              # Ruby dependencies
```

### Build Status:

After pushing, you can check the deployment status:
- Go to the repository Actions tab
- Look for "pages build and deployment" workflow
- Green checkmark means successful deployment
- Typically takes 1-2 minutes

### Troubleshooting:

1. **Site not updating:**
   - Check Actions tab for build errors
   - Ensure main branch is selected in Settings → Pages
   - Clear browser cache

2. **Custom domain not working:**
   - Verify DNS records are correct
   - Wait for DNS propagation (up to 48 hours)
   - Check that CNAME file exists in root

3. **HTTPS certificate not provisioning:**
   - Ensure DNS is fully propagated
   - Remove and re-add custom domain in Settings → Pages
   - Wait a few hours and try again

### Current Status:

✅ Jekyll site structure created
✅ CNAME file configured for ethervox.ai
✅ All pages created (Home, About, Downloads)
✅ Responsive design implemented
⏳ Awaiting GitHub Pages enablement in repository settings
⏳ Awaiting DNS configuration at domain registrar

### Next Steps:

1. Push all changes to the main branch
2. Enable GitHub Pages in repository settings (if not already enabled)
3. Configure DNS records at your domain registrar
4. Wait for DNS propagation and SSL certificate
5. Visit https://ethervox.ai to see your live site!

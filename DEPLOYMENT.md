# Deployment Guide

## 🚀 Quick Deploy to GitHub Pages

This portfolio is ready for immediate deployment to GitHub Pages. No build process required!

### Prerequisites
- Git installed
- GitHub account
- Repository created

### Deployment Steps

#### Option 1: Direct Push (Simplest)
```bash
# 1. Clone or navigate to your repository
cd Jigyasusinghchouhan.github.io

# 2. Ensure you're on the main branch
git checkout main

# 3. Push to GitHub
git push origin main

# 4. Enable GitHub Pages
# Go to: Settings → Pages → Source: main branch → Save
```

#### Option 2: From This Branch
```bash
# 1. Merge this branch to main
git checkout main
git merge copilot/create-modern-dark-portfolio

# 2. Push to GitHub
git push origin main

# 3. Enable GitHub Pages
# Settings → Pages → Source: main branch → Save
```

### Verify Deployment
After enabling GitHub Pages, your site will be live at:
```
https://jigyasusinghchouhan.github.io/
```

Deployment typically takes 1-2 minutes.

## 🔧 Local Development

### Using Python's HTTP Server
```bash
# Navigate to project directory
cd Jigyasusinghchouhan.github.io

# Start server (Python 3)
python3 -m http.server 8000

# Open browser
open http://localhost:8000
```

### Using Node.js (http-server)
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Start server
http-server -p 8000

# Open browser
open http://localhost:8000
```

### Using VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📝 Customization Guide

### Update Personal Information

#### 1. Basic Info (index.html)
```html
<!-- Find and replace: -->
Jigyasu Singh Chouhan → Your Name
jigyashu2001@gmail.com → Your Email
+91 8619708469 → Your Phone
Pune, India → Your Location
```

#### 2. Social Links (index.html)
```html
<!-- Update href attributes: -->
<a href="https://github.com/YOUR_USERNAME">
<a href="https://www.linkedin.com/in/YOUR_PROFILE">
<a href="https://www.instagram.com/YOUR_PROFILE">
```

#### 3. Resume Link (index.html)
```html
<!-- Update Google Drive link or use your own: -->
<a href="YOUR_RESUME_URL" class="btn btn-secondary">
```

### Modify Colors (style.css)

```css
:root {
    --bg-primary: #0B0F19;      /* Change main background */
    --bg-secondary: #111827;    /* Change card background */
    --accent-cyan: #00F5D4;     /* Change primary accent */
    --accent-purple: #7C3AED;   /* Change secondary accent */
    --text-primary: #F9FAFB;    /* Change text color */
    --text-secondary: #9CA3AF;  /* Change secondary text */
}
```

### Add New Project (index.html)

```html
<div class="project-card" data-category="devops automation" data-aos="fade-up">
    <div class="project-image">
        <div class="project-overlay">
            <div class="project-links">
                <a href="GITHUB_LINK" target="_blank" class="project-link">
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Description of your project...
        </p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
            <span class="tag">Tag3</span>
        </div>
    </div>
</div>
```

### Modify Typing Animation (script.js)

```javascript
// Find the phrases array and update:
const phrases = [
    'Your Phrase 1',
    'Your Phrase 2',
    'Your Phrase 3',
    // Add more...
];
```

## 🔍 SEO Optimization

### Update Meta Tags (index.html)
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="Your, Keywords, Here">
<meta property="og:title" content="Your Name - Title">
<meta property="og:description" content="Your description">
```

### Add Google Analytics (Optional)
Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Advanced Customization

### Change Fonts
1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Update the `<link>` tag in `index.html`
4. Update CSS variables in `style.css`:
```css
--font-heading: 'Your Heading Font', sans-serif;
--font-body: 'Your Body Font', sans-serif;
```

### Add Custom Favicon
Replace the emoji favicon with your own:
```html
<!-- Remove emoji favicon, add: -->
<link rel="icon" type="image/png" href="favicon.png">
```

### Disable Animations
For users who prefer reduced motion:
```css
/* Already included in style.css */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

## 📊 Performance Monitoring

### Check Performance
Use Google Lighthouse:
1. Open site in Chrome
2. Right-click → Inspect
3. Go to "Lighthouse" tab
4. Click "Generate report"

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimize Images (if added)
```bash
# Install ImageMagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Optimize images
convert input.jpg -quality 85 -resize 1200x output.jpg
```

## 🐛 Troubleshooting

### Issue: Site not loading
**Solution:** Check GitHub Pages is enabled in repository Settings

### Issue: Fonts not loading
**Solution:** Verify Google Fonts link in `<head>` section

### Issue: JavaScript not working
**Solution:** Check browser console for errors (F12)

### Issue: Mobile menu not working
**Solution:** Clear browser cache and refresh

### Issue: CSS not applying
**Solution:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 📞 Support

For issues or questions:
- Email: jigyashu2001@gmail.com
- GitHub: [@Jigyasusinghchouhan](https://github.com/Jigyasusinghchouhan)
- LinkedIn: [jigyasusinghchouahn](https://www.linkedin.com/in/jigyasusinghchouahn/)

## 📜 License

This project is open source under the MIT License.

---

**Happy Deploying! 🚀**

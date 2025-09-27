# Switzerland Trip Cost Estimator

An ultra-lite static website for estimating Switzerland trip costs from India and converting INR to CHF. Built with vanilla JavaScript, zero dependencies, and optimized for performance.

## Features

- Currency conversion (INR → CHF)
- Trip budget estimation
- Cost breakdown by category
- Local storage for saved estimates
- SEO-optimized content
- Responsive design
- Accessibility-compliant
- Under 100KB initial payload

## Deployment Instructions

### 1. GitHub Pages Setup

1. Create a new repository on GitHub
2. Clone the repository:
   ```powershell
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
3. Copy all project files to the repository
4. Push to GitHub:
   ```powershell
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
5. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select "main" branch
   - Click Save

### 2. Custom Domain Setup

1. Update CNAME file with your domain
2. Add DNS records at your domain registrar:
   - Type A: Point to GitHub Pages IPs
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Type CNAME: Create www record pointing to yourusername.github.io

### 3. Google Search Console Setup

1. Add your site to Google Search Console
2. Choose domain or URL prefix property
3. Verify ownership:
   - Replace meta tag in index.html:
     ```html
     <meta name="google-site-verification" content="YOUR-GSC-META-TAG">
     ```
   - Commit and push changes

### 4. Google Analytics Setup

1. Create GA4 property
2. Get measurement ID
3. Replace analytics placeholder:
   ```html
   <div data-analytics="deferred">
     <!-- Paste GA4 snippet here -->
   </div>
   ```

## Development

### Local Testing

1. Use a local server:
   ```powershell
   python -m http.server 8000
   ```
2. Open http://localhost:8000

### API Rate Limits

- Exchange rate API: https://api.exchangerate.host/
- Free tier, no API key required
- Fallback rates included in code

### Updating Constants

Edit DEFAULTS object in script.js:
```javascript
export const DEFAULTS = {
  flightPerPersonINR: 60000,
  hotelBudgetPerNightINR: 7000,
  // ... other constants
};
```

## Performance Optimization

- Uses system fonts
- Minimal CSS (no framework)
- Vanilla JavaScript
- SVG logo
- WebP images
- Lazy loading
- Critical CSS inlined
- Deferred scripts

## Browser Support

- Modern browsers (last 2 versions)
- No IE11 support
- Progressive enhancement for API fallback

## License

MIT License - Feel free to use and modify

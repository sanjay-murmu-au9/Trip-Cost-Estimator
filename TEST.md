# Testing Guide

## Performance Metrics

Target values for Core Web Vitals:

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms

## Lighthouse Testing

1. Open Chrome DevTools (F12)
2. Navigate to Lighthouse tab
3. Select Categories:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Device: Mobile
5. Click "Generate Report"

Expected scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

## Manual Testing Checklist

### Functionality
- [ ] Currency converter works with live rates
- [ ] Fallback rates work when API is down
- [ ] Budget calculator shows accurate breakdowns
- [ ] Save estimate button works with localStorage
- [ ] Form validation works correctly
- [ ] All links work and open correctly

### Accessibility
- [ ] Screen reader compatibility
- [ ] Keyboard navigation works
- [ ] ARIA attributes present and correct
- [ ] Color contrast meets WCAG standards
- [ ] Focus states visible
- [ ] Alt text on all images

### Responsive Design
- [ ] Mobile layout (320px+)
- [ ] Tablet layout (768px+)
- [ ] Desktop layout (1024px+)
- [ ] No horizontal scroll
- [ ] Touch targets adequate size

### Performance
- [ ] Initial load < 100KB gzipped
- [ ] No render-blocking resources
- [ ] Images load efficiently
- [ ] No layout shifts
- [ ] Smooth interactions

### SEO
- [ ] Meta tags present
- [ ] Structured data validates
- [ ] Sitemap.xml accessible
- [ ] Robots.txt correct
- [ ] Canonical tags present

## Test Data

```javascript
// Currency Converter Test Cases
[
  { input: 10000, expectedCHF: "110.00" },
  { input: 100000, expectedCHF: "1100.00" },
  { input: 1000000, expectedCHF: "11000.00" }
]

// Budget Estimator Test Cases
[
  {
    input: { travelers: 2, days: 7, hotelType: "budget" },
    expectedTotal: "₹200,000 - ₹250,000"
  },
  {
    input: { travelers: 2, days: 7, hotelType: "mid-range" },
    expectedTotal: "₹300,000 - ₹350,000"
  },
  {
    input: { travelers: 2, days: 7, hotelType: "luxury" },
    expectedTotal: "₹500,000 - ₹600,000"
  }
]
```

## Load Testing

Use browser developer tools to test under different conditions:
- Throttled CPU (4x/6x slowdown)
- Throttled Network (Slow 3G)
- Cache disabled
- Cookie-less

## Browser Testing

Test in latest versions of:
- Chrome
- Firefox
- Safari
- Edge

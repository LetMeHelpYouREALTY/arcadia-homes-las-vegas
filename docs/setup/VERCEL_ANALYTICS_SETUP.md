# Vercel Analytics Setup Guide

## Overview

Vercel Analytics is now integrated into your application, providing real-time insights into:
- ✅ **Web Vitals** - Core performance metrics (LCP, FID, CLS, TTFB, FCP, INP)
- ✅ **Page Performance** - Load times, server response times
- ✅ **User Experience** - Real user monitoring (RUM)
- ✅ **Traffic Analytics** - Page views, unique visitors, top pages

## What's Already Configured

The `@vercel/analytics` package has been installed and the `<Analytics />` component has been added to your root layout (`app/layout.tsx`). This automatically tracks:

1. **Page views** - Every page navigation
2. **Web Vitals** - Core Web Vitals for each page
3. **Performance metrics** - Real-world user performance data

## How to Enable (One-Time Setup)

### Step 1: Enable in Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **heyberkshire-com-2**
3. Click **Analytics** tab in the left sidebar
4. Click **Enable Analytics**
5. That's it! Data collection starts automatically on your next deployment

### Step 2: Deploy to Production

Analytics only works in production (not local development).

```bash
# Already on main branch from previous work
git push origin main
```

Or trigger a deployment in Vercel Dashboard → Deployments → Redeploy

### Step 3: Verify It's Working

1. Wait 5-10 minutes after deployment
2. Go to Vercel Dashboard → Analytics
3. You should see:
   - Real-time visitor count
   - Web Vitals scores
   - Top pages
   - Performance trends

## Dashboard Features

### Web Vitals Tab

Tracks the 6 core metrics Google uses for page ranking:

| Metric | Name | What It Measures | Good Score |
|--------|------|------------------|------------|
| **LCP** | Largest Contentful Paint | Time until main content loads | <2.5s |
| **FID** | First Input Delay | Time until page is interactive | <100ms |
| **CLS** | Cumulative Layout Shift | Visual stability (no jumping) | <0.1 |
| **TTFB** | Time to First Byte | Server response time | <600ms |
| **FCP** | First Contentful Paint | Time until any content appears | <1.8s |
| **INP** | Interaction to Next Paint | Responsiveness to interactions | <200ms |

### Audience Tab (Vercel Pro only)

- Device breakdown (mobile vs desktop)
- Browser distribution
- Geographic data
- OS breakdown

### Top Pages

Shows which pages are:
- Most visited
- Slowest (needs optimization)
- Best performing

## Interpreting Your Scores

### Current Target (Based on Lighthouse CI)

Your site should achieve:
- Performance: **95+**
- LCP: **<2.5s**
- FID: **<100ms**
- CLS: **<0.1**

### If Scores Drop

**Common causes:**
1. **Large images** - Compress or convert to AVIF/WebP
2. **Slow API calls** - Add caching or optimize queries
3. **Heavy JavaScript** - Code split or lazy load
4. **Third-party scripts** - Defer non-critical scripts
5. **Server response time** - Check database query performance

**Where to look:**
1. Vercel Analytics → **Top Pages** → Click slow page
2. See which specific metric is failing
3. Use Chrome DevTools → Performance tab to diagnose
4. Check Sentry → Performance tab for slow transactions

## Custom Events (Optional)

Track specific user actions beyond page views:

```typescript
import { track } from '@vercel/analytics'

// Track lead form submission
track('lead_submitted', {
  source: 'hero_section',
  property_type: 'single_family',
  estimated_value: 450000,
})

// Track RealScout search
track('property_search', {
  location: 'Henderson',
  bedrooms: 3,
  price_range: '400k-500k',
})

// Track AI chat interaction
track('ai_chat_message', {
  message_length: message.length,
  response_time_ms: 1200,
})
```

**View custom events:**
- Vercel Dashboard → Analytics → Events tab
- Filter by event name
- See event counts over time

## A/B Testing (Vercel Pro only)

Test variations of your site:

```typescript
import { useA11yVariant } from '@vercel/analytics'

export function HeroSection() {
  const variant = useA11yVariant('hero_cta', 2) // 2 variations
  
  return (
    <button>
      {variant === 0 ? 'Get Started' : 'Get Your Home Value'}
    </button>
  )
}
```

Track which variant converts better in Analytics dashboard.

## Speed Insights vs Analytics

**Vercel Analytics** (Free - Enabled)
- Core Web Vitals
- Page load times
- Traffic data
- Top pages

**Vercel Speed Insights** (Paid - $10/mo per project)
- Detailed performance traces
- Per-user performance data
- Custom performance metrics
- Historical performance data (90 days)

**Recommendation:** Start with free Analytics. Upgrade to Speed Insights only if you need detailed debugging for specific users.

## Comparing with Other Tools

| Tool | Purpose | Data Type | When to Use |
|------|---------|-----------|-------------|
| **Vercel Analytics** | Web Vitals + Traffic | Real User Monitoring | Production performance |
| **Lighthouse CI** | Audit + Benchmarking | Lab Data (Simulated) | Pre-deployment checks |
| **Google Analytics** | User behavior | Traffic + Conversions | Marketing insights |
| **Sentry Performance** | Error correlation | Transaction traces | Debugging slow APIs |

**Use together for best results!**

## Privacy & GDPR

Vercel Analytics is privacy-friendly:
- ✅ No cookies required
- ✅ No personal data collected
- ✅ GDPR compliant
- ✅ No consent banner needed

Data collected:
- Page URL
- Referrer
- Device type (mobile/desktop)
- Country (for geo-routing optimization)

## Troubleshooting

### Not Seeing Data

**Problem:** Dashboard shows "No data yet"

**Solutions:**
1. **Wait 10 minutes** - Data processing can take time
2. **Check deployment** - Analytics only works in production
3. **Verify component** - Ensure `<Analytics />` is in `app/layout.tsx`
4. **Test in production** - Visit your live site, wait, refresh dashboard

### Data Looks Wrong

**Problem:** Scores don't match Lighthouse

**Why:** Lighthouse runs in a controlled environment (lab data), while Vercel Analytics tracks real users with varying:
- Internet speeds
- Device capabilities
- Geographic locations
- Browser versions

**Real-world scores are typically 10-20% lower than Lighthouse.**

### High CLS Score

**Problem:** CLS (Cumulative Layout Shift) > 0.1

**Common causes:**
1. Images without `width` and `height` attributes
2. Web fonts loading late (FOIT/FOUT)
3. Ads or embeds loading
4. Animations without defined space

**Fix:**
```typescript
// ❌ Bad - causes layout shift
<img src="/hero.jpg" alt="House" />

// ✅ Good - reserves space
<Image 
  src="/hero.jpg" 
  alt="House"
  width={1920}
  height={1080}
  priority
/>
```

## Integration with CI/CD

Your GitHub Actions already run Lighthouse CI on every PR. Combine this with Vercel Analytics for full coverage:

**Lighthouse CI** (Pre-deployment)
- Catches performance regressions before merge
- Simulated environment
- Pass/fail thresholds

**Vercel Analytics** (Post-deployment)
- Real-world performance
- Monitors production over time
- Alerts for degradation

## Setting Performance Budgets

Create alerts for performance degradation:

1. Vercel Dashboard → Settings → Notifications
2. Enable **Performance degradation alerts**
3. Set thresholds:
   - LCP degradation: >10%
   - FID degradation: >20%
   - CLS degradation: >0.05 units

You'll get emails when scores drop below targets.

## Cost

**Vercel Analytics:**
- Free tier: 100k events/month
- Pro tier: Unlimited events + advanced features ($10/mo)

**Your usage estimate:**
- Average: ~1,000 page views/day = 30k/month
- Well under free tier limit!

## Next Steps

1. ✅ Analytics enabled (done automatically with `<Analytics />` component)
2. ⏭️ Deploy to production
3. ⏭️ Wait 10 minutes
4. ⏭️ Check Vercel Dashboard → Analytics
5. ⏭️ Monitor Web Vitals for 1 week
6. ⏭️ Optimize pages with poor scores
7. ⏭️ Set up performance alerts

## Resources

- [Vercel Analytics Docs](https://vercel.com/docs/analytics)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Core Web Vitals Optimization](https://web.dev/vitals-tools/)

---

**Your site now has comprehensive monitoring:**
- ✅ Sentry → Error tracking
- ✅ Vercel Analytics → Performance tracking
- ✅ Lighthouse CI → Pre-deployment audits
- ✅ Google Analytics → User behavior

This gives you complete visibility into your site's health! 🎉

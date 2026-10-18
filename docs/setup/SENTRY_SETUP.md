# Sentry Error Monitoring Setup Guide

## Overview

Sentry is now integrated into your Next.js application for comprehensive error tracking, performance monitoring, and session replay.

## Features Enabled

- ✅ **Error Tracking** - Automatically captures and reports exceptions
- ✅ **Performance Monitoring** - Tracks API response times and page loads
- ✅ **Session Replay** - Records user sessions when errors occur
- ✅ **Source Maps** - Uploaded automatically for readable stack traces
- ✅ **Release Tracking** - Associates errors with specific deployments

## Quick Start

### 1. Create Sentry Account

1. Go to [sentry.io](https://sentry.io)
2. Sign up (free tier: 5,000 errors/month, 10,000 performance units/month)
3. Create a new project:
   - Platform: **Next.js**
   - Project name: `heyberkshire-com`
   - Alert frequency: **On every new issue**

### 2. Get Your DSN

1. After project creation, you'll see your DSN (looks like `https://xxx@o0.ingest.sentry.io/0`)
2. Or find it at: **Settings → Projects → heyberkshire-com → Client Keys (DSN)**
3. Copy the **DSN** value

### 3. Create Auth Token

1. Go to **Settings → Account → API → Auth Tokens**
2. Click **Create New Token**
3. Name: `heyberkshire-ci-cd`
4. Scopes:
   - ✅ `project:releases`
   - ✅ `project:write`
   - ✅ `org:read`
5. Copy the token (you'll only see it once!)

### 4. Configure Environment Variables

#### For Local Development (`.env.local`)

```bash
# Copy from .env.sentry.example
NEXT_PUBLIC_SENTRY_DSN=https://your-public-key@o0.ingest.sentry.io/your-project-id
SENTRY_AUTH_TOKEN=your-auth-token-here
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=heyberkshire-com
NEXT_PUBLIC_SENTRY_ENVIRONMENT=development
```

#### For Vercel Production

Add these to **Vercel Dashboard → Your Project → Settings → Environment Variables**:

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_SENTRY_DSN` | Your DSN | Production, Preview, Development |
| `SENTRY_AUTH_TOKEN` | Your auth token | Production, Preview (⚠️ SECRET) |
| `SENTRY_ORG` | Your org slug | Production, Preview |
| `SENTRY_PROJECT` | `heyberkshire-com` | Production, Preview |
| `NEXT_PUBLIC_SENTRY_ENVIRONMENT` | `production` | Production only |
| `NEXT_PUBLIC_SENTRY_ENVIRONMENT` | `preview` | Preview only |

### 5. Test Error Tracking

#### Test in Development

1. Start your dev server: `npm run dev`
2. Add a test error to any page:

```typescript
// app/test-error/page.tsx
export default function TestErrorPage() {
  return (
    <button onClick={() => {
      throw new Error("Test Sentry Error!")
    }}>
      Trigger Test Error
    </button>
  )
}
```

3. Click the button
4. Check Sentry dashboard → **Issues**
5. You should see your error with full stack trace!

#### Test in Production

```typescript
// Add to any existing page temporarily
<button onClick={() => {
  console.log("Triggering test error for Sentry")
  throw new Error("Production Test Error")
}}>
  Test Error
</button>
```

## Configuration Details

### Client-Side (`sentry.client.config.ts`)

Tracks errors in the user's browser:
- React component errors
- Async/Promise rejections
- Network failures
- User interactions that cause errors

**Session Replay:**
- Records 10% of all sessions
- Records 100% of sessions with errors
- Masks all text and media by default (privacy)

### Server-Side (`sentry.server.config.ts`)

Tracks errors in Next.js server:
- API route errors
- Server component errors
- Data fetching failures
- Server-side rendering issues

### Edge Runtime (`sentry.edge.config.ts`)

Tracks errors in middleware and edge functions:
- Middleware errors
- Edge API routes
- Vercel Edge Functions

## Using Sentry in Your Code

### Adding Context to Errors

```typescript
import * as Sentry from '@sentry/nextjs'

// Set user context (for authenticated users)
Sentry.setUser({
  id: user.id,
  email: user.email,
  username: user.name,
})

// Add custom context
Sentry.setContext('lead_form', {
  source: 'hero_section',
  campaign: 'q1_2026',
  property_type: 'single_family',
})

// Add breadcrumbs (tracks user actions leading up to error)
Sentry.addBreadcrumb({
  category: 'ui.click',
  message: 'User clicked Get Home Value button',
  level: 'info',
})

// Add tags for filtering
Sentry.setTag('page', 'homepage')
Sentry.setTag('feature', 'lead_capture')
```

### Catching and Reporting Errors

```typescript
// API route error handling
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const result = await saveLead(data)
    return Response.json({ success: true })
  } catch (error) {
    // Automatically reported to Sentry
    Sentry.captureException(error, {
      tags: { api: 'lead_capture' },
      extra: { requestData: data },
    })
    
    return Response.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    )
  }
}
```

### Performance Monitoring

```typescript
// Track custom spans
const transaction = Sentry.startTransaction({
  name: 'Lead Capture Flow',
  op: 'lead.capture',
})

const span = transaction.startChild({
  op: 'http.client',
  description: 'POST /api/leads',
})

try {
  await saveLead(data)
  span.setStatus('ok')
} catch (error) {
  span.setStatus('internal_error')
  throw error
} finally {
  span.finish()
  transaction.finish()
}
```

## Dashboard Features

### Issues Tab

- **New Issues:** Recently discovered errors
- **For Review:** Errors awaiting triage
- **Archived:** Resolved or ignored errors

**Useful filters:**
- `environment:production`
- `handled:no` (unhandled errors - highest priority!)
- `level:error` or `level:fatal`
- `user.email:*` (errors from logged-in users)

### Performance Tab

- **Web Vitals:** LCP, FID, CLS scores
- **Transactions:** API and page load times
- **Queries:** Database query performance (if configured)

### Releases Tab

- Associates errors with specific deployments
- Shows when errors were introduced
- Tracks resolution across releases

## Alerts & Notifications

### Recommended Alert Rules

1. **Critical Errors**
   - Condition: `level:fatal OR level:error`
   - Action: Email + Slack
   - Frequency: Immediately

2. **High Error Rate**
   - Condition: `>100 events in 1 hour`
   - Action: Email
   - Frequency: Once per hour

3. **New Issue**
   - Condition: First seen
   - Action: Slack
   - Frequency: Immediately

### Slack Integration

1. Sentry Dashboard → **Settings → Integrations**
2. Find **Slack** → Click **Add to Slack**
3. Choose channel (e.g., `#heyberkshire-errors`)
4. Configure notification rules

## Best Practices

### 1. Don't Log Sensitive Data

```typescript
// ❌ BAD - Exposes user data
Sentry.captureException(error, {
  extra: {
    creditCard: user.creditCard,  // Never log PII!
    password: credentials.password,
  }
})

// ✅ GOOD - Safe context
Sentry.captureException(error, {
  extra: {
    userId: user.id,
    action: 'payment_processing',
  }
})
```

### 2. Use Error Boundaries

```typescript
// app/error.tsx (Already exists)
'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to Sentry
    Sentry.captureException(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

### 3. Filter Noise

Ignore known, non-critical errors in `sentry.client.config.ts`:

```typescript
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  beforeSend(event, hint) {
    // Ignore ResizeObserver errors (browser quirk, harmless)
    if (event.message?.includes('ResizeObserver')) {
      return null
    }
    
    // Ignore AdBlock errors
    if (hint.originalException?.message?.includes('AdBlock')) {
      return null
    }
    
    return event
  },
})
```

### 4. Set Severity Levels

```typescript
// Info - non-critical
Sentry.captureMessage('User downloaded report', 'info')

// Warning - potential issue
Sentry.captureMessage('API response slow (>5s)', 'warning')

// Error - something broke
Sentry.captureException(error, { level: 'error' })

// Fatal - critical system failure
Sentry.captureException(error, { level: 'fatal' })
```

## Troubleshooting

### Source Maps Not Uploading

**Problem:** Stack traces show minified code

**Solution:**
1. Verify `SENTRY_AUTH_TOKEN` is set in Vercel
2. Check token has `project:releases` and `project:write` scopes
3. Ensure `SENTRY_ORG` and `SENTRY_PROJECT` match your Sentry settings

### Errors Not Appearing

**Problem:** Throwing errors but not seeing them in Sentry

**Solution:**
1. Check DSN is correct: `console.log(process.env.NEXT_PUBLIC_SENTRY_DSN)`
2. Verify network isn't blocked: Check browser DevTools → Network tab
3. Try tunnel route: Sentry requests go through `/monitoring` (bypasses ad-blockers)

### Too Many Errors

**Problem:** Sentry quota exhausted

**Solution:**
1. Lower sample rates in config
2. Add `beforeSend` filters for known issues
3. Upgrade to paid tier if needed

## Cost Management

### Free Tier Limits

- 5,000 errors/month
- 10,000 performance transactions/month
- 50 replay sessions/month

### Staying Under Limits

```typescript
// Reduce sample rates in production
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Only sample 50% of transactions (500 → 250/month)
  tracesSampleRate: 0.5,
  
  // Only record 5% of normal sessions (2,000 → 100/month)
  replaysSessionSampleRate: 0.05,
  
  // Still record 100% of error sessions
  replaysOnErrorSampleRate: 1.0,
})
```

## Next Steps

1. ✅ Set up Sentry account
2. ✅ Add environment variables to Vercel
3. ✅ Deploy to production
4. ✅ Trigger test error
5. ✅ Configure Slack alerts
6. ⏭️ Monitor for 1 week
7. ⏭️ Adjust sample rates based on usage
8. ⏭️ Create custom dashboards for key metrics

## Resources

- [Sentry Next.js Docs](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Performance Monitoring](https://docs.sentry.io/product/performance/)
- [Session Replay](https://docs.sentry.io/product/session-replay/)
- [Best Practices](https://docs.sentry.io/product/best-practices/)

---

**Questions?** Check your Sentry dashboard → **Docs** or contact support@sentry.io

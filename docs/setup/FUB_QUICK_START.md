# Follow Up Boss Quick Start Guide

**Get FUB integrated in 10 minutes**

---

## ⚡ Quick Setup

### 1. Get API Key (2 minutes)

1. Log into Follow Up Boss: https://app.followupboss.com/
2. Go to **Admin → API**
3. Copy your **API Key**
4. (Optional) Copy **System Key** for 2x rate limit

### 2. Configure Environment (1 minute)

Create or edit `.env.local`:

```env
FUB_API_KEY=your_api_key_here
FUB_SYSTEM_KEY=your_system_key_here
```

That's it! You're ready to use Follow Up Boss.

---

## 🎯 Quick Test

Test the API:

```typescript
// test-fub.ts
import { FollowUpBossClient } from '@/lib/fub/client';

const fub = new FollowUpBossClient({
  apiKey: process.env.FUB_API_KEY!,
  systemKey: process.env.FUB_SYSTEM_KEY,
});

// Create test lead
const person = await fub.upsertPerson({
  name: 'Test Lead',
  emails: [{ value: 'test@example.com' }],
  source: 'api-test',
  stage: 'New Lead',
});

console.log(`Lead created: ${person.id}`);

// Add tag
await fub.addTag(person.id, 'test-lead');

console.log('Success!');
```

Run it:

```bash
npx tsx test-fub.ts
```

---

## 🚀 Add Lead Capture Form

### Add to Contact Page

```tsx
// app/contact/page.tsx
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1>Contact Dr. Jan Duffy</h1>
      <LeadCaptureForm
        source="website-contact-page"
        formType="contact"
      />
    </div>
  );
}
```

### Property Search Form

```tsx
<LeadCaptureForm
  source="website-property-search"
  stage="Active Buyer"
  defaultTags={['property-search']}
  formType="property-search"  // Shows price, bedrooms, etc.
/>
```

---

## 🔔 Setup Webhooks (Optional)

### 1. In Follow Up Boss

1. Go to **Admin → Webhooks**
2. Click **Create Webhook**
3. Set URL: `https://yourdomain.com/api/webhooks/fub`
4. Select events:
   - `peopleCreated`
   - `peopleUpdated`
   - `peopleStageUpdated`
   - `peopleTagsCreated`
5. Save

### 2. Test Webhook

Create a test lead in FUB manually and check server logs:

```bash
# Server logs should show:
[FUB Webhook] Received event: peopleCreated
[FUB] New person created: Test Lead
[FUB] AI qualification added for Test Lead
```

---

## 📝 Common Use Cases

### 1. Capture Lead from Form

```typescript
// Already handled by LeadCaptureForm component!
// Just add the form to your page.
```

### 2. Search for Existing Lead

```typescript
const existing = await fub.findPerson({ email: 'john@example.com' });

if (existing) {
  console.log(`Found: ${existing.name}`);
} else {
  console.log('Lead not found - create new');
}
```

### 3. Add Tag

```typescript
await fub.addTag(personId, 'summerlin');
await fub.addTag(personId, 'active-buyer');
```

### 4. Update Stage

```typescript
await fub.updateStage(personId, 'Active Buyer');
```

### 5. Create Event (Activity)

```typescript
await fub.createEvent({
  source: 'website',
  type: 'Property Search',
  message: 'Searched for 3-bed homes in Henderson',
  personId,
});
```

### 6. List Recent Leads

```typescript
const results = await fub.listPeople({
  stage: 'New Lead',
  createdAfter: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  limit: 50,
});

console.log(`Found ${results.people.length} new leads`);
```

---

## 🤖 Enable AI Qualification (Optional)

If you have Claude AI configured:

```env
# .env.local
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
FUB_API_KEY=your_fub_key_here
```

New leads will automatically get AI qualification notes!

---

## ⚙️ Configuration Options

All in `.env.local`:

```env
# Required
FUB_API_KEY=your_api_key_here

# Optional but recommended
FUB_SYSTEM_KEY=your_system_key_here  # 2x rate limit

# Automation (optional)
FUB_AUTO_TAG_ENABLED=true
FUB_AI_QUALIFICATION_ENABLED=true
FUB_DUPLICATE_CHECK_ENABLED=true

# Defaults (optional)
FUB_DEFAULT_STAGE=New Lead
FUB_DEFAULT_SOURCE=website
```

---

## 📊 Features Included

- ✅ **Lead capture** - Forms submit directly to FUB
- ✅ **Webhooks** - Real-time event handling
- ✅ **Deduplication** - Auto-detect duplicates
- ✅ **AI qualification** - Claude-powered scoring
- ✅ **Source tracking** - UTM + referrer enrichment
- ✅ **Smart tagging** - Auto-tags based on criteria
- ✅ **Rate limiting** - Prevent API errors
- ✅ **Caching** - Faster responses
- ✅ **Error handling** - Automatic retries

---

## 📚 Next Steps

1. ✅ **Basic setup complete** - You can capture leads now!
2. 📖 **Read full docs**: `FUB_OPTIMIZATION.md`
3. 🔔 **Setup webhooks**: Real-time lead capture
4. 🤖 **Enable AI**: Automatic lead qualification
5. 🔧 **Add automation**: Bulk operations, reports, etc.

---

## 🆘 Troubleshooting

**"API key not configured"**
- Add `FUB_API_KEY` to `.env.local`
- Restart dev server (`npm run dev`)

**"Rate limit exceeded"**
- Add `FUB_SYSTEM_KEY` for 2x limit
- Enable caching (default: enabled)

**Webhook not working**
- Check URL is publicly accessible (not localhost)
- Verify HTTPS is enabled
- Check FUB Admin → Webhooks settings

---

## 💬 Support

- **Full Documentation**: `FUB_OPTIMIZATION.md`
- **FUB Docs**: https://docs.followupboss.com/
- **API Support**: api@followupboss.com

---

*Ready to scale? See `FUB_OPTIMIZATION.md` for automation, bulk operations, and advanced features.*

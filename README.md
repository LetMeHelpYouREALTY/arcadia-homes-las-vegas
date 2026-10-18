# Arcadia Homes Las Vegas

Website for Dr. Jan Duffy, REALTOR® (NV License S.0197614.LLC) — Arcadia at Grand Park,
Summerlin West, 55+ and luxury real estate in Las Vegas.

Live: https://www.arcadiahomeslasvegas.com

## Stack

- Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- Hosted on Vercel (project `shawood-homes-website`); every push to `main` deploys production
- RealScout widgets for listings, Follow Up Boss for leads, Upstash for rate limiting,
  Sentry for errors, Anthropic for the site chat assistant

## Develop

```bash
npm install --legacy-peer-deps   # same install Vercel runs
npm run dev                      # http://localhost:3000
npm run build                    # production build
npm run test:run                 # unit tests (Vitest)
```

Environment variables are listed in the `.env*.example` files. Setup notes for
individual services live in `docs/setup/`.

## Content rules

- Brand name is **Arcadia Homes Las Vegas** (`siteConfig.name` in `lib/site-config.ts`).
- The brokerage, Berkshire Hathaway HomeServices Nevada Properties, appears in visible copy
  only in the footer disclosure (`components/layouts/Footer.tsx`), which must stay prominent
  per NAC 645.610 along with the license number. Schema.org data in `lib/schema.ts` and
  `lib/gbp-schema.ts` still names the brokerage.
- Experience is stated as "35 years in Las Vegas real estate."
- Fair Housing: no protected-class proxies ("safe", "family-friendly", "good schools",
  etc.). Describe features, amenities, named schools and commute times instead.
- Every page renders `<Footer />`.

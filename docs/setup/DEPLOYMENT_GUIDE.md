# Arcadia Homes Las Vegas – Deployment Guide

**Primary site:** https://www.arcadiahomeslasvegas.com (www is canonical).

**Stack:** Next.js 14 (App Router), Vercel. This repo is a Next.js site (from heyberkshire.com clone, rebranded for Arcadia).

---

## Get live (minimal path)

1. **Push** to GitHub. `vercel.json` is set for Next.js (`framework: "nextjs"`, `outputDirectory: ".next"`).
2. **Vercel:** New Project → Import repo. **Framework Preset: Next.js.** Leave Build Command and Output Directory at defaults. Deploy.
3. **Domain:** Add **www.arcadiahomeslasvegas.com** as primary; redirect **arcadiahomeslasvegas.com** → www.

### Required: Root Directory must be empty

This repo is a **Next.js app at the repo root** (no `client/` subfolder). In Vercel:

- **Settings → General → Root Directory** must be **empty** (or `.`).
- If Root Directory is set to `client`, the build will fail with: *"The specified Root Directory 'client' does not exist."*
- Root Directory cannot be set in `vercel.json`; it is a project setting only.

---

## Local

```bash
npm install --legacy-peer-deps
npm run dev
npm run build && npm run start
```

---

## Security and audits

- Run `npm run audit` before releases; address or document any accepted vulnerabilities.
- Use `npm run audit:fix` for semver-compatible fixes; use `npm audit fix --force` only after verifying tests and build.
- If `npm run audit:fix` fails due to peer dependency conflicts (e.g. with `--legacy-peer-deps` installs), some vulnerabilities may require major upgrades (Next.js, Sentry, wrangler, etc.) or documented acceptance.

---

## NAP (match GBP)

- **Agent:** Dr. Jan Duffy, License S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties  
- **Phone:** (702) 500-0337 | **Email:** DrDuffy@arcadiahomeslasvegas.com  
- **Primary URL:** https://www.arcadiahomeslasvegas.com  

---

## SEO, AEO & GEO (March 2026)

On-site schema, NAP, sitemap, and EEAT are implemented per the March 2026 plan. Use this section for ongoing keyword/content and off-site work.

### Keyword and content strategy

- **Prioritize “AI-immune” terms:** Service and local queries (e.g. “realtor Summerlin,” “homes for sale Arcadia,” “Dr. Jan Duffy”) keep driving blue links and local pack; focus content and titles on these.
- **Informational content:** For top-of-funnel posts, assume some zero-click from AI Overviews; use for brand/EEAT and link clearly to service/contact and local pages.
- **Categorize by intent:** (1) Traditional SEO (local/service), (2) AEO (featured snippet / one clear answer), (3) GEO (factual, citable). Focus effort on (1) and (2).

### Off-site checklist (Authority, Experience, Trust)

- **Authority:** Backlinks and brand mentions from trusted, relevant sites (local news, real estate, BHHS); document and pursue outreach.
- **Reviews:** Google and niche directories; maintain volume, sentiment, recency; keep NAP consistent everywhere.
- **Profiles:** Strong, consistent branded profiles (LinkedIn, YouTube, etc.); ensure `sameAs` in schema matches live profile URLs.

### Image alt text (Arcadia and local pages)

- **Arcadia images:** Use the pattern `[Subject] – Arcadia luxury new construction, Summerlin West Las Vegas 89135, Grand Park Village` (e.g. "Great room – Arcadia luxury new construction, Summerlin West Las Vegas 89135, Grand Park Village").
- Apply to all Arcadia page images for accessibility and GEO.

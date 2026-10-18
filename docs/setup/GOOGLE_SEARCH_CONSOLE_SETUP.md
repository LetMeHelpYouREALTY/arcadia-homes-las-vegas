# Google Search Console Setup Guide
## Arcadia Homes Las Vegas Website

This guide will help you set up and verify your website in Google Search Console.

## ⚠️ Important: What to Submit

- ✅ **SUBMIT:** `sitemap.xml` (this is your sitemap)
- ❌ **DO NOT SUBMIT:** `robots.txt` (this is NOT a sitemap - it's read automatically)

**If you accidentally submitted robots.txt:**
1. Go to Sitemaps section
2. Find robots.txt in the list
3. Click ⋮ (three dots) → Delete
4. Only keep `sitemap.xml` in your sitemaps list

---

## Files Created

### 1. **sitemap.xml** (`client/public/sitemap.xml`)
- Contains all site pages with priorities and change frequencies
- Automatically served at: `https://www.arcadiahomeslasvegas.com/sitemap.xml`
- Updated: November 22, 2025

### 2. **robots.txt** (`client/public/robots.txt`)
- Allows all search engines to crawl the site
- References the sitemap location
- Automatically served at: `https://www.arcadiahomeslasvegas.com/robots.txt`

### 3. **Server Routes Updated**
- Server now properly serves sitemap.xml and robots.txt
- Files are served from `client/public/` in development
- Files are served from `public/` (repo root) in production

---

## Step-by-Step Setup Instructions

### Step 1: Verify Your Domain in Google Search Console

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Property**
   - Click "Add Property"
   - Choose "URL prefix" method
   - Enter: `https://www.arcadiahomeslasvegas.com`

3. **Choose Verification Method**

   **Option A: HTML File Upload (Recommended)**
   - Download the HTML verification file from Google
   - Place it in `client/public/` directory
   - Name it exactly as Google provides (e.g., `google1234567890abcdef.html`)
   - The file will be automatically served at the root URL
   - Click "Verify" in Google Search Console

   **Option B: HTML Tag (Alternative)**
   - Copy the meta tag provided by Google
   - Add it to `client/index.html` in the `<head>` section
   - Example:
     ```html
     <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
     ```
   - Click "Verify" in Google Search Console

   **Option C: DNS Record (For Domain-Level Verification)**
   - Add a TXT record to your DNS
   - Follow Google's instructions for the exact record value

### Step 2: Submit Your Sitemap

1. **In Google Search Console**
   - Go to "Sitemaps" in the left sidebar
   - Enter: `sitemap.xml` (ONLY submit sitemap.xml, NOT robots.txt)
   - Click "Submit"

2. **Verify Sitemap**
   - Google will check if the sitemap is accessible
   - Should show: `https://www.arcadiahomeslasvegas.com/sitemap.xml`
   - Status should be "Success"
   - **Important:** Only submit `sitemap.xml`. Do NOT submit `robots.txt` as a sitemap.

3. **If You Accidentally Submitted robots.txt**
   - In the Sitemaps section, find the robots.txt entry
   - Click the three dots (⋮) next to it
   - Select "Delete" to remove it
   - robots.txt is NOT a sitemap - it's a robots file that references the sitemap

### Step 3: Verify robots.txt

1. **Test robots.txt (NOT as a sitemap)**
   - In Google Search Console, go to "Settings" > "robots.txt Tester"
   - Verify it's accessible at: `https://www.arcadiahomeslasvegas.com/robots.txt`
   - Check that it allows crawling of your important pages
   - **Note:** robots.txt should NOT be submitted as a sitemap. It's automatically read by Google when it crawls your site.

---

## Important URLs

- **Homepage:** https://www.arcadiahomeslasvegas.com/
- **Sitemap:** https://www.arcadiahomeslasvegas.com/sitemap.xml
- **robots.txt:** https://www.arcadiahomeslasvegas.com/robots.txt

---

## Sitemap Details

The sitemap includes all major pages:

### High Priority (0.8-1.0)
- Homepage (1.0)
- Homes/Listings (0.9)
- About (0.8)
- Contact (0.8)
- Community (0.8)
- Floor Plans (0.8)
- Home Value (0.8)
- Property Alerts (0.8)
- Market Report (0.8)

### Medium Priority (0.6-0.7)
- Neighborhood (0.7)
- Amenities (0.7)
- Schools (0.7)
- Lifestyle (0.7)
- Gallery (0.7)
- Mortgage Calculator (0.7)
- Market Predictions (0.7)
- Testimonials (0.6)

---

## Next Steps After Verification

1. **Request Indexing**
   - Use "URL Inspection" tool to request indexing for key pages
   - Start with homepage, then main category pages

2. **Monitor Performance**
   - Check "Performance" section for search analytics
   - Review "Coverage" for indexing issues
   - Monitor "Core Web Vitals" for page speed

3. **Submit Updated Sitemap**
   - After making significant content changes
   - Resubmit sitemap in Google Search Console

4. **Set Up Email Notifications**
   - Go to Settings > Users and permissions
   - Add email for important notifications

---

## Troubleshooting

### robots.txt Submitted as Sitemap (ERROR)
**Problem:** robots.txt appears in the sitemaps list with "Unknown" type and errors.

**Solution:**
1. Go to "Sitemaps" in Google Search Console
2. Find the `robots.txt` entry in the list
3. Click the three dots (⋮) menu next to it
4. Select "Delete" to remove it
5. **Only submit `sitemap.xml`** - robots.txt should NOT be in the sitemaps list
6. robots.txt is automatically read by Google when crawling - no need to submit it

**Why this happens:** robots.txt and sitemap.xml are different:
- **sitemap.xml** = List of pages to index (SUBMIT THIS)
- **robots.txt** = Instructions for crawlers (DO NOT SUBMIT - it's read automatically)

### Sitemap Not Found
- Verify the file exists at `client/public/sitemap.xml`
- Check that the server route is working: visit `/sitemap.xml` directly
- Ensure the file is copied to `public/` after build

### robots.txt Not Found
- Verify the file exists at `client/public/robots.txt`
- Check that the server route is working: visit `/robots.txt` directly
- Ensure the file is copied to `public/` after build

### Verification Fails
- Double-check the verification code/file name matches exactly
- Ensure the file is accessible at the root URL
- Try a different verification method

### Pages Not Indexing
- Check robots.txt isn't blocking pages
- Verify pages have proper meta tags
- Request indexing manually for important pages
- Ensure pages return 200 status codes

---

## Maintenance

### Update Sitemap
When adding new pages:
1. Edit `client/public/sitemap.xml`
2. Add new `<url>` entry with appropriate priority
3. Update `<lastmod>` date
4. Rebuild and redeploy

### Update robots.txt
If you need to block pages:
1. Edit `client/public/robots.txt`
2. Add `Disallow:` entries as needed
3. Rebuild and redeploy

---

## Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [robots.txt Specification](https://developers.google.com/search/docs/crawling-indexing/robots/intro)

---

## Notes

- The sitemap uses `www.arcadiahomeslasvegas.com` as the base URL
- All dates in sitemap are set to 2025-11-22 (update as needed)
- Change frequencies are set based on content type:
  - Daily: Homes/Listings (frequently updated)
  - Weekly: Homepage, Gallery, Market Reports
  - Monthly: Static content pages


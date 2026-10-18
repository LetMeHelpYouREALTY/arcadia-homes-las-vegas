# Image Download Guide for Arcadia Homes Las Vegas Website

## Overview
This guide helps you download and organize images from https://www.greatlasvegashomes.com/ for use on the Arcadia Homes Las Vegas website.

## Directory Structure
Images should be organized in the following directories:
```
client/public/images/
├── hero/              # Hero section background images
├── community/         # Community overview images
├── about/            # About Dr. Duffy images
├── amenities/        # Amenities page images
├── gallery/          # Gallery page images
├── testimonials/     # Testimonial profile images
├── floor-plans/      # Floor plan images
└── lifestyle/        # Lifestyle page images
```

## How to Download Images

### Method 1: Browser Developer Tools
1. Navigate to https://www.greatlasvegashomes.com/
2. Open Developer Tools (F12 or Right-click → Inspect)
3. Go to the "Network" tab
4. Filter by "Img" or "Media"
5. Refresh the page
6. Right-click on any image → "Open in new tab"
7. Right-click the image → "Save image as..."
8. Save to the appropriate directory in `client/public/images/`

### Method 2: Right-Click Save
1. Navigate to https://www.greatlasvegashomes.com/
2. Right-click on any image
3. Select "Save image as..."
4. Save to the appropriate directory in `client/public/images/`

### Method 3: Browser Extension
Use a browser extension like "Image Downloader" or "Download All Images" to bulk download images from the page.

## Recommended Images to Download

### Hero Section (`/images/hero/`)
- Main luxury home exterior image
- Summerlin/Red Rock Canyon landscape
- Guard-gated community entrance

### Community (`/images/community/`)
- Aerial view of Summerlin West
- Guard-gated community overview
- Red Rock Canyon views

### About Dr. Duffy (`/images/about/`)
- Professional headshot of Dr. Jan Duffy
- Dr. Duffy with clients or at properties

### Amenities (`/images/amenities/`)
- Golf course views
- Community parks
- Downtown Summerlin
- Red Rock Canyon trails

### Gallery (`/images/gallery/`)
- Home exteriors
- Luxury interiors
- Red Rock Canyon views
- Community amenities

### Testimonials (`/images/testimonials/`)
- Client profile photos (if available)

### Floor Plans (`/images/floor-plans/`)
- Floor plan diagrams
- Home layouts

### Lifestyle (`/images/lifestyle/`)
- Outdoor activities
- Dining scenes
- Shopping areas
- Entertainment venues

## Image Naming Convention
Use descriptive, SEO-friendly names:
- `hero-luxury-home-summerlin.jpg`
- `community-aerial-view-89135.jpg`
- `about-dr-duffy-professional.jpg`
- `amenities-red-rock-canyon.jpg`

## Image Optimization
Before using images:
1. **Resize**: Hero images should be ~2000px wide, others ~1200px
2. **Compress**: Use tools like TinyPNG or ImageOptim
3. **Format**: Use WebP when possible, fallback to JPG
4. **Alt Text**: Always include descriptive alt text in code

## After Downloading
Once images are downloaded, update the code to reference local images:
- Change from: `https://images.unsplash.com/...`
- Change to: `/images/[category]/[filename].jpg`

## Quick Reference: Files to Update
- `client/src/components/Hero.tsx` → `/images/hero/`
- `client/src/components/CommunityOverview.tsx` → `/images/community/`
- `client/src/components/AboutDrDuffy.tsx` → `/images/about/`
- `client/src/components/WhyChooseArcadia.tsx` → `/images/community/`
- `client/src/pages/gallery.tsx` → `/images/gallery/`
- `client/src/pages/amenities.tsx` → `/images/amenities/`
- `client/src/pages/about.tsx` → `/images/about/`

## Notes
- Ensure you have permission to use images from greatlasvegashomes.com
- Consider copyright and licensing requirements
- If using stock photos, ensure proper licensing
- Always optimize images for web performance


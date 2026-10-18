import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/** Shared layout metadata (per-page canonical is set in generateRootMetadata). */
export const rootLayoutMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Dr. Jan Duffy, REALTOR® | ${siteConfig.tagline}`,
    template: `%s | Arcadia Homes Las Vegas`,
  },
  description:
    "Expert real estate for Arcadia and Summerlin West (89135). Dr. Jan Duffy, 35 years in Las Vegas real estate—buy, sell, or invest with a trusted local agent.",
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "Arcadia Homes Las Vegas",
    "Summerlin West real estate",
    "89135 homes for sale",
    "Dr. Jan Duffy",
    "Las Vegas real estate",
    "SHAWOOD Arcadia",
    "luxury homes Las Vegas",
  ],
  openGraph: {
    title: `${siteConfig.name} | Dr. Jan Duffy`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: siteConfig.ogImage.path,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Dr. Jan Duffy`,
    description: siteConfig.description,
    images: [siteConfig.ogImage.path],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Per-page self canonical — merge into each route's `metadata` export for correct SEO without `headers()`. */
export const selfCanonicalMetadata: Pick<Metadata, "alternates"> = {
  alternates: { canonical: "./" },
};

export function canonicalUrlForPath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return siteConfig.url;
  }
  return `${siteConfig.url}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export async function generateRootMetadata(pathname: string): Promise<Metadata> {
  const canonical = canonicalUrlForPath(pathname);
  const canonicalPath = pathname === "/" || !pathname ? "/" : pathname;

  return {
    ...rootLayoutMetadata,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      ...rootLayoutMetadata.openGraph,
      url: canonical,
    },
  };
}

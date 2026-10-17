"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbSchema } from "@/components/SchemaScript";
import { getBreadcrumbsForPath } from "@/lib/breadcrumbs";

/**
 * Client breadcrumb JSON-LD (avoids headers() in root layout for ISR).
 * Renders on the server during SSR with the current pathname.
 */
export default function PathBreadcrumbSchema() {
  const pathname = usePathname() ?? "/";
  const breadcrumbs = getBreadcrumbsForPath(pathname);

  if (!breadcrumbs) {
    return null;
  }

  return <BreadcrumbSchema items={breadcrumbs} />;
}

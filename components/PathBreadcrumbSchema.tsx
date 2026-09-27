import { headers } from "next/headers";
import { BreadcrumbSchema } from "@/components/SchemaScript";
import { getBreadcrumbsForPath } from "@/lib/breadcrumbs";

/**
 * Injects BreadcrumbList JSON-LD for all inner pages based on the request path.
 */
export default async function PathBreadcrumbSchema() {
  const pathname = (await headers()).get("x-pathname") ?? "/";
  const breadcrumbs = getBreadcrumbsForPath(pathname);

  if (!breadcrumbs) {
    return null;
  }

  return <BreadcrumbSchema items={breadcrumbs} />;
}

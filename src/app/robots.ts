import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/types";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/admin/",
          "/api/revalidate",
          "/api/amazon-preview",
          "/api/luminar/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap_index.xml`,
  };
}

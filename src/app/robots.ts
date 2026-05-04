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
          "/_next/static/",
          "/search/",
          "/en/search/",
          "/ko/search/",
          "/tw/search/",
          "/cn/search/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap_index.xml`,
  };
}

import { SITE_URL } from "@/lib/types";

export async function GET() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: `${SITE_URL}/sitemap_index.xml`,
    },
  });
}

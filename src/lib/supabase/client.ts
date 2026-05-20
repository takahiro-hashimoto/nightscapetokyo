import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// テーブル名 → revalidateTag のタグ名マッピング
const TABLE_TAGS: Record<string, string[]> = {
  spots: ["spots"],
  categories: ["areas"],
  tags: ["tags"],
  articles: ["articles"],
  spot_tags: ["spots"],
  spot_images: ["spots"],
  spot_faqs: ["spots"],
  spot_reviews: ["spots"],
  spot_hotels: ["spots"],
  spot_events: ["spots"],
  spot_translations: ["spots"],
  tag_pages: ["tag-pages"],
  tag_page_sections: ["tag-pages"],
  tag_page_section_spots: ["tag-pages", "spots"],
  tag_page_faqs: ["tag-pages"],
  tag_page_pr_banners: ["tag-pages"],
  tag_page_pr_banner_links: ["tag-pages"],
  tag_page_translations: ["tag-pages", "translations"],
};

function getTagsFromUrl(url: string | URL): string[] {
  try {
    const pathname = (typeof url === "string" ? new URL(url) : url).pathname;
    const match = pathname.match(/\/rest\/v1\/([^?/]+)/);
    return match ? (TABLE_TAGS[match[1]] ?? []) : [];
  } catch {
    return [];
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: (url, options = {}) => {
      // GET 以外（INSERT/UPDATE/DELETE）はキャッシュしない
      const method = ((options as RequestInit).method ?? "GET").toUpperCase();
      if (method !== "GET") {
        return fetch(url as RequestInfo, options as RequestInit);
      }
      const tags = getTagsFromUrl(url as string | URL);
      return fetch(url as RequestInfo, {
        ...(options as RequestInit),
        next: {
          revalidate: false,
          ...(tags.length > 0 ? { tags } : {}),
        },
      } as RequestInit);
    },
  },
});

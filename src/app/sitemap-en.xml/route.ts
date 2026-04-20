import { makeSitemapResponse } from "@/lib/sitemap-builder";

export const revalidate = 86400;

export const GET = () => makeSitemapResponse("en");

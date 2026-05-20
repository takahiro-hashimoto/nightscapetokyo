import { makeSitemapResponse } from "@/lib/sitemap-builder";

export const revalidate = false;

export const GET = () => makeSitemapResponse("ja");

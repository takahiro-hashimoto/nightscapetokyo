import { makeSitemapResponse } from "@/lib/sitemap-builder";

export const revalidate = 604800;

export const GET = () => makeSitemapResponse("ko");

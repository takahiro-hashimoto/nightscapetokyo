import { revalidateTag } from "next/cache";

const MAX = "max" as const;

export function revalidateSpotCaches() {
  revalidateTag("spots", MAX);
  revalidateTag("areas", MAX);
}

export function revalidateCategoryCaches() {
  revalidateTag("areas", MAX);
  revalidateTag("spots", MAX);
}

export function revalidateTagCaches() {
  revalidateTag("tags", MAX);
}

export function revalidateArticleCaches() {
  revalidateTag("articles", MAX);
}

export function revalidateTagPageCaches() {
  revalidateTag("tag-pages", MAX);
  revalidateTag("tags", MAX);
}

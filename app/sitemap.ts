import type { MetadataRoute } from "next";
import { getPublishedPosts, siteUrl } from "@/lib/writing";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["", "/writing", "/about", "/projects"].map((pathname) => ({ url: `${siteUrl}${pathname}` })),
    ...getPublishedPosts().map((post) => ({ url: `${siteUrl}/writing/${post.slug}`, lastModified: post.date.length === 10 ? post.date : undefined })),
  ];
}

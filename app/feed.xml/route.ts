import { getPublishedPosts, siteUrl, xmlEscape } from "@/lib/writing";

export const dynamic = "force-static";
export function GET() {
  const items = getPublishedPosts().map((post) => {
    const url = `${siteUrl}/writing/${post.slug}`;
    return `<item><title>${xmlEscape(post.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid>${post.date.length === 10 ? `<pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>` : ""}<description>${xmlEscape(post.description)}</description></item>`;
  }).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Akash Godbole</title><link>${siteUrl}</link><description>Essays, notes, and other things worth sharing.</description><language>en</language><atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

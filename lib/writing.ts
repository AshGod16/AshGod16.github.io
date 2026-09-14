import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  kind: "Essay" | "Note" | "Media";
  draft: boolean;
  body: string;
};

const directory = path.join(process.cwd(), "content/writing");
export const siteUrl = "https://akashgodbole.com";

export function getAllPosts(): Post[] {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".md")).map((file) => {
    const { data, content } = matter(fs.readFileSync(path.join(directory, file), "utf8"));
    if (typeof data.title !== "string" || typeof data.description !== "string" || typeof data.date !== "string" || !/^\d{4}-\d{2}(-\d{2})?$/.test(data.date) || Number.isNaN(Date.parse(data.date)) || !["Essay", "Note", "Media"].includes(data.kind) || typeof data.draft !== "boolean") {
      throw new Error(`Invalid frontmatter in ${file}. See README.md for the required fields.`);
    }
    if (!data.draft && !content.replace(/<!--[\s\S]*?-->/g, "").trim()) throw new Error(`Cannot publish an empty post: ${file}`);
    return { slug: file.replace(/\.md$/, ""), title: data.title, date: data.date, description: data.description, kind: data.kind, draft: data.draft, body: content } as Post;
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedPosts() { return getAllPosts().filter((post) => !post.draft); }

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug && (!post.draft || process.env.NODE_ENV === "development"));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: date.length === 10 ? "numeric" : undefined, year: "numeric", timeZone: "UTC" }).format(new Date(date.length === 7 ? `${date}-01T00:00:00Z` : `${date}T00:00:00Z`));
}

// Only repository-authored Markdown is rendered. Never pass visitor input here.
export function renderPost(body: string) { return marked.parse(body, { async: false }); }

export function xmlEscape(value: string) {
  return value.replace(/[<>&"']/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[character]!);
}

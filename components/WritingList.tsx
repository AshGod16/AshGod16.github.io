import Link from "next/link";
import type { Post } from "@/lib/writing";
import { formatDate } from "@/lib/writing";

export function WritingList({ posts }: { posts: Post[] }) {
  if (!posts.length) return <p className="muted">Nothing published yet. Essays and short notes will live here.</p>;
  return (
    <ul className="writing-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/writing/${post.slug}`}>
            <span className="entry-title">{post.title}</span>
            <span className="entry-meta"><time dateTime={post.date}>{formatDate(post.date)}</time>{post.kind !== "Essay" && ` · ${post.kind}`}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

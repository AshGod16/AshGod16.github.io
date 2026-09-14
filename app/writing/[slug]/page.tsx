import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost, getPublishedPosts, renderPost } from "@/lib/writing";

export const dynamicParams = false;
export function generateStaticParams() {
  // Draft paths resolve to 404 in production; keeping them here also supports an empty archive.
  return getAllPosts().map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title, description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date.length === 10 ? post.date : undefined, authors: ["Akash Godbole"], url: `/writing/${post.slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const next = getPublishedPosts().find((item) => item.slug !== post.slug);
  return (
    <main id="main">
      <Link href="/writing" className="article-back"><ArrowLeft className="link-icon" aria-hidden="true" /> All writing</Link>
      {post.draft && <p className="draft-notice">Draft preview · Visible only in local development</p>}
      <article>
        <header className="article-heading"><h1>{post.title}</h1><p className="article-meta"><time dateTime={post.date}>{formatDate(post.date)}</time> · {post.kind}</p></header>
        <div className="prose article-body" dangerouslySetInnerHTML={{ __html: renderPost(post.body) }} />
      </article>
      <div className="article-bottom"><a href={`mailto:akash.godbole16@gmail.com?subject=${encodeURIComponent(post.title)}`}>Send me a thought</a>{next ? <Link href={`/writing/${next.slug}`}>Read next: {next.title} <ArrowRight className="link-icon" aria-hidden="true" /></Link> : <Link href="/writing">All writing <ArrowRight className="link-icon" aria-hidden="true" /></Link>}</div>
    </main>
  );
}
